import { Button } from '@components/index';
import { Class, Dashboard } from '../../service/routes';
import { TabManager, Tab, Actions } from './index';
import { useRouter } from 'next/router';

export const ActionNav = () => {
    const router = useRouter();

    return (
        <Actions>
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
            <Button as="a" href={Class.Create.SelectTeacher}>
                Criar nova turma
            </Button>
        </Actions>
    );
};
