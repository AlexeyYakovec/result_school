import PropTypes from "prop-types";
import styles from "./Game.module.css";

export default function GameLayout({ children }) {
    return <div className={styles.game}>{children}</div>;
}

GameLayout.propTypes = {
    children: PropTypes.node,
};
