const breakingRecords = scores => {
    let max  = scores[0], min = scores[0];
    let highestScore = 0, lowestScore = 0;

    for(let i = 1; i <= scores.length; i++){
        if(scores[i] > max){
            max = scores[i];
            highestScore++;
        }

        if(scores[i] < min){
            min = scores[i];
            lowestScore++;
        }
    }
    return [highestScore, lowestScore];
}

const breakingRecordsWithRecursion = scores => {
    let max  = scores[0], min = scores[0];
    let highestScore = 0, lowestScore = 0;

    const helper = allScores => {
        allScores.shift();    
        if(allScores.length < 1) return;

        if(allScores[0] > max){
            max = allScores[0];
            highestScore++;
        }

        if(allScores[0] < min){
            min = allScores[0];
            lowestScore++;
        }

        helper(allScores);
    }

    helper(scores);

    return [highestScore, lowestScore];
}

// Test case

console.log(breakingRecords([3, 4, 21, 36, 10, 28, 35, 5,24, 42])); // [4, 0]
console.log(breakingRecords([10, 5, 20, 20, 4, 5, 2, 25, 1])); // [2, 4]


console.log(breakingRecordsWithRecursion([3, 4, 21, 36, 10, 28, 35, 5,24, 42])); // [4, 0]
console.log(breakingRecordsWithRecursion([10, 5, 20, 20, 4, 5, 2, 25, 1])); // [2, 4]


/*
    You are a basketball player
    Above is an array representing the points you have scored each games
    the array is ordered from first to last game
    highscore = how many times you have scored over your highest score
    lowscore = how many times you have scored under your lowest score
    return the result [ highscore, lowestscore]
*/