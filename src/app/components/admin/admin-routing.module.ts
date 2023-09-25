import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdDashboardComponent } from './dashboard/ad-dashboard.component';
import { AdDonTuComponent } from './don-tu/ad-don-tu.component';
import { AdLopHocComponent } from './lop-hoc/ad-lop-hoc.component';
import { AdNganhHocComponent } from './nganh-hoc/ad-nganh-hoc.component';
import { AdMonHocComponent } from './mon-hoc/ad-mon-hoc.component';
import { AdSinhVienComponent } from './sinh-vien/ad-sinh-vien.component';
import { AdGiangVienComponent } from './giang-vien/ad-giang-vien.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: AdDashboardComponent,
  },
  {
    path: 'don-tu',
    component: AdDonTuComponent,
  },
  {
    path: 'lop-hoc',
    component: AdLopHocComponent,
  },
  {
    path: 'nganh-hoc',
    component: AdNganhHocComponent,
  },
  {
    path: 'mon-hoc',
    component: AdMonHocComponent,
  },
  {
    path: 'sinh-vien',
    component: AdSinhVienComponent,
  },
  {
    path: 'giang-vien',
    component: AdGiangVienComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
