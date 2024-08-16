import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'

export interface BitcoinInfo {
  time: {
    updated: string
    updatedISO: string
    updateduk: string
  }
  disclaimer: string
  chartName: string
  bpi: {
    USD: {
      code: string
      symbol: string
      rate: string
      description: string
      rate_float: number
    }
    GBP: {
      code: string
      symbol: string
      rate: string
      description: string
      rate_float: number
    }
    EUR: {
      code: string
      symbol: string
      rate: string
      description: string
      rate_float: number
    }
  }
}

@Injectable({
  providedIn: 'root'
})
export class BitcoinapiService {

  private apiUrl = 'https://api.coindesk.com/v1/bpi/currentprice.json'

  constructor(private http: HttpClient) { }

  getBitcoinInfo(): Observable<BitcoinInfo> {
    return this.http.get<BitcoinInfo>(this.apiUrl)
  }
}
