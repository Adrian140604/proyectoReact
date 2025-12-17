
interface ButtonProps{
    text: string;
    onClick:() => void;
    disabled?: boolean;
}

const Button=({text, onClick, disabled= false}: ButtonProps) =>{
    return(
        <button className="btn btn-info text-white" onClick={onClick} disabled={disabled}>
            {text}
        </button>
    );
};

export default Button