//java file
"use script";
let grade;//the ib grade (1-7)

document.getElementById('Calculate').addEventListener('click', calculate);
function calculate() {
    let warning = false;
    //values of input
    let P1 = ((document.getElementById('paper1MA').value)/90)*0.40;
    let P2 = ((document.getElementById('paper2MA').value)/90)*0.40;
    let IA = ((document.getElementById('IAMA').value)/20)*0.20;
    let total=0;//total of all assessments
    //checks to see if all inputs are within range
    if((P1>=0 && P1<=0.4)&&(P2>=0 && P2<=0.4)&&(IA>=0 && IA<=0.2)) {
        total = (P1+P2+IA);//adds marks of all assessments
        //grade is determined through comparing marks of user to the pre-existing markband        
        if (total >= 0.83 && total <= 1.00){
        grade = 7;
        } else if (total <= 0.82 && total >= 0.71){
        grade = 6;
        }else if (total <= 0.70 && total >= 0.59){
        grade = 5;
        }else if (total <= 0.58 && total >= 0.48){
        grade = 4;
        }else if (total <= 0.47 && total >= 0.34){
        grade = 3;
        }else if (total <= 0.33 && total >= 0.17){
        grade = 2;
        }else if (total <= 0.16 && total >= 0){
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