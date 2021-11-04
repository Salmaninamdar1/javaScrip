// 03-11-21
// two type of oops
/*
1)  class based obj
2)  proto type base obj
*/
// creating obj
/*
1)  OBJ LITRALS
2)  CONSTRUCTION FUNCTION
*/

// var stu = { student: 1, studentname: "Salman", mark: 80 };
// console.log(stu.mark);
// console.log(stu.student);
// console.log(stu.studentname);

/*
var stud = {
  studentid: 2,
  studentname: "Salman",
  marks: 88,
  result: function () {
    if (this.marks >= 35) {
      return "Pass";
    } else {
      return "fail";
    }
  }
};
console.log(stud);
console.log(stud.studentid);
console.log(stud.studentname);
console.log(stud.marks);
console.log(stud.result());

*/

// var family = {
//   noofmember: 6,
//   male: 3,
//   female: 3,
//   dadage: 55,
//   dadname: "ismail",
//   mothername: "naseem",
//   result: function () {
//     if (this.noofmember <= 6 && this.male <= 3 && this.female <=3) {
//     // if (family.noofmember <= 6 && family.male <= 3 && family.female <=3) {
//       return "myfamily";
//     } else {
//       return "yourfamily";
//     }
//   },
// };
// console.log(family.noofmember);
// console.log(family.male);
// console.log(family.female);
// console.log(family.mothername);
// console.log(family.result());

///>>>> constructor fucntion
///     constructor fucntion is a fucnction that recived as empty (new ) object , initialize propties and method to the obj

function Student(a, b, c) {
  this.studentid = a; //value/properties
  this.studentname = b;
  this.studentmarks = c;
  this.result = function () {
    ///method
    if (this.studentmarks >= 60) {
      return "pass";
    } else {
      return "fail";
    }
  };
}
var stud = new Student(1, "salman", 59);
// console.log(stud.studentname)
// console.log(stud.studentid)
// console.log(stud.studentmarks)
// console.log(stud.result())

console.log("this data in the form of ARRAY=", Object.keys(stud));
///
/// if the data  comes form server/browser we will go with the Object.keys()
var key = Object.keys(stud);
console.log(key);

for (var i = 0; i <= key.length; i++) {
    console.log(stud[key[i]]);
}




