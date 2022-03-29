/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import * as express from 'express';
import * as http from 'http';
import {Server} from 'socket.io';
import * as cors from 'cors';
import {connect} from 'mongoose';
import { UserModel } from './app/schemas/user.schema';
import {GridFsStorage} from 'multer-gridfs-storage';
import {GridFSBucket} from 'mongodb';
import * as multer from 'multer';
import * as mongoose from 'mongoose';

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: '*',
  }
});

io.on('connection', (socket) => {
  console.log('New client connected');
  socket.emit('message', 'Welcome!!');

  socket.on('disconnect', () => {
    console.log('Client disconnected');
  });

  socket.on('register', () => {
    console.log('register socket');
    socket.emit('message', 'Thanks for registering');
  })
});

let gfs: GridFSBucket;




// mongoose connection
const MONGO_URI = 'mongodb://localhost:27017/test-follow';

const Connection = connect(MONGO_URI, {})

Connection.then(db => {
  console.log('Connected to mongo');
  gfs = new mongoose.mongo.GridFSBucket(mongoose.connection.db, {
    bucketName: 'uploads'
  });
});

const storage = new GridFsStorage({
  url: MONGO_URI,
  file: (req, file) => {
    return new Promise((resolve, reject) => {
      const filename = file.originalname;
      const fileInfo = {
        filename: filename,
        bucketName: 'uploads'
      };
      resolve(fileInfo);
    });
  }
});

const upload = multer({ storage });

app.use(cors());

app.get('/api', (req, res) => {
  res.send({ message: 'Welcome to basic-express!!!!' });
});
app.post('/register', (req, res) =>{
  console.log('register');
  res.json({message: 'register'});
});
app.post('/upload', upload.single('file'), (req, res) => {
  res.json({message: 'uploaded'});
});

app.get('/files', (req, res) => {
  gfs.find().toArray((err, files) => {
    if (err) {
      return res.status(400).json({
        err: 'No files exist'
      });
    }
    return res.json(files);
  });
});

app.get('/file/:filename', (req, res) => {
  gfs.find({
    filename: req.params.filename
  }).toArray((err, files) => {
    if (!files || files.length === 0) {
      return res.status(404).json({
        err: 'No files exist'
      });
    }
    return gfs.openDownloadStreamByName(req.params.filename).pipe(res);
  })
})

const port = process.env.port || 3333;
server.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});
server.on('error', console.error);
