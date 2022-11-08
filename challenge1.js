function FindIntersection(strArr) { 

  // code goes here  
  // separate string atray into new array with numbers
  let arrA =strArr[0].replaceAll(" ", "").split(',');
 
  let arrB =strArr[1].replaceAll(" ", "").split(',');
  console.log(arrB);
  let newArr=[];
for(let i=0;i<arrA.length; i++){
  for(let j=0; j<arrB.length; j++){
    if(arrA[i]===arrB[j]){
      newArr.push(arrA[i]);
    }
  }

}
let newArrString = newArr.toString();
console.log(newArrString);

  return newArrString; 


}
   
// keep this function call here 
//console.log(FindIntersection(readline()));

strArr = ["1, 3, 4, 7, 13", "1, 2, 4, 13, 15"];
FindIntersection(strArr);
