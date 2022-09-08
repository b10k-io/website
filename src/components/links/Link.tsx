import { IProp } from "../../projects";

interface LinkProp {
    property: IProp
}

function Link({ property }: LinkProp) {
    return (
        <div>
            <a href={property.value as string} className="py-1 underline hover:bg-black hover:text-white outline-0" target={property.target} rel="noreferrer">{property.key}</a>
        </div>
    )
}

export default Link;