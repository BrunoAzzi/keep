import React from 'react';
import { Sidebar } from '@components/Layout/Sidebar';
import { createStrictContext } from 'hooks/createStrictContext';
import { StudentForm } from '@components/student/Form';

const [Provider, useStudentSidebarContext] = createStrictContext();

export const StudentSidebarProvider = ({ children }) => {
    const [open, setOpen] = React.useState(false);

    return (
        <Provider value={[open, setOpen]}>
            {children}
            {open && (
                <Sidebar>
                    <StudentForm />
                </Sidebar>
            )}
        </Provider>
    );
};

export { useStudentSidebarContext };
