import React from 'react';
import {Link} from 'react-router-dom';
import {Popover, PopoverHeader, PopoverBody} from 'reactstrap';

interface IProps {
    isOpen: boolean;
    target: string;
    toggle: any;
    title: string;
    description: string;
    link?: string;
}

const Popup = (props: IProps) => {
    return (
        <div>
            <Popover placement="bottom" isOpen={props.isOpen} target={props.target} toggle={props.toggle}>
                <PopoverHeader>
                    <span style={{fontSize: 20, fontWeight: 800}}>{props.title || ''}</span>
                </PopoverHeader>
                <PopoverBody>
                    <p style={{fontSize: 16}}>{props.description}</p>
                    {props.link && (
                        <p className="mt-2 mb-0">
                            Find out more <Link to={props.link}>here</Link>
                        </p>
                    )}
                </PopoverBody>
            </Popover>
        </div>
    );
};

export default Popup;
