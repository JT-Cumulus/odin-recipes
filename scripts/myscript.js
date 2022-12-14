// String test
const myText = 'I am a string';
const newString = myText.replace('string', 'sausage');
console.log(newString);

/* Alternative way of implementing event reader

function logKey(event) {
    console.log('You pressed "${event.key}".');
}

textBox.addEventListener('keydown', logKey);
*/

// Reading inputs with textbox
const textBox = document.querySelector('#textBox')
const output = document.querySelector('#output')

textBox.addEventListener('keydown', (event) => 
    output.textContent = `You pressed "${event.key}".`);


console.log('\n')