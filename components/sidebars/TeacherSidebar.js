import React from 'react';
import { Sidebar } from './Sidebar';
import { createStrictContext } from 'hooks/createStrictContext';
import { TeacherForm } from '@components/teacher/Form';

const [Provider, useTeacherSidebarContext] = createStrictContext();

export const TeacherSidebarProvider = ({ children }) => (
    <Sidebar Provider={Provider} sidebarContent={<TeacherForm />}>
        {children}
    </Sidebar>
);

export { useTeacherSidebarContext };
