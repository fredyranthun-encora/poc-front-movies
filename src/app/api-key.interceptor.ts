import { HttpInterceptorFn } from '@angular/common/http';
import { environment } from '../environments/environment';

export const apiKeyInterceptor: HttpInterceptorFn = (req, next) => {
  const reqWithApiKey = req.clone({ params: 
    req.params.append('api_key', environment.apiKey),
  })
  return next(reqWithApiKey);
};
