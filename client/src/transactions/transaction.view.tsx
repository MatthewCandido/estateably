import React, { useState } from "react";
import {observer} from "mobx-react";
import ITransactionProps from "./transaction.view.props";
import Transaction from "./transaction.model";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from "material-ui/Table";
import NewTransactionModal from '../modals/newTransactionModal';
import SearchBarComponent from '../common/components/searchBar.component';
import RangeSearchComponent from '../common/components/rangeSearch.component';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import './Transaction.css'
import FormErrorComponent from '../common/components/formError.component';
@observer
class TransactionView extends React.Component<ITransactionProps, any> {  
    render() {
        const vmodel = this.props.vmodel;
        return <MuiThemeProvider>
            <div>
                <h1>Transactions</h1>
                <div>
                    <NewTransactionModal vmodel={vmodel} />
                </div>
                <div className="search-bar-container">
                    <div className="search-bar">
                        <Select
                            labelId="Field to search for"
                            id="select-search-field"
                            value={vmodel.searchField}
                            label="Field"
                            onChange={vmodel.handleSelectChange}
                            >
                            <MenuItem value={"category"}>Category</MenuItem>
                            <MenuItem value={"description"}>Description</MenuItem>
                            <MenuItem value={"value"}>Value</MenuItem>
                        </Select>

                        <SearchBarComponent render={vmodel.searchField !== "value"} id={vmodel.searchField} label={vmodel.searchField} width="25ch" onChange={vmodel.search} />
                        <RangeSearchComponent minValue={vmodel.minValue} maxValue={vmodel.maxValue} render={vmodel.searchField === "value"} id="value" label="Value" width="20ch" onChange={vmodel.search} />
                    </div>
                </div>
                
                <Table>
                    <TableHeader displaySelectAll={false}>
                        <TableRow>
                            <TableHeaderColumn>Category</TableHeaderColumn>
                            <TableHeaderColumn>Description</TableHeaderColumn>
                            <TableHeaderColumn>Value</TableHeaderColumn>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {vmodel.transactions?.map((transaction:Transaction, id: number) => 
                            <TableRow striped={false} displayBorder={false}>
                                <TableRowColumn>{transaction.category}</TableRowColumn>
                                <TableRowColumn>{transaction.description}</TableRowColumn>
                                <TableRowColumn>{transaction.value}</TableRowColumn>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </div>
        </MuiThemeProvider>
    }
}

export default TransactionView;