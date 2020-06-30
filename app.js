var validator = require('validator');

let emails = [
    "johndoe.xyz",
    "james.flooàgmail.fr",
    "nodemonjs@caart.fr",
    "aloecc@fqsfsqfsq.ze",
    "jesuispas"
]

emails.map((email) => {
   let yesOrNo = validator.isEmail(email)
    console.log(`${email}: ${yesOrNo}`)
})