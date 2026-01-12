const baseUrl = "http://localhost:8080/transfer";

function depositWithdraw() {
    let acc = document.getElementById("dwAcc").value;
    let amt = document.getElementById("dwAmt").value;
    let type = document.getElementById("dwType").value;

    fetch(baseUrl + "/depositwithdraw/" + acc, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            balance: amt,
            check: type
        })
    })
    .then(res => {
        if (!res.ok) {
            return res.text().then(msg => { throw msg; });
        }
        return res.text();
    })
    .then(() => {
        document.getElementById("dwResult").innerText = "✅ Transaction Successful";
    })
    .catch(err => {
        document.getElementById("dwResult").innerText = "❌ " + err;
    });
}

function checkBalance() {
    let acc = document.getElementById("balAcc").value;

    fetch(baseUrl + "/checkbalance/" + acc)
    .then(res => {
        if (!res.ok) {
            return res.text().then(msg => { throw msg; });
        }
        return res.text();
    })
    .then(data => {
        document.getElementById("balResult").innerText = "Balance: ₹ " + data;
    })
    .catch(err => {
        document.getElementById("balResult").innerText = "❌ " + err;
    });
}

function transfer() {
    let a1 = document.getElementById("fromAcc").value;
    let a2 = document.getElementById("toAcc").value;
    let amt = document.getElementById("trAmt").value;

    fetch(baseUrl + "/transfer/" + a1 + "/" + a2 + "/" + amt)
    .then(res => {
        if (!res.ok) {
            return res.text().then(msg => { throw msg; });
        }
        return res.text();
    })
    .then(() => {
        document.getElementById("trResult").innerText = "✅ Transfer Successful";
    })
    .catch(err => {
        document.getElementById("trResult").innerText = "❌ " + err;
    });
}
