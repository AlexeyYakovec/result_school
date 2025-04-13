import { useState } from "react";
import "./App.css";

function App() {
    const [value, setValue] = useState("");
    const [list, setList] = useState([]);
    const [error, setError] = useState("");

    const isValueValid = value.length >= 3;

    const handleInputClick = () => {
        const inputValue = prompt("Введите значение:") || "";

        if (inputValue.length < 3) {
            setError("Введенное значение должно содержать минимум 3 символа");
            setValue("");
        } else {
            setError("");
            setValue(inputValue);
        }
    };

    const handleAddClick = () => {
        if (!isValueValid) return;

        const newItem = {
            id: Date.now(),
            value: value,
            date: new Date().toLocaleString(),
        };

        setList([...list, newItem]);
        setValue("");
    };

    return (
        <div className="app">
            <h1 className="page-heading">Ввод значения</h1>
            <p className="no-margin-text">
                Текущее значение <code>value</code>: "
                <output className="current-value">{value}</output>"
            </p>

            {error && <div className="error">{error}</div>}

            <div className="buttons-container">
                <button className="button" onClick={handleInputClick}>
                    Ввести новое
                </button>
                <button
                    className="button"
                    onClick={handleAddClick}
                    disabled={!isValueValid}>
                    Добавить в список
                </button>
            </div>

            <div className="list-container">
                <h2 className="list-heading">Список:</h2>

                {list.length === 0 ? (
                    <p className="no-margin-text">Нет добавленных элементов</p>
                ) : (
                    <ul className="list">
                        {list.map((item) => (
                            <li key={item.id} className="list-item">
                                {item.value} (добавлено: {item.date})
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
}

export default App;
