//java file
"use script";
let grade;//the ib grade (1-7)

document.getElementById('Calculate').addEventListener('click', calculate);
function calculate() {
    let warning = false;
    //values of input
    let P1 = ((document.getElementById('paper1PHY').value)/40)*0.20;
    let P2 = ((document.getElementById('paper2PHY').value)/95)*0.36;
    let P3 = ((document.getElementById('paper3PHY').value)/45)*0.24;
    let IA = ((document.getElementById('IAPHY').value)/24)*0.20;
    let total=0;//total of all assessments
    //checks to see if all inputs are within range
    if((P1>=0 && P1<=0.2)&&(P2>=0 && P2<=0.36)&&(P3>=0 && P3<=0.24)&&(IA>=0 && IA<=0.2)) {
        total = (P1+P2+P3+IA);//adds marks of all assessments
        //grade is determined through comparing marks of user to the pre-existing markband        
        if (total >= 0.67 && total <= 1.00){
        grade = 7;
        } else if (total <= 0.66 && total >= 0.57){
        grade = 6;
        }else if (total <= 0.56 && total >= 0.47){
        grade = 5;
        }else if (total <= 0.46 && total >= 0.37){
        grade = 4;
        }else if (total <= 0.36 && total >= 0.26){
        grade = 3;
        }else if (total <= 0.25 && total >= 0.15){
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

