import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpParams,
} from '@angular/common/http';
import { exhaustMap, Observable, take } from 'rxjs';
import { AuthService } from './service/auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private authService: AuthService) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    //   return this.authService.user.pipe(
    //     take(1),
    //     exhaustMap((user) => {
    //       const authreq = request.clone({
    //         params: new HttpParams().set('auth', user.token),
    //       });
    //       return next.handle(authreq);
    //     })
    //   );
    // }

    const authreq = request.clone({
      params: new HttpParams().set('auth', this.authService.getToken() || ''),
    });
    return next.handle(authreq);
  }
}
