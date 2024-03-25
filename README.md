## README

### Description

This code provides utility functions for manipulating numbers and formatting them according to specific requirements. Below are the functions provided along with their descriptions:

### Functions

1. **addingCommasToNumber**

   - Description: Adds commas to a number for better readability.
   - Parameters:
     - `input`: An object containing the following properties:
       - `x`: The number to which commas need to be added.
       - `onlyNum` (optional): A boolean indicating whether to return only the formatted number without any other characters. Default is `false`.
   - Returns: A string representing the number with commas added.

2. **convertToFixed**

   - Description: Converts a number to a string representation with a fixed number of decimal places.
   - Parameters:
     - `num`: The number to be converted.
     - `toFixed`: The number of decimal places to round to.
   - Returns: A string representing the number with the specified number of decimal places.

3. **getDecimal**

   - Description: Validates and retrieves the decimal value of a string.
   - Parameters:
     - `el`: The string to check for decimal validity.
     - `prevValue`: The previous value to fallback to if the current value is invalid.
   - Returns: A string representing the valid decimal value.

4. **get7DecimalAtMax**

   - Description: Validates and retrieves the decimal value of a string with a maximum of 7 decimal places.
   - Parameters:
     - `el`: The string to check for decimal validity.
     - `prevValue`: The previous value to fallback to if the current value is invalid.
   - Returns: A string representing the valid decimal value with a maximum of 7 decimal places.

5. **convertToPaisa**

   - Description: Converts a currency value to its equivalent in paisa (100 times the value).
   - Parameters:
     - `value`: The currency value to be converted.
   - Returns: An integer representing the value in paisa.

6. **convertToRupees**

   - Description: Converts a paisa value to its equivalent in rupees (1/100 times the value).
   - Parameters:
     - `value`: The paisa value to be converted.
   - Returns: A float representing the value in rupees.

7. **toFixedWithoutRounding**
   - Description: Returns a string representing a number with a fixed number of decimal places without rounding.
   - Parameters:
     - `num`: The number to be converted.
     - `fixed`: The number of decimal places to include without rounding.
   - Returns: A string representing the number with the specified number of decimal places without rounding.

### Usage

You can import these functions into your project and use them according to your requirements.

```typescript
import {
  addingCommasToNumber,
  convertToFixed,
  getDecimal,
  get7DecimalAtMax,
  convertToPaisa,
  convertToRupees,
  toFixedWithoutRounding,
} from "@nikhil-stack/number-formate";

// Example usage
const formattedNumber = addingCommasToNumber({ x: 1000000 }); // "1,000,000"
const fixedNumber = convertToFixed("10.555", 2); // "10.56"
const decimalValue = getDecimal("10.123", "10.12"); // "10.12"
const paisaValue = convertToPaisa("10.50"); // 1050
const rupeesValue = convertToRupees("1050"); // 10.5
const fixedWithoutRounding = toFixedWithoutRounding("10.555", 2); // "10.55"
```
