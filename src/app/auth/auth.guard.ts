import { CanActivate,ActivatedRouteSnapshot,RouterStateSnapshot,UrlTree, Routes, Router } from '@angular/router';
import { Observable } from 'rxjs'
import { Injectable } from '@angular/core';
import { AuthService } from '../service/auth.service'
@Injectable()
export class AuthGuard implements CanActivate{

    constructor(private UserService:AuthService,private route:Router){}
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean |UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        const auth = this.UserService.getauth()
        if(!auth){
            this.route.navigate([""])
        }
        return true
    }
}