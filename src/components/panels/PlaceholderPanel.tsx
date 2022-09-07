import PanelWrapper from "./PanelWrapper";

function PlaceholderPanel() {
    return (
        <PanelWrapper className="border-2 border-white/50 text-white/50 hover:border-emerald-500 hover:text-white">
            <h3 className="text-xl text-center">[IN DEVELOPMENT]</h3>
        </PanelWrapper>
    )
}

export default PlaceholderPanel;