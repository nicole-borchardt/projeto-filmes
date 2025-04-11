import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';

@Injectable()
export class BaseService {  
    constructor() {

    }
  
    protected getAppSettings(): any {
      return environment.URL_API;
    }
  
    protected getHeaders(): any {
      return {
        'Content-Type': 'application/json',
        'Accept-Language': 'pt-BR',
        'x-api-version': '1.0',
      };
    }
  
    protected getAuthHeaders(): HttpHeaders {
      const options = this.getHeaders();
      return new HttpHeaders({
        'Content-Type': options['Content-Type'],
        'Accept-Language': options['Accept-Language'],
        'x-api-version': options['x-api-version'],
      });
    }

    protected buscarConfiguracoesApp(): any {
      return environment;
    }
  }
  
  export default BaseService;
