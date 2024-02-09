const form = document.querySelector('.feedback-form');

form.addEventListener('input', handleInput);
form.addEventListener('submit', handleSubmit);

const objData = {};

updateForm();

function handleInput({target}) {
    objData[target.name] = target.value;
    const jsonObj = JSON.stringify(objData);
    localStorage.setItem('feedback-form-state', jsonObj);
};

function handleSubmit(event) {
    event.preventDefault();
    const objStor = JSON.parse(localStorage.getItem('feedback-form-state'));
    console.log(objStor);
    localStorage.removeItem('feedback-form-state');
    form.reset();
};

function updateForm() {
    if (!localStorage.getItem('feedback-form-state')) {
        return
    }
    const objStor = JSON.parse(localStorage.getItem('feedback-form-state'));
    Object.entries(objStor).forEach(([name, value]) => {
        form[name].value = value;
    });
}