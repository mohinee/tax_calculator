import React from 'react';
import { shallow } from 'enzyme';
import Questions from "../Questions";

const questions = {
    "Questions": [{
        "Q": "Is the food item used for baking considered a candy?",
        "A": [
            "yes",
            "no"
        ],
        "id": 0
    }]
};
test('Questions rendered after data is fetched', () => {
            const question = shallow( < Questions data = { questions }
                />);
                expect(question).toMatchSnapshot();
            });