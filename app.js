const validator = require('validator');

try {
    let emails = process.argv[2].split(',');

    emails.map((email) => {
        let yesOrNo = validator.isEmail(email)
        console.log(`${email}: ${yesOrNo}`)
    })
} catch (e) {
    console.log("Erreur : " + e)
}