const formLoginEL = document.querySelector(".login-form");
const inputEmailEL = document.querySelector('button[type="email"]');
const inputPasswordEL = document.querySelector('button[type="password"]');

formLoginEL.addEventListener("submit", getInputValues);

function getInputValues(event) {  
    event.preventDefault();

    const {
        elements: { email, password }
    } = event.currentTarget;
    
    if (email.value && password.value !== "") {
        const formValues = {
            email: `${email.value}`,
            password: `${password.value}`,
        };
         console.log(formValues);
    } else {
        return alert("Все поля должны быть заполнены");
    }
    
    formLoginEL.reset();
};
