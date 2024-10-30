const students=[
    {
        id:101,
        name:"alex",
        cgpa:9
    },
    {
        id:102,
        name:"bod",
        cgpa:9
    }
]

for (let student of students){
    console.log("___________________________-");
    console.log(key+": "+student);
    // for(let key in student){
    //     console.log(key+" "+student[key]);
    // }
}