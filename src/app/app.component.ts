import { Component, DoCheck } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { NzModalService } from 'ng-zorro-antd/modal';
import { LoginService } from './service/login.service';
import { ShareService } from './service/share.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements DoCheck {
  isCollapsed = false;
  auth: boolean = false;

  isTeacher: boolean = false;
  isStudent: boolean = false;
  isAdmin: boolean = false;
  role: any;
  constructor(
    private modal: NzModalService,
    private route: Router,
    private shareService: ShareService
  ) {
    this.role = localStorage.getItem('role');
    if (this.role == null) {
      // this.route.navigateByUrl('/login');
    }
  }
  ngDoCheck(): void {
    if (this.route.url.includes('login')) {
      this.auth = true;
    } else {
      this.auth = false;
    }

    this.role = localStorage.getItem('role');
    this.shareService.role = this.role;
    if (this.role == 'student') {
      this.isStudent = true;
      this.isTeacher = false;
      this.isAdmin = false;
    } else if (this.role == 'teacher') {
      this.isTeacher = true;
      this.isStudent = false;
      this.isAdmin = false;
    } else if (this.role == 'admin') {
      this.isAdmin = true;
      this.isTeacher = false;
      this.isStudent = false;
    }
  }

  logout() {
    this.modal.confirm({
      nzTitle: 'Bạn có chắc chắn muốn đăng xuất?',
      nzContent: '',
      nzOkText: 'Đăng xuất',
      nzOkType: 'primary',
      nzOkDanger: true,
      nzOnOk: () => {
        this.route.navigateByUrl('/login');
        localStorage.removeItem('role');
        // window.location.reload();
      },
      nzCancelText: 'Hủy',
      nzOnCancel: () => console.log('Cancel'),
    });
  }
}
