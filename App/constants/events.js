import assets from "./assets";

const Events = [
    {
        id: 1,
        title: "Event 1",
        description: "This is the first event",
        date: "2020-01-01",
        time: "12:00",
        location: "Location 1",
        image: assets.nft01,
    }
]

const Organizations = [
    {
        id: 1,
        name: "Organization 1",
        description: "This is the first organization",
        image: assets.nft02,
        events: [Events[0]]
    }
]

export { Events, Organizations };
