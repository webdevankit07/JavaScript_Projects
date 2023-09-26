const transactionFormEl = document.getElementById('transactionForm');
const textEl = document.getElementById('text');
const amountEl = document.getElementById('amount');
let isUpDate = false;
let tid;


const renderTransactions = () => {
    const transactionsContainerEl = document.querySelector(".transactions");
    const netAmountEl = document.getElementById("netAmount");
    const earningEl = document.getElementById("earning");
    const expenseEl = document.getElementById("expense");

    const transactions = state.transactions;

    let earning = 0;
    let expense = 0;
    let net = 0;

    transactionsContainerEl.innerHTML = "";
    transactions.forEach((transaction) => {
        const{id, amount, text, type} = transaction;
        const isCredit = type === "credit" ? true : false ;
        const sign = isCredit ? "+" : "-";
        const letterSign = isCredit ? "C" : "D";

        const transactionEl = `
            <div class="transaction" id="${id}">
                <div class="content" onclick="showEdit(${id})">
                    <div class="left">
                        <p>${text}</p>
                        <p>${sign} ₹ ${amount}</p>
                    </div>
                    <div class="status ${type}">${letterSign}</div>
                </div>
                <div class="lower">
                    <div class="icon" onclick="handleUpdate(${id})">
                        <img src="./icons/pen.svg" alt="pen" id="pen" />
                    </div>
                    <div class="icon" onclick="handleDelete(${id})">
                        <img src="./icons/trash.svg" alt="trash" id="trash" />
                    </div>
                </div>
            </div>
        `

        earning += isCredit ? amount : 0;
        expense += !isCredit ? amount : 0;
        net = earning - expense;

        transactionsContainerEl.insertAdjacentHTML('afterbegin', transactionEl);
    })
    netAmountEl.innerHTML = `₹ ${net}`;
    earningEl.innerHTML = `₹ ${earning}`;
    expenseEl.innerHTML = `₹ ${expense}`;
};










const state = {
    earning : 0,
    expense : 0,
    net     : 0,
    transactions : [
        {
            id : 0,
            text : "Example",
            amount : 10,
            type : "credit",
        }
    ]
}

const addTransaction = (e) => {
    e.preventDefault();

    const isEarn = e.submitter.id === "earnBtn" ? true : false ;
    const formData = new FormData(transactionFormEl);
    const tData = {};

    formData.forEach((value,key) => {
        tData[key] = value;
    })

    const {text, amount} = tData;
    const transaction  = {
        id : isUpDate ? tid : Math.floor(Math.random()*1000),
        text : text,
        amount : +amount,
        type : isEarn ? "credit" : "debit",
    }
    if(isUpDate){
        const tIndex = state.transactions.findIndex(t => t.id === tid)
        state.transactions[tIndex] = transaction;
        isUpDate = false;
        tid = null;
        textEl.classList.remove('edit');
        amountEl.classList.remove('edit');
    }
    else{
        state.transactions.push(transaction);
    }
    renderTransactions();
}
renderTransactions();
transactionFormEl.addEventListener('submit', addTransaction);


const showEdit = (id) => {
    const selectedTransaction = document.getElementById(id);
    const lowerEl = selectedTransaction.querySelector('.lower')
    lowerEl.classList.toggle("showTransaction");
}

const handleUpdate = (id) => {
    const upDateTransation = state.transactions.find(t => t.id === id);
    const {text,amount} = upDateTransation;

    textEl.value = text;
    amountEl.value = amount;
    textEl.classList.add('edit');
    amountEl.classList.add('edit');
    
    isUpDate = true;
    tid = id;
}


const handleDelete = (id) => {
    const filteredTransaction = state.transactions.filter(t => t.id !== id);
    state.transactions = filteredTransaction;
    renderTransactions();
}