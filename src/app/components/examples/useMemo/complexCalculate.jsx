import React, { useEffect, useMemo, useState } from "react";
import CardWrapper from "../../common/Card";
import SmallTitle from "../../common/typografy/smallTitle";

function factorial(n) {
    return n ? n * factorial(n - 1) : 1;
}

const ComplexCalculateExample = () => {
    const [value, setValue] = useState(100);
    const [otherSate, setOtherState] = useState(false);

    const buttonColor = otherSate ? "primary" : "secondary";
    useEffect(() => {
        console.log("render");
    }, [value]);
    const fact = useMemo(() => factorial(100), []);

    return (
        <>
            <CardWrapper>
                <SmallTitle>Кешування складних обчислень</SmallTitle>
                <p>Значення: {value}</p>
                <p>Факторіал 100 = {fact}</p>
                <button className="btn btn-primary ms-md-2" onClick={() => setValue((prevSate) => prevSate + 10)}>+</button>
                <button className="btn btn-primary ms-md-2" onClick={() => setValue((prevSate) => prevSate - 10)}>-</button>
            </CardWrapper>
            <CardWrapper>
                <SmallTitle>Залежність від сторонніх setState</SmallTitle>
                <button className={"btn ms-md-2 btn-" + buttonColor} onClick={() => setOtherState((prevSate) => !prevSate)}>Change color</button>
            </CardWrapper>
        </>
    );
};

export default ComplexCalculateExample;
