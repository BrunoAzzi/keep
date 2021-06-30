import styled from 'styled-components';
import {
    FlexColumn,
    FlexRowCentered,
    FlexRowCenteredSpaceBetween
} from './styles/flex';
import AddIcon from '../public/plus-circle.svg';
import SearchIcon from '../public/images/search.svg';
import { Input } from './Input';
import { useState } from 'react';

const inputMargin = `margin: 0 4px;`;

const SearchInput = styled(Input)`
    ${inputMargin}
    box-shadow: 0px 100px 80px rgba(0, 0, 0, 0.02),
        0px 41.7776px 33.4221px rgba(0, 0, 0, 0.0143771),
        0px 22.3363px 17.869px rgba(0, 0, 0, 0.0119221),
        0px 12.5216px 10.0172px rgba(0, 0, 0, 0.01),
        0px 6.6501px 5.32008px rgba(0, 0, 0, 0.00807786),
        0px 2.76726px 2.21381px rgba(0, 0, 0, 0.00562291);
    border-radius: 8px;

    background: url(/images/search.svg) no-repeat scroll 95% 10px;
    padding-right: 30px;
`;

const buttonBase = `
    ${inputMargin}
    cursor: pointer;
`;

const AddButton = styled(AddIcon)`
    ${buttonBase}
    width: 16px;
    height: 16px;
    color: #595cff;
`;

const SearchButton = styled(SearchIcon)`
    ${buttonBase}
`;

export const Card = styled.div`
    background: white;
    flex-direction: column;
    padding: 32px;
    box-sizing: border-box;
    display: flex;
    box-shadow: 0px 4px 10px rgba(196, 196, 196, 0.25);
    border-radius: 4px;
    background: #fafafa;

    ${({ footer }) => footer && `border-radius: 4px 4px 0px 0px;`}
`;

export const CardTitle = styled.h2`
    font-weight: 600;
    font-size: 16px;
    line-height: 28px;

    color: #121212;
`;

const Description = styled.span`
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 20px;
    color: ;

    ${({ highlight }) => `color: ${highlight ? '#595CFF' : '#b3b3b3'};`}
`;

const Wrapper = styled(FlexColumn)`
    margin-bottom: 20px;
`;

export const CardHeader = ({
    title,
    total,
    label = 'items',
    selected,
    onAddClick,
    onSearchChange
}) => {
    const [open, setOpen] = useState(false);

    return (
        <Wrapper>
            <FlexRowCenteredSpaceBetween>
                <CardTitle>{title}</CardTitle>
                <FlexRowCentered>
                    {!open && <SearchButton onClick={() => setOpen(true)} />}
                    {open && (
                        <SearchInput
                            autoFocus
                            onBlur={() => setOpen(false)}
                            onChange={onSearchChange}
                        />
                    )}
                    <AddButton onClick={onAddClick} />
                </FlexRowCentered>
            </FlexRowCenteredSpaceBetween>
            {total && (
                <FlexRowCenteredSpaceBetween>
                    <Description>
                        {total} {label}
                    </Description>
                    {selected && (
                        <>
                            <Description> | </Description>
                            <Description highlight>
                                {selected} selecionados
                            </Description>
                        </>
                    )}
                </FlexRowCenteredSpaceBetween>
            )}
        </Wrapper>
    );
};

export const CardFooter = styled(Card)`
    background-color: #f5f6ff;
    border-top: 4px solid #595cff;
    border-radius: 0px 0px 4px 4px;
    padding 25px 26px;
`;
