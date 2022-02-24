import IFormErrorComponentProps from "./formError.component.props";
import React from 'react';

function FormErrorComponent(props: IFormErrorComponentProps) {

    if (!props.render) {
        return null;
    }
    
    return ( 
        <div>
            {props.messages.map( (message, idx) => 
                <p style={ {color: "red"} } key={idx}>{message.innerHTML}</p>
            )}
        </div>
        
    )
}

export default FormErrorComponent;