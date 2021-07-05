import React from 'react';
import { Sidebar as Layout } from '@components/Layout/Sidebar';

export const Sidebar = ({ Provider, sidebarContent, children }) => {
    const [open, setOpen] = React.useState(false);
    const closeSidebar = () => setOpen(false);

    return (
        <Provider value={[open, setOpen]}>
            {children}
            {open && (
                <Layout onDropShadowClick={closeSidebar}>
                    {sidebarContent}
                </Layout>
            )}
        </Provider>
    );
};
