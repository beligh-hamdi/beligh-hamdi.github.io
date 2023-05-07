import { Injectable } from '@angular/core';
import { GoogleLoginProvider, SocialAuthService } from '@abacritt/angularx-social-login';
import { HttpClient } from '@angular/common/http';


import { GoogleInitOptions } from '@abacritt/angularx-social-login';
import { environment } from 'src/environments/environment';

const scopeSpreadsheets = environment.googleSheets.scopeSpreadsheets;
export const clientId = environment.googleSheets.clientId;

export const googleLoginOptions: GoogleInitOptions = {
    oneTapEnabled: false, // default is true
    scopes: [scopeSpreadsheets]
}; // https://developers.google.com/identity/oauth2/web/guides/use-token-model#initialize_a_token_client



@Injectable({
  providedIn: 'root'
})
export class GoogleSheetsService {

  spreadsheetId = environment.googleSheets.spreadsheetId;
  sheetId = environment.googleSheets.sheetId;
  accessToken!: string;



  constructor(private httpClient: HttpClient,
    private authService: SocialAuthService) { }


  getAccessToken(): any {
    return  this.authService.getAccessToken(GoogleLoginProvider.PROVIDER_ID);
  }

  getGoogleSpreadSheetsData(accessToken: string): any {
    let options = {
    //  headers: { Authorization: `Bearer ${accessToken}` },
    };
    
    return this.httpClient
      .get(`${environment.googleSheets.apiUrl}/${this.spreadsheetId}/values/${this.sheetId}!A1:Z`, options);
  }

  setToken(token: string) {
    localStorage.setItem('token',token);
  }

  getToken(): any {
    if(localStorage.getItem('token')) {
      return localStorage.getItem('token');
    }
    return null;
  }

  clearToken() {
    localStorage.removeItem('token');
    // localStorage.clear();
  }

  convertToArrayOfObjects(data: any) {
    let keys: string[] = data.shift();
    let output: any[] = [];

    for (let i = 0; i < data.length; i++) {
      let obj: any = {};
      for (let k = 0; k < keys.length; k++) {
        obj[keys[k].toLowerCase()] = data[i][k];
      }
      output.push(obj);
    }
    return output;
  }
}
