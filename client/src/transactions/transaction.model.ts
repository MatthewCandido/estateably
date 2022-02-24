import { observable, makeObservable } from 'mobx';
import {
    serialize,
    deserialize,
    serializable,
    createModelSchema,
    primitive
} from "serializr"

class Transaction {
    @serializable
    @observable _id: string = '';
    @serializable
    @observable category: string = '';
    @serializable
    @observable description: string = '';
    @serializable
    @observable value: number = 0;

    constructor(_id: string, type: string, description: string, value: number) {
        makeObservable(this);
        this.category = type;
        this.description = description;
        this.value = value;
        this._id = _id;

        createModelSchema(Transaction, {
            _id: primitive(),
            category: primitive(),
            description: primitive(),
            value: primitive()
        })
    }

    public serialize = () => {
        return serialize(this.toJson());
    }

    public deserialize = () => {
        return deserialize(Transaction, this.toJson());
    }

    private toJson = () => {
        return {
            "_id": this._id,
            "category": this.category,
            "description": this.description,
            "value": this.value
        }
    }
}

export default Transaction;