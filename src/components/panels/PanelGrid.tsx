import PlaceholderPanel from "./PlaceholderPanel";
import projects, { IProject } from "../../projects";
import PanelData from "./PanelData";

function PanelGrid() {
    return (
        <div className="grid grid-cols-3 gap-16">
            {projects.map((data: IProject, index: number) => <PanelData data={data} key={index} />)}
            <PlaceholderPanel />
        </div>
    )
}

export default PanelGrid;