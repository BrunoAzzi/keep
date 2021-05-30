import faker from 'faker/locale/pt_BR';
import fakerBr from 'faker-br';

const range = len => {
    const arr = [];
    for (let i = 0; i < len; i++) {
        arr.push(i);
    }
    return arr;
};

const newStudentList = createStudent => {
    const numberOfStudents = faker.datatype.number({ min: 0, max: 10 });
    const studentList = [];
    for (var i = 0; i < numberOfStudents; i++) {
        studentList.push(createStudent());
    }
    return studentList;
};

const newStudent = () => ({
    name: fakerBr.name.findName(),
    class: faker.commerce.department(),
    address: fakerBr.address.city(),
    status: Math.random() > 0.5 ? 'Em andamento' : 'Finalizado',
    endDate: faker.date.future()
});

const newClass = () => ({
    name: fakerBr.name.findName(),
    studentList: newStudentList(faker.image.avatar),
    progress: faker.datatype.number({ min: 0, max: 100 }),
    endDate: faker.date.future(),
    category: faker.commerce.product()
});

const newTeacher = () => ({
    name: fakerBr.name.findName(),
    class: faker.commerce.department(),
    address: fakerBr.address.city(),
    status: Math.random() > 0.66 ? 'Ativo' : 'Desativado',
    endDate: faker.date.future()
});

const makeCategoryList = length =>
    range(length).map(d => ({
        name: faker.commerce.department(),
        color: faker.internet.color()
    }));

const newRealTeacher = () => ({
    isActive: faker.datatype.boolean(),
    name: fakerBr.name.findName(),
    birthDate: faker.date.past(),
    address: fakerBr.address.city(),
    phone: fakerBr.phone.phoneNumber(),
    email: fakerBr.internet.email(),
    categoryList: makeCategoryList(faker.datatype.number({ min: 1, max: 5 }))
});

export const makeStudentData = length =>
    range(length).map(d => ({ ...newStudent() }));

export const makeClassData = length =>
    range(length).map(d => ({ ...newClass() }));

export const makeTeacherData = length =>
    range(length).map(d => ({ ...newTeacher() }));

export const makeTeacherListData = length =>
    range(length).map(d => ({ ...newRealTeacher() }));
