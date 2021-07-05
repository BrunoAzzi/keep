import React from 'react';
import { Sidebar } from './Sidebar';
import { createStrictContext } from 'hooks/createStrictContext';
import { StudentForm } from '@components/student/Form';

const [Provider, useStudentSidebarContext] = createStrictContext();

export const StudentSidebarProvider = ({ children }) => (
    <Sidebar Provider={Provider} sidebarContent={<StudentForm />}>
        {children}
    </Sidebar>
);

export { useStudentSidebarContext };
