import PanelWrapper from "./PanelWrapper";
import { IProject } from "../../projects"

interface PanelDataProps {
    data: IProject
}

function PanelData({ data }: PanelDataProps) {
    return (
        <PanelWrapper className="bg-white border-2 border-white text-black hover:bg-white/10 group">
            <div className="flex flex-col gap-4 text-center">
                <h3 className="text-2xl text-center group-hover:text-emerald-500">{data.name}</h3>
                <p className="text-black/50 group-hover:text-white/50">{data.tags.join(", ")}</p>
                <div className="flex justify-between gap-2 group-hover:text-white">
                    { data.links.telegram ? <a href={data.links.telegram} className="hover:underline">TLG</a> : <></> }
                    { data.links.contract ? <a href={data.links.contract} className="hover:underline">BSC</a> : <></> }
                    { data.links.details ? <a href={data.links.details} className="hover:underline">DET</a> : <></> }
                </div>
            </div>
        </PanelWrapper>
    )
}

export default PanelData;