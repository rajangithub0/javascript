let doc = new XMLHttpRequest();

doc.open('GET','https://jsonplaceholder.typicode.com/users/1')

doc.onload=function(){
    if(doc.status==200){
        let details=doc.responseText;
        console.log(details);
        let show= JSON.parse(details);
        for(let keys in show){
            let value=show[keys]
            console.log(keys+ " : "+value);
        }
    }else{
        console.log("server is failed ");
    }
}

doc.send();