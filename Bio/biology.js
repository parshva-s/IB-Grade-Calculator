//java file
"use script";
let grade;//the ib grade (1-7)

document.getElementById('Calculate').addEventListener('click', calculate);//when calculate button is pressed
function calculate() {
    let warning = false;
    //values of input
    let P1 = ((document.getElementById('paper1BI').value)/40)*0.2;
    let P2 = ((document.getElementById('paper2BI').value)/72)*0.36;
    let P3 = ((document.getElementById('paper3BI').value)/45)*0.24;
    let IA = ((document.getElementById('IABI').value)/24)*0.2
    let total=0;//total of all assessments
    //checks to see if all inputs are within range
    if((P1>=0 && P1<=0.2)&&(P2>=0 && P2<=0.36)&&(P3>=0 && P3<=0.24)&&(IA>=0 && IA<=0.2)) {
        total = (P1+P2+P3+IA);//adds marks of all assessments
        //grade is determined through comparing marks of user to the pre-existing markband
        if (total >= 0.79 && total <= 1.00){
        grade = 7;
        } else if (total <= 0.78 && total >= 0.65){
        grade = 6;
        }else if (total <= 0.64 && total >= 0.52){
        grade = 5;
        }else if (total <= 0.51 && total >= 0.38){
        grade = 4;
        }else if (total <= 0.37 && total >= 0.27){
        grade = 3;
        }else if (total <= 0.26 && total >= 0.16){
        grade = 2;
        }else if (total <= 0.15 && total >= 0){
        grade = 1;
        }
        //the mark is shown
        document.getElementById('grade').innerHTML = "Your IB grade is: "+ grade;
    //if number is not within range, alert is sent out
    } else {
        warning = true;
    }
    //the alert mssage
    if (warning) {
        alert("The numbers are not within the range. Try Again.");
    }
}
