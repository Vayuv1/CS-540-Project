import {Component, OnInit} from '@angular/core';
import {CryptoRecord} from '../models/crypto-record.model';
import {Crypto} from '../models/crypto.model';
import {ColDef, ValueFormatterParams,} from 'ag-grid-community';
import {DatePipe} from "@angular/common";
import {CryptoService} from '../services/crypto.service';

@Component({
  selector: 'app-detail-page',
  templateUrl: './detail-page.component.html',
  styleUrls: ['./detail-page.component.scss']
})
export class DetailPageComponent implements OnInit {

  cryptos: Crypto[] = [];

  records: { [key: string]: CryptoRecord[] } = {};

  columnDefs: ColDef[] = [
    {field: 'date',
      valueFormatter: this.dateFormatter.bind(this),
      filter: 'agDateColumnFilter',
      filterParams: filterParams},
    {field: 'open', filter: false},
    {field: 'high', filter: false},
    {field: 'low', filter: false},
    {field: 'close', filter: false}
  ];
  predictionColumnDefs: ColDef[] = [
    {field: 'date',
      valueFormatter: this.dateFormatter.bind(this),
      filter: 'agDateColumnFilter',
      filterParams: filterParams},
    {field: 'close', headerName: 'Predicted Price', filter: false}
  ];

  selected: Crypto;

  rowData;
  predictionRowData;

  currentRecord: CryptoRecord;

  constructor(private datePipe: DatePipe,
              private cryptoService: CryptoService) {
  }

  ngOnInit() {
    this.cryptoService.getCryptos$().subscribe(res => {
      this.cryptos = res;
    });
    this.cryptoService.getCryptoRecords$().subscribe(res => {
      this.records = res;
      this.selectCrypto(this.cryptos[0]);
    });
    this.cryptoService.getCryptos();
    this.cryptoService.getCryptoRecords();
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
        const date: Date = new Date(data.date);
        date.setHours(0, 0, 0, 0);
        return date.getTime() === todayDate.getTime()
      })
  };

  dateFormatter(params: ValueFormatterParams): string {
    return this.datePipe.transform(params.value, 'dd/MM/YYYY');
  }

}

let filterParams = {
  comparator: function (filterLocalDateAtMidnight: Date, cellValue: string) {
    const dateAsString = cellValue;
    if (dateAsString == null) return -1;
    const dateParts = dateAsString.split('-');
    const day = Number(dateParts[2].slice(0,2));
    const month = Number(dateParts[1]);
    const year = Number(dateParts[0]);
    const cellDate = new Date(year, month, day);
    if (filterLocalDateAtMidnight.getTime() === cellDate.getTime()) {
      return 0;
    }
    if (cellDate < filterLocalDateAtMidnight) {
      return -1;
    }
    if (cellDate > filterLocalDateAtMidnight) {
      return 1;
    }
  },
  browserDatePicker: true,
  minValidYear: 2014,
  maxValidYear: 2022
};


