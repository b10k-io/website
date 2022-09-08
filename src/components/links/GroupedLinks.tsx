import { IProp } from "../../projects"
import Link from "./Link"

interface GroupedLinksProps {
    links: IProp[]
    modal?: boolean
}

function GroupedLinks({ links, modal=false}: GroupedLinksProps) {

    if (modal) {
        links  = links.filter((prop, index) => prop.key !== "Info")
    }


    return (
        <div className={`flex flex-col md:flex-row gap-2 items-center ${ modal ? '' : 'justify-between' }`}>
        {links.map((property, i) => (
            <Link property={property} key={i} />
        ))}
        </div>
    )
}

export default GroupedLinks;