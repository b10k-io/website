import PanelWrapper from "./PanelWrapper";
import { IProject } from "../../projects"
import ProjectModal from "../modals/ProjectModal";
import { useState } from "react";
import GroupedLinks from "../links/GroupedLinks";

interface PanelProjectProps {
    project: IProject
}

function PanelData({ project }: PanelProjectProps) {

    return (
        <PanelWrapper className="bg-white border-2 border-white text-black">
            <div className="flex flex-col gap-4 text-center text-sm">
                <h3 className="text-2xl font-semibold text-center">{project.name}</h3>
                <p className="text-black/50">{project.tags.join(", ")}</p>
                <GroupedLinks links={project.links} />
                <ProjectModal project={project} />
            </div>
        </PanelWrapper>
    )
}

export default PanelData;