import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})
export class AuthGuardService implements CanActivate {
  constructor(private router: Router, private snackBar: MatSnackBar) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    console.log(route);
    let authInfo = {
      authenticated: false, 
    };

    if (!authInfo.authenticated) {
      this.snackBar.open('Debe iniciar sesión primero', 'Cerrar', {
        duration: 3000,
      });
      this.router.navigate(['login']);
      return false;
    }
    return true;
  }
}
