const uuid = require('uuid');
const convertCase = require('js-convert-case');

let userarry = [{ uname: "steve jobs", email: "steve@gmail.com", cartid: "" },
{ uname: "smith", email: "smith@gmail.com", cartid: "" },
{ uname: "john", email: "john@gmail.com", cartid: "" }];

userarry.forEach(user => {
    user.cartid = uuid.v4().toUpperCase();
    user.uname = convertCase.toHeaderCase(user.uname);
    user.email = user.email.toLowerCase(user.email);
});
console.log(userarry);