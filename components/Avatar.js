import styled from 'styled-components';

const Image = styled.img`
    width: 24px;
    height: 24px;

    border-radius: 50%;
    margin: 0 2px;
    border: 1px solid #e3e5e8;
`;

export const Avatar = ({ image, ...other }) => <Image src={image} {...other} />;
