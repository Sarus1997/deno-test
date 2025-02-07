let num_1 = parseInt(prompt("Enter a number") || "");
let num_2 = parseInt(prompt("Enter a number") || "");
let operation = prompt("Enter an operation (+, -, *, /):") || "";
let result: number | null = null;

while (true) {
  switch (operation) {
    case "+":
      result = num_1 + num_2;
      break;
    case "-":
      result = num_1 - num_2;
      break;
    case "*":
      result = num_1 * num_2;
      break;
    case "/":
      if (num_2 !== 0) {
        result = num_1 / num_2;
      } else {
        console.log("Error: Division by zero");
        result = null;
      }
      break;
    default:
      console.log("Invalid operation");
      result = null;
      break;
  }

  if (result !== null) {
    console.log("Result:", result);

    const cont = prompt("Do you want to continue? (y/n):") || "";
    if (cont.toLowerCase() === "n") {
      break;
    } else {
      num_1 = parseInt(prompt("Enter a number") || "");
      num_2 = parseInt(prompt("Enter a number") || "");
      operation = prompt("Enter an operation (+, -, *, /):") || "";
    }
  }
}

