import styled from 'styled-components';
import { ImageLayout } from '../components/Layout/ImageLayout';

const Description = styled.span`
    width: 100%;
    text-align: left;
    display: block;
    font-size: 20px;
    line-height: 180%;
`;

const Title = styled(Description)`
    font-weight: bold;
`;

const Input = styled.input`
    appearence: none;
    background: #ffffff;
    border: 0.5px solid #c4c4c4;
    box-sizing: border-box;
    border-radius: 4px;
    padding: 11px 13px;
    margin: 10px 0;
    width: 100%;
`;

const SignupPage = () => (
    <ImageLayout>
        <Title>Log in</Title>
        <Input placeholder="email" />
        <Input placeholder="senha" />
    </ImageLayout>
);

export default SignupPage;
