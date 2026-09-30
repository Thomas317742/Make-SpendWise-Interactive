// SpendWise Interactive Budget App

// Store budget information
let monthlyBudget = 30000;

// Store multiple expenses in an array
let expenses = [];

// Add an expense
function addExpense() {
    let expenseInput = document.getElementById("expense");
    let expenseAmount = Number(expenseInput.value);

    // Decision making
    if (expenseAmount <= 0) {
        alert("Please enter a valid expense amount.");
        return;
    }

    // Add expense to the array
    expenses.push(expenseAmount);

    // Clear input
    expenseInput.value = "";

    // Update dashboard
    updateDashboard();
}

// Calculate total expenses using a loop
function calculateTotalExpenses() {
    let total = 0;

    for (let expense of expenses) {
        total = total + expense;
    }

    return total;
}

// Update the dashboard
function updateDashboard() {
    let totalExpenses = calculateTotalExpenses();
    let remainingBalance = monthlyBudget - totalExpenses;

    // Update webpage
    document.getElementById("budget").textContent =
        "KSh " + monthlyBudget;

    document.getElementById("expenses").textContent =
        "KSh " + totalExpenses;

    document.getElementById("balance").textContent =
        "KSh " + remainingBalance;

    // Decision making
    let message = document.getElementById("message");

    if (remainingBalance < 0) {
        message.textContent = "Warning: You have exceeded your budget!";
    } else if (remainingBalance === 0) {
        message.textContent = "You have used your entire budget.";
    } else {
        message.textContent = "You are within your budget.";
    }

    // Display expense records using a loop
    let expenseList = document.getElementById("expense-list");

    expenseList.innerHTML = "";

    for (let expense of expenses) {
        let listItem = document.createElement("li");

        listItem.textContent = "KSh " + expense;

        expenseList.appendChild(listItem);
    }
}

// Starting dashboard
updateDashboard();

// Event listener
document.getElementById("addExpenseButton").addEventListener("click", addExpense);

// Starting dashboard
updateDashboard();