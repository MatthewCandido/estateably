import React from 'react';

interface ISearchBarComponentProps {
    id: string,
    label: string,
    width: string,
    onChange: any,
    render: boolean,
    minValue?: string,
    maxValue?: string
}

export default ISearchBarComponentProps;