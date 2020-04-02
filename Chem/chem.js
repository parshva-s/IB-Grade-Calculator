//java file
"use script";
let grade;//the ib grade (1-7)

document.getElementById('Calculate').addEventListener('click', calculate);
function calculate() {
    let warning = false;
    //values of input
    let P1 = ((document.getElementById('paper1CH').value)/30)*0.20;
    let P2 = ((document.getElementById('paper2CH').value)/50)*0.40;
    let P3 = ((document.getElementById('paper3CH').value)/35)*0.20;
    let IA = ((document.getElementById('IACH').value)/24)*0.20;
    let total=0;//total of all assessments
    //checks to see if all inputs are within range
    if((P1>=0 && P1<=0.2)&&(P2>=0 && P2<=0.4)&&(P3>=0 && P3<=0.2)&&(IA>=0 && IA<=0.2)) {
        total = (P1+P2+P3+IA);//adds marks of all assessments
        //grade is determined through comparing marks of user to the pre-existing markband        
        if (total >= 0.73 && total <= 1.00){
        grade = 7;
        } else if (total <= 0.72 && total >= 0.62){
        grade = 6;
        }else if (total <= 0.61 && total >= 0.52){
        grade = 5;
        }else if (total <= 0.51 && total >= 0.40){
        grade = 4;
        }else if (total <= 0.39 && total >= 0.28){
        grade = 3;
        }else if (total <= 0.27 && total >= 0.15){
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
