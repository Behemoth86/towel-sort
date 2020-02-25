
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let arr =[];
  if (typeof matrix === 'undefined'|| matrix.lenght===0){return arr;}
  else{
    matrix.forEach((i,j,matrix) => {
      if (j%2!=0){i.reverse();}
      arr=arr.concat(i);      
    });
    return arr;
  }
}
