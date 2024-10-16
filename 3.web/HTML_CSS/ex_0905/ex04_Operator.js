//산술연산자
let l1=10;
let l2=7;

console.log(l1+l2);
console.log(l1-l2);
console.log(l1*l2);
console.log(l1/l2); //몫과 나머지
console.log(l1%l2); //나머지


//대입연산자
//데이터를 변수에 저장할때 사용 =
let A=3;
let B=A;
console.log('B : '+B);

//복합대입연산자
A +=B; // A=A+b;
A *=B;

//증감연산자
//증가연산자 -숫자형데이터를 1씩 증가
//++변수 또는 변수++

//감소연산자 -숫자형데이터를 1씩 감소
//--변수 또는 변수--
var a=5;
var b= ++a;
console.log(b);
var b= a++; //a 는 7이 됨
console.log(b); //6 

//비교연산자
//< 크다, > 작다, <= 크거나같다, >= 작거나같다, == 같다, != 같지않다.
var a=10;
var b=7;
console.log(a>b);
console.log('== : '+(10=="10")); //true ---값이 일치하면 true 
console.log('=== : '+(10==="10")); //false ----값이랑 데이터 타입 일치하는지 보려면 ===
console.log('!= : '+(10!="10")); //false
console.log('!== : '+(10!=="10")); //true

//논리연산자
// && || !
console.log(true&&true); //true
console.log(true&&false); //false
console.log(true||false); //true
console.log(!true); //false
