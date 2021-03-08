import React, { useRef, useEffect } from "react";

export default function OutsideClick(props) {
    const ref = useRef(null);
    useEffect(() => {
        
        function handleClickOutside(event) {
            if (ref.current && !ref.current.contains(event.target)) {
                props.handleToggle()
            }
        }

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [ref]);

    return <div className="outside-click" ref={ref}>{props.children}</div>;
}