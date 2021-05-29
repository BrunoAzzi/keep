import styled from 'styled-components';

const Base = styled.div`
    height: 8px;
    width: 100%;
    border-radius: 10px;
`;

const Wrapper = styled(Base)`
    background-color: #e6e6e6;
`;

const Progress = styled(Base)`
    height: 100%;
    background-color: #595cff;

    ${({ progress }) => progress && `width: ${progress}%;`};
`;

export const ProgressBar = ({ progress }) => (
    <Wrapper>
        <Progress progress={progress} />
    </Wrapper>
);
