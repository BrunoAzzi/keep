import styled from 'styled-components';
import {
    FlexColumn,
    FlexRowCentered,
    FlexRowWrap
} from '@components/styles/flex';
import { Tag } from '@components/Tag';
import { Heading } from '@components/Title';
import { pluralTranslation } from '@components/WeekDaySelect';

const Section = styled.section`
    margin: 40px 0;
`;

const Name = styled.span`
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 22px;
`;

const Avatar = styled.img`
    width: 120px;
    height: 120px;
    border-radius: 50%;
    margin-right: 10px;
`;

const Detail = styled.span`
    font-style: normal;
    font-weight: 300;
    font-size: 12px;
    line-height: 16px;
    color: #807f80;
`;

const Wrapper = styled(FlexRowCentered)`
    margin: 33px 0;
`;

const TagGroup = styled(FlexRowWrap)`
    margin: 0 -5px 23px;
`;

const tagTextStyle = `
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 16px;
    text-align: center;
`;

const SkillTag = styled(Tag)`
    ${tagTextStyle};
    background-color: #99f0ac;
    color: black;
`;

const ScheduleTag = styled(Tag)`
    ${tagTextStyle};
    background-color: #dff7e4;
    color: black;
`;

export const TeacherProfile = ({ teacher }) => (
    <Section>
        <Wrapper>
            <Avatar src={teacher.avatar} />
            <FlexColumn>
                <Name>{teacher.name}</Name>
                <Detail>Perfil do Professor</Detail>
            </FlexColumn>
        </Wrapper>
        <Heading>Habilidades</Heading>
        <TagGroup>
            {teacher.instrumentList.map(instrument => (
                <SkillTag key={instrument}>{instrument}</SkillTag>
            ))}
        </TagGroup>
        <Heading>Dias da semana</Heading>
        <TagGroup>
            {teacher.workdays.map(weekday => (
                <ScheduleTag key={weekday}>
                    {pluralTranslation[weekday]}
                </ScheduleTag>
            ))}
        </TagGroup>
    </Section>
);
