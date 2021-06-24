import { DangerStatus, SuccessStatus } from '@components/Status';

export const StatusCell = row => {
    const status = row.row.original.status;

    if (status === 'Ativo')
        return <SuccessStatus>{row.row.original.status}</SuccessStatus>;
    if (status == 'Desativado')
        return <DangerStatus>{row.row.original.status}</DangerStatus>;
    return row.row.original.status;
};
