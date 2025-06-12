import { Calculator } from "lucide-react";

export default function FigureCard({title, description, bgSrc}) {
    return (
        <div className="card bg-base-100 image-full w-80 h-80 shadow-sm">
            <figure>
                <img
                src={bgSrc}
                alt={title} />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>{description}</p>
                <div className="card-actions justify-end">
                    <a className="btn btn-primary" href={`/figures/${title.toLowerCase()}`}>
                        <Calculator size={18}/>
                    </a>
                </div>
            </div>
        </div>
    );
}