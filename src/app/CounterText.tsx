"use client"

import { useState } from "react";

type CounterTextProps = {
    hits: string;
}

const CounterText: React.FC<CounterTextProps> = ({ hits }) => {
    const [isVisible, setIsVisible] = useState(false)
    return (
        <p>
            You are visitor number {" "}
            <button className={`${isVisible ? '' : 'censored'}`} onClick={() => setIsVisible(!isVisible)}>{hits}</button>
        </p>
    )
}

export default CounterText