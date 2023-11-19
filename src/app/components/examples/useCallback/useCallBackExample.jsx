import React, {useCallback, useState, useRef, useEffect} from "react";
import CardWrapper from "../../common/Card";
import SmallTitle from "../../common/typografy/smallTitle";

const UseCallBackExample = () => {
    const [data, setData] = useState({});
    const withoutCallBack = useRef(0);
    const withCallBack = useRef(0);

    const handleChange = ({target}) => {
        setData((prev) => ({...prev, [target.name]: target.value}));
    }
    //without CallBack
    const validateWithoutCallback = (data) => {
        console.log(data);
    }
    useEffect(()=>{
        withoutCallBack.current++;
    }, [validateWithoutCallback]);

    //with CallBack
    const validateWithCallback = useCallback((data) => {
        console.log(data);
    }, []);
    useEffect(()=>{
        withCallBack.current++;
    }, [validateWithCallback]) ;

    useEffect(()=>{
        validateWithoutCallback(data);
        validateWithCallback(data);
    }, [data]) ;

    return (
        <CardWrapper>
            <SmallTitle>Example</SmallTitle>
            <p>Without callback: {withoutCallBack.current}</p>
            <p>With callback: {withCallBack.current}</p>
            <label className="form-label" htmlFor="email">Email</label>
            <input onChange={handleChange} value={data.email||""} name="email" className="form-control" id="email" type="email" />
        </CardWrapper>
    );
};

export default UseCallBackExample;
