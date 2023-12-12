import { ReactNode } from "react"

const Button = ({
    disable, 
    children,
    onClick
}: {
    disable: boolean,
    children: ReactNode,
    onClick: () => void
}) => {
    return <button
        style={{backgroundColor: disable ? "red" : "blue", color: "white", padding: 5}}
        onClick={onClick}
    >
        {children}
    </button>
}

export default Button