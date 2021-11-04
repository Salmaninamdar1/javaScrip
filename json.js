// Stringify
// parse

// 1) stringify

function Student(a, b, c) {
  this.studentid = a;
  this.studentname = b;
  this.studentmarks = c;
  this.result = function () {
    if (this.marks <= 35) {
      return "pass";
    } else {
      return "fail";
    }
  };
}

var stu = new Student(3, "sallu", 69);

// console.log(stu);

/////// to print all the data or propertie in the form of JSON
////////////   stringify convert the data form Object litrals to JSON format
var stringi = JSON.stringify(stu);
console.log(stringi);

////////    parse       is used to convert JSON to Object literal fromat

var pars = JSON.parse(stringi);
console.log(pars);