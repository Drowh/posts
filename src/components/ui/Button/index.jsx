import * as SC from './styles'

export const Button = ({ children, ...props }) => {
    return (
        <SC.Button {...props}>
            {children}
        </SC.Button>
    );
};
