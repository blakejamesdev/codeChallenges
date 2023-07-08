let s = 'MMDCDLVIII'
// let I = 1 
// let V = 5
// let X = 10
// let L = 50
// let C = 100
// let D = 500 
// let M = 1000


var romanToInt = function(s) {
    let sum = null;
    let romanRay = s.split('');
    let current = null;
    let past = null;

        for (i=0;i<romanRay.length;i++){
            current = romanRay[i];
            if (current == 'V' && past == 'I') {
                sum+=3;
                past =romanRay[i];
            }else if (current == 'X' && past == 'I') {
                sum+=8;
                past =romanRay[i];
            }else if (current == 'L' && past == 'X') {
                sum+=30;
                past =romanRay[i];
            }else if (current == 'C' && past == 'X') {
                sum+=80;
                past =romanRay[i];
            }else if (current == 'D' && past == 'C') {
                sum+=300;
                past =romanRay[i];
            }else if (current == 'M' && past == 'C') {
                sum+=800;
                past =romanRay[i];
            }else{
                if (romanRay[i] == 'I') sum+=1;
                if (romanRay[i] == 'V') sum+=5;
                if (romanRay[i] == 'X') sum+=10;
                if (romanRay[i] == 'L') sum+=50;
                if (romanRay[i] == 'C') sum+=100;
                if (romanRay[i] == 'D') sum+=500;
                if (romanRay[i] == 'M') sum+=1000;
            }
            past =romanRay[i];
        }
    console.log(sum) 
}

romanToInt(s)