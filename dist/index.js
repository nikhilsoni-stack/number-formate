"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.convertToRupees = exports.convertToPaisa = exports.get7DecimalAtMax = exports.getDecimal = exports.convertToFixed = exports.addingCommasToNumber = void 0;
// adding commas to number
function addingCommasToNumber(input) {
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
    let res = otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ",") + lastThree + afterPoint;
    if (onlyNum) {
        return res;
    }
    if (isNegativeNumber) {
        return "-" + res;
    }
    else {
        return "" + res;
    }
}
exports.addingCommasToNumber = addingCommasToNumber;
function convertToFixed(num, toFixed) {
    if (!num) {
        return "0";
    }
    let x = Number(num);
    if (toFixed != null || toFixed != undefined) {
        return x.toFixed(toFixed);
    }
    return x;
}
exports.convertToFixed = convertToFixed;
function getDecimal(el, prevValue) {
    var ex = /^\d*\.?\d{0,2}$/;
    if (ex.test(el) == false) {
        el = prevValue != null ? prevValue : el.substring(0, el.length - 1);
    }
    return el;
}
exports.getDecimal = getDecimal;
function get7DecimalAtMax(el, prevValue) {
    var ex = /^\d*\.?\d{0,7}$/;
    if (ex.test(el) == false) {
        el = prevValue != null ? prevValue : el.substring(0, el.length - 1);
    }
    return el;
}
exports.get7DecimalAtMax = get7DecimalAtMax;
const convertToPaisa = (value) => {
    if (value) {
        let newValue = parseFloat(value) * 100;
        return isNaN(newValue) ? 0 : Math.round(newValue);
    }
    return 0;
};
exports.convertToPaisa = convertToPaisa;
const convertToRupees = (value) => {
    if (value) {
        let newValue = parseFloat(value) / 100;
        return newValue;
    }
    return 0;
};
exports.convertToRupees = convertToRupees;
