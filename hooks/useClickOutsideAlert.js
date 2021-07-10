import React, { useRef, useEffect } from 'react';

function useClickOutsideAlert(ref, onClick = () => {}) {
    useEffect(() => {
        const handleClickOutside = event => {
            if (ref.current && !ref.current.contains(event.target)) onClick();
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [ref]);
}

export default function OutsideAlerter({ onClick, children }) {
    const wrapperRef = useRef(null);
    useClickOutsideAlert(wrapperRef, onClick);

    return <div ref={wrapperRef}>{children}</div>;
}
