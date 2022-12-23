interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant: "outline" | "solid";
    arrow: boolean;
    styles?: string;
}

const Button = ({ ...props }: ButtonProps) => {
    const outlineStyle = `border-2 border-white text-white h-11 text-lg px-5 transition duration-200 ease rounded hover:opacity-100 hover:bg-limeoats-green hover:border-limeoats-green group`;
    return (
        <button className={`${outlineStyle} ${props.styles}`} {...props}>
            {props.children}
            {props.arrow && (
                <span
                    className={`relative m-auto ml-2 mb-[2px] inline-block h-[2px] w-[10px] cursor-pointer bg-white align-middle transition duration-200 ease-in before:absolute before:top-[-2px] before:inline-block before:h-[2px] before:w-2 before:rotate-[30deg] before:bg-white after:absolute after:top-[2px] after:inline-block after:h-[2px] after:w-2 after:rotate-[150deg] after:bg-white group-hover:rotate-90`}
                />
            )}
        </button>
    );
};

export default Button;
