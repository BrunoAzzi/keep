import { GaugeGrid, Gauge } from '@components/dashboard';
import { Section, Title } from '@components/index';

export const GaugeGroup = ({ data = [] }) => (
    <Section>
        <Title>Acompanhamentos</Title>
        <GaugeGrid>
            {data.map(({ indicator, highlight, value }) => (
                <Gauge
                    key={indicator}
                    accent={highlight}
                    title={indicator}
                    value={value}
                />
            ))}
        </GaugeGrid>
    </Section>
);
