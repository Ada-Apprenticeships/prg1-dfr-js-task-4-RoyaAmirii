const fs = require('fs'); 


function fileExists(filename) {
  // returns true or false
}


function validNumber(value) { // value can be string or numeric
 // returns a boolean 
 const number = parseFloat(value); //parseFloat is used to check if value can be converted into a finite number
 const isValidFormat = /^-?\d+(\.\d+)?$/.test(value); //Regex Check: '^-?\d+(\.\d+)?$' ensures the input has an optional - sign, followed by digits, with an optional decimal portion.
 return isValidFormat && !isNaN(number) && isFinite(number); //We return true only if isValidFormat is true and the parsed number is finite.
}
console.log(validNumber('0.0')); // true
console.log(validNumber('0.1')); // true
console.log(validNumber('-1.12')); // true
console.log(validNumber('-5')); // true
console.log(validNumber('5')); // true
console.log(validNumber(1.3)); // true
console.log(validNumber(1)); // true
console.log(validNumber('5.')); // false
console.log(validNumber('+5')); // false
console.log(validNumber('.')); // false
console.log(validNumber('0.0.1')); // false


function dataDimensions(dataframe) {// returns a list [rows (int), cols (int)]
  if (!Array.isArray(dataframe)|| dataframe.length === 0){
    return [-1,-1];
  } 
  if (!Array.isArray(dataframe[0])){
    return [dataframe.length, -1];
  }
  const rows = dataframe.length;
  const cols = dataframe[0].length;
  return [rows,cols]
}
const df1 = [
  ['tcp', 1, 2,3],
  ['icmp',4, 5, 6],
  ['tcp', 7, 8, 9]
];
const ds1 = [1.1, 1.2, 0, 0,1.1]
const ds2 = ['AAA', 'BBB', 'CCC'];
const ds3 = undefined;

console.log(dataDimensions(df1)); // [3, 4]
console.log(dataDimensions(ds1)); // [5, -1]
console.log(dataDimensions(ds2)); // [3, -1]
console.log(dataDimensions(ds3)); // [-1, -1]

function calculateMean(dataset) {
  // returns a float or false
  
}


function findTotal(dataset) {
  // returns float or false
  
} 


function convertToFloat(dataframe, col){ //dataframe, integer
  // returns an integer, which is the number that were  converted to floats.
  
}


function flatten(dataframe) {
  // returns a dataset (a flattened dataframe)
  
}


function loadCSV(csvFile, ignorerows, ignorecols) {  // string, dataset, dataset
  // returns a list comprising of [dataframe, rows (integer), cols (integer)]

}


function calculateMedian(dataset) {
  // return float or false 
  
}


function createSlice(dataframe, colindex, colpattern, exportcols = []) { // dataframe, integer, string/numeric, dataset
  // returns a dataframe
  
}









module.exports = {
  fileExists, validNumber, dataDimensions, calculateMean, findTotal, convertToFloat, flatten, 
  loadCSV, calculateMedian, createSlice,
} 