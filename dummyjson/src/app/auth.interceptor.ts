import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './service/auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private authService: AuthService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler) {
    const token = this.authService.getToken();
    if (token == null) {
      return next.handle(request);
    }

    const authreq = request.clone({
      headers: request.headers.set('Authorization', `Bearer ${token}`),
    });
    return next.handle(authreq);
  }
}
