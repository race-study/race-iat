define([
    'pipAPI',
    'https://cdn.jsdelivr.net/gh/baranan/minno-tasks@0.*/IAT/qualtrics/quiat9.js'
], function(APIConstructor, iatExtension) {
    'use strict';

    function shuffledCopy(items) {
        var copy = items.slice();
        var i;
        var j;
        var temp;

        for (i = copy.length - 1; i > 0; i -= 1) {
            j = Math.floor(Math.random() * (i + 1));
            temp = copy[i];
            copy[i] = copy[j];
            copy[j] = temp;
        }

        return copy;
    }

    var useFormalRaceLabels = Math.random() < 0.5;
    var blackLabel = useFormalRaceLabels ?
        'African Americans' : 'Black people';
    var whiteLabel = useFormalRaceLabels ?
        'European Americans' : 'White people';

    var positiveWords = shuffledCopy([
        'Love', 'Cheer', 'Friend', 'Pleasure',
        'Adore', 'Cheerful', 'Friendship', 'Joyful',
        'Smiling', 'Cherish', 'Excellent', 'Glad',
        'Joyous', 'Spectacular', 'Appealing', 'Delight',
        'Excitement', 'Laughing', 'Attractive', 'Delightful',
        'Fabulous', 'Glorious', 'Pleasing', 'Beautiful',
        'Fantastic', 'Happy', 'Lovely', 'Terrific',
        'Celebrate', 'Enjoy', 'Magnificent', 'Triumph'
    ]).slice(0, 8);

    var negativeWords = shuffledCopy([
        'Abuse', 'Grief', 'Poison', 'Sadness',
        'Pain', 'Despise', 'Failure', 'Nasty',
        'Angry', 'Detest', 'Horrible', 'Negative',
        'Ugly', 'Dirty', 'Gross', 'Evil',
        'Rotten', 'Annoy', 'Disaster', 'Horrific',
        'Scorn', 'Awful', 'Disgust', 'Hate',
        'Humiliate', 'Selfish', 'Tragic', 'Bothersome',
        'Hatred', 'Hurtful', 'Sickening', 'Yucky'
    ]).slice(0, 8);

    return iatExtension({
        category1: {
            name: blackLabel,
            title: {
                media: {word: blackLabel},
                css: {color: '#31940F', 'font-size': '1.8em'},
                height: 4
            },
            stimulusMedia: [
                {image: 'bm1_nc.jpg'},
                {image: 'bm2_nc.jpg'},
                {image: 'bm3_nc.jpg'},
                {image: 'bf1_nc.jpg'},
                {image: 'bf2_nc.jpg'},
                {image: 'bf3_nc.jpg'}
            ],
            stimulusCss: {
                color: '#31940F',
                'font-size': '2.3em'
            }
        },

        category2: {
            name: whiteLabel,
            title: {
                media: {word: whiteLabel},
                css: {color: '#31940F', 'font-size': '1.8em'},
                height: 4
            },
            stimulusMedia: [
                {image: 'wm1_nc.jpg'},
                {image: 'wm2_nc.jpg'},
                {image: 'wm3_nc.jpg'},
                {image: 'wf1_nc.jpg'},
                {image: 'wf2_nc.jpg'},
                {image: 'wf3_nc.jpg'}
            ],
            stimulusCss: {
                color: '#31940F',
                'font-size': '2.3em'
            }
        },

        attribute1: {
            name: 'Bad words',
            title: {
                media: {word: 'Bad words'},
                css: {color: '#0000FF', 'font-size': '1.8em'},
                height: 4
            },
            stimulusMedia: negativeWords.map(function(word) {
                return {word: word};
            }),
            stimulusCss: {
                color: '#0000FF',
                'font-size': '2.3em'
            }
        },

        attribute2: {
            name: 'Good words',
            title: {
                media: {word: 'Good words'},
                css: {color: '#0000FF', 'font-size': '1.8em'},
                height: 4
            },
            stimulusMedia: positiveWords.map(function(word) {
                return {word: word};
            }),
            stimulusCss: {
                color: '#0000FF',
                'font-size': '2.3em'
            }
        },

        base_url: {
            image: 'https://race-study.github.io/race-iat/images/'
        },

        isTouch:
            ('ontouchstart' in window) ||
            navigator.maxTouchPoints > 0,

        showDebriefing: false,

        finalText:
            'Press the space bar to continue to the debriefing.',

        finalTouchText:
            'Touch the bottom green area to continue to the debriefing.'
    });
});
