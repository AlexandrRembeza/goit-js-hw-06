const formLoginEL = document.querySelector(".login-form");
const inputEmailEL = document.querySelector('button[type="email"]');
const inputPasswordEL = document.querySelector('button[type="password"]');

formLoginEL.addEventListener("submit", getInputValues);

function getInputValues(event) {  
    event.preventDefault();
    
    if (event.currentTarget.elements.email.value && event.currentTarget.elements.password.value !== "") {
        const formValues = {
            email: `${event.currentTarget.elements.email.value}`,
            password: `${event.currentTarget.elements.password.value}`,
        };
         console.log(formValues);
    } else {
        return alert("Все поля должны быть заполнены");
    }
    
    formLoginEL.reset();
};
