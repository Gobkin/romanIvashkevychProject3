const app = {};
// Le variables
app.character = {
    currentLocation: 0,
    score: 2,
    transport:'',
    drunk: false,
}

app.roomsArray = [
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
                roomOutcome: 3,
                scoreChange: 1
            },
            {
                optionText:"Wonder pointlessly around town",
                outcomeText:"You decide to spend day walking up and down the street. Not strange at all...",
                roomOutcome: 3,
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
                optionText:"option1 veri much",
                outcomeText:"poor life choices led to this",
                roomOutcome: 3,
                scoreChange: 1
            },
            {
                optionText:"option2 veri much",
                outcomeText:"medium life choices led to this",
                roomOutcome: 3,
                scoreChange: 1
            },
            {
                optionText:"option3 veri much",
                outcomeText:"success life choices led to this",
                roomOutcome: 3,
                scoreChange: 1
            }
        ]
    },
    {   
        roomIndex:3,
        image:"images/bar.jpg",
        text:"Your local drinking establishment greets you with darkness, dankness and aong that just repeats \"Hey!\" over and over again to the sounds of ukulele. What should you order?",
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
        text:"Your local drinking establishment greets you with darkness, dankness and aong that just repeats \"Hey!\" over and over again to the sounds of ukulele. What should you order?",
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
    
];

app.currentRoom = app.roomsArray[app.character.currentLocation];

app.checkAnswer = function(){
    let userAnswer = $(this).text();
    let pickedOption = app.currentRoom.options.find( answer => answer.optionText === userAnswer);
    $('h2').text(pickedOption.outcomeText);
    $('.next').toggleClass('hidden');
    $('li').off('click');
    // Increment/decrement score;
    app.character.score = app.character.score + pickedOption.scoreChange;
    app.character.currentLocation = pickedOption.roomOutcome;
    app.currentRoom = app.roomsArray[app.character.currentLocation];
}

app.populate = () =>{
    $('.picture').css('background-image', `url(${app.currentRoom.image})`);
    $('h2').text(app.currentRoom.text);
    $('.score').text(app.character.score);
    for (let i = 0; i < 3; i++){
        $(`.option${i}`).text(app.currentRoom.options[i].optionText);
    }
    $('li').on('click', app.checkAnswer);
    $('.next').toggleClass('hidden');
}


$(function(){
    $('.next').toggleClass('hidden');
    app.populate();
    $('.next').on('click', app.populate);
    
    
    // Listen to which option the user picks from the list;
    // Match the selected input with the corresponding result;
    // Display the result of user’s choice;
    
});

// Display text, options and picture of the next part based on the previous choice;
// Repeat till the end;
// Once the final part is reached display the final result text based on the overall score achieved.

