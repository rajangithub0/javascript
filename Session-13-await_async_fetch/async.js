async function checkAge(age){
    if(age>=18){
        return "valid";
    }else{
        return "not valid"
    }
}

console.log(checkAge(13));
console.log(checkAge(45));
checkAge(25)
checkAge(12)
.then(function(resp){console.log(resp);})
.catch(function(err){console.log(err);})