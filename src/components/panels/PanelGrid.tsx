import PlaceholderPanel from "./PlaceholderPanel";
import data from "../../data";
import PanelData from "./PanelData";

function PanelGrid() {
    return (
        <div className="grid grid-cols-3 gap-16">
            {data.map((value, index) => <PanelData data={value} key={index} />)}
            <PlaceholderPanel />
        </div>
    )
}

export default PanelGrid;