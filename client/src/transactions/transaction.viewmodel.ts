import { observable, action, makeObservable, toJS } from "mobx";
import React from 'react';
import api from "../utils/api"
import Transaction from "./transaction.model";
import { SelectChangeEvent } from '@mui/material/Select';

class TransactionViewModel {
    @observable transactions?: Array<Transaction>;
    @observable searchField: string = "category";
    @observable minValue: string = "0";
    @observable maxValue: string = Number.MAX_SAFE_INTEGER.toString();

    constructor() {
        makeObservable(this);
        this.load();
    }

    @action
    public search = async (e: Event) => {
        const field:string = (<HTMLInputElement>e.target).id;
        const v:string = (<HTMLInputElement>e.target).value;
        if (!["min-value", "max-value"].includes(field)) {
            if (!v) {
                this.transactions = await (await api.get("/transactions")).data;
            } else {
                api.get(`/transactions/search/${field}/${v}`).then( (response) => {
                    this.transactions = response.data;
                }, error => {
                    this.transactions = new Array<Transaction>();
                })
            }
        } else {
            if (field === "min-value") {
                this.minValue = v;
            } else {
                this.maxValue = v;
            }
            api.get(`transactions/search/value/${this.minValue || 0}/${this.maxValue || Number.MAX_SAFE_INTEGER.toString()}`).then( (response) => {
                this.transactions = response.data;
            }, error => {
                this.transactions = new Array<Transaction>();
            })
        }      
    }

    @action
    public handleSelectChange = (event: SelectChangeEvent) => {
        this.searchField = event.target.value;
    };

    @action
    public save = async (transaction: {category: string, description: string, value: number}) => {
        new Promise( async () => {
            this.transactions = await (await api.post("/transactions", JSON.stringify(transaction), {headers: {"Content-Type": "application/json"}})).data;
        })     
    }
    
    @action
    public load = async () => {
        this.transactions = await (await api.get("/transactions")).data;
    }
    
}

export default TransactionViewModel;