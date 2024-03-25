# addingCommasToNumber

## Description

The `addingCommasToNumber` function is a JavaScript utility that adds commas to a given number for better readability, making it easier to understand large numerical values. This utility can be particularly useful in scenarios where numerical data needs to be displayed to users in a human-readable format, such as financial applications, data visualization tools, or any other context where numeric values are presented to users.

## Installation

You can install `addingCommasToNumber` via npm:

```bash
npm i @nikhil-stack/number-formate
```

### Usage

```
import { addingCommasToNumber } from '@nikhil-stack/number-formate';

const input = {
  x: 1000000,
  onlyNum: false // Set to true if you want to exclude the negative sign from the result
};

const result = addingCommasToNumber(input);
console.log(result); // Output: "1,000,000"

```

### Parameters

input: An object containing the following properties:
x (number): The number to which commas are to be added.
onlyNum (boolean): Optional. Set to true if you want to exclude the negative sign from the result. Default is false.
Return Value
A string representing the input number with commas added for better readability.
