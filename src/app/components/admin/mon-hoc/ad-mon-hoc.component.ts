import { Component } from '@angular/core';
import { NzModalService } from 'ng-zorro-antd/modal';
import { AddShareComponent } from 'src/app/pages/share/modal/add-share/add-share.component';

@Component({
  selector: 'app-mon-hoc',
  templateUrl: './ad-mon-hoc.component.html',
  styleUrls: ['./ad-mon-hoc.component.scss'],
})
export class AdMonHocComponent {
  constructor(private modal: NzModalService) {}

  dataSet: any = [
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
      gender: 'Male',
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
      gender: 'Male',
    },
    {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park',
      gender: 'Male',
    },
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
      gender: 'Male',
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
      gender: 'Male',
    },
    {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park',
      gender: 'Male',
    },
  ];

  focusRow(i: any) {
    ////làm trắng tất cả
    for (let i = 0; i < this.dataSet.length; i++) {
      const rowI = document.getElementById('row' + i) as HTMLInputElement;
      rowI.style.backgroundColor = 'white';
      rowI.style.color = 'black';
    }
    ///bôi màu cái đang chọn
    const row = document.getElementById('row' + i) as HTMLInputElement;
    row.style.backgroundColor = '#1890ff';
    row.style.color = 'white';
  }

  getLeft(i: number) {
    i++;
    return 30 * i + 'px';
  }

  addStudentPopup() {
    this.modal.create({
      nzTitle: 'Add students',
      nzContent: AddShareComponent,
      nzWidth: '100vh',
    });
  }
}
