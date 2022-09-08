import React from "react";
import AboutModal from "./modals/AboutModal";

function Header() {
    return (
        <div className="text-center flex gap-4 flex-col">
            <h1 className="text-4xl font-semibold">[B10K.IO]</h1>
            {/* <h2 className="text-white/50">smart contract + dapp community</h2> */}
            <AboutModal />
        </div>
    )
}

export default Header;