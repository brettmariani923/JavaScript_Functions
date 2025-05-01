console.log(`Hello World!\n==========\n`);

// Exercise 1 Section
console.log(`EXERCISE 1:\n==========\n`);

function printOdds(count) {
    if (count >= 1) {
        for (let i = 1; i <= count; i++) {
            if (i % 2 !== 0) {
                console.log(i);
            }
        }
    } else if (count <= -1) {
        for (let i = count; i <= -1; i++) {
            if (i % 2 !== 0) {
                console.log(i);
            }
        }
    } else {
        console.log(0);

    }
}

printOdds(23);
printOdds(-19);

// Exercise 2 Section
console.log(`EXERCISE 2:\n==========\n`);

function checkAge(userName = 0, age = 0) {
    if (age >= 16) {
        console.log(`Congrats ${userName}, you can drive!`);
    }
    else if (age <= 15 && age > 0) {
        console.log(`Sorry ${userName}, but you need to wait until you're 16`);
    }
    else if (age === 0 || userName == 0) {
        console.log(`input both a valid userName and age`);
    }
    else {
        console.log(`input your name first, age second`);
    }

}

checkAge(`John`, 23);
checkAge(`Mary`, 15);
checkAge(16);
checkAge(`Bob`);
checkAge(12, `Bob`); 

//Exercise 3 Section
console.log(`EXERCISE 3:\n==========\n`);

function whichQuadrant(x = 0, y = 0) {
    if (x > 0 && y > 0) {
        console.log(`Quadrant I`);
    }
    else if (x < 0 && y > 0) {
        console.log(`Quadrant II`);
    }
    else if (x < 0 && y < 0) {
        console.log(`Quadrant III`);
    }
    else if (x > 0 && y < 0) {
        console.log(`Quadrant IV`);
    }
    else if (x === 0 && y === 0) {
        console.log(`Origin`);
    }
    else if (x === 0) {
        console.log(`Y-Axis`);
    }
    else if (y === 0) {
        console.log(`X-Axis`);
    }
    else {
        console.log(`input a valid x and y coordinate`);
    }
}
whichQuadrant(1, 1);
whichQuadrant(-1, 1);
whichQuadrant(-1, -1);
whichQuadrant(1, -1);
whichQuadrant(0, 0);
whichQuadrant(0, 1);
whichQuadrant(1, 0);
whichQuadrant(-1, 0);
whichQuadrant(0, -1);
whichQuadrant(`pokemon`, `zoo`);

//Exercise 4 Section
console.log(`EXERCISE 4:\n==========\n`);

function checkTriangle(a = 0, b = 0, c = 0) {
    if (a + b > c && a + c > b && b + c > a) {
        if (a === b && b === c) {
            console.log(`This is an equilateral triangle`);
        }
        else if (a === b || b === c || a === c) {
            console.log(`This is an isosceles triangle`);
        }
        else {
            console.log(`This is a scalene triangle`);
        }
    }
    else if (a === 0 || b === 0 || c === 0) {
        console.log(`input all three sides`);
    }
    else {
        console.log(`This is not a triangle`);
    }
}

checkTriangle(3, 4, 5);
checkTriangle(2, 2, 2);
checkTriangle(2, 2, 3);
checkTriangle(3, 4, 0);
checkTriangle(`Pokemon!`, `Snorlax`, `My dog scout`);

//Exercise 5 Section
console.log(`EXERCISE 5:\n==========\n`);

function checkData(planLimit, day, usage) {
    const dailyLimit = planLimit / 30;
    const averageUsage = usage / day;
    const daysRemaining = 30 - day;
    const projectedUsage = averageUsage * 30;
    const overBy = projectedUsage - planLimit;

    let status = "";

    if (averageUsage > dailyLimit) {
        status = `You are EXCEEDING your average daily use (${averageUsage} GB/day).
Continuing this high usage, you'll exceed your data plan by ${overBy} GB.
To stay below your data plan, use no more than ${(dailyLimit)} GB/day.`;
    } else if (averageUsage < dailyLimit) {
        status = `You are UNDER your average daily use (${averageUsage} GB/day).
Continuing this usage, you'll be under your data plan by ${overBy} GB.
To stay below your data plan, use no more than ${(dailyLimit)} GB/day.`;
    } else {
        status = `You are AT your average daily use (${averageUsage} GB/day).
Continuing this usage, you'll exactly meet your data plan.
To stay below your data plan, use no more than ${(dailyLimit)} GB/day.`;
    }

    console.log(`${day} days used, ${daysRemaining} days remaining`);
    console.log(status);
}
checkData(50, 15, 25);
checkData(50, 15, 40);
checkData(110, 15, 50);



