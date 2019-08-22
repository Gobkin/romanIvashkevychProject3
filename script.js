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
        image:"https://placebeard.it/640x360",
        text:"Such text from room0 wow.",
        options: [
            {
                optionText:"option1 veri much",
                outcomeText:"poor life choices led to this",
                roomOutcome: 1,
                scoreChange: 1
            },
            {
                optionText:"option2 veri much",
                outcomeText:"medium life choices led to this",
                roomOutcome: 2,
                scoreChange: -1
            },
            {
                optionText:"option3 veri much",
                outcomeText:"succes life choices led to this",
                roomOutcome: 1,
                scoreChange: 2
            }
        ]
    },
    {
        image:"https://placebeard.it/540x360",
        text:"Such text from room1 wow.",
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
        image:"https://placebeard.it/340x360",
        text:"Such text from room2 wow.",
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
    }
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

