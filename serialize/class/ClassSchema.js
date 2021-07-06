import * as Yup from 'yup';

export const ClassSchema = Yup.object().shape({
    name: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    category: Yup.string().required('Required'),
    initialDate: Yup.date().required('Required'),
    finalDate: Yup.date().required('Required'),
    initialTime: Yup.string().required('Required'),
    finalTime: Yup.string().required('Required')
});
