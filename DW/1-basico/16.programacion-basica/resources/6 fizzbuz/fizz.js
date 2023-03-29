var n = 100;
var f = "Fizz ";
var b = "Buzz ";

for(var i = 1; i <= n; i++)
{
  if(esDivisible(i, 3))
  {
    document.write(f);
  }
  if(esDivisible(i, 5))
  {
    document.write(b);
  }
  if(!esDivisible(i, 3) && !esDivisible(i, 5))
  {
    document.write(i);
  }
  document.write("<br>");
}

function esDivisible(nEvaluar, divisor)
{
  if(nEvaluar % divisor == 0)
  {
    return true;
  }

  else
  {
    return false;
  }
}
