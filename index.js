// Code your solution in this file!

function distanceFromHqInBlocks(location){
    return Math.abs(location - 42);
}

function distanceFromHqInFeet(location){
    return distanceFromHqInBlocks(location) * 264;
}

function distanceTravelledInFeet(start, destination){
    return Math.abs(start - destination) * 264;
}

function calculatesFarePrice(start, destination){
    const distance = distanceTravelledInFeet(start, destination);
    if (distance > 2500){
        return 'cannot travel that far';
    }
    if (distance <= 400){
        return 0;
    }
    if (distance <= 2000){
        return (distance - 400) * .02;
    }
    return 25;
}