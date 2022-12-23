import Image from "next/image";

interface ProjectCardProps {
    title: string;
    image: string;
    feature?: boolean;
}
function ProjectCard({ title, image, feature }: ProjectCardProps) {
    return (
        <div className="m-6">
            <div className="relative">
                <Image src={image} alt={title} width="1161" height="441" />
                {feature && <strong>FEATURED: </strong>}
                {title}
            </div>
        </div>
    );
}

export default ProjectCard;
