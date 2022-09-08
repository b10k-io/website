interface IProp {
    key: string
    value: string | number
}

interface ITax {
    buy: IProp[]
    sell: IProp[]
}

interface ILinks {
    telegram: string | undefined
    contract: string | undefined
    details: string | undefined
}

export interface IProject {
    name: string
    tags: string[]
    launchDate: string
    initialSupply: string
    description: string
    tax: ITax
    links: ILinks
}

const projects: IProject[] = [
    {
        name: "[DABLOC]",
        tags: ["Governance"],
        launchDate: "TBD",
        initialSupply: "1,000,000",
        description: "[DABLOC] (DBC) is a Community Governance Token. DBC holders will be able to claim rewards if they stake their tokens, and participate in key governance votes. Holders will be able to shape the future of the [DABLOC] ecosystem.",
        tax: {
            buy: [],
            sell: []
        },
        links: {
            telegram: "https://t.me",
            contract: "https://bscscan.com",
            details: "/DBC",
        }
    },
    {
        name: "[PROJECT_1]",
        tags: ["Stealth"],
        launchDate: "TBD",
        initialSupply: "100,000,000",
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
        links: {
            telegram: "https://t.me",
            contract: "https://bscscan.com",
            details: "/PJ1",
        }
    }
]

export default data