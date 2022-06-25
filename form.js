let msg = document.querySelectorAll('.worrningMsg');
let inputs = document.querySelectorAll("input");
let btn = document.querySelector('button')
let [firstName, lastName, email, passWord] = inputs
btn.addEventListener('click', (e) => {
    let first_name_valid = false;
    let last_name_valid = false;
    let email_valid = false;
    let passWord_valid = false;

    // test the email value
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value)) {
        email_valid = true;
    }

    // test the passWorsd value
    // Minimum eight characters, at least one letter and one number
    if (/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(passWord.value)) {
        passWord_valid = true
    }
    // test the first name value
    if (/^[ a-zA-Z\-/']+$/.test(firstName.value)) {
        first_name_valid = true
    }
    // test the last name value
    if (/^[ a-zA-Z\-/']+$/.test(lastName.value)) {
        last_name_valid = true
    }
    //if all the values are valid , send the information
    if (email_valid === false || passWord_valid === false || first_name_valid === false || last_name_valid === false) {
        e.preventDefault()
        // show the worning msg be adding the show class 
        msg.forEach(function (e) {
            e.classList.add('show')
        })
    } else {
        btn.addEventListener('submit')
    }
    //
})

//all regular expression in this webSite
// https://www.codegrepper.com/search.php?q=password%20regex