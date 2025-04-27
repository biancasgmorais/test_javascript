document.addEventListener('DOMContentLoaded', function () {
    let button = document.getElementById("showForm");
    let hiddenData = document.getElementById("hiddenContent");

    button.addEventListener('click', () => {
        hiddenData.classList.toggle('hidden');
    });
    
    const myForm = document.getElementById('myForm');
    const formMessage = document.getElementById('formMessage');
    const nameInput = document.getElementById('name');
    const ageInput = document.getElementById('age');

    myForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const nameOutput = nameInput.value.trim();
        const ageOutput = parseInt(ageInput.value, 10);

        const checkboxes = myForm.querySelectorAll('input[type="checkbox"][name="options[]"]');
        const checked = Array.from(checkboxes).some(checkbox => checkbox.checked);

        if (!checked) {
            alert('Por favor, selecione pelo menos uma opção.');
            return;
        }

        if (nameOutput.length > 8 && ageOutput >= 4 && ageOutput <= 99) {
            formMessage.style.display = 'block';
            formMessage.classList.remove('hidden');
            formMessage.style.color = 'green';
            formMessage.textContent = 'Formulário enviado com sucesso!';
        } else {
            formMessage.style.display = 'block';
            formMessage.style.color = 'red';
            formMessage.textContent = 'Entrada inválida. Verifique o nome e a idade.';
            
        }
    });
});
