import FAQModal from "./modals/FAQModal"
import RiskModal from "./modals/RiskModal"

const klass = "p-1 text-white/50 underline hover:bg-white hover:text-black w-min outline-0"

function Footer() {
    return (
        <footer className="fixed bottom-0 w-full">
            <div className="container mx-auto px-4 lg:px-16 py-8 font-mono">
                <div className="flex justify-center flex-row gap-4">
                    <RiskModal />
                    <FAQModal />
                    <a href="https://t.me/b10kchannel" className={klass} target="_blank">telegram</a>
                </div>
            </div>
        </footer>
    )
}

export default Footer