import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Observable } from "rxjs";

export class AuthTokenInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        const authToken = localStorage.getItem('auth-token') as string
        if (!authToken) return next.handle(req);

        const authReq = req.clone({ setHeaders: { Authorization: authToken } });
        return next.handle(authReq)
    }
}
