module.exports = Object.freeze({
    "Questions": [{
            "Q": "Is the food item used for baking considered a candy?",
            "A": [
                "yes",
                "no"
            ],
            "id": 0
        },
        {
            "Q": "Is the candy sweetened?",
            "A": [
                "yes",
                "no"
            ],
            "id": 1
        },
        {
            "Q": "Choose the type of candy?",
            "A": [
                "Sprinklers or chocolate morsels",
                "Durable items (such as cake popkits)",
                "Marshmallow"
            ],
            "id": 2
        },
        {
            "Q": "Choose the type of item used for baking?",
            "A": [
                "Baking Powder",
                "Baking Soda",
                "Cocoa Powder",
                "Flour",
                "Nuts"
            ],
            "id": 3
        },
        {
            "Q": "Choose the size?",
            "A": [
                "<2oz",
                ">=2oz"
            ],
            "id": 4
        }
    ],
    "Relationship": [{
            "qid": 0,
            "aid": 0,
            "next": 1,
            "tax": null
        },
        {
            "qid": 0,
            "aid": 1,
            "next": 3,
            "tax": null
        },
        {
            "qid": 1,
            "aid": 0,
            "next": 2,
            "tax": null
        },
        {
            "qid": 1,
            "aid": 1,
            "next": null,
            "tax": "1%"
        },
        {
            "qid": 0,
            "aid": 0,
            "next": 1,
            "tax": null
        },
        {
            "qid": 2,
            "aid": 0,
            "next": null,
            "tax": "3%"
        },
        {
            "qid": 2,
            "aid": 1,
            "next": null,
            "tax": "2.5%"
        },
        {
            "qid": 2,
            "aid": 2,
            "next": null,
            "tax": "2%"
        },
        {
            "qid": 3,
            "aid": 0,
            "next": null,
            "tax": "1%"
        },
        {
            "qid": 3,
            "aid": 1,
            "next": null,
            "tax": "1.5%"
        },
        {
            "qid": 3,
            "aid": 2,
            "next": null,
            "tax": "1.5%"
        },
        {
            "qid": 3,
            "aid": 3,
            "next": null,
            "tax": "0.5%"
        },
        {
            "qid": 3,
            "aid": 4,
            "next": 4,
            "tax": null
        },
        {
            "qid": 4,
            "aid": 0,
            "next": null,
            "tax": "4%"
        },
        {
            "qid": 4,
            "aid": 1,
            "next": null,
            "tax": "5%"
        }
    ]
});