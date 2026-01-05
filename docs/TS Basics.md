# TypeScript Introduction & Variable Types

## Introduction to TypeScript

TypeScript is a **strongly typed superset of JavaScript**. It adds
**static typing**, which helps developers write safer, more predictable,
and more readable code. TypeScript catches errors **during development**
instead of at runtime.

------------------------------------------------------------------------

## Declaring Variables in TypeScript (Using `let` Only)

Below is a single, clear example showing **all common TypeScript types**
using only `let`, so it is easy to understand what is possible in
TypeScript.

``` ts
// Number type
let age: number = 25;

// String type
let username: string = "Saad";

// Boolean type
let isLoggedIn: boolean = true;

// Array types
let scores: number[] = [80, 90, 100];
let fruits: string[] = ["apple", "banana"];

// Tuple type
let userTuple: [number, string] = [1, "Admin"];

// Object type
let user: { id: number; name: string } = {
  id: 1,
  name: "Saad",
};

// Union type (can hold more than one type)
let userId: number | string = 101;
userId = "A101";

// any type (can hold ANY value — no type safety)
let randomValue: any = 10;
randomValue = "hello";
randomValue = true;

// unknown type (safer alternative to any)
let apiResponse: unknown = "Success";

// Type inference example (TypeScript infers number)
let points = 50;
```

> In the examples above: - Some variables use **type annotation** - Some
> rely on **type inference**

------------------------------------------------------------------------

## Type Annotation

Type annotation means **explicitly telling TypeScript the type** of a
variable.

``` ts
let price: number = 500;
let email: string = "test@example.com";
```

### When to use type annotation:

-   When a variable is declared without an initial value
-   When you want strict control over allowed types
-   For better readability in public or shared code

------------------------------------------------------------------------

## Type Inference

Type inference means **TypeScript automatically detects the type** based
on the assigned value.

``` ts
let total = 100;        // inferred as number
let country = "Pakistan"; // inferred as string
```

Once inferred, the type **cannot be changed**:

``` ts
total = 200;     // ✅ allowed
total = "200";   // ❌ error
```

### Why inference is useful:

-   Less code
-   Cleaner syntax
-   Still fully type-safe

------------------------------------------------------------------------

## The `any` Type

The `any` type turns off TypeScript's type checking.

``` ts
let value: any = 10;
value = "text";
value = false;
```

### Problems with `any`:

-   No compile-time safety
-   Errors appear at runtime
-   Defeats the purpose of TypeScript

⚠️ Use `any` only when absolutely unavoidable.

------------------------------------------------------------------------

## The `unknown` Type

`unknown` is a **safe version of `any`**.

``` ts
let data: unknown = "Hello";

if (typeof data === "string") {
  console.log(data.toUpperCase());
}
```

### Why `unknown` is better:

-   Forces validation before usage
-   Prevents unsafe operations
-   Encourages proper type narrowing

------------------------------------------------------------------------

## Summary

-   TypeScript adds static typing to JavaScript
-   `let` can be used with all TypeScript types
-   **Type annotation** = you define the type
-   **Type inference** = TypeScript detects the type
-   Avoid `any`
-   Prefer `unknown` for unknown values
-   Union types allow flexible but safe variables

------------------------------------------------------------------------

Happy Learning TypeScript 🚀
