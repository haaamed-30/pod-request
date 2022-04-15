const emailInput = document.querySelector(".email_input");
const submitInput = document.querySelector(".submit_input");


submitInput.addEventListener('click', (e) => {

    e.preventDefault();

    if (emailInput.value === "") {
        document.querySelector('.error_message_empty').style.display = 'block';
    } else {
        document.querySelector('.error_message_empty').style.display = 'none';
    }

    if (!emailInput.value.includes('@') && emailInput.value.length > 0) {

        document.querySelector('.error_message_nochar').style.display = 'block';
    } else {
        document.querySelector('.error_message_nochar').style.display = 'none';
    }

});

emailInput.addEventListener('focus', (e) => {

    document.querySelector('.error_message_empty').style.display = 'none';

    document.querySelector('.error_message_nochar').style.display = 'none';

});

