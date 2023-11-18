import React from "react";
import CardWrapper from "../../common/Card";
import SmallTitle from "../../common/typografy/smallTitle";

const ComplexCalculateExample = () => {
    return (
        <>
            <CardWrapper>
                <SmallTitle>Кешування складних обчислень</SmallTitle>
            </CardWrapper>
            <CardWrapper>
                <SmallTitle>Залежність від сторонніх setState</SmallTitle>
            </CardWrapper>
        </>
    );
};

export default ComplexCalculateExample;
