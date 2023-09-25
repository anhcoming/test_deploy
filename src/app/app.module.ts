import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { CommonModule, NgIf, registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import {
  FormsModule,
  NgControlStatus,
  ReactiveFormsModule,
} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IconsProviderModule } from './icons-provider.module';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzProgressModule } from 'ng-zorro-antd/progress';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NgzorroModule } from './ngzorro/ngzorro.module';
import { LoginComponent } from './authentication/login/login.component';
import { ForgotPassComponent } from './authentication/forgot-pass/forgot-pass.component';
import { PersonalComponent } from './authentication/personal/personal.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AddShareComponent } from './pages/share/modal/add-share/add-share.component';
import { AdBangTinComponent } from './components/admin/bang-tin/ad-bang-tin.component';
import { AdDashboardComponent } from './components/admin/dashboard/ad-dashboard.component';
import { AdDonTuComponent } from './components/admin/don-tu/ad-don-tu.component';
import { AdGiangVienComponent } from './components/admin/giang-vien/ad-giang-vien.component';
import { AdLopHocComponent } from './components/admin/lop-hoc/ad-lop-hoc.component';
import { AdMonHocComponent } from './components/admin/mon-hoc/ad-mon-hoc.component';
import { AdNganhHocComponent } from './components/admin/nganh-hoc/ad-nganh-hoc.component';
import { AdSinhVienComponent } from './components/admin/sinh-vien/ad-sinh-vien.component';
import { SvBangDiemComponent } from './components/student/bang-diem/sv-bang-diem.component';
import { SvBangTinComponent } from './components/student/bang-tin/sv-bang-tin.component';
import { SvDiemDanhComponent } from './components/student/diem-danh/sv-diem-danh.component';
import { SvDonTuComponent } from './components/student/don-tu/sv-don-tu.component';
import { SvLichHocComponent } from './components/student/lich-hoc/sv-lich-hoc.component';
import { SvLopHocComponent } from './components/student/lop-hoc/sv-lop-hoc.component';
import { SvMonHocComponent } from './components/student/mon-hoc/sv-mon-hoc.component';
import { GvBangTinComponent } from './components/teacher/bang-tin/gv-bang-tin.component';
import { GvDonTuComponent } from './components/teacher/don-tu/gv-don-tu.component';
import { GvLichDayComponent } from './components/teacher/lich-day/gv-lich-day.component';
import { GvLopHocComponent } from './components/teacher/lop-hoc/gv-lop-hoc.component';
import { GvMonHocComponent } from './components/teacher/mon-hoc/gv-mon-hoc.component';
import { GvSinhVienComponent } from './components/teacher/sinh-vien/gv-sinh-vien.component';

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ForgotPassComponent,
    PersonalComponent,
    DashboardComponent,
    AddShareComponent,
    AdBangTinComponent,
    AdDashboardComponent,
    AdDonTuComponent,
    AdGiangVienComponent,
    AdLopHocComponent,
    AdMonHocComponent,
    AdNganhHocComponent,
    AdSinhVienComponent,
    SvBangDiemComponent,
    SvBangTinComponent,
    SvDiemDanhComponent,
    SvDonTuComponent,
    SvLichHocComponent,
    SvLopHocComponent,
    SvMonHocComponent,
    GvBangTinComponent,
    GvDonTuComponent,
    GvLichDayComponent,
    GvLopHocComponent,
    GvMonHocComponent,
    GvSinhVienComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgzorroModule,
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent],
})
export class AppModule {}
