import React from "react";
import BlockQuote from "../components/common/blockQuote";
import CollapseWrapper from "../components/common/collapse";
import Divider from "../components/common/divider";
import Subtitle from "../components/common/typografy/subtitle";
import Title from "../components/common/typografy/title";
import PrevStateExample from "../components/examples/useRef/prevState";
import ProgrammableActionsExample from "../components/examples/useRef/programmableActions";
import RenderCountExample from "../components/examples/useRef/renderCount";
import UseRefExercise from "../components/exercises/useRefExercise";
const UseRefExample = () => {
    return (
        <>
            <Title>useRef</Title>
            <CollapseWrapper>
                <BlockQuote>
                    <p>
                        <code>useRef</code> повертає змінюваний ref-об'єкт,
                        властивість <code>.current</code> якого ініціалізується
                        переданим аргументом <code>(initialValue)</code>.
                        Повернутий об'єкт буде зберігатися протягом усього
                        часу життя компонента.
                    </p>

                    <figcaption className="blockquote-footer">
                        <cite title="reactjs.org">reactjs.org</cite>
                    </figcaption>
                </BlockQuote>
            </CollapseWrapper>
            <Divider />
            <div>
                <Subtitle>Examples</Subtitle>
                <RenderCountExample />
                <PrevStateExample />
                <ProgrammableActionsExample />
            </div>
            <Divider />
            <div>
                <Subtitle>Tasks</Subtitle>
                <UseRefExercise />
            </div>
        </>
    );
};

export default UseRefExample;
