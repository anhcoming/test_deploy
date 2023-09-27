import { Component } from '@angular/core';
import { ShareService } from 'src/app/service/share.service';

@Component({
  selector: 'app-noti',
  templateUrl: './noti.component.html',
  styleUrls: ['./noti.component.scss'],
})
export class NotiComponent {
  noti: any = [1, 2, 3, 4, 5, 6, 7, 8, 8, 1, 3, 4, 5, 5];
  statusRead: boolean = true;
  constructor(private shareService: ShareService) {
    this.shareService.notiNumber = this.noti.length;
  }
}
