const bossData = [
    {
        image: "/images/download.jpeg",
        name: "John Doe",
        accessories: [
            { color: "#2ecc71", count: 3, tooltip: { header: "aad", text: "adsd" } },
            { type: "boss-indicator__icon_apron", color: "cd84f1", count: 3, tooltip: { header: "aad", text: "adsd" } },
            { color: "", count: 3, tooltip: { header: "aad", text: "adsd" } },
        ],
        modified: "01.01.01",
        status: "Enabled",
        type: "manager",
        masterVenue: "Black",
        workVenues: "Mint Green, McCooley's"
    },
    {
        image: "/images/mr.jpg",
        name: "Brian Smith",
        accessories: [
            { type: 0, amount: 2 },
            { type: 1, amount: 2 },
            { type: 2, amount: 2 }
        ],
        modified: "01.01.01",
        status: "Enabled",
        type: "manager",
        masterVenue: "Brooklyn Mixer",
        workVenues: "Black, McCooley's"
    },
    {
        image: "/images/dj.jpg",
        name: "Jack McDougal",
        accessories: [
            { type: 0, amount: 2 },
            { type: 1, amount: 2 },
            { type: 2, amount: 2 }
        ],
        modified: "01.01.01",
        status: "Disabled",
        type: "manager",
        masterVenue: "Blue",
        workVenues: "Green, McCooley's"
    },
    {
        image: "/images/jd.jpg",
        name: "John Doe",
        accessories: [
            { type: 0, amount: 2 },
            { type: 1, amount: 2 },
            { type: 2, amount: 2 }
        ],
        modified: "01.01.01",
        status: "Enabled",
        type: "manager",
        masterVenue: "Green",
        workVenues: "Black, McCooley's"
    }
]


const aliasData = [
    {
        title: "Venue",
        styles: {
            iconStyle: { "backgroundColor": "#e74c3c", "bordeColor": "#e74c3c" },
            aliasStyle: { color: "#e74c3c" }
        },
        group: [
            {
                iconName: "Ro",
                aliasText: "Rota",
            },
            {
                iconName: "Sr",
                aliasText: "Security Rota",
            },
            {
                iconName: "Co",
                aliasText: "Change Orders",
            },
            {
                iconName: "Fo",
                aliasText: "Fruit Orders",
            },
            {
                iconName: "Sc",
                aliasText: "Safe Checks",
            }
        ]
    },
    {
        title: "StaffMembers",
        styles: {
            iconStyle: { "backgroundColor": "#27ae60", "bordeColor": "#27ae60" },
            aliasStyle: { color: "#27ae60" }
        },
        group: [
            {
                iconName: "Pr",
                aliasText: "Profile",
            },
            {
                iconName: "As",
                aliasText: "Add Stuff Member",
            },
            {
                iconName: "Ho",
                aliasText: "Holidays",
            },
            {
                iconName: "Hc",
                aliasText: "Hours Confirmation",
            },
        ]
    },
]

const holidaysData = [
    {
        id: 0,
        isFrozen: false,
        type: "Something",
        status: {
            type: "rejected",
            text: "rejected"
        },
        dates: "smth",
        note: "smth",
        payslipDate: "adasd",
        canEdit: true,
        canDelete: true
    },
    {
        id: 1,
        isFrozen: true,
        type: "Something",
        status: {
            type: "rejected",
            text: "rejected"
        },
        dates: "smth",
        note: "smth",
        payslipDate: "adasd",
        canEdit: true,
        canDelete: true
    }
]


export { bossData, aliasData, holidaysData }