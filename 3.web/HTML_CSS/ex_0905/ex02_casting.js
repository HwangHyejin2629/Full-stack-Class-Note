//타입캐스팅
//데이터 타입의 종류를 바꾸는 행위
//String() ----괄호안에 있는것을 문자타입으로 변경
console.log(typeof(String(3)));
console.log(String(3)+1);

//Number() -----괄호안에 있는것을 숫자타입으로 변경
console.log(Number('3')+1); //4
console.log(Number(false)); //0
console.log(Number('abc')); //NaN ---not number 숫자가 아니다

//Boolean()
console.log(Boolean(0));// false-----괄호를 Boolean값으로 변경  
console.log(Boolean(NaN)); //false
console.log(Boolean(3)); //true  ---- 1이상은 true
console.log(Boolean('a')); //true
console.log(Boolean('false')); //true ---문자열


//인덱싱과 슬라이싱
//index : 0부터 순차적으로 증가하는 정수값
//인덱싱은 데이터를 분석하여 우리가 원하는 순서에 위치한 데이터를 뽑는것
console.log("abcde"[2]); //c ----인덱스로 문자 보여주기
//여러개의 값으로 자르고 싶다면 slice메서드 이용
console.log('abcdefgh'.slice(3,5));





