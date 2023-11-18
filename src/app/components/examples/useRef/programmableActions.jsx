import React, {useRef} from "react";
import CardWrapper from "../../common/Card";
import SmallTitle from "../../common/typografy/smallTitle";
import Divider from "../../common/divider";

const ProgrammableActionsExample = () => {
    const inputRef = useRef(null);

    const handleClick = () => {
        inputRef.current.focus();
    }

    const handleClickWidth = () => { 
        inputRef.current.style.width = "100px";
     }

    return (
        <CardWrapper>
            <SmallTitle className="card-title">
                Програмовані дії та властивості, що програмуються
            </SmallTitle>
            <Divider />
            <label className="form-label" htmlFor="email">Email</label>
            <input ref={inputRef} className="form-control" id="email" type="email" />
            <button className="mt-3 me-3 btn btn-primary" onClick={handleClick}>Focus</button>
            <button className="mt-3 btn btn-primary" onClick={handleClickWidth}>Change Weight</button>
        </CardWrapper>
    );
};

export default ProgrammableActionsExample;
