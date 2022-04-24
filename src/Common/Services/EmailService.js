import emailjs from '@emailjs/browser';
import Parse from 'parse';

export function sendEmail (name, notes) {
    console.log("Sending emails");

    const User = Parse.Object.extend("User");
    const query = new Parse.Query(User);

    query.find().then((results) => {
        results.forEach(result => {
            console.log(result);
            let recipient = result.get("email");
            console.log(recipient);

            const templateParams = {
                to_name: name,
                message: notes,
                recipient: recipient
            };
        
            emailjs.send('ndboxing_email','workout', templateParams, 'tiV8LIVrKy7QnzVts')
                .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
                }, (err) => {
                console.log('FAILED...', err);
                });
        })   
    })

}