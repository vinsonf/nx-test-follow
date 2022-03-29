import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from '../../services/api.service';

interface File {
  filename: string;
  _id: string;
}

@Component({
  selector: 'nx-test-follow-list-files',
  templateUrl: './list-files.component.html',
  styleUrls: ['./list-files.component.scss']
})
export class ListFilesComponent implements OnInit {

  public files$!: Observable<File[]>;
  public baseUrl: string = this.api.baseUrl;
  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.getFiles();
  }

  getFiles() {
    this.files$ = this.api.get<File[]>('/files');
  }

}
