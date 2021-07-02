import React from 'react';

export function createStrictContext(options = {}) {
    const Context = React.createContext(undefined);
    if (options.name) Context.displayName = options.name;

    function useContext() {
        const context = React.useContext(Context);
        if (context === undefined) {
            throw new Error(
                options.errorMessage ||
                    `${options.name || ''} Context Provider is missing`
            );
        }
        return context;
    }

    return [Context.Provider, useContext];
}
