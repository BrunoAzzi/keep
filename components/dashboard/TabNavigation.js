import { Dashboard } from '../../service/routes';
import { TabManager, Tab, Actions } from './index';
import { useRouter } from 'next/router';

export const ActionNav = ({ children, ...other }) => {
    const router = useRouter();
    const { branch } = router.query;

    return (
        <Actions {...other}>
            <TabManager>
                <Tab
                    active={router.pathname === Dashboard.List.Class}
                    href={{
                        pathname: Dashboard.List.Class,
                        query: { branch }
                    }}
                >
                    Turmas em andamento
                </Tab>
                <Tab
                    active={router.pathname === Dashboard.List.Student}
                    href={{
                        pathname: Dashboard.List.Student,
                        query: { branch }
                    }}
                >
                    Alunos
                </Tab>
                <Tab
                    active={router.pathname === Dashboard.List.Teacher}
                    href={{
                        pathname: Dashboard.List.Teacher,
                        query: { branch }
                    }}
                >
                    Professores
                </Tab>
            </TabManager>
            {children}
        </Actions>
    );
};
