import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SvBangTinComponent } from './bang-tin/sv-bang-tin.component';
import { SvLichHocComponent } from './lich-hoc/sv-lich-hoc.component';
import { SvDiemDanhComponent } from './diem-danh/sv-diem-danh.component';
import { SvLopHocComponent } from './lop-hoc/sv-lop-hoc.component';
import { SvMonHocComponent } from './mon-hoc/sv-mon-hoc.component';
import { SvBangDiemComponent } from './bang-diem/sv-bang-diem.component';
import { SvDonTuComponent } from './don-tu/sv-don-tu.component';

const routes: Routes = [
  {
    path: 'bang-tin',
    component: SvBangTinComponent,
  },
  {
    path: 'lich-hoc',
    component: SvLichHocComponent,
  },
  {
    path: 'diem-danh',
    component: SvDiemDanhComponent,
  },
  {
    path: 'lop-hoc',
    component: SvLopHocComponent,
  },
  {
    path: 'mon-hoc',
    component: SvMonHocComponent,
  },
  {
    path: 'bang-diem',
    component: SvBangDiemComponent,
  },
  {
    path: 'don-tu',
    component: SvDonTuComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StudentRoutingModule {}
