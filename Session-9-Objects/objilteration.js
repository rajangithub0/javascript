const employee={
    id:`101`,
    name:"rajan",
    desigation:"software developer",
    department:"build software",
    salary:600000
}

//using iteration use for in loop
for (let key in employee){
    console.log(key+ " : "+employee[key]);
}