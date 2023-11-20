import React from "react";
import CollapseWrapper from "../common/collapse";
import PropTypes from "prop-types";
import CardWrapper from "../common/Card";
import Divider from "../common/divider";

const SimpleComponent = ({ onLogin, onLogOut, isAuth }) => {
    return (
        <>
            {isAuth ? (
                <button className="btn btn-secondary" onClick={onLogOut}>Вийти з системи</button> ) : (
                <button className="btn btn-primary" onClick={onLogin}>Війти</button> )
            }
        </>
    );
}

SimpleComponent.propTypes = {
    onLogin: PropTypes.func,
    onLogOut: PropTypes.func,
    isAuth: PropTypes.bool
};

const withFunctions = (Component) => (props) => {
    const isAuth = localStorage.getItem('auth') ? true : false;
    const onLogin = () => localStorage.setItem('auth', 'token');
    const onLogOut = () => localStorage.removeItem('auth');

    return (
        <CardWrapper>
            <Component isAuth={isAuth} onLogin={onLogin} onLogOut={onLogOut} {...props}/>
        </CardWrapper>
    )
}

const ComponentWithHoc = withFunctions(SimpleComponent);

const HocExercise = () => {
    return (
        <CollapseWrapper title="Tasks">
            <p className="mt-3">
                Вам необхідно реалізувати компонент{" "}
                <code>SimpleComponent</code>, який:
            </p>
            <ul>
                <li>
                    В <code>props</code> приймає параметри:{" "}
                    <code>onLogin</code>, <code>onLogOut</code>,{" "}
                    <code>isAuth</code>
                </li>
                <li>
                    Відображає кнопку &quot;Війти&quot;, якщо користувач НЕ
                    авторизований (залежить від параметра <code>isAuth</code> в{" "}
                    <code>props</code>)
                </li>
                <li>
                    Відображає кнопку зі змістом  &quot;Вийти з
                    системи&quot;, якщо користувач авторизований (залежить від
                    параметра <code>isAuth</code> в <code>props</code>)
                </li>
                <li>
                    При натисканні на &quot;Війти&quot;, викликається функція{" "}
                    <code>onLogin</code>, а при натисканні на &quot;Вийти з
                    системи&quot; викликається <code>onLogOut</code>
                </li>
            </ul>
            <p className="mt-3">
                Вам необхідно створити HOC з назвою{" "}
                <code>withFunctions</code>, який прийматиме компонент{" "}
                <code>SimpleComponent</code> і робити наступне:
            </p>
            <ul>
                <li>
                    Додасть обгортку на компонент у вигляді картки boostrap
                    (компонент <code>components/common/Card.jsx</code>)
                </li>
                <li>
                    Передає параметр <code>isAuth</code>. Цей параметр
                    є звичайною змінною <code>const</code> в функції{" "}
                    <code>withFunctions</code> і містить у собі результат
                    перевірки наявності даних у <code>localStorage</code> по ключу{" "}
                    <code>auth</code>. На поточний момент нам не важливо, які
                    дані там зберігати (наприклад можна перевіряти наявність рядка{" "}
                    <code>&quot;token&quot;</code>)
                </li>
                <li>
                    Передає параметри <code>onLogin</code> і{" "}
                    <code>onLogOut</code>. Функції також знаходяться в{" "}
                    <code>withFunctions</code>. <br />
                    <code>onLogin</code> - додає <code>auth</code> в{" "}
                    <code>localStorage</code> з будь-яким значенням (наприклад рядків у{" "}
                    <code>&quot;token&quot;</code>) <br />
                    <code>onLogOut</code> - видаляє <code>auth</code> з{" "}
                    <code>localStorage</code>
                </li>
            </ul>
            <p>
                Через <code>withFunctions</code> необхідно створити новий
                компонент <code>ComponentWithHoc</code> наступним чином:
                <br />
                <code>
                    const ComponentWithHoc = withFunctions(SimpleComponent);
                </code>
                <br />
                Потім його необхідно просто вивести в шаблон
            </p>
            <p>
                Примітка: під час виклику <code>onLogin</code> або{" "}
                <code>onLogOut</code> кнопка в компоненті{" "}
                <code>SimpleComponent</code> оновиться після перезавантаження
                сторінки
            </p>
            <Divider/>
            <ComponentWithHoc />
        </CollapseWrapper>
    );
};

export default HocExercise;
