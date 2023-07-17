function swapTiles(cell1,cell2) {
    var temp = document.getElementById(cell1).className;
    document.getElementById(cell1).className = document.getElementById(cell2).className;
    document.getElementById(cell2).className = temp;
  }
  
  function shuffle(m) {
  for (var row=1;row<=4;row++) { 
     for (var column=1;column<=4;column++) { 
    
      var row2=Math.floor(Math.random()*4 + 1);
      var column2=Math.floor(Math.random()*4 + 1);
       
      swapTiles("cell"+row+column,"cell"+row2+column2); 
      // swapTiles("cell"+row+column+"3x3","cell"+row2+column2+"3x3"); 
    } 
  }
  
  
  document.getElementById('pause').innerHTML="Start"
  timer = false;
  sec=0;
  count=0;
  document.getElementById('count').innerHTML="<span>moves </span> <br>0"
  document.getElementById('sec').innerHTML="<span>Time</span><br>"+sec+"<span id='smallcase'>s</span>";
 
  }
  
  function shuffle3x3() {
    for (var row=1;row<=3;row++) { 
       for (var column=1;column<=3;column++) { 
      
        var row2=Math.floor(Math.random()*3 + 1);
        var column2=Math.floor(Math.random()*3 + 1);
         
        // swapTiles("cell"+row+column,"cell"+row2+column2); 
        swapTiles("cell"+row+column+"3x3","cell"+row2+column2+"3x3"); 
      } 
    }
    
    
    document.getElementById('pause').innerHTML="Start"
    timer = false;
    sec=0;
    count=0;
    document.getElementById('count').innerHTML="<span>moves </span> <br>0"
    document.getElementById('sec').innerHTML="<span>Time</span><br>"+sec+"<span id='smallcase'>s</span>";
   
    }
    function shuffle5x5() {
      for (var row=1;row<=5;row++) { 
         for (var column=1;column<=5;column++) { 
        
          var row2=Math.floor(Math.random()*5 + 1);
          var column2=Math.floor(Math.random()*5 + 1);
           
          // swapTiles("cell"+row+column,"cell"+row2+column2); 
          swapTiles("cell"+row+column+"5x5","cell"+row2+column2+"5x5"); 
        } 
      }
      
      
      document.getElementById('pause').innerHTML="Start"
      timer = false;
      sec=0;
      count=0;
      document.getElementById('count').innerHTML="<span>moves </span> <br>0"
      document.getElementById('sec').innerHTML="<span>Time</span><br>"+sec+"<span id='smallcase'>s</span>";
     
      }

    function shuffleimg() {
      for (var row=1;row<=3;row++) { 
         for (var column=1;column<=3;column++) { 
        
          var row2=Math.floor(Math.random()*3 + 1);
          var column2=Math.floor(Math.random()*3 + 1);

          swapTiles("cell"+row+column+"img","cell"+row2+column2+"img"); 
        } 
      }
      
      
      document.getElementById('pause').innerHTML="Start"
      timer = false;
      sec=0;
      count=0;
      document.getElementById('count').innerHTML="<span>moves </span> <br>0"
      document.getElementById('sec').innerHTML="<span>Time</span><br>"+sec+"<span id='smallcase'>s</span>";
     
      }
  
  var count =0;

  function clickTile(row,column){
    var cell = document.getElementById("cell"+row+column);
    var tile = cell.className;
    if (tile!="tile16"){ 
         //Checking if white tile on the right
         if (column<4) {
           if ( document.getElementById("cell"+row+(column+1)).className=="tile16") {
             swapTiles("cell"+row+column,"cell"+row+(column+1));
             count++;
             document.getElementById('count').innerHTML="<span>Moves</span><br>"+count;
             return;
           }
         }
         if (column<3) {
          if ( document.getElementById("cell"+row+(column+2)).className=="tile16") {
            swapTiles("cell"+row+(column+2),"cell"+row+(column+1));
            swapTiles("cell"+row+column,"cell"+row+(column+1));
            count++;
            document.getElementById('count').innerHTML="<span>Moves</span><br>"+count;
            return;
          }
        }
        if (column<2) {
          if ( document.getElementById("cell"+row+(column+3)).className=="tile16") {
            swapTiles("cell"+row+(column+2),"cell"+row+(column+3));
            swapTiles("cell"+row+(column+2),"cell"+row+(column+1));
            swapTiles("cell"+row+column,"cell"+row+(column+1));
            count++;
            document.getElementById('count').innerHTML="<span>Moves</span><br>"+count;
            return;
          }
        }
         //Checking if white tile on the left
         if (column>1) {
           if ( document.getElementById("cell"+row+(column-1)).className=="tile16") {
             swapTiles("cell"+row+column,"cell"+row+(column-1));
             count++;
             document.getElementById('count').innerHTML="<span>Moves</span><br>"+count;
             return;
           }
         }
         if (column>2) {
          if ( document.getElementById("cell"+row+(column-2)).className=="tile16") {
            swapTiles("cell"+row+(column-2),"cell"+row+(column-1));
            swapTiles("cell"+row+column,"cell"+row+(column-1));
            count++;
            document.getElementById('count').innerHTML="<span>Moves</span><br>"+count;
            return;
          }
        }
        if (column>3) {
          if ( document.getElementById("cell"+row+(column-3)).className=="tile16") {
            swapTiles("cell"+row+(column-2),"cell"+row+(column-3));
            swapTiles("cell"+row+(column-2),"cell"+row+(column-1));
            swapTiles("cell"+row+column,"cell"+row+(column-1));
            count++;
            document.getElementById('count').innerHTML="<span>Moves</span><br>"+count;
            return;
          }
        }
           //Checking if white tile is above
         if (row>1) {
           if ( document.getElementById("cell"+(row-1)+column).className=="tile16") {
             swapTiles("cell"+row+column,"cell"+(row-1)+column);
             count++;
             document.getElementById('count').innerHTML="<span>Moves</span><br>"+count;
             return;
           }
         }
         if (row>2) {
          if ( document.getElementById("cell"+(row-2)+column).className=="tile16") {
            swapTiles("cell"+(row-2)+column,"cell"+(row-1)+column);
            swapTiles("cell"+row+column,"cell"+(row-1)+column);
            count++;
            document.getElementById('count').innerHTML="<span>Moves</span><br>"+count;
            return;
          }
        }
        if (row>3) {
          if ( document.getElementById("cell"+(row-3)+column).className=="tile16") 
          {
            swapTiles("cell"+(row-2)+column,"cell"+(row-3)+column);
            swapTiles("cell"+(row-2)+column,"cell"+(row-1)+column);
            swapTiles("cell"+row+column,"cell"+(row-1)+column);
            count++;
            document.getElementById('count').innerHTML="<span>Moves</span><br>"+count;
            return;
          }
        }
         //Checking if white tile is below
         if (row<4) {
           if ( document.getElementById("cell"+(row+1)+column).className=="tile16") {
             swapTiles("cell"+row+column,"cell"+(row+1)+column);
             count++;
             document.getElementById('count').innerHTML="<span>Moves</span><br>"+count;
             return;
           }
         } 
         if (row<3) {
          if ( document.getElementById("cell"+(row+2)+column).className=="tile16") {
            swapTiles("cell"+(row+2)+column,"cell"+(row+1)+column);
            swapTiles("cell"+row+column,"cell"+(row+1)+column);
            count++;
            document.getElementById('count').innerHTML="<span>Moves</span><br>"+count;
            return;
          }
        } 
        if (row<2) {
          if ( document.getElementById("cell"+(row+3)+column).className=="tile16") {
            swapTiles("cell"+(row+2)+column,"cell"+(row+3)+column);
            swapTiles("cell"+(row+2)+column,"cell"+(row+1)+column);
            swapTiles("cell"+row+column,"cell"+(row+1)+column);
            count++;
            document.getElementById('count').innerHTML="<span>Moves</span><br>"+count;
            return;
          }
        } 
    }
   
  }

  var sec = 0;
  var timer = false;

  function stop(){
    
    if(document.getElementById('pause').innerHTML=="Start"){
      document.getElementById('pause').innerHTML="Pause";
      timer = true;
      timeset();
    }
    else if(document.getElementById('pause').innerHTML=="Pause"){
      document.getElementById('pause').innerHTML="Resume";
      timer = false;
    }
    else if(document.getElementById('pause').innerHTML=="Resume"){
      document.getElementById('pause').innerHTML="Pause";
      timer = true;
      timeset()
    }
    
  }

  function timeset(){
    if(timer==true){
      sec++;
      document.getElementById('sec').innerHTML="<span>Time</span><br> "+sec +"<span id='smallcase'>s</span>";
      setTimeout("timeset()",1000);
    }

  }

  var count =0;

  function clickTile3x3(row,column,m){
    var cell = document.getElementById("cell"+row+column+"3x3");
    var tile = cell.className;
    if (tile!="tile163x3"){ 
      //Checking if white tile on the right
      if (column<m) {
        if ( document.getElementById("cell"+row+(column+1)+"3x3").className=="tile163x3") {
          swapTiles("cell"+row+column+"3x3","cell"+row+(column+1)+"3x3");
          count++;
          document.getElementById('count').innerHTML="<span>Moves</span><br>"+count;
          return;
        }
      }
      if(column<(m-1)){
        if ( document.getElementById("cell"+row+(column+2)+"3x3").className=="tile163x3") {
          swapTiles("cell"+row+(column+1)+"3x3","cell"+row+(column+2)+"3x3");
          swapTiles("cell"+row+column+"3x3","cell"+row+(column+1)+"3x3");
          count++;
          document.getElementById('count').innerHTML="<span>Moves</span><br>"+count;
          return;
        }
      }
      //Checking if white tile on the left
      if (column>1) {
        if ( document.getElementById("cell"+row+(column-1)+"3x3").className=="tile163x3") {
          swapTiles("cell"+row+column+"3x3","cell"+row+(column-1)+"3x3");
          count++;
          document.getElementById('count').innerHTML="<span>Moves</span><br>"+count;
          return;
        }
      }
      if (column>2) {
        if ( document.getElementById("cell"+row+(column-2)+"3x3").className=="tile163x3") {
          swapTiles("cell"+row+(column-2)+"3x3","cell"+row+(column-1)+"3x3");
          swapTiles("cell"+row+column+"3x3","cell"+row+(column-1)+"3x3");
          count++;
          document.getElementById('count').innerHTML="<span>Moves</span><br>"+count;
          return;
        }
      }
        //Checking if white tile is above
      if (row>1) {
        if ( document.getElementById("cell"+(row-1)+column+"3x3").className=="tile163x3") {
          swapTiles("cell"+row+column+"3x3","cell"+(row-1)+column+"3x3");
          count++;
          document.getElementById('count').innerHTML="<span>Moves</span><br>"+count;
          return;
        }
      }
      if (row>2) {
        if ( document.getElementById("cell"+(row-2)+column+"3x3").className=="tile163x3") {
          swapTiles("cell"+(row-2)+column+"3x3","cell"+(row-1)+column+"3x3");
          swapTiles("cell"+row+column+"3x3","cell"+(row-1)+column+"3x3");
          count++;
          document.getElementById('count').innerHTML="<span>Moves</span><br>"+count;
          return;
        }
      }
      //Checking if white tile is below
      if (row<m) {
        if ( document.getElementById("cell"+(row+1)+column+"3x3").className=="tile163x3") {
          swapTiles("cell"+row+column+"3x3","cell"+(row+1)+column+"3x3");
          count++;
          document.getElementById('count').innerHTML="<span>Moves</span><br>"+count;
          return;
        }
      } 
      if (row<(m-1)) {
        if ( document.getElementById("cell"+(row+2)+column+"3x3").className=="tile163x3") {
          swapTiles("cell"+(row+1)+column+"3x3","cell"+(row+2)+column+"3x3");
          swapTiles("cell"+row+column+"3x3","cell"+(row+1)+column+"3x3");
          count++;
          document.getElementById('count').innerHTML="<span>Moves</span><br>"+count;
          return;
        }
      } 
 }
  
       
}
  function three(){
    let four = document.getElementById('table')
    four.style.display= "none"
    let three = document.getElementById('gamebox3x3')
    three.style.display="block"
    let btn3x3 = document.getElementById('btn3x3')
    btn3x3.style.display = "block"
    let btn4x4 = document.getElementById('btn4x4')
    btn4x4.style.display = "none"
    let img = document.getElementById('gameboximg')
    img.style.display="none"
    let btnimg = document.getElementById('btnimg')
    btnimg.style.display = "none"
    let five = document.getElementById('gamebox5x5')
    five.style.display="none"
    let btn5x5 = document.getElementById('btn5x5')
    btn5x5.style.display = "none"
    let maincontent = document.getElementById('maincontent')
    maincontent.style.display = "block"
  }
  
  var count =0;

  function clickTileimg(row,column){
    var cell = document.getElementById("cell"+row+column+"img");
    var tile = cell.className;
    if (tile!="tile16img"){ 
         //Checking if white tile on the right
         if (column<3) {
           if ( document.getElementById("cell"+row+(column+1)+"img").className=="tile16img") {
             swapTiles("cell"+row+column+"img","cell"+row+(column+1)+"img");
             count++;
             document.getElementById('count').innerHTML="<span>Moves</span><br>"+count;
             return;
           }
         }
         if (column<2) {
          if ( document.getElementById("cell"+row+(column+2)+"img").className=="tile16img") {
            swapTiles("cell"+row+(column+2)+"img","cell"+row+(column+1)+"img");
            swapTiles("cell"+row+column+"img","cell"+row+(column+1)+"img");
            count++;
            document.getElementById('count').innerHTML="<span>Moves</span><br>"+count;
            return;
          }
        }
         //Checking if white tile on the left
         if (column>1) {
           if ( document.getElementById("cell"+row+(column-1)+"img").className=="tile16img") {
             swapTiles("cell"+row+column+"img","cell"+row+(column-1)+"img");
             count++;
             document.getElementById('count').innerHTML="<span>Moves</span><br>"+count;
             return;
           }
         }
         if (column>2) {
          if ( document.getElementById("cell"+row+(column-2)+"img").className=="tile16img") {
            swapTiles("cell"+row+(column-2)+"img","cell"+row+(column-1)+"img");
            swapTiles("cell"+row+column+"img","cell"+row+(column-1)+"img");
            count++;
            document.getElementById('count').innerHTML="<span>Moves</span><br>"+count;
            return;
          }
        }
           //Checking if white tile is above
         if (row>1) {
           if ( document.getElementById("cell"+(row-1)+column+"img").className=="tile16img") {
             swapTiles("cell"+row+column+"img","cell"+(row-1)+column+"img");
             count++;
             document.getElementById('count').innerHTML="<span>Moves</span><br>"+count;
             return;
           }
         }
         if (row>2) {
          if ( document.getElementById("cell"+(row-2)+column+"img").className=="tile16img") {
            swapTiles("cell"+(row-2)+column+"img","cell"+(row-1)+column+"img");
            swapTiles("cell"+row+column+"img","cell"+(row-1)+column+"img");
            count++;
            document.getElementById('count').innerHTML="<span>Moves</span><br>"+count;
            return;
          }
        }
         //Checking if white tile is below
         if (row<3) {
           if ( document.getElementById("cell"+(row+1)+column+"img").className=="tile16img") {
             swapTiles("cell"+row+column+"img","cell"+(row+1)+column+"img");
             count++;
             document.getElementById('count').innerHTML="<span>Moves</span><br>"+count;
             return;
           }
         } 
         if (row<2) {
          if ( document.getElementById("cell"+(row+2)+column+"img").className=="tile16img") {
            swapTiles("cell"+(row+2)+column+"img","cell"+(row+1)+column+"img");
            swapTiles("cell"+row+column+"img","cell"+(row+1)+column+"img");
            count++;
            document.getElementById('count').innerHTML="<span>Moves</span><br>"+count;
            return;
          }
        } 
    }
   
  }

  function img(){
    let four = document.getElementById('table')
    four.style.display= "none"
    let img = document.getElementById('gameboximg')
    img.style.display="block"
    let btnimg = document.getElementById('btnimg')
    btnimg.style.display = "block"
    let btn4x4 = document.getElementById('btn4x4')
    btn4x4.style.display = "none"
    let btn3x3 = document.getElementById('btn3x3')
    btn3x3.style.display = "none"
    let three = document.getElementById('gamebox3x3')
    three.style.display="none"
    let five = document.getElementById('gamebox5x5')
    five.style.display="none"
    let btn5x5 = document.getElementById('btn5x5')
    btn5x5.style.display = "none"

    let maincontent = document.getElementById('maincontent')
    maincontent.style.display = "block"

  }
    
  var count =0;

  function clickTile5x5(row,column){
    var cell = document.getElementById("cell"+row+column+"5x5");
    var tile = cell.className;
    if (tile!="tile255x5"){ 
         //Checking if white tile on the right
         if (column<5) {
           if ( document.getElementById("cell"+row+(column+1)+"5x5").className=="tile255x5") {
             swapTiles("cell"+row+column+"5x5","cell"+row+(column+1)+"5x5");
             count++;
             document.getElementById('count').innerHTML="<span>Moves</span><br>"+count;
             return;
           }
         }
         if (column<4) {
          if ( document.getElementById("cell"+row+(column+2)+"5x5").className=="tile255x5") {
            swapTiles("cell"+row+(column+2)+"5x5","cell"+row+(column+1)+"5x5");
            swapTiles("cell"+row+column+"5x5","cell"+row+(column+1)+"5x5");
            count++;
            document.getElementById('count').innerHTML="<span>Moves</span><br>"+count;
            return;
          }
        }
        if (column<3) {
          if ( document.getElementById("cell"+row+(column+3)+"5x5").className=="tile255x5") {
            swapTiles("cell"+row+(column+2)+"5x5","cell"+row+(column+3)+"5x5");
            swapTiles("cell"+row+(column+2)+"5x5","cell"+row+(column+1)+"5x5");
            swapTiles("cell"+row+column+"5x5","cell"+row+(column+1)+"5x5");
            count++;
            document.getElementById('count').innerHTML="<span>Moves</span><br>"+count;
            return;
          }
        }
        if (column<2) {
          if ( document.getElementById("cell"+row+(column+4)+"5x5").className=="tile255x5") {
            swapTiles("cell"+row+(column+4)+"5x5","cell"+row+(column+3)+"5x5");
            swapTiles("cell"+row+(column+2)+"5x5","cell"+row+(column+3)+"5x5");
            swapTiles("cell"+row+(column+2)+"5x5","cell"+row+(column+1)+"5x5");
            swapTiles("cell"+row+column+"5x5","cell"+row+(column+1)+"5x5");
            count++;
            document.getElementById('count').innerHTML="<span>Moves</span><br>"+count;
            return;
          }
        }
         //Checking if white tile on the left
         if (column>1) {
           if ( document.getElementById("cell"+row+(column-1)+"5x5").className=="tile255x5") {
             swapTiles("cell"+row+column+"5x5","cell"+row+(column-1)+"5x5");
             count++;
             document.getElementById('count').innerHTML="<span>Moves</span><br>"+count;
             return;
           }
         }
         if (column>2) {
          if ( document.getElementById("cell"+row+(column-2)+"5x5").className=="tile255x5") {
            swapTiles("cell"+row+(column-2)+"5x5","cell"+row+(column-1)+"5x5");
            swapTiles("cell"+row+column+"5x5","cell"+row+(column-1)+"5x5");
            count++;
            document.getElementById('count').innerHTML="<span>Moves</span><br>"+count;
            return;
          }
        }
        if (column>3) {
          if ( document.getElementById("cell"+row+(column-3)+"5x5").className=="tile255x5") {
            swapTiles("cell"+row+(column-2)+"5x5","cell"+row+(column-3)+"5x5");
            swapTiles("cell"+row+(column-2)+"5x5","cell"+row+(column-1)+"5x5");
            swapTiles("cell"+row+column+"5x5","cell"+row+(column-1)+"5x5");
            count++;
            document.getElementById('count').innerHTML="<span>Moves</span><br>"+count;
            return;
          }
        }
        if (column>4) {
          if ( document.getElementById("cell"+row+(column-4)+"5x5").className=="tile255x5") {
            swapTiles("cell"+row+(column-4)+"5x5","cell"+row+(column-3)+"5x5");
            swapTiles("cell"+row+(column-2)+"5x5","cell"+row+(column-3)+"5x5");
            swapTiles("cell"+row+(column-2)+"5x5","cell"+row+(column-1)+"5x5");
            swapTiles("cell"+row+column+"5x5","cell"+row+(column-1)+"5x5");
            count++;
            document.getElementById('count').innerHTML="<span>Moves</span><br>"+count;
            return;
          }
        }
           //Checking if white tile is above
         if (row>1) {
           if ( document.getElementById("cell"+(row-1)+column+"5x5").className=="tile255x5") {
             swapTiles("cell"+row+column+"5x5","cell"+(row-1)+column+"5x5");
             count++;
             document.getElementById('count').innerHTML="<span>Moves</span><br>"+count;
             return;
           }
         }
         if (row>2) {
          if ( document.getElementById("cell"+(row-2)+column+"5x5").className=="tile255x5") {
            swapTiles("cell"+(row-2)+column+"5x5","cell"+(row-1)+column+"5x5");
            swapTiles("cell"+row+column+"5x5","cell"+(row-1)+column+"5x5");
            count++;
            document.getElementById('count').innerHTML="<span>Moves</span><br>"+count;
            return;
          }
        }
        if (row>3) {
          if ( document.getElementById("cell"+(row-3)+column+"5x5").className=="tile255x5") {
            swapTiles("cell"+(row-2)+column+"5x5","cell"+(row-3)+column+"5x5");
            swapTiles("cell"+(row-2)+column+"5x5","cell"+(row-1)+column+"5x5");
            swapTiles("cell"+row+column+"5x5","cell"+(row-1)+column+"5x5");
            count++;
            document.getElementById('count').innerHTML="<span>Moves</span><br>"+count;
            return;
          }
        }
        if (row>4) {
          if ( document.getElementById("cell"+(row-4)+column+"5x5").className=="tile255x5") {
            swapTiles("cell"+(row-4)+column+"5x5","cell"+(row-3)+column+"5x5");
            swapTiles("cell"+(row-2)+column+"5x5","cell"+(row-3)+column+"5x5");
            swapTiles("cell"+(row-2)+column+"5x5","cell"+(row-1)+column+"5x5");
            swapTiles("cell"+row+column+"5x5","cell"+(row-1)+column+"5x5");
            count++;
            document.getElementById('count').innerHTML="<span>Moves</span><br>"+count;
            return;
          }
        }
         //Checking if white tile is below
         if (row<5) {
           if ( document.getElementById("cell"+(row+1)+column+"5x5").className=="tile255x5") {
             swapTiles("cell"+row+column+"5x5","cell"+(row+1)+column+"5x5");
             count++;
             document.getElementById('count').innerHTML="<span>Moves</span><br>"+count;
             return;
           }
         } 
         if (row<4) {
          if ( document.getElementById("cell"+(row+2)+column+"5x5").className=="tile255x5") {
            swapTiles("cell"+(row+2)+column+"5x5","cell"+(row+1)+column+"5x5");
            swapTiles("cell"+row+column+"5x5","cell"+(row+1)+column+"5x5");
            count++;
            document.getElementById('count').innerHTML="<span>Moves</span><br>"+count;
            return;
          }
        }
        if (row<3) {
          if ( document.getElementById("cell"+(row+3)+column+"5x5").className=="tile255x5") {
            swapTiles("cell"+(row+2)+column+"5x5","cell"+(row+3)+column+"5x5");
            swapTiles("cell"+(row+2)+column+"5x5","cell"+(row+1)+column+"5x5");
            swapTiles("cell"+row+column+"5x5","cell"+(row+1)+column+"5x5");
            count++;
            document.getElementById('count').innerHTML="<span>Moves</span><br>"+count;
            return;
          }
        } 
        if (row<2) {
          if ( document.getElementById("cell"+(row+4)+column+"5x5").className=="tile255x5") {
            swapTiles("cell"+(row+3)+column+"5x5","cell"+(row+4)+column+"5x5");
            swapTiles("cell"+(row+2)+column+"5x5","cell"+(row+3)+column+"5x5");
            swapTiles("cell"+(row+2)+column+"5x5","cell"+(row+1)+column+"5x5");
            swapTiles("cell"+row+column+"5x5","cell"+(row+1)+column+"5x5");
            count++;
            document.getElementById('count').innerHTML="<span>Moves</span><br>"+count;
            return;
          }
        }  
    }
   
  }
  function five(){
    let four = document.getElementById('table')
    four.style.display= "none"
    let three = document.getElementById('gamebox3x3')
    three.style.display="none"
    let btn3x3 = document.getElementById('btn3x3')
    btn3x3.style.display = "none"
    let btn4x4 = document.getElementById('btn4x4')
    btn4x4.style.display = "none"
    let img = document.getElementById('gameboximg')
    img.style.display="none"
    let btnimg = document.getElementById('btnimg')
    btnimg.style.display = "none"
    let btn5x5 = document.getElementById('btn5x5')
    btn5x5.style.display = "block"
    let five = document.getElementById('gamebox5x5')
    five.style.display="block"
    let leader = document.getElementById('content')
    leader.style.display = "none"
    let maincontent = document.getElementById('maincontent')
    maincontent.style.display = "block"
  }

  function leaderboard(){
    let leader = document.getElementById('content')
    leader.style.display = "inline-block"
    let maincontent = document.getElementById('maincontent')
    maincontent.style.display = "none"
  }

  // let first = localStorage.setItem("1","40s")
  // let second = localStorage.setItem("2","52s")
  // let third = localStorage.setItem("3","67s")
  // localStorage.clear()

  let first = localStorage.setItem("1","40s")
  let second = localStorage.setItem("2","52s")
  let third = localStorage.setItem("3","67s")

  const _C = document.querySelector('.table')
 
  
