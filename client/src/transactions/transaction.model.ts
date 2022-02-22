import { observable } from 'mobx';
import {
    serialize,
    deserialize,
    ClazzOrModelSchema,
    serializable
} from "serializr"

class Transaction {
    @serializable
    @observable category: string = '';
    @serializable
    @observable description: string = '';
    @serializable
    @observable value: number = 0;

    constructor(type: string, description: string, value: number) {
        this.category = type;
        this.description = description;
        this.value = value;
    }

    public serialize = (json: JSON) => {
        return serialize(json);
    }

    public deserialize = (obj: ClazzOrModelSchema<unknown>, json: JSON) => {
        return deserialize(obj, json);
    }
}

export default Transaction;