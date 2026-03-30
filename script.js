async function loadTicker(){
  let res = await fetch("https://api.exchangerate-api.com/v4/latest/USD");
  let data = await res.json();

  document.getElementById("usdInr").innerText = data.rates.INR;
  document.getElementById("usdEur").innerText = data.rates.EUR;
  document.getElementById("usdJpy").innerText = data.rates.JPY; 
  document.getElementById("usdRub").innerText = data.rates.RUB; 
  document.getElementById("usdYuan").innerText = data.rates.YUAN; 
}

async function convert(){
  let amt = document.getElementById("amount").value;
  let from = document.getElementById("from").value;
  let to = document.getElementById("to").value;

  if(!amt){
    alert("Enter amount");
    return;
  }

  let res = await fetch(`https://api.exchangerate-api.com/v4/latest/${from}`);
  let data = await res.json();

  let rate = data.rates[to];
  let result = amt * rate;

  document.getElementById("result").innerText =
    `${amt} ${from} = ${result.toFixed(2)} ${to}`;
}

function swap(){
  let from = document.getElementById("from");
  let to = document.getElementById("to");

  let temp = from.value;
  from.value = to.value;
  to.value = temp;
}

// Load ticker on start
loadTicker();