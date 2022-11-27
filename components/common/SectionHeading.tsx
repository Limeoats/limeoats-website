interface SectionHeadingProps {
    title: string;
    color?: string;
    underlineColor: string;
}
function SectionHeading({ title, color, underlineColor }: SectionHeadingProps) {
    return (
        <div>
            <h2 className={`${color} text-center text-4xl uppercase`}>
                {title}
            </h2>
            <div
                className={`m-auto mt-4 mb-10 h-1 w-32 ${underlineColor}`}
            ></div>
        </div>
    );
}

export default SectionHeading;
