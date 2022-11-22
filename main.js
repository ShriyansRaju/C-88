var canvas=new fabric.Canvas("myCanvas")
player_x=10
player_y=10
var blockImageWidth=30
var blockImageHeight=30
var playerObject=""
var blockImageObject=""

function playerUpdate() {
    fabric.Image.fromURL("player.png", function(Img){
      playerObject=Img;
      playerObject.scaleToWidth(150)
      playerObject.scaleToHeight(140)
      playerObject.set({
        top:player_y,
        left:player_x
      });
      canvas.add(playerObject)
    })
}

function newImage(getImage){
fabric.Image.fromURL(getImage, function(Img){
blockImageObject=Img
blockImageObject.scaleToWidth(blockImageWidth)
blockImageObject.scaleToHeight(blockImageHeight)
blockImageObject.set({
  top:player_y,
  left:player_x
})
canvas.add(blockImageObject)
})
}
 window.addEventListener("keydown", mykeydown)

 function mykeydown(e){
  keyPressed=e.keyCode
  console.log(keyPressed)

  if(e.shiftKey==true && keyPressed=='80'){
    console.log("P and Shift key have been pressed")
    blockImageWidth=blockImageWidth+10
    blockImageHeight=blockImageHeight+10
    document.getElementById("myWidth").innerHTML=blockImageWidth
    document.getElementById("myHeight").innerHTML=blockImageHeight
  }

  if(e.shiftKey==true && keyPressed=='77'){
    console.log("M and the Shift key have been pressed")
    blockImageWidth=blockImageWidth-10
    blockImageHeight=blockImageHeight-10
    document.getElementById("myWidth").innerHTML=blockImageWidth
    document.getElementById("myHeight").innerHTML=blockImageHeight
  }

  if(keyPressed=='37'){
    left();
    console.log("left")
  }

  if(keyPressed=='38'){
    up();
    console.log("up")
  }
  
  if(keyPressed=='39'){
    right();
    console.log("right")
  }

  if(keyPressed=='40'){
    down();
    console.log("down")
  }

  if(keyPressed=='67'){
    newImage('cloud.jpg')
    console.log("c")
  }

  if(keyPressed=='68'){
    newImage('dark_green.png')
    console.log("d")
  }

  if(keyPressed=='71'){
    newImage('ground.png')
    console.log("g")
  }

  if(keyPressed=='76'){
    newImage('light_green.png')
    console.log("l")
  }

  if(keyPressed=='82'){
    newImage('roof.jpg')
    console.log("r")
  }

  if(keyPressed=='84'){
    newImage('trunk.jpg')
    console.log("t")
  }

  if(keyPressed=='85'){
    newImage('unique.png')
    console.log("u")
  }

  if(keyPressed=='87'){
    newImage('wall.jpg')
    console.log("w")
  }

  if(keyPressed=='89'){
    newImage('yellow_wall.png')
    console.log("y")
  }
 }

function left(){
  if(player_x>=0){
    player_x=player_x-blockImageWidth
    console.log("X is equal to" + player_x+"Y is equal to "+ player_y)
    console.log(blockImageWidth)
    canvas.remove(playerObject)
    playerUpdate()
}
}

function up(){
  if(player_y>=0){
    player_y=player_y-blockImageHeight
    console.log("X is equal to" + player_x+"Y is equal to "+ player_y)
    console.log(blockImageHeight)
    canvas.remove(playerObject)
    playerUpdate()
  }
}

function right(){
  if(player_x<=800){
    player_x=player_x+blockImageWidth
    console.log("X is equal to" + player_x+"Y is equal to "+ player_y)
    console.log(blockImageWidth)
    canvas.remove(playerObject)
    playerUpdate()
  }
}

function down(){
  if(player_y<=500){
    player_y=player_y+blockImageHeight
    console.log("X is equal to" + player_x+"Y is equal to "+ player_y)
    console.log(blockImageHeight)
    canvas.remove(playerObject)
    playerUpdate()
  }
}