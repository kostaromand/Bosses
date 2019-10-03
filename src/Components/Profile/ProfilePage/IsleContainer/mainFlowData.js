const isles = [
    {
        id: 1,
        title: "Employment Details"
    },
    {
        id: 2,
        title: "Account Details"
    },
    {
        id: 3,
        title: "Personal Details"
    },
    {
        id: 4,
        title: "Contact Details"
    },
    {
        id: 5,
        title: "Mobile Apps"
    },
    {
        id: 6,
        title: "Revisions History"
    }
]

const items = [
    {
        id: 0,
        label: "single value",
        isleId: 1,
        value: [
            {
                type: "text",
                content: "value"
            }
        ]
    },
    {
        id: 1,
        label: "multiple value",
        isleId: 1,
        value: [
            {
                type: "text",
                content: "value 1"
            },
            {
                type: "button",
                content: {
                    text: "value 2",
                    role: "boss-button_role_exclamation"
                }
            },
            {
                type: "image",
                content: {
                    src: "/images/avatar.jpg",
                    alt: "something"
                }
            }
        ]
    },
    {
        id: 2,
        isleId: 6
    },
]

export {isles,items}