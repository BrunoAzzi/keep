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

export function makeStudentData(...lens) {
    const makeDataLevel = (depth = 0) => {
        const len = lens[depth];
        return range(len).map(d => {
            return {
                ...newStudent(),
                subRows: lens[depth + 1] ? makeDataLevel(depth + 1) : undefined
            };
        });
    };

    return makeDataLevel();
}

export function makeClassData(...lens) {
    const makeDataLevel = (depth = 0) => {
        const len = lens[depth];
        return range(len).map(d => {
            return {
                ...newClass(),
                subRows: lens[depth + 1] ? makeDataLevel(depth + 1) : undefined
            };
        });
    };

    return makeDataLevel();
}

export function makeTeacherData(...lens) {
    const makeDataLevel = (depth = 0) => {
        const len = lens[depth];
        return range(len).map(d => {
            return {
                ...newTeacher(),
                subRows: lens[depth + 1] ? makeDataLevel(depth + 1) : undefined
            };
        });
    };

    return makeDataLevel();
}
