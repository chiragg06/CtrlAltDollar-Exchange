document.addEventListener('DOMContentLoaded', function() {
    const amount = document.getElementById('amount');
    const currency = document.getElementById('currency');
    const convert = document.getElementById('convert');
    const result = document.getElementById('result');

    const apiKey = "AsP05tCYQzgbK0l2Yy1BKQ==Wz69ci0aGw1VHKH6";
    const apiUrl = "https://api.api-ninjas.com/v1/exchangerate?pair=USD_";

    convert.addEventListener('click', () => {
        const amountTotal = parseFloat(amount.value); // Convert input to float
        const currencyTotal = currency.value;
        const url = apiUrl + currencyTotal;
        
        fetch(url, {
            headers: {
                'X-API-KEY': apiKey
            }
        })
        .then(response => response.json())
        .then(data => {
            const rate = data.exchange_rate;
            const resultPrice = amountTotal * rate;
            result.innerHTML = `${amountTotal} ${currencyTotal} = ${resultPrice.toFixed(2)} USD`;
        })
        .catch(error => {
            console.error('Request failed:', error);
            result.innerHTML = 'An error occurred.';
        });
    });
});
