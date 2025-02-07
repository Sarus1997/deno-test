const list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(list);

const list2 = list.map((item) => item * 2);

console.log(list2);

const list3 = list.filter((item) => item % 2 === 0);

console.log(list3);

const list4 = list.reduce((acc, item) => acc + item, 0);

console.log(list4);