const htmlPassed=false;
const cssPassed=true;
let message='';
if(htmlPassed&&cssPassed){
    message='Siz bootstrap kursini boshlashingiz mumkin';
}
else if(htmlPassed||cssPassed){
   message='Iltimos ikkinchi kursni ham tugating';
}
else{
    message='Iltimos birinchi ikkala kursni tugatib chiqing';
}
console.log(message);