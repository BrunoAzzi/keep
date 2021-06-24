import faker from 'faker/locale/pt_BR';

const generateValue = () => faker.datatype.number({ min: 0, max: 1000 });

export const gaugeList = [
    {
        indicator: 'Estudantes',
        highlight: '#6f52ed',
        value: generateValue()
    },
    {
        indicator: 'Professores',
        highlight: '#FFCA32',
        value: generateValue()
    },
    {
        indicator: 'Frequência',
        highlight: '#21B8C7',
        value: generateValue()
    },
    {
        indicator: 'Desistentes',
        highlight: '#FF4C61',
        value: generateValue()
    },
    {
        indicator: 'Instrumentos',
        highlight: '#4CB8FF',
        value: generateValue()
    }
];
