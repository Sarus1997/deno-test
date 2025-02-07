console.log("\nพีรามิด\n");

for (let i = 0; i < 3; i++) {
  let line = '';

  for (let j = 0; j <= i; j++) {
    line += '*';
  }

  console.log(line);
}


for (let i = 3; i > 0; i--) {
  let line = "";

  for (let j = 0; j < 3 - i; j++) {
    line += " ";
  }

  for (let j = 0; j < i; j++) {
    line += "*";
  }

  console.log(line);
}


for (let i = 0; i < 3; i++) {
  let line = "";

  for (let j = 0; j < 3 - i; j++) {
    line += " ";
  }

  for (let j = 0; j < i; j++) {
    line += "*";
  }

  console.log(line);
}

for (let i = 0; i < 3; i++) {
  let line = "";

  for (let j = 0; j < 3 - i; j++) {
    line += " ";
  }

  for (let j = 0; j <= i; j++) {
    line += "* ";
  }

  console.log(line);
}
