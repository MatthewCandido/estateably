import React from "react";
import ReactDOM from "react-dom";

import TransactionView from "./transactions/transaction.view";
import TransactionViewModel from "./transactions/transaction.viewmodel";

const model = new TransactionViewModel();

ReactDOM.render(
    <React.StrictMode>
        <TransactionView vmodel={model} />
    </React.StrictMode>,
    document.getElementById('root')
);