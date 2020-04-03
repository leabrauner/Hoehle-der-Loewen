export const VIEWS = {
    HOME: 'Home',
    OVERVIEW: 'Overview',
    POLL: 'Poll',
    EDIT: 'Edit'
};

export const DURATION = {
    MIN_2: 2,
    MIN_5: 5,
    MIN_8: 8,
    MIN_10: 10,
    MIN_15: 15,
    MIN_20: 20,
};

export const PAWS = {
    A: {
        title: 'Worüber wird abgestimmt?',
        text: 'Test Text 1',
        image: './img/paw_light.png'
    },
    B: {
        title: 'Für wen kann ich abstimmen?',
        text: 'Test Text 2',
        image: './img/paw_light.png'

    },
    C: {
        title: 'Wo kann ich abstimmen?',
        text: 'Test Text 3',
        image: './img/paw_light.png'

    },
    D: {
        title: 'Wann kann ich abstimmen?',
        text: 'Test Text 4',
        image: './img/paw_light.png'
    }
};

export const TEST_IDEAS = [{
    id: 0,
    image: './img/gaertner.png',
    title: 'Idee: Biologisch abbaubarer Virenvernichter',
    author: 'Author: Günther Gärtner',
    status: 'DONE',
    description: 'In Zeiten des Klimawandels ist es besonders wichtig darauf zu achten, dass unsere Virenvernichter biologisch abbaubar sind. So verschmutzen wir nicht das Grundwasser. Ebenso wichtig ist es, dass wir uns bewusst machen, dass Cybercrime nach wie vor ein großes Problem für uns alle darstellt.',
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
                text: "Sorry losers and haters, but my I.Q. is one of the highest -and you all know it! Please don't feel so stupid or insecure, it's not your fault"
            }, {
                author: 'Monika Mitarbeiter',
                created: '14.03.2020',
                text: 'Tolle Idee, Günther, und wichtiges Thema!!'
            }
        ]
    },
}, {
    id: 1,
    image: './img/musiker.png',
    title: 'Programm zur Umwandlung von Gähnen in Melodie',
    author: 'Michael Musiker',
    status: 'PENDING',
    description: 'Description 2',
    poll: {
        rating: {
            overall: 0.0,
            benefit: 0.0,
            presentation: 0.0,
            implementability: 0.0
        },
        comments: [{
            author: 'Text Author',
            created: '11.03.2020',
            text: 'Kein Kommentar'
        }]
    }
}, {
    id: 2,
    image: './img/boss',
    title: 'Mitarbeiter-Überwachungssystem',
    author: 'Bernd Boss',
    status: 'LOCKED',
    description: 'Description 3'
}];
