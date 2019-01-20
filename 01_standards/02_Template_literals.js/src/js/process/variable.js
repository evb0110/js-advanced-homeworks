const formatter = (strings, name) => `${strings[0]}Mr ${name}`;


const name = "John";
console.log(formatter`Hello ${name}`);

