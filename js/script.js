class Smoothie {
    constructor(name, fruits, base) {
        this.name = name;
        this.fruits = fruits;
        this.base = base;
    }

    getDescription() {
        
        return `
            <strong>Smoothie Name:</strong> ${this.name}<br>
            <strong>Fruits and Greens:</strong> ${this.fruits.join(', ') || 'None'}<br>
            <strong>Base:</strong> ${this.base || 'None'}
        `;
    }
}

document.getElementById('order-btn').addEventListener('click', function() {
    
    const nameInput = document.getElementById('name');
    const fruitsInputs = document.querySelectorAll('input[name="ingredients"]');
    const baseInputs = document.querySelectorAll('input[name="base"]');
    const smoothieDescription = document.getElementById('smoothie-description');

 
    if (nameInput.value.trim() === '') {
        alert('Please enter a name for your smoothie.');
        nameInput.focus();
        return;
    }

    let selectedFruits = Array.from(fruitsInputs)
                              .filter(input => input.checked)
                              .map(input => input.value);

    
    let selectedBase = Array.from(baseInputs)
                            .find(input => input.checked)?.value;

    
    if (selectedFruits.length === 0) {
        alert('Please select at least one fruit or green.');
        return;
    }

    
    if (!selectedBase) {
        alert('Please select a base for your smoothie.');
        return;
    }

    
    const smoothie = new Smoothie(nameInput.value, selectedFruits, selectedBase);
    smoothieDescription.innerHTML = smoothie.getDescription();
});
