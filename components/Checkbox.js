import { Field } from 'formik';
import styled from 'styled-components';

const size = '18px';

const Label = styled.span`
    margin-left: 12px;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;

    margin: 24px 6px;
`;

const Input = styled(Field)`
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
    margin: 0;
`;

const Checkmark = styled.span`
    position: absolute;
    top: 0;
    left: 0;
    height: ${size};
    width: ${size};
    background-color: #eee;
`;

const Wrapper = styled.label`
    display: block;
    position: relative;
    padding-left: ${size};
    margin-bottom: 12px;
    cursor: pointer;
    user-select: none;

    :hover ${Input} ~ ${Checkmark} {
        background-color: #ccc;
    }

    /* When the checkbox is checked, add a blue background */
    ${Input}:checked ~ ${Checkmark} {
        background-color: #595cff;
    }

    /* Create the checkmark/indicator (hidden when not checked) */
    ${Checkmark}:after {
        content: '';
        position: absolute;
        display: none;
    }

    /* Show the checkmark when checked */
    ${Input}:checked ~ ${Checkmark}:after {
        display: block;
    }

    /* Style the checkmark/indicator */
    ${Checkmark}:after {
        left: 6px;
        top: 1px;
        width: 3px;
        height: 10px;
        border: solid white;
        border-width: 0 3px 3px 0;
        transform: rotate(45deg);
    }
`;

export const Checkbox = ({ label, ...other }) => (
    <Wrapper>
        {label && <Label>{label}</Label>}
        <Input type="checkbox" {...other} />
        <Checkmark />
    </Wrapper>
);
