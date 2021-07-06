import styled, { css } from 'styled-components';
import { Field } from 'formik';
import { FlexColumn, FlexRowCentered } from './styles/flex';

const BaseTextarea = props => <Field as="textarea" {...props} />;

const inputStyle = css`
    appearence: none;
    background: #ffffff;
    border: 0.5px solid #c4c4c4;
    box-sizing: border-box;
    border-radius: 4px;
    padding: 11px 13px;
    width: 100%;
    margin: 0;
    margin-bottom: 16px;

    ${({ error }) => `
        border-color: ${error ? 'red' : '#6f7482'};
        color: ${error ? 'red' : '#6f7482'};
    `}
`;

const TextArea = styled(BaseTextarea)`
    ${inputStyle}
`;

const Label = styled.span`
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 150%;
    margin-bottom: 2px;

    letter-spacing: 0.01em;

    ${({ error }) => `color: ${error ? 'red' : '#6f7482'};`}
`;

const BaseInput = styled(Field)`
    ${inputStyle}
`;

const InputWithMargin = styled(BaseInput)`
    margin: 10px 0;
`;

const TextAreaWithMargin = styled(TextArea)`
    margin: 10px 0;
`;

export const InputRow = styled(FlexRowCentered)`
    flex: 1 1 auto;
    margin: 0 -12px;

    ${FlexColumn} {
        flex: 1 1 50%;
        margin-right: 12px;
        margin-left: 12px;
    }
`;

export const Input = ({ label, error, touched, as, ...other }) => {
    if (label) {
        return (
            <FlexColumn>
                <Label error={error && touched}>{label}</Label>
                {as === 'textarea' ? (
                    <TextArea error={error && touched} {...other} />
                ) : (
                    <BaseInput error={error && touched} {...other} />
                )}
            </FlexColumn>
        );
    } else {
        return as === 'textarea' ? (
            <TextAreaWithMargin error={error && touched} {...other} />
        ) : (
            <InputWithMargin error={error && touched} {...other} />
        );
    }
};
