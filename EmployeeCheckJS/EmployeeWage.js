//UC1
let employeeCheck =  Math.floor((Math.random() * 10) % 2);
const IS_ABSENT = 0;
    if (employeeCheck == IS_ABSENT) {
        console.log("Employee is Absent!");
    } else {
        console.log("Employee is Present!");
    }

//UC3
const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;

function getWorkingHours(employeeCheck){
        switch (employeeCheck){
            case IS_PART_TIME : 
                return PART_TIME_HOURS;
            case IS_FULL_TIME :
                return FULL_TIME_HOURS;
            default :
                return  0;               
        }
}
employeeCheck =  Math.floor((Math.random() * 10) % 3);
let empHrs = 0
empHrs=getWorkingHours(employeeCheck)
let empWage = empHrs * WAGE_PER_HOUR;
console.log("Employee Wage :"+ empWage)

//UC4
const NUM_OF_WORKING_DAYS = 2
empHrs = 0
for (let day = 0; day < NUM_OF_WORKING_DAYS; day++){
    employeeCheck =  Math.floor((Math.random() * 10) % 3);
    empHrs += getWorkingHours(employeeCheck)
}
 empWage = empHrs * WAGE_PER_HOUR;
console.log("Employee Wage :"+ empWage)