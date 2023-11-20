import React, {useRef} from "react";
import CollapseWrapper from "../common/collapse";
const UseRefExercise = () => {
    // const changeData = () => {
    //     const block = document.querySelector(".bg-primary");
    //     block.innerHTML = "text";
    //     block.style.height = "150px";
    //     block.style.width = "80px";
    // };
    const inputRef = useRef(null);

    const changeData = () => {
        inputRef.current.style.width = "150px";
        inputRef.current.style.height = "80px";
        inputRef.current.innerHTML = "text";
    };
    return (
        <CollapseWrapper title="Tasks">
            <p className="mt-3">
                У вас є блок, у якого задані ширина і висота. Додайте
                кнопку, при натисканні якої зміняться такі властивості:
            </p>
            <ul>
                <li>Зміниться вміст блоку на &quot;text&quot;</li>
                <li>висота і ширина дорівнюватимуть 150 і 80 відповідно</li>
            </ul>
            <div ref={inputRef}
                className="bg-primary d-flex flex-row justify-content-center align-items-center rounded"
                style={{
                    height: 40,
                    width: 60,
                    color: "white"
                }}
            >
                <small ref={inputRef}>Блок</small>
            </div>
            <button className="mt-3 me-3 btn btn-secondary" onClick={changeData}>Change Data</button>
        </CollapseWrapper>
    );
};

export default UseRefExercise;
