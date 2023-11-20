import React, {useEffect, useState} from "react";
import CardWrapper from "../../common/Card";
import SmallTitle from "../../common/typografy/smallTitle";
import TextField from "../../common/form/textField";
import propTypes from "prop-types";
import Divider from "../../common/divider";
const FormComponent = ({children}) => { 
    const [data, setData] = useState({});
    useEffect(()=> {console.log(data)}, [data])

    const handleChange = (target) => {
        setData(prevState => ({...prevState, [target.name]: target.value}));
    }
    
    return React.Children.map(children, (child) => {
        const config = {...child.props, onChange: handleChange, value: data[child.props.name] || ""};
        return React.cloneElement(child, config)
    })
 }
 FormComponent.propTypes = {
    children: propTypes.oneOfType([
        propTypes.arrayOf(propTypes.node),
        propTypes.node
    ]).isRequired
 }
const ReactChildrenExample = () => {
    return (
        <CardWrapper>
            <SmallTitle>Clone form and add props</SmallTitle>
            <Divider />
            <FormComponent>
                <TextField label="email" name="email"/>
                <TextField label="password" name="password" type="password"/>
            </FormComponent>
        </CardWrapper>
    );
};

export default ReactChildrenExample;
