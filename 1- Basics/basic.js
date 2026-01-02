// JavaScript: nothing but just JS (no type checking)

function greetJs(name) {
    return "Hello, " + name;
}

console.log(greetJs("Saad")); // Works fine
console.log(greetJs(42));     // Works, but logically incorrect
// Issue: The function expects a string, but a number was passed
// JS allows this, which can cause behavioral bugs
