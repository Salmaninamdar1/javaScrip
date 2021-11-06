//  Simple obj
var book = {
  id: 1001,
  book_name: "fifty shade",
  book_color: "black",
};

// complex obj it means obj inwhich object

var contact = {
  name: "salman",
  id: 112,
  preferences: {
    pgCount: 100,
    defaultSort: "last page",
  },
  contactMechanisum: [
    {
      phone: 8055565523,
      name: "salman",
      type: "empolyee",
    },
    {
      phone: 9890359475,
      name: "naseem",
      type: "director",
    },
    {
      phone: 8830493331,
      name: "Naveed",
      type: "manager",
    },
    {
      phone: 9730996304,
      name: "Md Ismail",
      type: "owner",
    },
  ],
};
// console.log(contact);
// console.log(typeof (contact));
// console.log(contact.preferences);
// console.log(typeof (contact.preferences));

console.log(contact.contactMechanisum);

