//  immediately invoked function expression (IIFE)

(function iife(name) {
  console.log(`  ${name}  Data  Base Connected Successfully `);
})("MongoDB");

/* IIFE in Arrow Function  */

((name) => {
  console.log(`  ${name}  Backup Data Base Connected Successfully `);
})("MYSQL");
