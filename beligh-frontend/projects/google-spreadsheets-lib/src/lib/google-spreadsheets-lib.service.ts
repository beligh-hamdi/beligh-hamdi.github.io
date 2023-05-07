import { GoogleLoginProvider, SocialAuthService } from '@abacritt/angularx-social-login';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GoogleSpreadsheetsLibService {

  spreadsheetId = '10GCH2DKZbK_vG3-Lozava3Kmg8_wYqgjfY2JeiVFOVM';
  sheetId = 'Expenses Canada';
  accessToken!: string;


  constructor(private httpClient: HttpClient,
    private authService: SocialAuthService) { }


  getAccessToken(): any {
    return this.authService.getAccessToken(GoogleLoginProvider.PROVIDER_ID);
  }

  getGoogleSpreadSheetsData(accessToken: string): any {
    return this.httpClient
      .get(`https://sheets.googleapis.com/v4/spreadsheets/${this.spreadsheetId}/values/${this.sheetId}!A1:F`, {
        headers: { Authorization: `Bearer ${accessToken}` },
      });
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
