export type TableProps = {
  header: string[];
  content: (string | number | JSX.Element | JSX.Element[])[][];
};

export interface IContentTotals {
  totalAmount: number;
  totalTax: number;
  totalDiscount: number;
}

export interface IContentProduct {
    id: number;
    name: string;
    category: string;
}

export interface IFormbackendData {
  id: number;
  name: string;
  category: string;
}
