import { FieldArray } from 'formik';
import styled from 'styled-components';
import { FlexColumn, FlexRowCentered } from './styles/flex';

const initialValue = [
    'monday',
    'tuesday',
    'wednesday',
    'thursday',
    'friday',
    'saturday',
    'sunday'
];

const translation = {
    monday: 'Seg',
    tuesday: 'Ter',
    wednesday: 'Qua',
    thursday: 'Qui',
    friday: 'Sex',
    saturday: 'Sab',
    sunday: 'Dom'
};

export const pluralTranslation = {
    monday: 'Segundas',
    tuesday: 'Terças',
    wednesday: 'Quartas',
    thursday: 'Quintas',
    friday: 'Sextas',
    saturday: 'Sábados',
    sunday: 'Domingos'
};

const ButtonGroup = styled(FlexRowCentered)``;

const Button = styled.button`
    text-transform: uppercase;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;

    margin: 0;
    appearance: none;
    border: 1px solid #595cff;
    border-left: none;

    ${({ checked }) => `
        background: ${checked ? '#595cff' : 'white'};
        color: ${checked ? 'white' : '#595cff'};
    `};

    &:first-child {
        border-left: 1px solid #595cff !important;
    }
`;

const Label = styled.span`
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 150%;
    margin-bottom: 12px;

    letter-spacing: 0.01em;

    color: #6f7482;
`;

export const WeekDaySelect = ({ onChange: setWeek, value: week, label }) => {
    const toggle = ({ target }) => {
        const { name } = target;

        week.includes(name)
            ? setWeek(week.filter(weekday => weekday !== name))
            : setWeek([...week, name]);
    };

    if (label)
        return (
            <FlexColumn>
                {label && <Label>{label}</Label>}
                <ButtonGroup>
                    {initialValue.map(weekday => (
                        <Button
                            key={weekday}
                            name={weekday}
                            checked={week.includes(weekday)}
                            onClick={toggle}
                            type="button"
                        >
                            {translation[weekday]}
                        </Button>
                    ))}
                </ButtonGroup>
            </FlexColumn>
        );

    return (
        <ButtonGroup>
            {initialValue.map(weekday => (
                <Button
                    key={weekday}
                    name={weekday}
                    checked={week.includes(weekday)}
                    onClick={toggle}
                    type="button"
                >
                    {translation[weekday]}
                </Button>
            ))}
        </ButtonGroup>
    );
};
