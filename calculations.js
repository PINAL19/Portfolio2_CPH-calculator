//function to calculate daily pay by inputting hours worked and
// multiply them by different daily rates


// All functions will be nested inside this larger function

function calculateAll() {

        let monday = document.getElementById("monday-hours");
        let tuesday = document.getElementById("tuesday-hours");
        let wednesday = document.getElementById("wednesday-hours");
        let thursday = document.getElementById("thursday-hours");
        let friday = document.getElementById("friday-hours");
        let saturday = document.getElementById("saturday-hours");
        let sunday = document.getElementById("sunday-hours");
        
    
        function mondayPay() {
        let result = monday.value * weekday_pay;
        return document.getElementById("mon-pay").innerHTML = result.toFixed(2);
        }
        
        function tuesdayPay() {
            let result = tuesday.value * weekday_pay;
            return document.getElementById("tue-pay").innerHTML = result.toFixed(2);
        }

        function wednesdayPay() {
            let result = wednesday.value * weekday_pay;
            return document.getElementById("wed-pay").innerHTML = result.toFixed(2);
        }
        
        function thursdayPay() {
            let result = thursday.value * weekday_pay;
            return document.getElementById("thur-pay").innerHTML = result.toFixed(2);
        }
        
        function fridayPay() {
            let result = friday.value * weekday_pay;
            return document.getElementById("fri-pay").innerHTML = result.toFixed(2);
        }
        
        function saturdayPay() {
            let result = saturday.value * saturday_pay;
            return document.getElementById("sat-pay").innerHTML = result.toFixed(2);
        }
        
        function sundayPay() {
            let result = sunday.value * sunday_pay;
            return document.getElementById("sun-pay").innerHTML = result.toFixed(2);
        }

        mondayPay();
        tuesdayPay();
        wednesdayPay();
        thursdayPay();
        fridayPay();
        saturdayPay();
        sundayPay();

         // function to calculate total wage
         let monday_pay = document.getElementById("mon-pay");
         let tuesday_pay = document.getElementById("tue-pay");
         let wednesday_pay = document.getElementById("wed-pay");
         let thursday_pay = document.getElementById("thur-pay");
         let friday_pay = document.getElementById("fri-pay");
         let weekend1_pay = document.getElementById("sat-pay");
         let weekend2_pay = document.getElementById("sun-pay");
 
         // function to calculate total pay
         function totalPay() {
             let result = parseFloat(monday_pay.innerHTML) + parseFloat(tuesday_pay.innerHTML) + 
             parseFloat(wednesday_pay.innerHTML) + parseFloat(thursday_pay.innerHTML) + 
             parseFloat(friday_pay.innerHTML) + parseFloat(weekend1_pay.innerHTML) + 
             parseFloat(weekend2_pay.innerHTML);
             return document.getElementById("twp").innerText = result;
        }

        totalPay();
        
        //function to calculate tax due per week
        function taxDue() {
            let amt = document.getElementById("twp").innerHTML;
            let tax = amt * 0.15;
            return document.getElementById("week-tax").innerHTML = tax.toFixed(2) ;
        }

        taxDue();

        // function to look at hours worked during the week 
        function HoursWorked() {
            let result = parseFloat(monday.value) + parseFloat(tuesday.value) + parseFloat(wednesday.value) 
            + parseFloat(thursday.value) + parseFloat(friday.value) + parseFloat(saturday.value) 
            + parseFloat(sunday.value);
            return document.getElementById("t-h-w").innerHTML = result;
        }

        HoursWorked();

        // function to calculate total commission earned
        let totalCommission = document.getElementById("number");

        function totalCommissionEarned() {
            let result = totalCommission.value;
            return document.getElementById("t-c-e").innerText = result;
        }

        totalCommissionEarned();

        // function to calculate the amount of commission earned per hour
        let totalHours = document.getElementById("t-h-w");

        //Use a delay to allow the other functions to calculate first and take the values from the completed function.
        // This is a function to calculate commission earned per hour

        setTimeout( function cphCalculate() {
            let division = parseFloat(totalCommission.value) / parseFloat(totalHours.innerText);
            document.getElementById("commissionPerHour").innerText = parseInt(division);
            console.log(division);
            return 
            }, 50);
            

     
        // formula to calculate commission per hour using different bands and pay scales

        setTimeout( function cphTesting() {
            let cphtest = document.getElementById("commissionPerHour").innerHTML;
            
            if (cphtest >= 500) {
                document.getElementById("payBonus").innerText = cph550;
            }
            else if  (cphtest < 499 && cphtest >= 450) {
                document.getElementById("payBonus").innerText = cph450;
            }
            else if (cphtest < 449 && cphtest >= 400) {
                document.getElementById("payBonus").innerText = cph400;
            }
            else if (cphtest < 399 && cphtest >= 350) {
                document.getElementById("payBonus").innerText = cph350;
            }
            else if (cphtest < 349 && cphtest >= 300){
                document.getElementById("payBonus").innerText = cph300;
            }
            else if (cphtest < 299 && cphtest >= 250) {
                document.getElementById("payBonus").innerText = cph250;
            }
            else if (cphtest < 249 && cphtest >= 200) {
                document.getElementById("payBonus").innerText = cph200;
            }
            else if (cphtest < 199 && cphtest >= 150) {
                document.getElementById("payBonus").innerText = cph150;
            }
            else if (cphtest < 149 && cphtest >= 100) {
                document.getElementById("payBonus").innerText = cph100;
            }
            else {
                document.getElementById("payBonus").innerText = 0;
                }
        }, 110);
        

        // function to calculate the total bonus

        setTimeout( function totalWeeklyBonus() {
            let paypay = parseFloat(totalHours.innerText) * parseFloat(payBonus.innerText);
            console.log(totalHours.innerText, payBonus.innerText);
            console.log(paypay);
            document.getElementById("monetaryBonus").innerText = paypay.toFixed(2);
            
            return
            
        }, 200);

        // function to calculate the total pay
        setTimeout( function totalPayThisWeek() {
            let grossEarnings = document.getElementById("twp").innerHTML;  
            let taxToBePaid = document.getElementById("week-tax").innerHTML;
            let cashBonus = document.getElementById("monetaryBonus").innerHTML;

            let allPays = ((parseFloat(grossEarnings) - parseFloat(taxToBePaid)) + parseFloat(cashBonus));
            console.log(allPays);
            document.getElementById("totalPayFinal").innerText = allPays.toFixed(2);
        }, 350);
        
    }

let buttonClick = document.getElementById("button");
buttonClick.addEventListener("click", calculateAll);