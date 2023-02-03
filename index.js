function buttonCreator(buttonText){
    const button = document.createElement('button');

    button.textContent = buttonText;

    button.classList.add('button');
    button.classList.add('sampleButton');

    button.addEventListener('click', (e) => {
        console.log(`The button clicked says: ${e.target.textContent}`);
    });

    return button;
}

let container = document.querySelector('.container')

let firstButton = buttonCreator('This is button 1');

let secondButton = buttonCreator('This is button 2');

container.appendChild(firstButton);
container.appendChild(secondButton);