async function fetchExchangeRates() {
    const apiKey = 'YOUR_API_KEY'; // API кілтін енгізіңіз
    const response = await fetch(`https://api.exchangerate-api.com/v4/latest/USD?access_key=${apiKey}`);
    const data = await response.json();
    return data.rates;
}

document.addEventListener('DOMContentLoaded', async function () {
    const rates = await fetchExchangeRates();
    const kztRates = [rates.KZT]; // KZT бағамын алу

    const data = {
        labels: ['1 күн', '2 күн', '3 күн', '4 күн', '5 күн', '6 күн', '7 күн'],
        datasets: [{
            label: 'USD to KZT',
            data: kztRates,
            borderColor: '#007bff',
            backgroundColor: 'rgba(0, 123, 255, 0.1)',
            fill: true,
            tension: 0.4
        }]
    };

    const config = {
        type: 'line',
        data: data,
        options: {
            responsive: true,
            plugins: {
                title: {
                    display: true,
                    text: 'USD to KZT бағамы (соңғы 7 күн)'
                }
            },
            scales: {
                x: {
                    title: {
                        display: true,
                        text: 'Уақыт'
                    }
                },
                y: {
                    title: {
                        display: true,
                        text: 'Бағам (KZT)'
                    }
                }
            }
        }
    };

    const ctx = document.getElementById('currencyChart').getContext('2d');
    new Chart(ctx, config);
});











const rates = {
    "USD": 1, "AED": 3.67, "AFN": 73.55, "ALL": 95.66, "AMD": 396.51, "ANG": 1.79, "AOA": 920.5, "ARS": 1056.88,
    "AUD": 1.59, "AWG": 1.79, "AZN": 1.7, "BAM": 1.88, "BBD": 2, "BDT": 121.59, "BGN": 1.88, "BHD": 0.376,
    "BIF": 2947.91, "BMD": 1, "BND": 1.35, "BOB": 6.93, "BRL": 5.77, "BSD": 1, "BTN": 86.97, "BWP": 13.88,
    "BYN": 3.29, "BZD": 2, "CAD": 1.43, "CDF": 2856.14, "CHF": 0.913, "CLP": 961.61, "CNY": 7.31, "COP": 4135.99,
    "CRC": 507.46, "CUP": 24, "CVE": 106.26, "CZK": 24.15, "DJF": 177.72, "DKK": 7.19, "DOP": 62.08, "DZD": 135.51,
    "EGP": 50.62, "ERN": 15, "ETB": 126.99, "EUR": 0.964, "FJD": 2.31, "FKP": 0.804, "FOK": 7.19, "GBP": 0.804,
    "GEL": 2.81, "GGP": 0.804, "GHS": 15.45, "GIP": 0.804, "GMD": 72.66, "GNF": 8637.25, "GTQ": 7.73, "GYD": 209.6,
    "HKD": 7.79, "HNL": 25.53, "HRK": 7.26, "HTG": 131.04, "HUF": 387.61, "IDR": 16393, "ILS": 3.59, "IMP": 0.804,
    "INR": 86.97, "IQD": 1310.69, "IRR": 41985.92, "ISK": 141.42, "JEP": 0.804, "JMD": 157.72, "JOD": 0.709,
    "JPY": 154.23, "KES": 129.18, "KGS": 87.42, "KHR": 4012.04, "KID": 1.59, "KMF": 474.09, "KRW": 1453.08,
    "KWD": 0.309, "KYD": 0.833, "KZT": 504.18, "LAK": 21841.6, "LBP": 89500, "LKR": 297.05, "LRD": 199.11,
    "LSL": 18.51, "LYD": 4.93, "MAD": 10, "MDL": 18.85, "MGA": 4684.11, "MKD": 59.49, "MMK": 2101.31,
    "MNT": 3462.73, "MOP": 8.02, "MRU": 39.92, "MUR": 46.75, "MVR": 15.47, "MWK": 1740.85, "MXN": 20.53,
    "MYR": 4.47, "MZN": 63.96, "NAD": 18.51, "NGN": 1504.06, "NIO": 36.83, "NOK": 11.27, "NPR": 139.15,
    "NZD": 1.77, "OMR": 0.384, "PAB": 1, "PEN": 3.71, "PGK": 4.02, "PHP": 58.23, "PKR": 279.02, "PLN": 4.02,
    "PYG": 7903.57, "QAR": 3.64, "RON": 4.79, "RSD": 112.81, "RUB": 94.16, "RWF": 1402.38, "SAR": 3.75,
    "SBD": 8.65, "SCR": 14.49, "SDG": 544.98, "SEK": 10.88, "SGD": 1.35, "SHP": 0.804, "SLE": 22.88,
    "SLL": 22877.18, "SOS": 572.19, "SRD": 35.19, "SSP": 4350.78, "STN": 23.61, "SYP": 12982.99, "SZL": 18.51,
    "THB": 34.09, "TJS": 10.92, "TMT": 3.5, "TND": 3.19, "TOP": 2.4, "TRY": 36.14, "TTD": 6.77, "TVD": 1.59,
    "TWD": 32.87, "TZS": 2582.17, "UAH": 41.79, "UGX": 3681.22, "UYU": 43.36, "UZS": 12992.81, "VES": 61.35,
    "VND": 25560.08, "VUV": 123.96, "WST": 2.83, "XAF": 632.11, "XCD": 2.7, "XDR": 0.765, "XOF": 632.11,
    "XPF": 114.99, "YER": 248.47, "ZAR": 18.5, "ZMW": 28.1, "ZWL": 26.42
};

const fromCurrencySelect = document.getElementById('fromCurrency');
const toCurrencySelect = document.getElementById('toCurrency');
const amountInput = document.getElementById('amount');
const convertBtn = document.getElementById('convertBtn');
const resultDiv = document.getElementById('result');

// Заполняем выпадающие списки валют
function populateCurrencies() {
    for (const currency in rates) {
        const option1 = document.createElement('option');
        option1.value = currency;
        option1.textContent = currency;
        fromCurrencySelect.appendChild(option1);

        const option2 = document.createElement('option');
        option2.value = currency;
        option2.textContent = currency;
        toCurrencySelect.appendChild(option2);
    }
}

// Конвертация валют
function convertCurrency() {
    const amount = parseFloat(amountInput.value);
    const fromCurrency = fromCurrencySelect.value;
    const toCurrency = toCurrencySelect.value;



    const convertedAmount = (amount / rates[fromCurrency]) * rates[toCurrency];
    resultDiv.textContent = `${amount} ${fromCurrency} = ${convertedAmount.toFixed(2)} ${toCurrency}`;
}


populateCurrencies();
convertBtn.addEventListener('click', convertCurrency);