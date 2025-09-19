type SquareProps = {
    children?: React.ReactNode,
    updateBoard?: () => void
    index?: number
    isSelected?: boolean
}

export const Square = ({children, updateBoard, index, isSelected}: SquareProps) => {
    const className = `square ${isSelected ? 'is-selected' : ''}`;
    return(
        <div onClick={updateBoard} className={className}>
            {children}
        </div>
    )
}