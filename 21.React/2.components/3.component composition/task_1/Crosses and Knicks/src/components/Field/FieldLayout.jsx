import PropTypes from "prop-types";
import styles from "./Field.module.css";

export default function FieldLayout({ field, handleCellClick }) {
    return (
        <div className={styles.field}>
            {field.map((cell, index) => (
                <button
                    key={index}
                    className={styles.cell}
                    onClick={() => handleCellClick(index)}>
                    {cell}
                </button>
            ))}
        </div>
    );
}

FieldLayout.propTypes = {
    field: PropTypes.arrayOf(PropTypes.string).isRequired,
    handleCellClick: PropTypes.func.isRequired,
};
