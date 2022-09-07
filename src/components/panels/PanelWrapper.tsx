import { PropsWithChildren } from "react"

interface PanelWrapperProps extends PropsWithChildren {
    className: string | undefined
}

function PanelWrapper({ children, className }: PanelWrapperProps) {
    return (
        <div className={`w-full h-60 flex justify-center items-center rounded-lg ${className ? className : ''}`}>
            {children}
        </div>
    )
}

export default PanelWrapper;