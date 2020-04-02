//java file
"use script";
let grade;//the ib grade (1-7)

document.getElementById('Calculate').addEventListener('click', calculate);
function calculate() {
    let warning = false;
    //values of input
    let P1 = ((document.getElementById('paper1SS').value)/25)*0.20;
    let P2 = ((document.getElementById('paper2SS').value)/40)*0.25;
    let P3 = ((document.getElementById('paper3SS').value)/60)*0.35;
    let IA = ((document.getElementById('IASS').value)/25)*0.20;
    let total=0;//total of all assessments
    //checks to see if all inputs are within range
    if((P1>=0 && P1<=0.2)&&(P2>=0 && P2<=0.25)&&(P3>=0 && P3<=0.35)&&(IA>=0 && IA<=0.2)) {
        total = (P1+P2+P3+IA);//adds marks of all assessments
        //grade is determined through comparing marks of user to the pre-existing markband        
        if (total >= 0.74 && total <= 1.00){
        grade = 7;
        } else if (total <= 0.73 && total >= 0.62){
        grade = 6;
        }else if (total <= 0.61 && total >= 0.49){
        grade = 5;
        }else if (total <= 0.48 && total >= 0.36){
        grade = 4;
        }else if (total <= 0.35 && total >= 0.24){
        grade = 3;
        }else if (total <= 0.23 && total >= 0.11){
        grade = 2;
        }else if (total <= 0.10 && total >= 0){
        grade = 1;
        }
        //mark is shown
        document.getElementById('grade').innerHTML = "Your IB grade is: "+ grade;
    //if number is not within range, alert is sent out
    }else {
        warning = true;
    }
    //alert message
    if (warning) {
        alert("The numbers are not within the range. Try Again.");
    }
}