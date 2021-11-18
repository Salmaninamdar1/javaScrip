//////   inheritance : all propertise and methods of parents obj is inherited into child obj

function Parent (a,b,c){
    this.name=a;
    this.bloodGroup= b;
    this.dna=c;
}
function Child (a,b,c,d){
    Parent.call(this,a,b,c);
    this.childname=d;
}

var inheri = new Child("ismail","b+", 1, "salman");
console.log (inheri);