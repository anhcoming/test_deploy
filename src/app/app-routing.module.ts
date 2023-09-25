import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './authentication/login/login.component';
import { TeacherRoutingModule } from './components/teacher/teacher-routing.module';
import { AdminRoutingModule } from './components/admin/admin-routing.module';
import { StudentRoutingModule } from './components/student/student-routing.module';
import { guardGuard } from './guards/guard.guard';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';

const routes: Routes = [
  // LOGIN
  { path: '', pathMatch: 'full', redirectTo: '/login' },
  { path: 'login', component: LoginComponent },
  { path: 'pageNotFound', component: PageNotFoundComponent },
  // =========

  // AUTH
  {
    path: 'auth',
    loadChildren: () =>
      import('./authentication/authen-routing.module').then(
        (m) => m.AuthenRoutingModule
      ),
  },
  // ===========

  // DASHBOARD
  // { path: 'dashboard', component: DashboardComponent },
  // ==========

  // ROLES
  {
    path: 'gv',
    loadChildren: () =>
      import('./components/teacher/teacher-routing.module').then(
        (t) => TeacherRoutingModule
      ),
  },
  {
    path: 'sv',
    loadChildren: () =>
      import('./components/student/student-routing.module').then(
        (t) => StudentRoutingModule
      ),
    canActivate: [guardGuard],
  },
  {
    path: 'admin',
    loadChildren: () =>
      import('./components/admin/admin-routing.module').then(
        (t) => AdminRoutingModule
      ),
  },

  // ====
  { path: '**', redirectTo: '/pageNotFound' },
  // =======
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
