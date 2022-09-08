export interface IProp {
    key: string
    value: string | number
    target?: string
}

interface ITax {
    buy: IProp[]
    sell: IProp[]
}

export interface IProject {
    symbol: string
    name: string
    tags: string[]
    properties: IProp[]
    description: string
    tax: ITax
    links: IProp[]
}

const projects: IProject[] = [
    {
        symbol: "DBC",
        name: "[DABLOC]",
        tags: ["Governance"],
        properties: [
            { key: "Launch Date:", value: "TBD" },
            { key: "Initial Supply:", value: "1,000,000" },
        ],
        description: "[DABLOC] (DBC) is a Community Governance Token. DBC holders will be able to claim rewards if they stake their tokens, and participate in key governance votes. Holders will be able to shape the future of the [DABLOC] ecosystem.",
        tax: {
            buy: [],
            sell: []
        },
        links: [
            { key: "Telegram", value: "https://t.me", target: "_blank" },
            { key: "Info", value: "/projects/DBC" },
            { key: "BSCScan", value: "https://bscscan.com", target: "_blank" },
        ]
    },
    {
        symbol: "PJ1",
        name: "[PROJECT_1]",
        tags: ["Stealth"],
        properties: [
            { key: "Launch Date:", value: "TBD" },
            { key: "Initial Supply:", value: "100,000,000" },
        ],
        description: "[PROJECT_1] (PJ1) is a Stealth Launch. PJ1 has the primary use case of raising initial awareness around [DABLOC] as well as A/B testing marketing techniques. Liquidity will be locked for one week.",
        tax: {
            buy: [
                { key: "Governance", value: 1 },
                { key: "Development", value: 1 },
                { key: "Marketing", value: 8 },
            ],
            sell: [
                { key: "Governance", value: 1 },
                { key: "Development", value: 1 },
                { key: "Marketing", value: 13 },
            ],
        },
        links: [
            { key: "Telegram", value: "https://t.me", target: "_blank" },
            { key: "Info", value: "/projects/PJ1" },
            { key: "BSCScan", value: "https://bscscan.com", target: "_blank" },
        ]
    }
]

export default projects