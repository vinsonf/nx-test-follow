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




// mongoose connection

const Connection = connect('mongodb://localhost:27017/test-follow', {})

Connection.then(db => {
  console.log('Connected to mongo');
  UserModel.find().then(users => {
    console.log(users);
  })
})

app.use(cors());

app.get('/api', (req, res) => {
  res.send({ message: 'Welcome to basic-express!!!!' });
});
app.post('/register', (req, res) =>{
  console.log('register');
  res.json({message: 'register'});
})

const port = process.env.port || 3333;
server.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});
server.on('error', console.error);
