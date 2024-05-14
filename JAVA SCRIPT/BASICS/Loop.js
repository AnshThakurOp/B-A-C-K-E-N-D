for (let i = 1; i < 10; i++) {
  console.log(i);
}

let data = {
  Name: "Ansh Singh",
  Gender: "Male",
  Age: 18,
};
for (const key in data) {
  const ele = data[key];
  console.log(ele);
}
