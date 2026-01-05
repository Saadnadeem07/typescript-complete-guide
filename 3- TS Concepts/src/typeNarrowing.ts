/**
 * =====================================================
 * TypeScript Core Concepts Demonstration
 * =====================================================
 * Covered topics:
 * - Union types
 * - Type narrowing (typeof, instanceof)
 * - Optional parameters
 * - Literal types
 * - Classes & runtime checks
 * - Custom type guards
 */

/* -----------------------------------------------------
   1. Union Types & Type Narrowing (typeof)
----------------------------------------------------- */

function getDrink(drink: string | number): string {
  // Type narrowing helps TypeScript understand the
  // actual type at runtime and provide better IntelliSense
  if (typeof drink === "string") {
    return `Drink name = ${drink}`;
  }

  return `Drink order number = ${drink}`;
}

/* -----------------------------------------------------
   2. Optional Parameters
----------------------------------------------------- */

function deliverMessage(message?: string): string {
  if (message) {
    return "Learning TypeScript";
  }

  return "TypeScript is perfect for intermediate developers.";
}

/* -----------------------------------------------------
   3. Literal Types + Union Types
----------------------------------------------------- */

function getShoeSize(size: "small" | "medium" | "large" | number): string {
  if (typeof size === "number") {
    return `Your shoe size = ${size}`;
  }

  return `Your shoe size is ${size}`;
}

/* -----------------------------------------------------
   4. Classes & instanceof Narrowing
----------------------------------------------------- */

class ABC {
  display(): string {
    return "This is class ABC";
  }
}

class XYZ {
  display(): string {
    return "This is class XYZ";
  }
}

function showClassMessage(instance: ABC | XYZ): string {
  if (instance instanceof ABC) {
    return instance.display();
  }

  // At this point, TypeScript knows it's XYZ
  return instance.display();
}

/* -----------------------------------------------------
   5. Custom Types & Type Guards
----------------------------------------------------- */

// Custom object type
type ChaiOrder = {
  type: string;
  quantity: number;
};

// User-defined type guard
function isChaiOrder(value: unknown): value is ChaiOrder {
  return (
    typeof value === "object" &&
    value !== null &&
    "type" in value &&
    "quantity" in value &&
    typeof (value as ChaiOrder).type === "string" &&
    typeof (value as ChaiOrder).quantity === "number"
  );
}

function serveOrder(order: unknown): string {
  if (isChaiOrder(order)) {
    return `Serving Chai Order → Type: ${order.type}, Quantity: ${order.quantity}`;
  }

  return "Invalid order received";
}

/* -----------------------------------------------------
   6. Literal Object Types (Advanced Usage)
----------------------------------------------------- */

type CustomType1 = {
  type: "abc"; // literal type
  orderNumber: number;
};

function createOrder(order: CustomType1): string {
  return `Order #${order.orderNumber} of type ${order.type} created`;
}

const validOrder: CustomType1 = {
  type: "abc",
  orderNumber: 101,
};

// ❌ Compile-time error
// const invalidOrder: CustomType1 = {
//   type: "xyz",
//   orderNumber: 102,
// };

createOrder(validOrder);


//Literal types are used to create discriminated unions and enforce strict, predictable behavior in TypeScript without runtime overhead.