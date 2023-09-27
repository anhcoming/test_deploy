import { Component, DoCheck, OnChanges, SimpleChanges } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { NzModalService } from 'ng-zorro-antd/modal';
import { LoginService } from './service/login.service';
import { ShareService } from './service/share.service';
import { AddShareComponent } from './pages/share/modal/add-share/add-share.component';
import { ForgotPassComponent } from './authentication/forgot-pass/forgot-pass.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements DoCheck, OnChanges {
  isCollapsed = false;
  auth: boolean = false;
  visible: boolean = false;
  visible2: boolean = false;
  isTeacher: boolean = false;
  isStudent: boolean = false;
  isAdmin: boolean = false;
  notiNumber: any;
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
  ngOnChanges(changes: SimpleChanges): void {
    // this.notiNumber = this.shareService.notiNumber;
  }
  ngDoCheck(): void {
    this.notiNumber = this.shareService.notiNumber;

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

  change(value: boolean): void {}

  openPersonal() {
    this.modal.create({
      nzTitle: `<span class="fw-bold">Hồ sơ cá nhân</span>`,
      nzContent: AddShareComponent,
      nzWidth: '130vh ',
      nzCentered: true,
    });
  }

  changePass() {
    this.modal.create({
      nzTitle: `<span class="fw-bold">Đổi mật khẩu</span>`,
      nzContent: ForgotPassComponent,
      nzWidth: '60vh ',
      nzCentered: true,
      nzFooter: [
        { label: 'Hủy', onClick: () => this.modal.closeAll() },
        { label: 'Đồng ý', type: 'primary', onClick: () => this.showConfirm() },
      ],
    });
  }

  showConfirm() {
    this.modal.confirm({
      nzTitle: 'Bạn có chắc chắn muốn thay đổi mật khẩu không?',
      nzCentered: true,
      nzOnOk: () => this.modal.closeAll(),
    });
  }
}
