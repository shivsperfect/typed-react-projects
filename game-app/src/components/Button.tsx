interface Props {
    children: string;
    onClick: () => void;
    color?: 'primary' | 'danger' | 'secondary';
}

const Button = ({ children, color = 'primary', onClick }: Props) => {
    return (
        <button type="button" className={`btn btn-${color}`} onClick={onClick}>{children}</button>
    )
}

export default Button