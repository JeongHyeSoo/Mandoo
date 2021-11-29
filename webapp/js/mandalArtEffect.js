/**
 * 
 */
//핵심 목표 출력
for(var i=0;i<9;i++)
document.getElementsByClassName("con")[i].innerHTML=contents[i+65];
        
//클릭시 이벤트
document.querySelector('#box65').addEventListener("click", clickEvent65);
document.querySelector('#box66').addEventListener("click", clickEvent66);
document.querySelector('#box67').addEventListener("click", clickEvent67);
document.querySelector('#box68').addEventListener("click", clickEvent68);
document.querySelector('#box69').addEventListener("click", clickEvent69);
document.querySelector('#box70').addEventListener("click", clickEvent70);
document.querySelector('#box71').addEventListener("click", clickEvent71);
document.querySelector('#box72').addEventListener("click", clickEvent72);

    
    
    function clickEvent65()
    {
        for(var i=65;i<73;i++){
            var click = document.querySelector('#box'+(i));
            click.classList.toggle('show');
        }
        
        countClickNum++;
        if(countClickNum%2==1){
            for(var j=0;j<8;j++)
            document.getElementsByClassName("con")[j+73].innerHTML=contents[j+1];
            document.getElementsByClassName("con")[73].innerHTML=contents[65];
        }
        else{
            for(var j=57;j<65;j++)
            document.getElementsByClassName("con")[j].innerHTML=contents[j];
            document.getElementsByClassName("con")[73].innerHTML=contents[73];
        }
        
    }

    function clickEvent66()
    {
        for(var i=0;i<9;i++){
            var click = document.querySelector('#box'+(9*i+5));
            click.classList.toggle('show');
        }
        
        countClickNum++;
        if(countClickNum%2==1){
            for(var j=0;j<8;j++)
            document.getElementsByClassName("con")[j+73].innerHTML=contents[j+9];
            document.getElementsByClassName("con")[73].innerHTML=contents[66];
        }
        else{
            for(var j=57;j<65;j++)
            document.getElementsByClassName("con")[j].innerHTML=contents[j];
            document.getElementsByClassName("con")[73].innerHTML=contents[73];
        }
        
    }

    function clickEvent67()
    {
        for(var i=0;i<9;i++){
            var click = document.querySelector('#box'+(9*i+5));
            click.classList.toggle('show');
        }
        
        countClickNum++;
        if(countClickNum%2==1){
            for(var j=0;j<8;j++)
            document.getElementsByClassName("con")[j+73].innerHTML=contents[j+17];
            document.getElementsByClassName("con")[73].innerHTML=contents[67];
        }
        else{
            for(var j=57;j<65;j++)
            document.getElementsByClassName("con")[j].innerHTML=contents[j];
            document.getElementsByClassName("con")[73].innerHTML=contents[73];
        }
        
    }

    function clickEvent68()
    {
        for(var i=0;i<9;i++){
            var click = document.querySelector('#box'+(9*i+5));
            click.classList.toggle('show');
        }
        
        countClickNum++;
        if(countClickNum%2==1){
            for(var j=0;j<8;j++)
            document.getElementsByClassName("con")[j+73].innerHTML=contents[j+25];
            document.getElementsByClassName("con")[73].innerHTML=contents[68];
        }
        else{
            for(var j=57;j<65;j++)
            document.getElementsByClassName("con")[j].innerHTML=contents[j];
            document.getElementsByClassName("con")[73].innerHTML=contents[73];
        }
        
    }

    function clickEvent69()
    {
        for(var i=0;i<9;i++){
            var click = document.querySelector('#box'+(9*i+5));
            click.classList.toggle('show');
        }
        
        countClickNum++;
        if(countClickNum%2==1){
            for(var j=0;j<8;j++)
            document.getElementsByClassName("con")[j+73].innerHTML=contents[j+33];
            document.getElementsByClassName("con")[73].innerHTML=contents[69];
        }
        else{
            for(var j=57;j<65;j++)
            document.getElementsByClassName("con")[j].innerHTML=contents[j];
            document.getElementsByClassName("con")[73].innerHTML=contents[73];
        }
        
    }

    function clickEvent70()
    {
        for(var i=0;i<9;i++){
            var click = document.querySelector('#box'+(9*i+5));
            click.classList.toggle('show');
        }
        
        countClickNum++;
        if(countClickNum%2==1){
            for(var j=0;j<8;j++)
            document.getElementsByClassName("con")[j+73].innerHTML=contents[j+41];
            document.getElementsByClassName("con")[73].innerHTML=contents[70];
        }
        else{
            for(var j=57;j<65;j++)
            document.getElementsByClassName("con")[j].innerHTML=contents[j];
            document.getElementsByClassName("con")[73].innerHTML=contents[73];
        }
        
    }

    function clickEvent71()
    {
        for(var i=0;i<9;i++){
            var click = document.querySelector('#box'+(9*i+5));
            click.classList.toggle('show');
        }
        
        countClickNum++;
        if(countClickNum%2==1){
            for(var j=0;j<8;j++)
            document.getElementsByClassName("con")[j+73].innerHTML=contents[j+49];
            document.getElementsByClassName("con")[73].innerHTML=contents[71];
        }
        else{
            for(var j=57;j<65;j++)
            document.getElementsByClassName("con")[j].innerHTML=contents[j];
            document.getElementsByClassName("con")[73].innerHTML=contents[73];
        }
        
    }

    function clickEvent72()
    {
        for(var i=0;i<9;i++){
            var click = document.querySelector('#box'+(9*i+5));
            click.classList.toggle('show');
        }
        
        countClickNum++;
        if(countClickNum%2==1){
            for(var j=0;j<8;j++)
            document.getElementsByClassName("con")[j+73].innerHTML=contents[j+57];
            document.getElementsByClassName("con")[73].innerHTML=contents[72];
        }
        else{
            for(var j=57;j<65;j++)
            document.getElementsByClassName("con")[j].innerHTML=contents[j];
            document.getElementsByClassName("con")[73].innerHTML=contents[73];
        }
        
    }