 const limit = 70 
// This is the speed limit given therefore has to be constant it is defined in order to use it in the function 
function speedDetector(speed){
    let dPoints = (speed - limit) / 5
    if(speed < 70){
        console.log("Ok")
    }else if(dPoints > 12){
        console.log("Your license is suspended")
        }else{
            console.log(`Your Demerit Points:${dPoints}`)
        }
    }
// Used the calculation to find the demerit points as well as make it more dynamic 
speedDetector(180) 
// put value as argument to find the demerit points issued 