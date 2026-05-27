/*
  To use modern, clean JavaScript features without breaking your app for users on older browsers, 
  you need two distinct tools: Transpilers and Polyfills.
  
  # Transpilers (For Syntax & Operators)
   A transpiler is software that reads modern JavaScript syntax and rewrites it into equivalent older 
   syntax that outdated engines can understand.
 */

let height = height ?? 100; // modern code

let _height = height !== undefined && height !== null ? height : 100; //old way(Transpiler output)

/*
A polyfill is a script that adds missing built-in functions or methods. It literally "fills in" the gap 
by checking if a feature exists; if it doesn't, it creates a custom implementation of it on the fly.

example: If an old browser doesn't know what Math.trunc() is, your app will crash. A polyfill acts as a safety net:
*/

if (!Math.trunc) {
  // if no such function implement it
  Math.trunc = function (number) {
    // Math.ceil and Math.floor exists even in ancient javascript engines
    // they are covered later in the tutorial
    return number < 0 ? Math.ceil(number) : Math.floor(number);
  };
}
