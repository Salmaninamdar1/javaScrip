//  it's Object literals fromate data
/*
var employees=[
    {"empid":101, "empyname":"Salman", "salary":4000,},
    {"empid":102, "empyname":"mujahed", "salary":6000,},
    {"empid":103, "empyname":"saif", "salary":5000,},
    {"empid":104, "empyname":"ruman", "salary":7000,},

];


// console.log(employees);

for(var i=0; i<employees.length; i++){
    console.log(employees[i].empid);
}
*/

///////>>>>> object array
 
function Employees (a,b,c){
    this.empyid=a;
    this.empyname= b;
    this.empydept =c;

    this.result=function(){
        if(this.empyid<=102){return "pass"}
        else{
            return "false"
        }
    }

}
var employees = [
    new Employees(101,"Salman","system "),
    new Employees(102,"mujahed","engineer"),
    new Employees(103,"saif","manager"),
    

]
// console.log(employees);
// for (var i=0; i<employees.length; i++){
//     console.log(employees[i]);
// }
console.log(employees.result());