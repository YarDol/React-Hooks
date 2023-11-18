import React from "react";
import CollapseWrapper from "../common/collapse";
const UseRefExercise = () => {
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
            <div
                className="bg-primary d-flex flex-row justify-content-center align-items-center rounded"
                style={{
                    height: 40,
                    width: 60,
                    color: "white"
                }}
            >
                <small>Блок</small>
            </div>
        </CollapseWrapper>
    );
};

export default UseRefExercise;
