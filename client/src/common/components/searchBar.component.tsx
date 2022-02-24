import ISearchBarComponentProps from "./searchBar.component.props";
import TextField from "@mui/material/TextField";
import InputAdornment from '@mui/material/InputAdornment';
import Box from '@mui/material/Box';

function SearchBarComponent(props: ISearchBarComponentProps) {
    if (!props.render) {
        return null;
    }
    
    return ( 
        <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
            <div>
            <TextField
                label={props.label}
                id={props.id}
                sx={{ m: 1, width: props.width }}
                // InputProps={{
                //     endAdornment: <InputAdornment position="start">kg</InputAdornment>,
                // }}
                onChange={props.onChange}
            />
            </div>
        </Box>
    )
}

export default SearchBarComponent;