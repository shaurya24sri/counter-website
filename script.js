  count=0
function getInc()
{
 
  count=count+1;
 
  document.getElementById('num').innerHTML = count;
};
function getDec()
{
 if(count>0){
  count=count-1;
 
  document.getElementById('num').innerHTML = count;}
};