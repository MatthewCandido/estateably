import React from "react";
import {observer} from "mobx-react";
import ITransactionProps from "./transaction.view.props";
import Transaction from "./transaction.model";

@observer
class TransactionView extends React.Component<ITransactionProps, any> {  
    render() {
        const vmodel = this.props.vmodel;
        return <div>
            {vmodel.transactions?.map((transaction:Transaction) => <span>{transaction.description}</span>)}
        </div>
    }
}

export default TransactionView;