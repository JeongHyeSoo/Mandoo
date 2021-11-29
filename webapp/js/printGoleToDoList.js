//오늘 할 일 출력

//todayArr[l]-7*parseInt(todayArr[l]/7)은 요일넘버
//(todayArr[l]-(todayArr[l]-7*parseInt(todayArr[l]/7)))/7+1은 칸번호


var todayArr = new Array();

// 오늘 할 일 탐색
var d=new Date();
var today = d.getDay();


//첫번쨰 중간목표
document.write("<br>"+contents[65]+"<br>");
   for(var num=1;num<9;num++)
   {
      if(dayArr[7*(num-1)+today]==1)
      {
         var printListContents = contents[num];
         checkboxplus = document.createElement("input");
         checkboxplus.type="checkbox";
         checkboxplus.name="finished";
         checkboxplus.value=printListContents;
         document.getElementById("ToDoList").appendChild(checkboxplus);
         document.write('&nbsp'+'<span class="MG01List">'+printListContents+'</span>');
         document.write('<br>');
      }
   }


document.write("<br>"+contents[66]+"<br>");
   for(var num=9;num<17;num++)
   {
      if(dayArr[7*(num-1)+today]==1)
      {
         var printListContents = contents[num];
         checkboxplus = document.createElement("input");
         checkboxplus.type="checkbox";
         checkboxplus.name="finished";
         checkboxplus.value=printListContents;
         document.getElementById("ToDoList").appendChild(checkboxplus);
         document.write('&nbsp'+'<span class="MG02List">'+printListContents+'</span>');
         document.write('<br>');
      }
   }


document.write("<br>"+contents[67]+"<br>");
   for(var num=17;num<25;num++)
   {
      if(dayArr[7*(num-1)+today]==1)
      {
         var printListContents = contents[num];
         checkboxplus = document.createElement("input");
         checkboxplus.type="checkbox";
         checkboxplus.name="finished";
         checkboxplus.value=printListContents;
         document.getElementById("ToDoList").appendChild(checkboxplus);
         document.write('&nbsp'+'<span class="MG03List">'+printListContents+'</span>');
         document.write('<br>');
      }
   }



document.write("<br>"+contents[68]+"<br>");
   for(var num=25;num<33;num++)
   {
      if(dayArr[7*(num-1)+today]==1)
      {
         var printListContents = contents[num];
         checkboxplus = document.createElement("input");
         checkboxplus.type="checkbox";
         checkboxplus.name="finished";
         checkboxplus.value=printListContents;
         document.getElementById("ToDoList").appendChild(checkboxplus);
         document.write('&nbsp'+'<span class="MG04List">'+printListContents+'</span>');
         document.write('<br>');
      }
   }




document.write("<br>"+contents[69]+"<br>");
   for(var num=33;num<41;num++)
   {
      if(dayArr[7*(num-1)+today]==1)
      {
         var printListContents = contents[num];
         checkboxplus = document.createElement("input");
         checkboxplus.type="checkbox";
         checkboxplus.name="finished";
         checkboxplus.value=printListContents;
         document.getElementById("ToDoList").appendChild(checkboxplus);
         document.write('&nbsp'+'<span class="MG05List">'+printListContents+'</span>');
         document.write('<br>');
      }
   }


document.write("<br>"+contents[70]+"<br>");
   for(var num=41;num<49;num++)
   {
      if(dayArr[7*(num-1)+today]==1)
      {
         var printListContents = contents[num];
         checkboxplus = document.createElement("input");
         checkboxplus.type="checkbox";
         checkboxplus.name="finished";
         checkboxplus.value=printListContents;
         document.getElementById("ToDoList").appendChild(checkboxplus);
         document.write('&nbsp'+'<span class="MG06List">'+printListContents+'</span>');
         document.write('<br>');
      }
   }


document.write("<br>"+contents[71]+"<br>");
   for(var num=49;num<57;num++)
   {
      if(dayArr[7*(num-1)+today]==1)
      {
         var printListContents = contents[num];
         checkboxplus = document.createElement("input");
         checkboxplus.type="checkbox";
         checkboxplus.name="finished";
         checkboxplus.value=printListContents;
         document.getElementById("ToDoList").appendChild(checkboxplus);
         document.write('&nbsp'+'<span class="MG07List">'+printListContents+'</span>');
         document.write('<br>');
      }
   }



document.write("<br>"+contents[72]+"<br>");
   for(var num=57;num<65;num++)
   {
      if(dayArr[7*(num-1)+today]==1)
      {
         var printListContents = contents[num];
         checkboxplus = document.createElement("input");
         checkboxplus.type="checkbox";
         checkboxplus.name="finished";
         checkboxplus.value=printListContents;
         document.getElementById("ToDoList").appendChild(checkboxplus);
         document.write('&nbsp'+'<span class="MG08List">'+printListContents+'</span>');
         document.write('<br>');
      }
   }