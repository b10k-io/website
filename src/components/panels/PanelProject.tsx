import PanelWrapper from "./PanelWrapper";
import { IProject, IProp } from "../../projects"
import ProjectModal from "../modals/ProjectModal";
import { Fragment, useState } from "react";
import GroupedLinks from "../links/GroupedLinks";

interface PanelProjectProps {
    project: IProject
}

function PanelData({ project }: PanelProjectProps) {

    let [isModalOpen, setModalIsOpen] = useState(false)

    return (
        <PanelWrapper className="bg-white border-2 border-white text-black">
            <div className="flex flex-col gap-4 text-center">
                <h3 className="text-2xl text-center">{project.name}</h3>
                <p className="text-black/50">{project.tags.join(", ")}</p>
                <GroupedLinks links={project.links} />
                <div className="flex justify-between gap-2 items-center">
                    {/* { project.links.telegram ? <Link link={} href={project.links.telegram} name="Telegram" /> : <></> }
                    <span className="text-black/50">|</span>
                    { project.links.contract ? <Link href={project.links.contract} name="BSCScan" /> : <></> }
                    <span className="text-black/50">|</span> */}
                    <ProjectModal project={project} />
                </div>
            </div>
        </PanelWrapper>
    )
}

export default PanelData;