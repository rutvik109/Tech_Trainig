import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpParams,
} from '@angular/common/http';
import { exhaustMap, take } from 'rxjs';
import { AuthService } from './service/auth.service';
import { authResponse } from './models/auth-response.interface';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private authService: AuthService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler) {
    return this.authService.userData.pipe(
      take(1),
      exhaustMap((userData) => {
        if (userData == null) {
          return next.handle(request);
        }

        const authreq = request.clone({
          params: new HttpParams().set('auth', userData.token),
        });
        return next.handle(authreq);
      })
    );
  }
}
