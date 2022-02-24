import React from "react";
import {render} from "react-dom";

import TransactionView from "./transactions/transaction.view";
import TransactionViewModel from "./transactions/transaction.viewmodel";

const model = new TransactionViewModel();

render(
    <TransactionView vmodel={model} />,
    document.getElementById('root')
);