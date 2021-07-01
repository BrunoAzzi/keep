import { Button } from '@components/index';
import { Class, Dashboard } from '../../service/routes';
import { TabManager, Tab, Actions } from './index';
import { useRouter } from 'next/router';

export const ActionNav = ({ children, ...other }) => {
    const router = useRouter();

    return (
        <Actions {...other}>
            <TabManager>
                <Tab
                    active={router.pathname === Dashboard.List.Class}
                    href={Dashboard.List.Class}
                >
                    Turmas em andamento
                </Tab>
                <Tab
                    active={router.pathname === Dashboard.List.Student}
                    href={Dashboard.List.Student}
                >
                    Alunos
                </Tab>
                <Tab
                    active={router.pathname === Dashboard.List.Teacher}
                    href={Dashboard.List.Teacher}
                >
                    Professores
                </Tab>
            </TabManager>
            {children}
        </Actions>
    );
};
