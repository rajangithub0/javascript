let xhr=new XMLHttpRequest();

xhr.open('GET',"https://jsonplaceholder.typicode.com/users/1")

//write one call back to handle response

xhr.onload=function(){
    if(xhr.status==200){
        let details=xhr.responseText;
        console.log(details);
        const  object= JSON.parse(details);
        let html =''
        // for(let key in object){
        //     html+=`<p>${}  </p>`
        // }
        document.getElementById('userinfo').innerHTML=`
        <h1>name :${object.name}</h1>
        <h2>username:${object.username}</h2>
        <h2> city: ${object.address.city}</h2>
        <h2> wedsite :${object.website}</h2>
        <h3>company: ${object.company.name}`
        // console.log(xhr.responseText);
    }else{
        console.log(`request failed with stutes`,xhr.status);
    }
}

// a callback for error while 

xhr.onerror=function(){
    console.log(`request failed`);
}

xhr.send()