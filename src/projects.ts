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
        name: "[B10K.IO]",
        tags: ["governance"],
        properties: [
            { key: "launch date:", value: "tbd" },
            { key: "initial supply:", value: "1,000,000" },
        ],
        description: "[B10K.IO] (DBC) is a community governance token. DBC holders will be able to claim rewards if they stake their tokens, and participate in key governance votes. Holders will be able to shape the future of the [B10K.IO] ecosystem.",
        tax: {
            buy: [],
            sell: []
        },
        links: [
            { key: "telegram", value: "https://t.me/b10kchannel", target: "_blank" },
            { key: "info", value: "/projects/DBC" },
            { key: "bscscan", value: "https://bscscan.com", target: "_blank" },
            { key: "github", value: "https://github.com", target: "_blank" },
        ]
    },
    {
        symbol: "PJ1",
        name: "[PROJECT_1]",
        tags: ["stealth"],
        properties: [
            { key: "launch date:", value: "TBD" },
            { key: "initial supply:", value: "100,000,000" },
        ],
        description: "[PROJECT_1] (PJ1) is a stealth launch. PJ1 has the primary use case of raising initial awareness around [B10K.IO] as well as A/B testing marketing techniques. Liquidity will be locked for one week.",
        tax: {
            buy: [
                { key: "governance", value: 1 },
                { key: "development", value: 1 },
                { key: "marketing", value: 8 },
            ],
            sell: [
                { key: "governance", value: 3 },
                { key: "development", value: 3 },
                { key: "marketing", value: 9 },
            ],
        },
        links: [
            { key: "telegram", value: "https://t.me", target: "_blank" },
            { key: "info", value: "/projects/PJ1" },
            { key: "bscscan", value: "https://bscscan.com", target: "_blank" },
            { key: "github", value: "https://github.com", target: "_blank" },
        ]
    }
]

export default projects