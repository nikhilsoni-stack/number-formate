import { Input } from "./types";

// adding commas to number
export function addingCommasToNumber(input: Input) {
  let { x, onlyNum } = input;
  if (!x) {
    return "0";
  }
  let isNegativeNumber = false;
  x = x.toString();

  if (x.charAt(0) == "-") {
    x = x.substr(1);
    isNegativeNumber = true;
  }

  let afterPoint = "";
  if (x.indexOf(".") > 0) {
    afterPoint = x.substring(x.indexOf("."), x.length);
  }
  const floorNumber = Math.floor(Number(x));
  x = floorNumber.toString();
  let lastThree = x.substring(x.length - 3);
  let otherNumbers = x.substring(0, x.length - 3);
  if (otherNumbers != "") {
    lastThree = "," + lastThree;
  }
  let res =
    otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ",") + lastThree + afterPoint;
  if (onlyNum) {
    return res;
  }
  if (isNegativeNumber) {
    return "-" + res;
  } else {
    return "" + res;
  }
}

export function convertToFixed(num: string, toFixed: number) {
  if (!num) {
    return "0";
  }
  let x = Number(num);
  if (toFixed != null || toFixed != undefined) {
    return x.toFixed(toFixed);
  }
  return x;
}

export function getDecimal(el: string, prevValue: string) {
  var ex = /^\d*\.?\d{0,2}$/;
  if (ex.test(el) == false) {
    el = prevValue != null ? prevValue : el.substring(0, el.length - 1);
  }
  return el;
}

export function get7DecimalAtMax(el: string, prevValue: string) {
  var ex = /^\d*\.?\d{0,7}$/;
  if (ex.test(el) == false) {
    el = prevValue != null ? prevValue : el.substring(0, el.length - 1);
  }
  return el;
}

export const convertToPaisa = (value: string) => {
  if (value) {
    let newValue = parseFloat(value) * 100;
    return isNaN(newValue) ? 0 : Math.round(newValue);
  }
  return 0;
};
export const convertToRupees = (value: string) => {
  if (value) {
    let newValue = parseFloat(value) / 100;
    return newValue;
  }
  return 0;
};

export function toFixedWithoutRounding(num: string, fixed: number) {
  if (!num) {
    return num;
  }
  num = num.toString();
  const decimalIndex = num.indexOf(".");
  if (decimalIndex === -1 || fixed < 0) {
    return num;
  }
  return Number(num.slice(0, decimalIndex + (fixed + 1)));
}
