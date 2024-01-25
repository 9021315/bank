// Variabelen
let balance = 1000; // Initiële saldo

// UI-elementen
const balanceElement = document.getElementById("balance");
const amountInput = document.getElementById("amount");
const resultElement = document.getElementById("result");

// Functie voor storten van geld
function deposit() {
    const amount = parseFloat(amountInput.value);
    if (isNaN(amount) || amount <= 0) {
        resultElement.textContent = "Voer een geldig bedrag in.";
        return;
    }

    balance += amount;
    updateUI();
    logTransaction(`Gestort: $${amount}`);
}

// Functie voor opnemen van geld
function withdraw() {
    const amount = parseFloat(amountInput.value);
    if (isNaN(amount) || amount <= 0 || amount > balance) {
        resultElement.textContent = "Ongeldige transactie. Controleer uw saldo en voer een geldig bedrag in.";
        return;
    }

    balance -= amount;
    updateUI();
    logTransaction(`Opgenomen: $${amount}`);
}

// Functie voor het bijwerken van de UI
function updateUI() {
    balanceElement.textContent = balance;
    amountInput.value = "";
    resultElement.textContent = "";
}

// Functie voor het bijhouden van transactiegeschiedenis
function logTransaction(transaction) {
    const transactionLog = document.createElement("p");
    transactionLog.textContent = transaction;

    const transactionContainer = document.getElementById("result-container");
    transactionContainer.appendChild(transactionLog);
}

// Eventlisteners
document.getElementById("amount").addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        deposit();
    }
});

document.getElementById("amount").addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        withdraw();
    }
});
