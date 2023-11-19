import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { MasterService } from '../shared/master.service';

export const authGuard: CanActivateFn = (route, state) => {

  const currentMenu = route.url[0].path;
  const router = inject(Router)
  const service = inject(MasterService)


  if(service.haveAccess()){
    return true;
  // if(currentMenu === 'blog'){
  //   return true
  // }
  // else{
  //   alert('Access Denied');
  //   router.navigate([''])
  //   return false
  // }
}
else{
  alert('Access Denied');
  router.navigate([''])
  return false
}
  
};
