import { Fragment } from "react"
import { IProp } from "../../projects"
import Link from "./Link"

interface GroupedLinksProps {
    links: IProp[]
}

function GroupedLinks({ links }: GroupedLinksProps) {
    return (
        <div className="flex justify-between gap-2 items-center">
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