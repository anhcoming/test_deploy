import { Component } from '@angular/core';
import { NzModalService } from 'ng-zorro-antd/modal';
import { AddShareComponent } from 'src/app/pages/share/modal/add-share/add-share.component';

@Component({
  selector: 'app-sinh-vien',
  templateUrl: './ad-sinh-vien.component.html',
  styleUrls: ['./ad-sinh-vien.component.scss'],
})
export class AdSinhVienComponent {
  constructor(private modal: NzModalService) {}
  dataRow: any;
  dataSet: any = [];

  focusRow(i: any) {
    ////làm trắng tất cả
    this.dataRow = this.dataSet[i];
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
