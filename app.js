const rates = {
    USD: {
        INR: 83,
        EUR: 0.92
    },

    INR: {
        USD: 0.012,
        EUR: 0.011
    },

    EUR: {
        USD: 1.08,
        INR: 90
    }
};


function convert() {

    let amount = document.getElementById("amount").value;
    let from = document.getElementById("from").value;
    let to = document.getElementById("to").value;

    if (amount === "" || amount <= 0) {
        amount = 1;
    }

    let result;

    if (from === to) {
        result = amount;
    } else {
        let rate = rates[from][to];
        result = amount * rate;
    }

    // Result দেখাবে
    document.getElementById("result").innerText =
        `${amount} ${from} = ${result.toFixed(2)} ${to}`;

    // Exchange rate দেখাবে
    let rateText;

    if (from === to) {
        rateText = `1 ${from} = 1 ${to}`;
    } else {
        rateText = `1 ${from} = ${rates[from][to]} ${to}`;
    }

    document.getElementById("rate").innerText = rateText;
}


// Form submit
document.querySelector("form").addEventListener("submit", function (event) {

    event.preventDefault();

    convert();

});