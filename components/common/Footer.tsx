import SectionHeading from "./SectionHeading";

function Footer() {
    return (
        <div className="relative flex justify-center bg-section-dark px-4">
            <div id="contact" className="mt-10">
                <SectionHeading
                    title="Contact me"
                    color="text-white"
                    underlineColor="bg-limeoats-green"
                />
            </div>
        </div>
    );
}

export default Footer;
