const tagMr = (strings, name) => `${strings[0]}Mr ${name}`;

const name = "John";
console.log(tagMr`Hello, ${name}`); // Hello, Mr John

// ===============

const makeTag = prefix => (strings, name) => `${strings[0]}${prefix} ${name}`;
const tagDr = makeTag("Dr");
console.log(tagDr`Hello, ${name}`); // Hello, Dr John