import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map, Subject} from 'rxjs';
import {CryptoRecord} from '../models/crypto-record.model';
import {Crypto} from '../models/crypto.model';

@Injectable({providedIn: 'root'})
export class CryptoService {
  private cryptos: Crypto[] = [];
  private cryptoRecords: { [key: string]: CryptoRecord[] } = {};
  private cryptosUpdate = new Subject<Crypto[]>();
  private cryptoRecordsUpdate = new Subject<{ [key: string]: CryptoRecord[] }>();

  constructor(private http: HttpClient) {
  }

  getCryptos() {
    this.http.get<{message: string, data: Crypto[]}>
    ('http://localhost:3000/api/cryptos')
      .subscribe((res) => {
        this.cryptos = res.data;
        this.cryptosUpdate.next([...this.cryptos]);
      }, error => {
      alert(error.error.errorMessage);
    });
  }

  getCryptoRecords() {
    this.http.get<{message: string, data: { [key: string]: CryptoRecord[] }}>
    ('http://localhost:3000/api/records')
      .subscribe((res) => {
        this.cryptoRecords = res.data;
        this.cryptoRecordsUpdate.next(this.cryptoRecords);
      }, error => {
      alert(error.error.errorMessage);
    });
  }


  getCryptos$() {
    return this.cryptosUpdate.asObservable();
  }

  getCryptoRecords$() {
    return this.cryptoRecordsUpdate.asObservable();
  }
}
