import PropTypes from "prop-types";
import styles from "./Information.module.css";

export default function InformationLayout({ status }) {
    return (
        <div className={styles.information}>
            <h2>{status}</h2>
        </div>
    );
}

InformationLayout.propTypes = {
    status: PropTypes.string.isRequired,
};
