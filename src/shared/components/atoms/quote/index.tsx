import React from 'react';

interface IProps {
    message: string;
    author: string;
}

const Quote = (props: IProps) => {
    return (
        <div>
            {props.message}
            {props.author}
        </div>
    );
};

export default Quote;
