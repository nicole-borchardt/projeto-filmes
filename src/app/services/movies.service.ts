import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, shareReplay } from 'rxjs';
import BaseService from '../shared/base.service';

@Injectable({
  providedIn: 'root'
})
export class MoviesService  extends BaseService {
  constructor(private http: HttpClient) {
    super();
  }

  public GetYearsWithMultipleWinners(): Observable<any> {
    const url = this.getAppSettings()+'?projection=years-with-multiple-winners';
  
    return this.http.get(url, {headers: this.getAuthHeaders()}).pipe(
      map((res: any) => {
        return res;
      }),
      shareReplay()
    );
  }

  public GetStudiosWithWinCount(): Observable<any> {
    const url = this.getAppSettings()+'?projection=studios-with-win-count';
  
    return this.http.get(url, {headers: this.getAuthHeaders()}).pipe(
      map((res: any) => {
        return res;
      }),
      shareReplay()
    );
  }

  public GetIntervalForProducers(): Observable<any> {
    const url = this.getAppSettings()+'?projection=max-min-win-interval-for-producers';
  
    return this.http.get(url, {headers: this.getAuthHeaders()}).pipe(
      map((res: any) => {
        return res;
      }),
      shareReplay()
    );
  }

  public GetListMoviesByYear(year?: number): Observable<any> {
    const url = this.getAppSettings()+'?winner=true&year='+year;
  
    return this.http.get(url, {headers: this.getAuthHeaders()}).pipe(
      map((res: any) => {
        return res;
      }),
      shareReplay()
    );
  }

  

 /* public BuscarAgentesOperacaoComPaginacao(params:any): Observable<any> {  
    const url = this.getAppSettings()+'/'+nomeController+'/BuscarComPaginacao?NumeroPagina='+params.numPagina+'&tamanhoPagina='+params.tamanhoPagina+
                                      '&idEmpresa='+(params.idEmpresa ? params.idEmpresa : '')+
                                      '&codigo='+(params.codigo ? params.codigo : '')+
                                      '&razaoSocial='+(params.razaoSocial ? params.razaoSocial : '')+
                                      '&cnpj='+(params.cnpj ? params.cnpj : '')+
                                      '&cnab='+(params.cnab ? params.cnab : '')+
                                      '&ativo='+(typeof params.ativo != 'undefined' ? params.ativo : '')+
                                      '&campoOrdenacao='+(params.campoOrdenacao ? params.campoOrdenacao : '')+
                                      '&direcaoOrdenacao='+(params.direcaoOrdenacao ? params.direcaoOrdenacao : '');
  
    return this.http.get(url, {headers: this.getAuthHeaders()}).pipe(
      map((res: any) => {
        return res; 
      }),
      shareReplay()
    );
  }*/

}
