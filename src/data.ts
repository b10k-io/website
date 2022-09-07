interface IProp {
    key: string
    value: string
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

export interface IData {
    name: string
    tags: string[]
    launchDate: string
    initialSupply: string
    description: string
    tax: ITax
    links: ILinks
}

const data: IData[] = [
    {
        name: "[DABLOC]",
        tags: ["Governance"],
        launchDate: "TBD",
        initialSupply: "100,000,000",
        description: "[DABLOC] (DBC) is a Community Governance Token. DBC holders will be able to claim rewards if they stake their tokens, and participate in key governance votes. Holders will be able to shape the future of the [DABLOC] ecosystem.",
        tax: {
            buy: [],
            sell: []
        },
        links: {
            telegram: "https://t.me",
            contract: "https://bscscan.com",
            details: "dabloc",
        }
    }
]

export default data