import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { NzUploadChangeParam } from 'ng-zorro-antd/upload';

@Component({
  selector: 'app-add-share',
  templateUrl: './add-share.component.html',
  styleUrls: ['./add-share.component.scss'],
})
export class AddShareComponent implements OnChanges {
  ngOnChanges(changes: SimpleChanges): void {
    console.log(this.data);
  }
  @Input() data: any;

  constructor() {
    console.log(this.data);
  }
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
