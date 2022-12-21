let n1 = ''; 
let n2 = '';
let operator = '';
const $operator = document.querySelector('#operator');
const $result = document.querySelector('#result');

//1-1. 숫자 클릭시 첫번째로 입력하는 숫자일 경우를 구분하기 위하여 연산자가 없을 경우 n1에 할당, 연산자가 이미 입력되었을 경우 입력된 숫자는 n2에 할당한다.
function Clicknum(number) {
    if (operator) {
        n1 = number;
    } else {
        n2 = number;
    }
    console.log('n1 :' + n1,'n2 : ' + n2);
    $result.value = number; //result요소(html)에 클릭숫자 뜨게
}
/*이제 숫자 버튼을 클력하면 해당 숫자가 변수에 할당돼야 한다.

0을 클릭하면 0이 할당되고, 1을 클릭하면 1이 할당되고.... 9를 클릭하면 9가 할당되는 방식이다.

이때 이벤트 리스너를 사용한다.*/
document.querySelector('#num-0').addEventListener('click', Clicknum('0'));
document.querySelector('#num-1').addEventListener('click', Clicknum('1'));
document.querySelector('#num-2').addEventListener('click', Clicknum('2'));
document.querySelector('#num-3').addEventListener('click', Clicknum('3'));
document.querySelector('#num-4').addEventListener('click', Clicknum('4'));
document.querySelector('#num-5').addEventListener('click', Clicknum('5'));
document.querySelector('#num-6').addEventListener('click', Clicknum('6'));
document.querySelector('#num-7').addEventListener('click', Clicknum('7'));
document.querySelector('#num-8').addEventListener('click', Clicknum('8'));
document.querySelector('#num-9').addEventListener('click', Clicknum('9'));

//1-2. 연산자를 입력할때 첫번째 숫자값이 입력되고 연산자를 입력하는 경우, 연산자가 초기화인경우, 연산자를 숫자보다 먼저 입력할 경우.
function Clickoper(oper) {
    operator = oper;
    $operator.value = oper;
    if(n1 && !n2) { //첫번째 숫자 값이 입력되고 연산자를 입력하는 경우
        $result.value = '';
    } else if (operator == 'AC') { //연산자가 초기화인경우
        n1 = '0';
        n2 = '0';
        operator = '0';
        $operator.value='0';
        $result.value = '0';
    } else if (!n1) { //연산자를 처음으로 입력할 경우
        n1 = '0';
        n2 = '0';
        operator = '0';
        $operator.value='0';
        $result.value = '0';
        alert('숫자 먼저 입력하세요');
    }

} 

function Clickcalculator(){
    if (operator == '+') {
        $result.value = n1 + n2;
        console.log($result.value);
    } else if (operator == '-') {
        $result.value = n1 - n2;
        console.log($result.value);
    } else if (operator == '*') {
        $result.value = n1 * n2;
        console.log($result.value);
    } else if (operator == '/') {
        $result.value = n1 / n2;
        console.log($result.value);
    }
}
document.querySelector('#num-0').addEventListener('click', Clicknum('0'));
document.querySelector('#num-1').addEventListener('click', Clicknum('1'));
document.querySelector('#num-2').addEventListener('click', Clicknum('2'));
document.querySelector('#num-3').addEventListener('click', Clicknum('3'));
document.querySelector('#num-4').addEventListener('click', Clicknum('4'));
document.querySelector('#num-5').addEventListener('click', Clicknum('5'));
document.querySelector('#num-6').addEventListener('click', Clicknum('6'));
document.querySelector('#num-7').addEventListener('click', Clicknum('7'));
document.querySelector('#num-8').addEventListener('click', Clicknum('8'));
document.querySelector('#num-9').addEventListener('click', Clicknum('9'));
document.querySelector('#plus').addEventListener('click', Clickoper('+'));
document.querySelector('#minus').addEventListener('click', Clickoper('-'));
document.querySelector('#divide').addEventListener('click', Clickoper('/'));
document.querySelector('#multiply').addEventListener('click', Clickoper('*'));
document.querySelector('#clear').addEventListener('click', Clickoper('AC'));
    