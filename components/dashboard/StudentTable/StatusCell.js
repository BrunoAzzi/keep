import { DangerStatus, SuccessStatus } from '@components/Status';

export const StatusCell = row => {
    const isActive = row.row.original.isActive;

    if (isActive) return <SuccessStatus>Em andamento</SuccessStatus>;

    return <DangerStatus>Finalizado</DangerStatus>;
};
