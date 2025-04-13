import PropTypes from "prop-types";
import FieldLayout from "./FieldLayout";

export default function Field({ field, handleCellClick }) {
    return <FieldLayout field={field} handleCellClick={handleCellClick} />;
}

Field.propTypes = {
    field: PropTypes.arrayOf(PropTypes.string).isRequired,
    handleCellClick: PropTypes.func.isRequired,
};
