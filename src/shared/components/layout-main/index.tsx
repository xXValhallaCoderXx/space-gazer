import React from 'react';
import {NavBar, SideNav} from 'shared/components';

interface IProps {
    children: any;
    nav?: boolean;
}

const LayoutMainContainer = (props: IProps) => {
    const {children, nav} = props;
    return (
        <div style={{overflowX: 'hidden'}}>
            {nav && <SideNav />}
            <div>{children}</div>
        </div>
    );
};

export default LayoutMainContainer;

// backgroundColor: "red",
// height: 80,
// position: "fixed",
// top: 0
