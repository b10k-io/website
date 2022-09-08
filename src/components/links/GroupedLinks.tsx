import { Fragment } from "react"
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
        <div className={`flex gap-2 items-center ${ modal ? '' : 'justify-between' }`}>
        {links.map((property, index) => (
            <Fragment key={index}>
                <Link property={property} />
                { index !== links.length - 1 ? <span className="text-black/50">|</span> : <></>}
            </Fragment>
        ))}
        </div>
    )
}

export default GroupedLinks;