import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import React from 'react';
import ITransactionProps from '../transactions/transaction.view.props';
import FormErrorComponent from '../common/components/formError.component';

function NewTransactionModal(props: ITransactionProps) {
    const vmodel = props.vmodel;
    const [open, setOpen] = React.useState(false);
    const [transaction, setTransaction] = React.useState({category: 'none', description: '', value: 0});
    const [errorMessages, setErrorMessages] = React.useState([{ innerHTML: ""}]);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setTransaction({category: 'none', description: '', value: 0})
        setErrorMessages([{ innerHTML: ""}])
        setOpen(false);
    };

    const handleSave = async () => {
        await validateFields();
        if (!errorMessages.length) {
            await vmodel.save(transaction);
            handleClose();
        }  
    }

    const validateFields = () => {
        new Promise( (resolve) => {
            const formErrors: InnerHTML[] = [];
            if (transaction.category === 'none') {
                const category: InnerHTML = { innerHTML: "Please select a category"};
                formErrors.push(category);
            }

            if (transaction.description === '') {
                const description: InnerHTML = { innerHTML: "Please fill in the description field."};
                formErrors.push(description);
            }

            if (transaction.value === 0) {
                const value: InnerHTML = { innerHTML: "Please fill in the value field."};
                formErrors.push(value);
            }

            setErrorMessages(formErrors);
            resolve(true);
        })
    }

    const handleChange = (event: any) => {
        const fieldName = event.target.id ? event.target.id : event.target.name;
        switch(fieldName) {
            case "category":
                setTransaction({category: event.target.value, description: transaction.description, value: transaction.value});
                break;
            case "description":
                setTransaction({category: transaction.category, description: event.target.value, value: transaction.value});
                break;
            case "value":
                setTransaction({category: transaction.category, description: transaction.description, value: Number(event.target.value)});
                break;
        }   
    }

    const handleBlur = (event: any) => {
        validateFields();
    }

    return ( 
        <div>
            <Button variant="outlined" onClick={handleClickOpen}>
                New Transaction
            </Button>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>New Transaction</DialogTitle>
                <DialogContent>
                <DialogContentText>
                    To create a new transaction, please fill in the fields bellow.
                </DialogContentText>

                <FormErrorComponent render={true} messages={errorMessages} />

                <Select
                    labelId="Category"
                    name="category"
                    value={transaction.category}
                    label="Category"
                    onChange={handleChange}
                    onBlur={handleBlur}
                >
                    <MenuItem value={"none"}>Select a category</MenuItem>
                    <MenuItem value={"salary"}>Salary</MenuItem>
                    <MenuItem value={"food"}>Food</MenuItem>
                    <MenuItem value={"transport"}>Transport</MenuItem>
                    <MenuItem value={"house"}>House</MenuItem>
                    <MenuItem value={"other"}>Other</MenuItem>
                </Select>
                <TextField
                    margin="dense"
                    id="description"
                    label="Description"
                    type="text"
                    fullWidth
                    variant="standard"
                    value={transaction.description}
                    onChange={handleChange}
                    onBlur={handleBlur}
                />
                <TextField
                    margin="dense"
                    id="value"
                    label="Value"
                    type="number"
                    fullWidth
                    variant="standard"
                    value={transaction.value}
                    onChange={handleChange}
                    onBlur={handleBlur}
                />
                </DialogContent>
                <DialogActions>
                <Button onClick={handleClose}>Cancel</Button>
                <Button onClick={handleSave}>Save</Button>
                </DialogActions>
            </Dialog>
            
        </div>
    )
}

export default NewTransactionModal;