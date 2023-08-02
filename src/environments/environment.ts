// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  weatherApiBaseUrl :'https://open-weather13.p.rapidapi.com/city/Wellington',
  XRapidAPIHostHeaderLabel:'X-RapidAPI-Host',
  XRapidAPIHostHeaderValue:'open-weather13.p.rapidapi.com',
  XRapidAPIKeyHeaderLabel : 'X-RapidAPI-Key',
  XRapidAPIKeyHeaderValue :'c1cc0a9362msh851706d3e97710ep1609a4jsn50617ddaa167',
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
