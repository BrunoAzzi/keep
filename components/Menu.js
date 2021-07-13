import { useState } from 'react';
import styled from 'styled-components';
import OutsideAlerter from 'hooks/useClickOutsideAlert';

const Carret = styled.span`
    font-size: 9px;
    padding-left: 16px;

    &:before {
        ${({ isOpen }) =>
            isOpen ? 'content: "\\25BC";' : 'content: "\\25B2";'}
    }
`;

const Wrapper = styled.div`
    user-select: none;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 16px 21px;

    font-size: 12px;
    line-height: 150%;
`;

const Drawer = styled.div`
    background: white;
    position: absolute;
    top: 100%;
    width: 100%;

    box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.1);
`;

export const MenuItem = styled.div`
    padding: 16px 21px;
    border-top: 1px solid #dedede;
`;

export const Menu = ({ header, children, ...other }) => {
    const [isOpen, setIsOpen] = useState(false);
    const close = () => setIsOpen(false);
    const toggle = () => setIsOpen(!isOpen);

    return (
        <OutsideAlerter onClick={close}>
            <Wrapper onClick={toggle} {...other}>
                {header}
                {isOpen && <Drawer>{children}</Drawer>}
            </Wrapper>
        </OutsideAlerter>
    );
};
