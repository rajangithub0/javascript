function checkAge(age) {
  if (age < 18) {
    throw new Error("not valid for age");
  }
  console.log("valid for age for give vote");
}

try {
  checkAge(10);
} catch (error) {
  console.log(`error while ouccer checking the age`);
  console.log(error.message);
}
