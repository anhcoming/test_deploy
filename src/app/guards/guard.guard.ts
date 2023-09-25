import { CanActivateFn } from '@angular/router';

export const guardGuard: CanActivateFn = (route, state) => {
  if (checkRole(route) == false) {
    return false;
  }
  return true;
};

function checkRole(url: any) {
  const role = localStorage.getItem('role');
  if (
    (role == 'student' && url.routeConfig.path == 'sv') ||
    (role == 'teacher' && url.routeConfig.path == 'gv') ||
    (role == 'admin' && url.routeConfig.path == 'admin')
  ) {
    return true;
  }
  return false;
}
