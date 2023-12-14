import { useState } from 'react'

interface Props {
    children: string;
    maxChar: number;
}

function Expandable({ children, maxChar }: Props) {
    const [isExpanded, setExpanded] = useState(true);
    const restrictedChar = children.slice(0, maxChar)
    return (
        <>
            <p>{isExpanded ? children : restrictedChar + '...'} <button onClick={() => setExpanded(prevValue => !prevValue)}>{isExpanded ? 'Less' : 'More'}</button></p>
            
        </>
    )
}

export default Expandable