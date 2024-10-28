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


function dataDimensions(dataframe) {
  // returns a list [rows (int), cols (int)]
}


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