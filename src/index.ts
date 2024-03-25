import { Input } from "./types";

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
