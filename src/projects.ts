export interface IProp {
    key: string
    value: string | number
    target?: string
}

export interface IAllocation extends IProp {
    initialUnlock: number
    cliff: number
    vesting: number
    config?: { [name: string]: any }
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
    tax?: ITax
    links: IProp[]
    allocation?: IAllocation[]
}

const projects: IProject[] = [
    {
        symbol: "B10",
        name: "[B10K.IO]",
        tags: ["governance", "in development"],
        properties: [
            { key: "launch date:", value: "tbd" },
            { key: "initial supply:", value: "1,000,000" },
        ],
        description: "[B10K.IO] (B10) is a community governance token. B10 holders will be able to claim rewards if they stake their tokens, and participate in key governance votes. Holders will be able to shape the future of the [B10K.IO] ecosystem.",
        links: [
            { key: "telegram", value: "https://t.me/b10kchannel", target: "_blank" },
            { key: "info", value: "/projects/B10" },
            // { key: "bscscan", value: "https://bscscan.com", target: "_blank" },
            // { key: "github", value: "https://github.com", target: "_blank" },
        ],
        allocation: [
            { key: "team", value: 20, initialUnlock: 0, cliff: 180*24*60*60*1000, vesting: 3*180*24*60*60*1000, config: { units: "w", round: true } },
            { key: "advisors", value: 5, initialUnlock: 0, cliff: 180*24*60*60*1000, vesting: 3*180*24*60*60*1000, config: { units: "w", round: true } },
            { key: "partners", value: 20, initialUnlock: 0, cliff: 180*24*60*60*1000, vesting: 3*180*24*60*60*1000, config: { units: "w", round: true } },
            { key: "staking", value: 30, initialUnlock: 0, cliff: 0, vesting: 60, config: { units: "w", round: true } },
            { key: "reserves", value: 15, initialUnlock: 0, cliff: 180*24*60*60*1000, vesting: 3*180*24*60*60*1000, config: { units: "w", round: true } },
            { key: "public", value: 5, initialUnlock: 100, cliff: 0, vesting: 0, config: { units: "w", round: true } },
            { key: "seed", value: 5, initialUnlock: 0, cliff: 180*24*60*60*1000, vesting: 3*180*24*60*60*1000, config: { units: "w", round: true } },
        ]
    },
    {
        symbol: "S4D",
        name: "[STAKE4DOLLARS]",
        tags: ["stealth", "reward", "staking"],
        properties: [
            { key: "launch date:", value: "TBD" },
            { key: "initial supply:", value: "1,000,000,000" },
        ],
        description: "[STAKE4DOLLARS] (S4D) is a stealth launch project. Participants will be able to purchase the S4D token through pancake swap, stake it on the dApp, and start earning 8% BUSD staking rewards.",
        tax: {
            buy: [
                { key: "BUSD staking rewards", value: 8 },
                { key: "marketing", value: 4 },
                { key: "liquidity pool", value: 1 },
                { key: "governance", value: 1 },
                { key: "development", value: 1 },
            ],
            sell: [
                { key: "BUSD staking rewards", value: 8 },
                { key: "marketing", value: 4 },
                { key: "liquidity pool", value: 1 },
                { key: "governance", value: 1 },
                { key: "development", value: 1 },
            ],
        },
        allocation: [
            { key: "public", value: 95, initialUnlock: 0, cliff: 7*24*60*60*1000, vesting: 0 },
            { key: "governace", value: 2.5, initialUnlock: 0, cliff: 7*24*60*60*1000, vesting: 0 },
            { key: "team", value: 2.5, initialUnlock: 0, cliff: 7*24*60*60*1000, vesting: 0 },
        ],
        links: [
            { key: "telegram", value: "https://t.me", target: "_blank" },
            { key: "info", value: "/projects/S4D" },
            // { key: "bscscan", value: "https://bscscan.com", target: "_blank" },
            // { key: "github", value: "https://github.com", target: "_blank" },
        ]
    }
]

export default projects