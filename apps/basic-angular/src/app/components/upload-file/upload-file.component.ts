import { Component } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'nx-test-follow-upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.scss']
})
export class UploadFileComponent  {

  formData = new FormData();
  constructor(private api: ApiService) {

  }

  uploadFile(event: Event) {
    const target = event.target as HTMLInputElement;
    const files = target.files as FileList;
    this.formData.append('file', files[0]);
    this.api.post('/upload', this.formData).subscribe();
  }

}
