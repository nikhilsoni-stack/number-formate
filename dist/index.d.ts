import { Input } from "./types";
export declare function addingCommasToNumber(input: Input): string;
export declare function convertToFixed(num: string, toFixed: number): string | number;
export declare function getDecimal(el: string, prevValue: string): string;
export declare function get7DecimalAtMax(el: string, prevValue: string): string;
export declare const convertToPaisa: (value: string) => number;
export declare const convertToRupees: (value: string) => number;
export declare function toFixedWithoutRounding(num: string, fixed: number): string | number;
