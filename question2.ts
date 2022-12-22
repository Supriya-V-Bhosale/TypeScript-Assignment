const  string:String="Hidd©©©en??Ascii ©©®®®Charac££ter";
const str:String=string.replace(/[^\x00-\x7F]/g, "");
console.log(string);
console.log(str);