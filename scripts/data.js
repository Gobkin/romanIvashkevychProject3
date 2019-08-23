roomsArray = [
    {   
        roomIndex:0,
        image:"images/bedroom.jpg",
        text:"Congratulations you woke up feeling pretty hip today. What shall you do on this glorious day?",
        options: [
            {
                optionText:"Not work.",
                outcomeText:"That's pretty hip (Hipsterity +1). Lets spend this day hipstering around in existential pondering.",
                roomOutcome: 1,
                scoreChange: 1
            },
            {
                optionText:"Work",
                outcomeText:"Work is not very hip (Hipsterity -1) but someone has to do it.",
                roomOutcome: 2,
                scoreChange: -1
            },
            {
                optionText:"Sleep for the rest of the day",
                outcomeText:"After 18 hours of tryng very hard you finally asleep again.",
                roomOutcome: 0,
                scoreChange: 0
            }
        ]
    },
    {   
        roomIndex:1,
        image:"images/relax.jpg",
        text:"What will you do with all the free time today?",
        options: [
            {
                optionText:"Go to the bar.",
                outcomeText:"Drinking first thing in the morning? This is not hip, this is a problem. You should see a doctor (Hipsterity -1). However, artisanal IPAs and sours have a grip on you and you head to the local watering hole.",
                roomOutcome: 3,
                scoreChange: -1
            },
            {
                optionText:"Go to the park.",
                outcomeText:"Aw yeah, slackline and hacky sack all day. Very hip and very legal (Hipsterity +1).",
                roomOutcome: 4,
                scoreChange: 1
            },
            {
                optionText:"Wonder pointlessly around town",
                outcomeText:"You decide to spend day walking up and down the street. Not strange at all...",
                roomOutcome: 5,
                scoreChange: 0
            }
        ]
    },
    {   
        roomIndex:2,
        image:"images/work.jpg",
        text:"Work is not fun but someone has to do it right? Since average duration of employment in your area is 3.5 hours it will not be the problem to find a job, or perhaps you can start your own venture?",
        options: [
            {
                optionText:"Get job as a barista.",
                outcomeText:"There is a new hip coffee shop that's just opened. Maybe you can work there. (Hipsterity +1)",
                roomOutcome: 6,
                scoreChange: 1
            },
            {
                optionText:"Write blog.",
                outcomeText:"It is about time to unleash your vast amount knowledge about uninterresting things on to the internet and get some of those lucrative internet dollars.s (Hipsterity +2)",
                roomOutcome: 7,
                scoreChange: 2
            },
            {
                optionText:"Brew beer at home.",
                outcomeText:"Having your face on the bottle of tripple hopped sour ale is lucrative and hip. (Hipsterity: +3)",
                roomOutcome: 8,
                scoreChange: 3
            }
        ]
    },
    {   
        roomIndex:3,
        image:"images/bar.jpg",
        text:"Your local drinking establishment greets you with darkness, dankness and a song that just repeats \"Hey!\" over and over again to the sounds of ukulele. What should you order?",
        options: [
            {
                optionText:"Load up on IPAs",
                outcomeText:"Pint after pint you down dark bitter liquid until you loose contiosness.",
                roomOutcome: 9,
                scoreChange: 0
            },
            {
                optionText:"Ask bartender for a surprise.",
                outcomeText:"Your insides are on fire. You are pretty certain this was sulfuric acid. You pass out from the pain shock.",
                roomOutcome: 9,
                scoreChange: 0
            },
            {
                optionText:"Cold pressed, organic juice, with organic potato vodka that has been distilled 50 times through the ashes of the free range, grass fed, virgin tiger.",
                outcomeText:"Bartender is not having your entitled shit first thing in the morning and whips you with a soggy rag untill you pass out from self-pity",
                roomOutcome: 9,
                scoreChange: 0
            }
        ]
    },
    {   
        roomIndex:4,
        image:"images/park.jpg",
        text:"Ah, the great outdoors! As far as you neighborhood goes at leas. What hip activities should you partake in?",
        options: [
            {
                optionText:"Play hacky sack with like minded bearded individuals.",
                outcomeText:"30 minutes into this highly intellectual activity an angry middleaged man who was passing by screams \"Get a job, hippies!\" and punches you in a face so hard you start loosing contiosness. Before vision fades to black you are wondering why he thought you were a hippie?",
                roomOutcome: 9,
                scoreChange: 0
            },
            {
                optionText:"Slackline.",
                outcomeText:"You join other urban acrobats in the spectacularly annoying display of balance. It was all fun and games untill the line breaks and whiplash strikes you right between the eyes breaking your favorite pair or thick glass rims (good thing there was no glass). You pass out, out of shame and sense of defeat.",
                roomOutcome: 9,
                scoreChange: 0
            },
            {
                optionText:"Spark one up.",
                outcomeText:"Spending a day in a haze seems like a solid plan. You obtain a pre-roll from a not-at-all-shady-looking enterpreneur (making sure it is organic and artisanal of course). After one drag your vision is reduced to a tiny dot and you can hear you contiosness somewhere very far away reciting an article you read when you still remembered how to read about synthetic cannabioids.",
                roomOutcome: 9,
                scoreChange: 0
            }
        ]
    },
    {   
        roomIndex:5,
        image:"images/walk.jpg",
        text:"Walking around town with no destination is a pretty nice mediocre task. Until you see a group of rivals aproaching you. Their manbuns are impecable, jeans so skinny there is absolutely no chhance of them having descendant and they spend more on beard care products then you do on rent. What will you do?",
        options: [
            {
                optionText:"Pretend not to notice them.",
                outcomeText:"You turn you sight inwards in attempt to idnore them. While at it you ignore uber driver making turn without checking for pedestrians. You get hit.",
                roomOutcome: 9,
                scoreChange: 0
            },
            {
                optionText:"Join forces.",
                outcomeText:"Your beards gravitate towards each other so hard that time and space can not hold such amount of self-absorption. Whole universe collapses.",
                roomOutcome: 9,
                scoreChange: 0
            },
            {
                optionText:"You give up.",
                outcomeText:"You realize that you will never be able to match them. This realization is so profound that it induces a panic attack.",
                roomOutcome: 9,
                scoreChange: 0
            }
        ]
    },
    {   
        roomIndex:6,
        image:"images/coffee.jpg",
        text:"You pretty much live in coffee shops, how difficult can this job be? After an interview that lasted 30 seconds you are hired as a barista at the artisanal roastery which opened two hours ago. Your first customer walks up to the bar requesting: 4 shots of fairtrade espresso, 2 shots of local goat skim milk micro foam, 7 caramel stripes on the bottom, served in a flip flop. How should you procede.",
        options: [
            {
                optionText:"Pretend like you know what he is talking about and try to make a drink.",
                outcomeText:"After 3 minutes of pulling levers, turning knobs and pressing buttons on the unneccessary complecated coffee machine you hear loud whistle followed by a loud bang. Maybe read the manual next time?",
                roomOutcome: 9,
                scoreChange: 0
            },
            {
                optionText:"Just serve whetever you can find.",
                outcomeText:"Aggrevated customer tosses the scalding hot beverage back in your face. The pain is unbearable. Maybe you should have gotten some traning before hand? ",
                roomOutcome: 9,
                scoreChange: 0
            },
            {
                optionText:"I can't handle this anymore.",
                outcomeText:"You struggle to wrap your head around this order. You understand each word separately but when put together your mind melts. This is too much to take and your brain shuts itself off in the attempt to preserve what is left of your sanity.",
                roomOutcome: 9,
                scoreChange: 0
            }
        ]
    },
    {   
        roomIndex:7,
        image:"images/blog.jpg",
        text:"You settle in a chair for a blogging section. Hm-m-m... What should you blog about?",
        options: [
            {
                optionText:"Copy paragraphs from other blogs.",
                outcomeText:"Your creativity knows no limmits as you copy and paste paragraphs from the most prominent bloggrs of your street. You are on fire! ... Actually... Those other bloggers set your apartment on fire and already blogged about it. You suffocate in the fumes.",
                roomOutcome: 9,
                scoreChange: 0
            },
            {
                optionText:"Post some Hipster Ipsum.",
                outcomeText:"The lack of ideas call for desperate measures. You generate couple paragraphs of Hipster Ipsum in a futile attempt to attract readers. In an unexpected turn of events one of the paragraphs is actually a text of an ancient dark spell. The rift in time opens and deamon emerges. Your mind can not comprehend what is going on and you lose contiosness.",
                roomOutcome: 9,
                scoreChange: 0
            },
            {
                optionText:"Look for inspiration elsewhere.",
                outcomeText:"You have no ideas. Maybe some fresh IPAs will help? (Hipsterity: +1)",
                roomOutcome: 3,
                scoreChange: 1
            }
        ]
    },
    {   
        roomIndex:8,
        image:"images/walk.jpg",
        text:"Walking around town with no destination is a pretty nice mediocre task. Until you see a group of rivals aproaching you. Their manbuns are impecable, jeans so skinny there is absolutely no chhance of them having descendant and they spend more on beard care products then you do on rent. What will you do?",
        options: [
            {
                optionText:"Pretend not to notice them.",
                outcomeText:"You turn you sight inwards in attempt to idnore them. While at it you ignore uber driver making turn without checking for pedestrians. You get hit.",
                roomOutcome: 9,
                scoreChange: 0
            },
            {
                optionText:"Join forces.",
                outcomeText:"Your beards gravitate towards each other so hard that time and space can not hold such amount of self-absorption. Whole universe collapses.",
                roomOutcome: 9,
                scoreChange: 0
            },
            {
                optionText:"You give up.",
                outcomeText:"You realize that you will never be able to match them. This realization is so profound that it induces a panic attack.",
                roomOutcome: 9,
                scoreChange: 0
            }
        ]
    },
    
];