import * as Yup from 'yup';

const PersonalDataSchema = {
    name: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    isActive: Yup.boolean().required('Required'),
    birthDate: Yup.date().required('Required'),
    age: Yup.string().required('Required'),
    address: Yup.string().required('Required'),
    phonenumber: Yup.string().required('Required'),
    secondaryPhonenumber: Yup.string().required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),
    bloodType: Yup.string().required('Required'),
    civilState: Yup.string().required('Required'),
    scholarityLevel: Yup.string().required('Required'),
    childrenQuantity: Yup.string().required('Required'),
    major: Yup.string().required('Required'),
    curriculumLate: Yup.string().required('Required'),
    instrumentList: Yup.string().required('Required')
};

const BankDataSchema = {
    bankName: Yup.string().required('Required'),
    agency: Yup.string().required('Required'),
    account: Yup.string().required('Required'),
    accountType: Yup.string().required('Required'),
    pixKey: Yup.string().required('Required'),
    identifier: Yup.string().required('Required')
};

export const TeacherSchema = Yup.object().shape({
    ...PersonalDataSchema,
    ...BankDataSchema
});
