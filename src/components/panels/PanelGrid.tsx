import PlaceholderPanel from "./PlaceholderPanel";
import projects, { IProject } from "../../projects";
import PanelData from "./PanelProject";

function PanelGrid() {
    return (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 xl:gap-16">
            {projects.map((project: IProject, index: number) => <PanelData project={project} key={index} />)}
            <PlaceholderPanel />
        </div>
    )
}

export default PanelGrid;