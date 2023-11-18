import React from "react";
import CollapseWrapper from "../common/collapse";
const ChildrenExercise = () => {
    return (
        <CollapseWrapper title="Tasks">
            <p className="mt-3">
                У вас є компоненти Списку. Вам необхідно до кожного з них
                додати порядковий номер, щодо того, як вони
                розташовуються на сторінці. Ви можете використовувати як{" "}
                <code>React.Children.map</code> так і{" "}
                <code>React.Children.toArray</code>
            </p>

            <Component />
            <Component />
            <Component />
        </CollapseWrapper>
    );
};

const Component = () => {
    return <div>Компонент списку</div>;
};

export default ChildrenExercise;
