$(function(){
    // Le variables
    let character = {
        currentLocation: 0,
        score: 2,
    }
    const room0 = {
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
                scoreChange: 1
            },
            {
                optionText:"option3 veri much",
                outcomeText:"succes life choices led to this",
                roomOutcome: 1,
                scoreChange: 1
            }
        ]
    }
    const room1 = {
        image:"https://placebeard.it/640x360",
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
    }
    const room2 = {
        image:"https://placebeard.it/640x360",
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

    const roomsArray = [room0, room1, room2];
    let currentRoom = roomsArray[character.currentLocation];
    
    // Display initial text, options and picture;
    
    const checkAnswer = function(){
        let userAnswer = $(this).text();
        let pickedOption = currentRoom.options.find( answer => answer.optionText === userAnswer);
        $('h1').text(pickedOption.outcomeText);
        $('button').toggleClass('hidden');
        $('li').off('click');
        // Increment/decrement score;
        character.score = character.score + pickedOption.scoreChange;
        character.currentLocation = pickedOption.roomOutcome;
        console.log(character.currentLocation);
        console.log(character);
        console.log(currentRoom);
        currentRoom = roomsArray[character.currentLocation];
    }

    const populate = () =>{

        $('img').attr('src', currentRoom.image);
        $('h1').text(currentRoom.text);
        $('.score').text(character.score);
        for (let i = 0; i < 3; i++){
            $(`.option${i}`).text(currentRoom.options[i].optionText);
        }
        $('li').on('click', checkAnswer);
        $('button').toggleClass('hidden');
    }

    $('button').toggleClass('hidden');
    populate();

    
    // Listen to which option the user picks from the list;
    // Match the selected input with the corresponding result;
    // Display the result of user’s choice;
    

    
    $('button').on('click', populate);
});
// Check if the score is too low;
// Display text, options and picture of the next part based on the previous choice;
// Repeat till the end;
// Once the final part is reached display the final result text based on the overall score achieved.

