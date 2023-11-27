import {ReactNode} from "react";

interface Props {
    children?: ReactNode;
    onClick: () => void;
}

function Square({children, onClick}: Props) {
    return <button className={"square"} onClick={onClick}>{children}</button>
}

export default Square;
