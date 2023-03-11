import assets from "./assets";

const Users = [
    {
        id: 1,
        username: "aphan",
        password: "12345",
        firstname: "Albert",
        lastname: "Phan",
        image: assets.aphan,
        requests: [
            {
                id: 9,
                username: "bob",
                firstname: "Bob",
                lastname: "Bobson",
                image: assets.nft06,
            },
            {
                id: 10,
                username: "jane",
                firstname: "Jane",
                lastname: "Doe",
                image: assets.nft07,
            },
        ],
        friends: [
            {
                id: 5,
                username: "acastro",
                firstname: "Amia",
                lastname: "Castro",
                image: assets.amiaimg,
            },
            {
                id: 6,
                username: "fsandovalgarza",
                firstname: "Fernando",
                lastname: "Sandoval Garza",
                image: assets.fernandoimg,
            },
            {
                id: 7,
                username: "arian",
                firstname: "Arian",
                lastname: "Wu",
                image: assets.arianimg,
            },
            {
                id: 8,
                username: "kat",
                firstname: "Kat",
                lastname: "Tran",
                image: assets.katimg,
            },
            {
                id: 11,
                username: "sephia",
                firstname: "Sephia",
                lastname: "",
                image: assets.sephiaimg,
            },
            {
                id: 12,
                username: "collin",
                firstname: "Collin",
                lastname: "Bugash",
                image: assets.collinimg,
            },
            {
                id: 13,
                username: "elaine",
                firstname: "Elaine",
                lastname: "Dang",
                image: assets.elaineimg,
            },
        ],
        others: [
            {
                id: 2,
                username: "acastro",
                password: "12345",
                firstname: "Amia",
                lastname: "Castro",
                image: assets.person03,
                friends: [],
            },
            {
                id: 3,
                username: "fsandovalgarza",
                password: "12345",
                firstname: "Fernando",
                lastname: "Sandoval Garza",
                image: assets.nft04,
                friends: []
            },
            {
                id: 4,
                username: "csmith",
                password: "12345",
                firstname: "Cailyn",
                lastname: "Smith",
                image: assets.nft07,
                friends: []
            },
        ],
        organizations: [
            {
                id: 14,
                name: "SASE",
                description: "Socity of Asian Scientists and Engineers. Club of Colorado Schoole of Mines",
            },
            {
                id: 15,
                name: "Environmentalists",
                description: "Group of people who love the environment and want to make the world more sustainable.",
            },
            {
                id: 16,
                name: "Computer Scientists",
                description: "Nerdy shut-in introverts unite to save the world.",
            }
        ]
    }
]

export { Users };