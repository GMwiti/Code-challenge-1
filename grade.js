// function created to use if and else if in order to create groups where we can put brackets for grades                      
function gradeGenerator (marks){
    if(marks >=80 && marks <= 100){
        console.log("A")
    } else if (marks >= 60 && marks < 80 ){
        console.log("B")
    } else if (marks >= 49 && marks < 60){
        console.log("C")
    }else if (marks >=40 && marks < 49){
        console.log("D")
    }else if (marks >=0 && marks < 40){
        console.log("E")
    }else{
        console.log("No Grade Available")
    }
}
// The use of logical operator && allows us to make strict brackets to give grades within the range 
gradeGenerator(34)
// Put the marks in the argument to get a grade 
