const data = [
    "Button 1",
    "Button 2",
    "Button 3",
    "Button 4"
]

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

/* 
for (let i = 0; i < data.length; i++) {
    let button = buttonCreator(data[i]);
    container.appendChild(button);
};
 */

/* 
data.forEach((arrayItem) => {
    let newButton = buttonCreator(arrayItem);  
    container.appendChild(newButton);
});
 */

let newComponents = data.map((arrayItem) => {
    let newButton = buttonCreator(arrayItem);
  
    // Remember, we always need to return something when we use .map
    return newButton;
});

newComponents.forEach(component => {
    container.appendChild(component);
});