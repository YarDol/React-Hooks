import React from "react";
import CollapseWrapper from "../components/common/collapse";
import ComplexCalculateExample from "../components/examples/useMemo/complexCalculate";
import BlockQuote from "../components/common/blockQuote";
import Title from "../components/common/typografy/title";
import Subtitle from "../components/common/typografy/subtitle";
import Divider from "../components/common/divider";
const UseMemoExample = () => {
    return (
        <>
            <Title>useMemo</Title>
            <CollapseWrapper title="Мемоїзація">
                <BlockQuote>
                    <p className="mt-2">
                        Мемоїзація (англ. memoization від англ. memory і англ.
                        optimization) - у програмуванні збереження
                        результатів виконання функцій для запобігання
                        повторних обчислень. Це один зі способів оптимізації,
                        застосовуваний для збільшення швидкості виконання
                        комп'ютерних програм. Перед викликом функції
                        перевіряється, чи викликалася функція раніше:
                    </p>
                    <ul>
                        <li>
                            якщо не викликалася, то функція викликається, і
                            результат її виконання зберігається;
                        </li>
                        <li>
                            якщо викликалася, то використовується збережений
                            результат.
                        </li>
                    </ul>
                    <figcaption className="blockquote-footer">
                        <cite title="Wiki">Wiki</cite>
                    </figcaption>
                </BlockQuote>
            </CollapseWrapper>
            <CollapseWrapper>
                <BlockQuote>
                    <p>
                        <code>useMemo</code> Повертає мемоїзоване значення
                    </p>
                    <p>
                        Передайте функцію, що "створює", і масив залежностей.
                        useMemo буде повторно обчислювати мемоїзоване
                        значення тільки тоді, коли значення будь-якої з
                        залежностей змінилося. Ця оптимізація допомагає
                        уникнути дорогих обчислень при кожному рендері.
                    </p>
                    <figcaption>
                        <cite title="reactjs.org">reactjs.org</cite>
                    </figcaption>
                </BlockQuote>
            </CollapseWrapper>
            <Divider />
            <Subtitle>Examples</Subtitle>
            <ComplexCalculateExample />
        </>
    );
};

export default UseMemoExample;
