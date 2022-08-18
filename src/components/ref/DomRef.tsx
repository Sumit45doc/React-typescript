import React, { useRef } from 'react'

function DomRef() {
    const inputRef = useRef<HTMLInputElement>(null!);
    React.useEffect(() => {
        inputRef.current.focus();
    }, [])
    
    return (
        <div>
            <input type="text" ref={inputRef} />
        </div>
    )
}

export default DomRef