import React, { useEffect, useMemo, useRef } from 'react'
import MobileScreen from '../common/MobileScreen'
import Sidebar from '../common/Sidebar';

const Home = () => {
    const menuRef = useRef(null);

    const [isOpen, setIsOpen] = React.useState(false)

    const handleClickOutside = useMemo(
        () => (e) => {
            if (menuRef.current && !menuRef.current.contains(e.target)) {
                setIsOpen(false);
            }
        },
        [menuRef]
    );

    useEffect(() => {
        const handleClick = (e) => handleClickOutside(e);
        document.addEventListener("click", handleClick, true);

        return () => {
            document.removeEventListener("click", handleClick);
        };
    }, [handleClickOutside]);
    return (
        <div ref={menuRef}>
            <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} menuRef={menuRef} />
            <MobileScreen isOpen={isOpen} setIsOpen={setIsOpen} menuRef={menuRef} />
        </div>
    )
}

export default Home