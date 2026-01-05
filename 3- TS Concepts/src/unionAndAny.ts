/**
 * Example demonstrating TypeScript:
 * - Union types
 * - Literal types
 * - Avoiding `any`
 * - Safe variable initialization
 */

// Union type: number OR string
let subscribers: number | string = 100;
subscribers = "1M";

// Literal union type: only allowed specific values
let apiRequestStatus: "success" | "pending" | "error" = "success";
apiRequestStatus = "error";

// ❌ Not allowed — TypeScript will throw an error
// apiRequestStatus = "saad";

// Orders list
const orders: string[] = ["1", "2", "3", "4"];

// Avoid using `any`
// Variable can be either a string or undefined
let currentOrder: string | undefined = undefined;

for (const order of orders) {
  if (order === "2") {
    currentOrder = order;
    break;
  }

  // Default value when condition is not met
  currentOrder = "0";
}

console.log(currentOrder);
