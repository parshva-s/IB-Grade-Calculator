//java file
"use script";
let grade;//the ib grade (1-7)

document.getElementById('Calculate').addEventListener('click', calculate);
function calculate() {
    let warning = false;
    //values of input
    let P1 = ((document.getElementById('paper1FR').value)/45)*0.25;
    let P2 = ((document.getElementById('paper2FR').value)/25)*0.25;
    let written = ((document.getElementById('WrittenFR').value)/24)*0.20;
    let IA = ((document.getElementById('IAFR').value)/30)*0.30;
    let total=0;//total of all assessments
    //checks to see if all inputs are within range
    if((P1>=0 && P1<=0.25)&&(P2>=0 && P2<=0.25)&&(written>=0 && written<=0.2)&&(IA>=0 && IA<=0.3)) {
        total = (P1+P2+written+IA);//adds marks of all assessments
        //grade is determined through comparing marks of user to the pre-existing markband        
        if (total >= 0.87 && total <= 1.00){
        grade = 7;
        } else if (total <= 0.86 && total >= 0.72){
        grade = 6;
        }else if (total <= 0.71 && total >= 0.60){
        grade = 5;
        }else if (total <= 0.59 && total >= 0.45){
        grade = 4;
        }else if (total <= 0.44 && total >= 0.31){
        grade = 3;
        }else if (total <= 0.30 && total >= 0.15){
        grade = 2;
        }else if (total <= 0.14 && total >= 0){
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
