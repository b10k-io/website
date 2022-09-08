import { IProp } from "../../projects";

interface LinkProp {
    property: IProp
}

function Link({ property }: LinkProp) {
    return (
        <a href={property.value as string} className="p-1 hover:bg-black hover:text-white" target={property.target}>{property.key}</a>
    )
}

export default Link;