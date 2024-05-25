function speedDetector() {
    const speedLimit = 70;
    const kmPerDemeritPoint = 5;

    let speed = prompt("Please enter the speed (in km/h):");
    
    
    speed = parseFloat(speed);

    if (isNaN(speed)) {
        alert("Invalid input! Please enter a valid number.");
        return;
    }

    if (speed < speedLimit) {
        alert("ok");
        return;
    }

    let demeritPoints = 0;
    let excessSpeed = speed - speedLimit;

    while (excessSpeed >= kmPerDemeritPoint) {
        demeritPoints++;
        excessSpeed -= kmPerDemeritPoint;
    }

    if (demeritPoints > 12) {
        alert("Your license is suspended visit the Garissa court ");
    } else {
        alert("You have " + demeritPoints + " demerit point(s).");
    }
}

 
console.log(speedDetector());