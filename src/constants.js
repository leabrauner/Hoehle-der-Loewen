export const VIEWS = {
    HOME: 'Home',
    OVERVIEW: 'Overview',
    POLL: 'Poll',
    EDIT: 'Edit'
};

export const DURATION = {
    MIN_2: 2,
    MIN_5: 5,
    MIN_10: 10,
    MIN_15: 15,
    MIN_20: 20,
};

export const PAWS = {
    A: {
        title: 'Tatze 1',
        text: 'Test Text 1',
        image: 'tatze1.png'
    },
    B: {
        title: 'Tatze 2',
        text: 'Test Text 2',
        image: 'tatze2.png'

    },
    C: {
        title: 'Tatze 3',
        text: 'Test Text 3',
        image: 'tatze3.png'

    },
    D: {
        title: 'Tatze 4',
        text: 'Test Text 4',
        image: 'tatze4.png'
    }
};

export const TEST_IDEAS = [{
    id: 0,
    image: 'bla',
    title: 'Titel 1',
    author: 'Author 1',
    status: 'DONE',
    description: 'Description 1',
    poll: {
        rating: {
            overall: 3.4,
            benefit: 4.0,
            presentation: 2.9,
            implementability: 3.9
        },
        comments: [
            {
                author: 'Donald J. Trump',
                created: '02.03.2020',
                text: 'Lorem Ipsum'
            }, {
                author: 'Donald J. Trump',
                created: '02.03.2020',
                text: 'Lorem Ipsum'
            }
        ]
    },
}, {
    id: 1,
    image: 'bla',
    title: 'Titel 2',
    author: 'Author 2',
    status: 'PENDING',
    description: 'Description 2',
    poll: {
        rating: {
            overall: 0.0,
            benefit: 0.0,
            presentation: 0.0,
            implementability: 0.0
        },
        comments: []
    }
}, {
    id: 2,
    image: 'bla',
    title: 'Titel 3',
    author: 'Author 3',
    status: 'LOCKED',
    description: 'Description 3'
}];
