import ISearchBarComponentProps from "./searchBar.component.props";
import TextField from "@mui/material/TextField";

function RangeSearchComponent(props: ISearchBarComponentProps) {
    if (!props.render) {
        return null;
    }

    return ( 
        <div>
            <TextField
                label="Min value"
                id="min-value"
                sx={{ m: 1, width: props.width }}
                onChange={props.onChange}
                value={props.minValue}
            />
            
            <TextField
                label={"Max value"}
                id="max-value"
                sx={{ m: 1, width: props.width }}
                onChange={props.onChange}
                value={props.maxValue}
            />
        </div>
        
    )
}

export default RangeSearchComponent;