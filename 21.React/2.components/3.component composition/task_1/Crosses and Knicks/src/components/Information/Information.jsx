import PropTypes from "prop-types";
import InformationLayout from "./InformationLayout";

export default function Information({ currentPlayer, isGameEnded, isDraw }) {
    let status;
    if (isDraw) {
        status = "Ничья";
    } else if (isGameEnded) {
        status = `Победа: ${currentPlayer}`;
    } else {
        status = `Ходит: ${currentPlayer}`;
    }

    return <InformationLayout status={status} />;
}

Information.propTypes = {
    currentPlayer: PropTypes.oneOf(["X", "O"]).isRequired,
    isGameEnded: PropTypes.bool.isRequired,
    isDraw: PropTypes.bool.isRequired,
};
