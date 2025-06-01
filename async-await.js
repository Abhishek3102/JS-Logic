function sum(a, b) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(a + b);
      resolve(200);
    }, 3000);
  });
}

// async function sum({await (5, 6)});
// console.log(result);

async function getSum() {
  const result = await sum(5, 6);
  console.log(result);
}

getSum();
