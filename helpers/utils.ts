export function divide(a: number, b: number) {
  let result = a / b;
  return result;
}
export function numberFormat(number: number) {
  return number.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.");
}
export function restrictToNumber(val: string){
  return val.replace(/\D/g, '');
}
