/**
 * TypeScript Type Inference & Type Annotations
 * --------------------------------------------
 * This file demonstrates how TypeScript automatically infers types
 * and how we can explicitly define them using type annotations.
 */

// Type inference
let name = "Saad"; // inferred as string

let x = Math.random() > 0.5 ? 10 : 5;
// inferred as number because both values are numbers

// x = "Ali";
// ❌ Error: Type 'string' is not assignable to type 'number'
// This error occurs because TypeScript inferred `x` as a number

/**
 * The above behavior is called TYPE INFERENCE.
 * TypeScript automatically determines the type based on the assigned value.
 */

// ------------------------------
// Explicit Type Annotations
// ------------------------------

let a: number;
let b: string;
let c: boolean;

let d: boolean = false;
let e: number = 1234;


// Assigning values
a = 10;
b = "Hello TypeScript";
c = true;

// a = "10";
// ❌ Error: Type 'string' is not assignable to type 'number'
