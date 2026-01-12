function saveCustomer(){
    fetch("http://localhost:8080/customer",{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify({
            cid: cid.value,
            name: cname.value
        })
    }).then(()=>alert("Customer Saved"));
}

function loadCustomer(){
    fetch("http://localhost:8080/customer")
    .then(r=>r.json())
    .then(data=>{
        let t="<tr><th>ID</th><th>Name</th></tr>";
        data.forEach(c=>{
            t+=`<tr><td>${c.cid}</td><td>${c.name}</td></tr>`;
        });
        custTable.innerHTML=t;
    });
}
