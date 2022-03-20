import { Component, OnInit } from '@angular/core';
import {CryptoRecord} from '../models/crypto-record.model';
import {Crypto} from '../models/crypto.model';
import {
  ColDef,
  GridApi,
  GridReadyEvent,
  RefreshCellsParams,
  RowNode,
} from 'ag-grid-community';


@Component({
  selector: 'app-detail-page',
  templateUrl: './detail-page.component.html',
  styleUrls: ['./detail-page.component.css']
})
export class DetailPageComponent implements OnInit {

  private gridApi!: GridApi;

  cryptos: Crypto[] = [
    {name: 'Bitcoin', code: 'BTC'},
    {name: 'Litecoin', code: 'LTC'},
    {name: 'Etherium', code: 'ETH'}
  ];

  records: {[key: string]: CryptoRecord[]} = {
    BTC: [
      {date: new Date(),
      price: 42000,
      change: -1200,
      perChange: 8.4,
      open: null,
      high: null,
      low: null,
      close: null,
      predicted: false},

      {date: new Date(),
        price: null,
        change: null,
        perChange: null,
        open: 40000,
        high: 42000,
        low: 38000,
        close: 41000,
        predicted: false},

      {date: new Date(),
        price: null,
        change: null,
        perChange: null,
        open: 40000,
        high: 42000,
        low: 38000,
        close: 41000,
        predicted: false},

      {date: new Date(),
        price: null,
        change: null,
        perChange: null,
        open: null,
        high: null,
        low: null,
        close: 41000,
        predicted: true}
    ],
    LTC: [
      {date: new Date(),
        price: 2000,
        change: -200,
        perChange: 8.4,
        open: null,
        high: null,
        low: null,
        close: null,
        predicted: false},

      {date: new Date(),
        price: null,
        change: null,
        perChange: null,
        open: 4000,
        high: 2000,
        low: 380,
        close: 4100,
        predicted: false},

      {date: new Date(),
        price: null,
        change: null,
        perChange: null,
        open: 4000,
        high: 2000,
        low: 380,
        close: 4100,
        predicted: false},

      {date: new Date(),
        price: null,
        change: null,
        perChange: null,
        open: null,
        high: null,
        low: null,
        close: 4100,
        predicted: true}
      ],
    ETH: [
      {date: new Date(),
        price: 7500,
        change: -1200,
        perChange: 8.4,
        open: null,
        high: null,
        low: null,
        close: null,
        predicted: false},

      {date: new Date(),
        price: null,
        change: null,
        perChange: null,
        open: 7500,
        high: 42000,
        low: 38000,
        close: 41000,
        predicted: false},

      {date: new Date(),
        price: null,
        change: null,
        perChange: null,
        open: 7500,
        high: 42000,
        low: 38000,
        close: 41000,
        predicted: false},

      {date: new Date(),
        price: null,
        change: null,
        perChange: null,
        open: null,
        high: null,
        low: null,
        close: 7500,
        predicted: true}
      ]
  };

  selected: Crypto = {name: 'Bitcoin', code: 'BTC'};

  columnDefs: ColDef[] = [{ field: 'date' }, { field: 'open' }, { field: 'high' }, {field: 'low'}, {field: 'close'}];

  rowData =  this.records[this.selected.code];




  onSelect() {
    this.gridApi.refreshCells();
  }

  onGridReady(params: GridReadyEvent) {
    this.gridApi = params.api;
    params.api.setRowData(this.records[this.selected.code]);
  }



  constructor() {
  }

  ngOnInit() {
  }

}


