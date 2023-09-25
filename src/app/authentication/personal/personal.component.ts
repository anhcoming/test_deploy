import { Component } from '@angular/core';
import { NzUploadChangeParam } from 'ng-zorro-antd/upload';

@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.scss'],
})
export class PersonalComponent {
  base64: any;
  file: any;
  image1: any;
  handleChange({ file, fileList }: NzUploadChangeParam): void {
    const status = file.status;
    this.file = file;
    if (status !== 'uploading') {
      console.log(file, fileList);
    }
    if (status === 'done') {
      alert('Done');
      // this.msg.success(`${file.name} file uploaded successfully.`);
    } else if (status === 'error') {
      alert('Error');
      // this.msg.error(`${file.name} file upload failed.`);
    }
  }

  convertToBase64() {
    const reader = new FileReader();
    reader.onload = (e: any) => {
      this.base64 = e.target.result;
    };
    // reader
  }

  getImage(e: any) {
    let file: any = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = (e) => {
      this.image1 = reader.result;
    };
  }

  hello() {
    alert('ok');
  }
}
