export interface NumberDictType {
  [param: number]: string;
}

export type FormatAmountFunction = (num: number) => string[];
