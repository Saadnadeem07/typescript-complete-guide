// TypeScript: JavaScript + Types
// TS checks types at compile time to avoid runtime errors

function greetTs(name: string): string {
    return `Hello, ${name}`;
}

console.log(greetTs("Saad")); // ✅ Works

 console.log(greetTs(42)); 
// ❌ Error: Argument of type 'number' is not assignable to parameter of type 'string'
// TS will highlight this during coding, preventing potential runtime bugs

// Key Points:
// 1. TypeScript never runs directly; it is compiled to JS.
// 2. TS provides type checking and ensures consistency in the code.
// 3. TS helps catch errors early during development.
