import * as Yup from 'yup';

const DemographicDataSchema = {
    schoolName: Yup.string().required('Required'),
    scholarityLevel: Yup.string().required('Required'),
    period: Yup.string().required('Required'),
    shirtSize: Yup.string().required('Required'),
    desiredInstrument: Yup.string().required('Required'),
    scholarityRegistryInfo: Yup.string().required('Required')
};

const SocioeconomicDataSchema = {
    familyIncome: Yup.string().required('Required'),
    parentSalaryLevel: Yup.string().required('Required'),
    isParentWorking: Yup.string().required('Required'),
    isParentReceivingPension: Yup.string().required('Required'),
    pensionDescription: Yup.string().required('Required'),
    typeOfResidence: Yup.string().required('Required'),
    rentValue: Yup.number().required('Required')
};

const PersonalDataSchema = {
    name: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    isActive: Yup.boolean().required('Required'),
    number: Yup.string().required('Required'),
    birthDate: Yup.date().required('Required'),
    age: Yup.string().required('Required'),
    address: Yup.string().required('Required'),
    phonenumber: Yup.string().required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),
    parentName: Yup.string().required('Required')
};

export const StudentSchema = Yup.object().shape({
    ...PersonalDataSchema,
    ...DemographicDataSchema,
    ...SocioeconomicDataSchema
});
