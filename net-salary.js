 //The taxable amount is per annum
function grossPay(taxableAmount){
    if(taxableAmount< 288000){
        return taxableAmount - (0.1 * taxableAmount);
    }else if(taxableAmount > 288000 && taxableAmount < 388000){
        return taxableAmount - (0.25 * taxableAmount);
    }else if (taxableAmount > 388000 ){
        return taxableAmount - (0.3 * taxableAmount);
    }else{
        return false
} 
// By using taxableAmount as our parameter we can input the value as an argument
}
let gross = grossPay(400000)
// By letting 'gross' we can now use the result of our function in the next function 
function Nhif(gross){
    if(gross > 40000 && gross< 45000){
        return 1000
    }else if (gross >=45000 && gross<50000){
        return 1100
    }else if (gross >=50000 && gross< 60000){
        return 1200
    }else if (gross>=60000 && gross < 70000){
        return 1300
    }else if (gross >=70000 && gross <80000){
        return 1400
    }else if (gross >=80000 && gross < 90000){
        return 1500
    }else if (gross >=90000 && gross < 100000){
        return 1600
    }else if (gross >= 100000){
        return 1700
    }else {
        return false
    }

}
// this function represents the nhif deductions by using gross as our parameter we can use its value in the function 
let nhif = Nhif(gross)
let nssf = 0.06 * gross
let housingLevy = 0.015 * gross

// I've let in order to use it in my final calculations

const netSalary = gross - (nhif + housingLevy + nssf)
// This is the final calculation encompassing all our values used to find the net salary per annum
console.log(netSalary)
