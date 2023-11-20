import React from "react";
import CollapseWrapper from "../common/collapse";
import propTypes from "prop-types";

const FormComponent = ({children}) => { 
    const arrayOfChildren = React.Children.toArray(children);
    return React.Children.map(arrayOfChildren, (child) => {
        return React.cloneElement(child, {...child.props, num: +child.key.replace(".", "") + 1})
    });
}

FormComponent.propTypes = {
    children: propTypes.oneOfType([
        propTypes.arrayOf(propTypes.node),
        propTypes.node
    ])
}

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
        <FormComponent>
            <Component  />
            <Component />
            <Component />
        </FormComponent>
        </CollapseWrapper>
    );
};

const Component = ({num}) => {
    return <div>{num} Компонент списку</div>;
};
Component.propTypes = {
    num: propTypes.oneOfType([propTypes.string, propTypes.number])
}

export default ChildrenExercise;
