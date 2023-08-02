import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { WeatherData } from '../models/weather.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }
  getWeatherData(cityName: string): Observable<WeatherData>{
    return this.http.get<WeatherData>(environment.weatherApiBaseUrl,{
    headers: new HttpHeaders()
      .set(environment.XRapidAPIHostHeaderLabel,environment.XRapidAPIHostHeaderValue)
      .set(environment.XRapidAPIKeyHeaderLabel,environment.XRapidAPIKeyHeaderValue),params: new HttpParams()
      .set('city',cityName)
    })
  }
  
}
export { WeatherData };

