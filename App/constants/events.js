import assets from "./assets";

const Events = [
    {
        id: 2,
        title: "Hack2Help",
        description: "This hackathon is all about using Computer Science to make a positive impact on an inequity in the world. Last year, participants made a website that had resources and tips for disadvantaged trans youth. Another team created a site that visualized the effects of global warming in the United States to educate people about the importance of limiting their carbon footprint. Find a problem you are passionate about and create a solution, whether it is about educating the general population or connecting them with resources.",
        date: "2023-011-03",
        time: "9:00",
        location: "CK",
        image: assets.nft01,
        organization: "SWE",
    },
    {
        id: 1,
        title: "SASE Networking",
        description: "Come and network with the top companies in the industry!",
        date: "2023-01-01",
        time: "12:00",
        location: "CK",
        image: assets.nft04,
        organization: "SASE",
    }
]

const Suggested = [
    {
        id: 1,
        title: "Ice Cream Social",
        description: "Come enjoy some ice cream and meet cool people!",
        date: "2023-05-02",
        time: "12:00",
        location: "CK",
        image: assets.nft05,
        organization: "SWE",
        attendants: ["Amia", "Kat", "Sephia", "Mei"],
    },
    {
        id: 2,
        title: "Denver Hackathon",
        description: "Come hack the night away in denver! Free food and up to $1000 in prizes!",
        date: "2023-02-02",
        time: "12:00",
        location: "Location 2",
        image: assets.nft01,
        attendants: ["Fernando", "Arian", "Collin"],
        organization: "SWE",
    },
    {
        id: 3,
        title: "Pizza Pi Wellness",
        description: "Free Pizza Pi in Maple Plaza and Learn About Wellness!",
        date: "2023-03-14",
        time: "12:00",
        location: "Maple Plazza",
        image: assets.nft04,
        organization: "SWE",
    },
    {
        id: 4,
        title: "EDS Talk: Renee Desing: Inclusivity in Engineering Design",
        description: "EDS is excited to present teaching-faculty candidate Renee Desing in a campus talk on Inclusivity in Engineering Design",
        date: "2023-01-01",
        time: "12:00",
        location: "CK",
        image: assets.nft05,
        organization: "SWE",
    },
    
]

const Organizations = [
    {
        id: 1,
        name: "SWE",
        description: "This is the first organization",
        image: assets.nft02,
        events: [Suggested[0], Suggested[1], Suggested[3]]
    },
    {
        id: 2,
        name: "SASE",
        description: "This is the first organization",
        image: assets.nft02,
        events: [Events[1]]
    },
    {
        id: 3,
        name: "Computer Scientists",
        description: "This is the first organization",
        image: assets.nft02,
        events: [Events[0], Suggested[2]]
    }
]

export { Events, Organizations, Suggested };
