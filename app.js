function addConectador_A_javascript() {
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;

    if (name && phone) {
        const 
    Conectador_A_javascript = document.createElement('div');
        
    Conectador_A_javascript.classList.add('Conectador_A_javascript');
        
    Conectador_A_javascript.textContent = `${name}: ${phone}`;

        const directory = document.getElementById('directory');
        directory.appendChild(
        Conectador_A_javascript
        );

        document.getElementById('name').value = '';
        document.getElementById('phone').value = '';
    } else {
        alert('Por favor, complete ambos campos.');
    }
}

