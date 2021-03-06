export interface CryptoRecord {
  date: Date;
  price?: number;
  priceChange?: number;
  perChange?: number;
  open?: number;
  high?: number;
  low?: number;
  close: number;
  predicted?: boolean;
}
