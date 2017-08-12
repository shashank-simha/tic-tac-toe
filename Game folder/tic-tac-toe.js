//initialising
var turn = 0;
var complete = 0;
var p1_s = 0;
var p2_s = 0;
var p1_name = document.getElementById("p1_name");
var p2_name = document.getElementById("p2_name");
var p1_score = document.getElementById("p1_score");
var p2_score = document.getElementById("p2_score");
var result_line = document.getElementById("result_line");
var all_blocks = document.getElementsByTagName("td");
var block1_1 = all_blocks[0];
var block1_2 = all_blocks[1];
var block1_3 = all_blocks[2];
var block1_4 = all_blocks[3];
var block1_5 = all_blocks[4];
var block2_1 = all_blocks[5];
var block2_2 = all_blocks[6];
var block2_3 = all_blocks[7];
var block2_4 = all_blocks[8];
var block2_5 = all_blocks[9];
var block3_1 = all_blocks[10];
var block3_2 = all_blocks[11];
var block3_3 = all_blocks[12];
var block3_4 = all_blocks[13];
var block3_5 = all_blocks[14];
var block4_1 = all_blocks[15];
var block4_2 = all_blocks[16];
var block4_3 = all_blocks[17];
var block4_4 = all_blocks[18];
var block4_5 = all_blocks[19];
var block5_1 = all_blocks[20];
var block5_2 = all_blocks[21];
var block5_3 = all_blocks[22];
var block5_4 = all_blocks[23];
var block5_5 = all_blocks[24];
//accepting symbols
var p1_symbol = prompt("Enter player 1 symbol");
while(p1_symbol=="")
{
 if(p1_symbol=="")
 {
 alert("Symbol cannot be NULL");
 var p1_symbol = prompt("Enter player 1 symbol");
 }
}
document.getElementById("p1_symbol").innerHTML = p1_symbol;
var p2_symbol = prompt("Enter player 2 symbol");
while(p1_symbol==p2_symbol || p2_symbol=="")
{
if(p2_symbol=="")
 {
  alert("Symbol cannot be NULL");
  var p2_symbol = prompt("Enter player 2 symbol");
 }
else
 {
  alert("Both symbols cannot be same");
  var p2_symbol = prompt("Enter player 2 symbol");
 }
}
document.getElementById("p2_symbol").innerHTML = p2_symbol;
//entry function
function mark(block)
{
 if(complete==0)
 {
   if(turn%2==0)
   {
   if(block.innerHTML=="")
    {
     block.style.color = "purple";
     block.innerHTML = p1_symbol;
     turn++;
     p2_name.style.backgroundColor = "violet";
     p1_name.style.backgroundColor = "white";
    }
   }
 else if(turn%2!=0)
  {
  if(block.innerHTML=="")
   {
    block.style.color = "red";
    block.innerHTML = p2_symbol;
    turn++;
    p1_name.style.backgroundColor = "violet";
    p2_name.style.backgroundColor = "white";
   }
  }
  check();
 }
}
function reset()
{
 turn = 0;
 complete = 0;
   p1_name.style.backgroundColor = "violet";
   p2_name.style.backgroundColor = "white";
 for(var i=0;i<all_blocks.length;i++)
 {
  all_blocks[i].innerHTML = "";
 }
result_line.innerHTML = "";
}
function finish_game()
{
 reset();
 var name1 =document.getElementById("p1_name").innerHTML;
 var name2 =document.getElementById("p2_name").innerHTML;
 var final_result = "";
 if(p1_s<p2_s)
 {
  final_result = name2 + " beats " + name1 + " by " + p2_s+"-"+p1_s;
 }
 else if(p1_s>p2_s)
 {
  final_result = name1 + " beats " + name2 + " by " + p1_s+"-"+p2_s;
 }
 else
 {
  final_result = "Game tied between " + name1 + " and " + name2 + " by " + p1_s+"-"+p2_s;
 }
 p1_s =0;
 p2_s =0;
 p1_score.innerHTML = p1_s;
 p2_score.innerHTML = p2_s;
 alert(final_result);
}
function check()
{
  if((block1_1.innerHTML==block1_2.innerHTML)&&(block1_1.innerHTML==block1_3.innerHTML)&&(block1_1.innerHTML==block1_4.innerHTML)&&(block1_1.innerHTML==block1_5.innerHTML))
  {
   if(block1_1.innerHTML == p1_symbol)
    {
     result_line.innerHTML = document.getElementById("p1_name").innerHTML+" Wins!!!";
     complete++;
     p1_s++;
     p1_score.innerHTML = p1_s;
    }
  else if(block1_1.innerHTML == p2_symbol)
   {
   result_line.innerHTML = document.getElementById("p2_name").innerHTML+" Wins!!!";
     complete++;
     p2_s++;
     p2_score.innerHTML = p2_s;
   }
  }
  if((block2_1.innerHTML==block2_2.innerHTML)&&(block2_1.innerHTML==block2_3.innerHTML)&&(block2_1.innerHTML==block2_4.innerHTML)&&(block2_1.innerHTML==block2_5.innerHTML))
  {
  if(block2_1.innerHTML == p1_symbol)
  {
  result_line.innerHTML = document.getElementById("p1_name").innerHTML+" Wins!!!";
     complete++;
   p1_s++;
   p1_score.innerHTML = p1_s;
  }
 else if(block2_1.innerHTML == p2_symbol)
  {
  result_line.innerHTML = document.getElementById("p2_name").innerHTML+" Wins!!!";
     complete++;
     p2_s++;
     p2_score.innerHTML = p2_s;
  }
  }
 if((block3_1.innerHTML==block3_2.innerHTML)&&(block3_1.innerHTML==block3_3.innerHTML)&&(block3_1.innerHTML==block3_4.innerHTML)&&(block3_1.innerHTML==block3_5.innerHTML))
  {
  if(block3_1.innerHTML == p1_symbol)
  {
  result_line.innerHTML = document.getElementById("p1_name").innerHTML+" Wins!!!";
     complete++;
     p1_s++;
     p1_score.innerHTML = p1_s;
  }
 else if(block3_1.innerHTML == p2_symbol)
  {
  result_line.innerHTML = document.getElementById("p2_name").innerHTML+" Wins!!!";
     complete++;
     p2_s++;
     p2_score.innerHTML = p2_s;
  }
  }
  if((block4_1.innerHTML==block4_2.innerHTML)&&(block4_1.innerHTML==block4_3.innerHTML)&&(block4_1.innerHTML==block4_4.innerHTML)&&(block4_1.innerHTML==block4_5.innerHTML))
  {
  if(block4_1.innerHTML == p1_symbol)
  {
  result_line.innerHTML = document.getElementById("p1_name").innerHTML+" Wins!!!";
     complete++;
     p1_s++;
     p1_score.innerHTML = p1_s;
  }
 else if(block4_1.innerHTML == p2_symbol)
  {
  result_line.innerHTML = document.getElementById("p2_name").innerHTML+" Wins!!!";
     complete++;
     p2_s++;
     p2_score.innerHTML = p2_s;
  }
  }
 if((block5_1.innerHTML==block5_2.innerHTML)&&(block5_1.innerHTML==block5_3.innerHTML)&&(block5_1.innerHTML==block5_4.innerHTML)&&(block5_1.innerHTML==block5_5.innerHTML))
  {
  if(block5_1.innerHTML == p1_symbol)
  {
  result_line.innerHTML = document.getElementById("p1_name").innerHTML+" Wins!!!";
     complete++;
     p1_s++;
     p1_score.innerHTML = p1_s;
  }
 else if(block5_1.innerHTML == p2_symbol)
  {
  result_line.innerHTML = document.getElementById("p2_name").innerHTML+" Wins!!!";
     complete++;
     p2_s++;
     p2_score.innerHTML = p2_s;
  }
  }
 if((block1_1.innerHTML==block2_1.innerHTML)&&(block1_1.innerHTML==block3_1.innerHTML)&&(block1_1.innerHTML==block4_1.innerHTML)&&(block1_1.innerHTML==block5_1.innerHTML))
  {
  if(block1_1.innerHTML == p1_symbol)
  {
  result_line.innerHTML = document.getElementById("p1_name").innerHTML+" Wins!!!";
     complete++;
     p1_s++;
     p1_score.innerHTML = p1_s;
  }
 else if(block1_1.innerHTML == p2_symbol)
  {
  result_line.innerHTML = document.getElementById("p2_name").innerHTML+" Wins!!!";
     complete++;
     p2_s++;
     p2_score.innerHTML = p2_s;
  }
  }
 if((block1_2.innerHTML==block2_2.innerHTML)&&(block1_2.innerHTML==block3_2.innerHTML)&&(block1_2.innerHTML==block4_2.innerHTML)&&(block1_2.innerHTML==block5_2.innerHTML))
  {
  if(block1_2.innerHTML == p1_symbol)
  {
  result_line.innerHTML = document.getElementById("p1_name").innerHTML+" Wins!!!";
     complete++;
     p1_s++;
     p1_score.innerHTML = p1_s;
  }
 else if(block1_2.innerHTML == p2_symbol)
  {
  result_line.innerHTML = document.getElementById("p2_name").innerHTML+" Wins!!!";
     complete++;
     p2_s++;
     p2_score.innerHTML = p2_s;
  }
  }
 if((block1_3.innerHTML==block2_3.innerHTML)&&(block1_3.innerHTML==block3_3.innerHTML)&&(block1_3.innerHTML==block4_3.innerHTML)&&(block1_3.innerHTML==block5_3.innerHTML))
  {
  if(block1_3.innerHTML == p1_symbol)
  {
  result_line.innerHTML = document.getElementById("p1_name").innerHTML+" Wins!!!";
     complete++;
     p1_s++;
     p1_score.innerHTML = p1_s;
  }
 else if(block1_3.innerHTML == p2_symbol)
  {
  result_line.innerHTML = document.getElementById("p2_name").innerHTML+" Wins!!!";
     complete++;
     p2_s++;
     p2_score.innerHTML = p2_s;
  }
  }
 if((block1_4.innerHTML==block2_4.innerHTML)&&(block1_4.innerHTML==block3_4.innerHTML)&&(block1_4.innerHTML==block4_4.innerHTML)&&(block1_4.innerHTML==block5_4.innerHTML))
  {
  if(block1_4.innerHTML == p1_symbol)
  {
  result_line.innerHTML = document.getElementById("p1_name").innerHTML+" Wins!!!";
     complete++;
     p1_s++;
     p1_score.innerHTML = p1_s;
  }
 else if(block1_4.innerHTML == p2_symbol)
  {
  result_line.innerHTML = document.getElementById("p2_name").innerHTML+" Wins!!!";
     complete++;
     p2_s++;
     p2_score.innerHTML = p2_s;
  }
  }
if((block1_5.innerHTML==block2_5.innerHTML)&&(block1_5.innerHTML==block3_5.innerHTML)&&(block1_5.innerHTML==block4_5.innerHTML)&&(block1_5.innerHTML==block5_5.innerHTML))
  {
  if(block1_5.innerHTML == p1_symbol)
  {
  result_line.innerHTML = document.getElementById("p1_name").innerHTML+" Wins!!!";
     complete++;
     p1_s++;
     p1_score.innerHTML = p1_s;
  }
 else if(block1_5.innerHTML == p2_symbol)
  {
  result_line.innerHTML = document.getElementById("p2_name").innerHTML+" Wins!!!";
     complete++;
     p2_s++;
     p2_score.innerHTML = p2_s;
  }
  }
 if((block1_1.innerHTML==block2_2.innerHTML)&&(block1_1.innerHTML==block3_3.innerHTML)&&(block1_1.innerHTML==block4_4.innerHTML)&&(block1_1.innerHTML==block5_5.innerHTML))
  {
  if(block1_1.innerHTML == p1_symbol)
  {
  result_line.innerHTML = document.getElementById("p1_name").innerHTML+" Wins!!!";
     complete++;
     p1_s++;
     p1_score.innerHTML = p1_s;
  }
 else if(block1_1.innerHTML == p2_symbol)
  {
  result_line.innerHTML = document.getElementById("p2_name").innerHTML+" Wins!!!";
     complete++;
     p2_s++;
     p2_score.innerHTML = p2_s;
  }
  }
 if((block1_5.innerHTML==block2_4.innerHTML)&&(block1_5.innerHTML==block3_3.innerHTML)&&(block1_5.innerHTML==block4_2.innerHTML)&&(block1_5.innerHTML==block5_1.innerHTML))
  {
  if(block1_5.innerHTML == p1_symbol)
  {
  result_line.innerHTML = document.getElementById("p1_name").innerHTML+" Wins!!!";
     complete++;
     p1_s++;
     p1_score.innerHTML = p1_s;
  }
 else if(block1_5.innerHTML == p2_symbol)
  {
  result_line.innerHTML = document.getElementById("p2_name").innerHTML+" Wins!!!";
     complete++;
     p2_s++;
     p2_score.innerHTML = p2_s;
  }
  }
  var i;
  for(i=0;i<all_blocks.length;i++)
  {
   if(all_blocks[i].innerHTML ==="")
   break;
  }
  if(i==all_blocks.length)
  {
   result_line.innerHTML = "It's a tie!!!";
   complete++;
  }
  if(result_line.innerHTML !="")
  {
   p1_name.style.backgroundColor = "white";
   p1_name.style.backgroundColor = "white";
  }
}