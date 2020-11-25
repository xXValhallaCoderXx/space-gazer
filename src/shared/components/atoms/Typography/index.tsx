import React from 'react';
const styles = require('./styles.module.scss');

const VARIANTS: any = {
    h1: 'h1',
    h2: 'h2',
    h3: 'h3',
    h4: 'h4',
    h5: 'h5',
    h6: 'h6',
    subheading1: 'h6',
    subheading2: 'h6',
    body1: 'p',
    body2: 'p',
    body3: 'p',
    title: 'h1',
};

interface IProps {
    variant: string;
    color?: string;
    children: any;
}

const Typography = ({variant, color, children, ...props}: IProps): any => {
    // If the variant exists in variantsMapping, we use it.
    // Otherwise, use p tag instead.
    const Component = variant ? VARIANTS[variant] : 'p';
    const handleStyles = () => {
        return styles[`typography--variant-${variant}`];
    };
    return (
        <Component className={handleStyles()} {...props}>
            {children}
        </Component>
    );
};

export default Typography;
