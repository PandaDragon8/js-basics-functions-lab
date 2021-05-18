// Code your solution in this file!
function distanceFromHqInBlocks (streetNo) {
return Math.abs(streetNo-42)
}

function distanceFromHqInFeet(streetNo) {
  return 264 * distanceFromHqInBlocks(streetNo)
}

function distanceTravelledInFeet(streetNo1, streetNo2){
  return 264 * Math.abs(streetNo1-streetNo2)
}

function calculatesFarePrice(startStreetNo, destinationStreetNo){
const distanceInFeet = distanceTravelledInFeet(startStreetNo, destinationStreetNo)

if (distanceInFeet <= 400){
  return 0
} else if (distanceInFeet > 400 && distanceInFeet <= 2000){
  return 0.02 * (distanceInFeet-400)
} else if (distanceInFeet >2000 && distanceInFeet <= 2500){
return 25
} else {
  return 'cannot travel that far'
}

}