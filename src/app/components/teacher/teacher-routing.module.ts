import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GvBangTinComponent } from './bang-tin/gv-bang-tin.component';
import { GvLopHocComponent } from './lop-hoc/gv-lop-hoc.component';
import { GvMonHocComponent } from './mon-hoc/gv-mon-hoc.component';
import { GvLichDayComponent } from './lich-day/gv-lich-day.component';
import { GvSinhVienComponent } from './sinh-vien/gv-sinh-vien.component';
import { GvDonTuComponent } from './don-tu/gv-don-tu.component';

const routes: Routes = [
  {
    path: 'bang-tin',
    component: GvBangTinComponent,
  },
  {
    path: 'lop-hoc',
    component: GvLopHocComponent,
  },
  {
    path: 'mon-hoc',
    component: GvMonHocComponent,
  },
  {
    path: 'lich-day',
    component: GvLichDayComponent,
  },
  {
    path: 'sinh-vien',
    component: GvSinhVienComponent,
  },
  {
    path: 'don-tu',
    component: GvDonTuComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TeacherRoutingModule {}
