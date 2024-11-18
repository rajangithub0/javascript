const data = "hello World";

try {
  const obj = JSON.parse(data);
  console.log(obj);
} catch (error) {
  console.log(error.message);
}
