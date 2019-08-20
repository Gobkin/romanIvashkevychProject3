$(function(){
    // Le variables
    let character = {
        currentLocation: 0,
        score: 2,
    }
    const room0 = {
        image:"https://placebeard.it/640x360",
        text:"Such text wow.",
        options: [
            {
                optionText:"option1 veri much",
                outcomeText:"poor life choices lead to this",
                roomOutcome: 3
            },
            {
                optionText:"option2 veri much",
                outcomeText:"poor life choices lead to this",
                roomOutcome: 3
            },
            {
                optionText:"option3 veri much",
                outcomeText:"poor life choices lead to this",
                roomOutcome: 3
            }
        ]
    }
    const room1 = {
        image:"https://placebeard.it/640x360",
        text:"Such text wow.",
        options: [
            {
                optionText:"option1 veri much",
                outcomeText:"poor life choices lead to this",
                roomOutcome: 3
            },
            {
                optionText:"option2 veri much",
                outcomeText:"poor life choices lead to this",
                roomOutcome: 3
            },
            {
                optionText:"option3 veri much",
                outcomeText:"poor life choices lead to this",
                roomOutcome: 3
            }
        ]
    }
    const room2 = {
        image:"https://placebeard.it/640x360",
        text:"Such text wow.",
        options: [
            {
                optionText:"option1 veri much",
                outcomeText:"poor life choices lead to this",
                roomOutcome: 3
            },
            {
                optionText:"option2 veri much",
                outcomeText:"poor life choices lead to this",
                roomOutcome: 3
            },
            {
                optionText:"option3 veri much",
                outcomeText:"poor life choices lead to this",
                roomOutcome: 3
            }
        ]
    }

    const roomsArray = [room0, room1, room2];
    
    // Display initial text, options and picture;
    $('img').attr('src', roomsArray[character.currentLocation].image);
    $('h1').text(room0.text);
    for (let i = 0; i < 3; i++){
        $(`.option${i}`).text(roomsArray[character.currentLocation].options[i].optionText);
    }
});
// Listen to which option the user picks from the list;
// Match the selected input with the corresponding result;
// Display the result of user’s choice;
// Increment/decrement score;
// Check if the score is too low;
// Display text, options and picture of the next part based on the previous choice;
// Repeat till the end;
// Once the final part is reached display the final result text based on the overall score achieved.

