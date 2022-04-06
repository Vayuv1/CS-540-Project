import {Component, OnInit} from '@angular/core';
import {CryptoRecord} from '../models/crypto-record.model';
import {Crypto} from '../models/crypto.model';
import {ColDef, ValueFormatterParams,} from 'ag-grid-community';
import {DatePipe} from "@angular/common";

@Component({
  selector: 'app-detail-page',
  templateUrl: './detail-page.component.html',
  styleUrls: ['./detail-page.component.scss']
})
export class DetailPageComponent implements OnInit {

  cryptos: Crypto[] = [
    {name: 'Bitcoin', code: 'BTC'},
    {name: 'Litecoin', code: 'LTC'},
    {name: 'Etherium', code: 'ETH'}
  ];

  records: { [key: string]: CryptoRecord[] } = {
    BTC: [
      {
        date: new Date(),
        price: 42000,
        change: -1200,
        perChange: 8.4,
        open: null,
        high: null,
        low: null,
        close: null,
        predicted: false
      },
      {
        date: new Date(2022, 2, 19),
        price: null,
        change: null,
        perChange: null,
        open: 40000,
        high: 42000,
        low: 38000,
        close: 41000,
        predicted: false
      },
      {
        date: new Date(2022, 2, 18),
        price: null,
        change: null,
        perChange: null,
        open: 40000,
        high: 42000,
        low: 38000,
        close: 41000,
        predicted: false
      },
      {
        date: new Date(2022, 2, 27),
        price: null,
        change: null,
        perChange: null,
        open: null,
        high: null,
        low: null,
        close: 41000,
        predicted: true
      }
    ],
    LTC: [
      {
        date: new Date(),
        price: 2000,
        change: 200,
        perChange: 8.4,
        open: null,
        high: null,
        low: null,
        close: null,
        predicted: false
      },
      {
        date: new Date(2022, 1, 9),
        price: null,
        change: null,
        perChange: null,
        open: 4000,
        high: 2000,
        low: 380,
        close: 4100,
        predicted: false
      },
      {
        date: new Date(2022, 1, 6),
        price: null,
        change: null,
        perChange: null,
        open: 4000,
        high: 2000,
        low: 380,
        close: 4100,
        predicted: false
      },
      {
        date: new Date(2022, 1, 4),
        price: null,
        change: null,
        perChange: null,
        open: 3000,
        high: 2000,
        low: 380,
        close: 3200,
        predicted: false
      },
      {
        date: new Date(2022, 2, 27),
        price: null,
        change: null,
        perChange: null,
        open: null,
        high: null,
        low: null,
        close: 4100,
        predicted: true
      }
    ],
    ETH: [
      {
        date: new Date(),
        price: 6500,
        change: -340,
        perChange: 2.3,
        open: null,
        high: null,
        low: null,
        close: null,
        predicted: false
      },
      {
        date: new Date(2022, 2, 16),
        price: null,
        change: null,
        perChange: null,
        open: 6500,
        high: 6800,
        low: 6100,
        close: 6200,
        predicted: false
      },
      {
        date: new Date(2022, 2, 14),
        price: null,
        change: null,
        perChange: null,
        open: 7500,
        high: 42000,
        low: 38000,
        close: 41000,
        predicted: false
      },
      {
        date: new Date(2022, 2, 27),
        price: null,
        change: null,
        perChange: null,
        open: null,
        high: null,
        low: null,
        close: 7500,
        predicted: true
      }
    ]
  };

  columnDefs: ColDef[] = [
    {field: 'date', valueFormatter: this.dateFormatter.bind(this)},
    {field: 'open'},
    {field: 'high'},
    {field: 'low'},
    {field: 'close'}
  ];
  predictionColumnDefs: ColDef[] = [
    {field: 'date', valueFormatter: this.dateFormatter.bind(this)},
    {field: 'close', headerName: 'Predicted Price'}
  ];

  selected: Crypto;

  rowData;
  predictionRowData;

  currentRecord: CryptoRecord;

  constructor(private datePipe: DatePipe) {
  }

  ngOnInit() {
    this.selectCrypto(this.cryptos[0]);
  }

  selectCrypto(crypto: Crypto) {
    this.selected = crypto;
    this.updateRow();
    this.updateCurrentSummary();
  }

  updateRow() {
    this.rowData = this.records[this.selected.code]
      .filter((data: CryptoRecord) => !data.predicted && data.open);
    this.predictionRowData = this.records[this.selected.code]
      .filter((data: CryptoRecord) => data.predicted);
  }

  updateCurrentSummary() {
    const todayDate = new Date();
    todayDate.setHours(0, 0, 0, 0)
    this.currentRecord = this.records[this.selected.code]
      .find((data: CryptoRecord) => {
        data.date.setHours(0, 0, 0, 0);
        return data.date.getTime() === todayDate.getTime()
      })
  };

  dateFormatter(params: ValueFormatterParams): string {
    return this.datePipe.transform(params.value, 'MM/dd/YYYY');
  }
}


