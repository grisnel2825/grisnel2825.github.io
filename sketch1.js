function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  
  //Draw Head 
  fill('lightpink')
  ellipse(200, 200, 200, 300)



  //Eyes
  circle (160, 139, 20)
  fill(0,0,255 )
  fill('white')
  ellipse (161,145,40,65)
  ellipse (234, 145,40,65)
  fill('lightgreen')
    ellipse (234, 145, 20,40)
  ellipse (161,145,20,40)
  
  //Nose 
  fill('lightblue')
  circle (199, 200, 35)
  
  
//Mouth
fill('lightpink')
  arc(200, 250, 80, 50, 0, PI)
  
  //hat
  fill('gray')
  rect(107,82,180,20)
  fill('grey')
  rect(140, 13, 120, 68)
  
  //
  fill('white')
  circle (135,210, 50)
  circle (265, 210, 50)
  
  
  
  
  //Show Mouse coordinates
  textSize(20)
  strokeWeight(1)
  fill(0,0,0);
  text('Mouse X:  '+ mouseX,0,20);
  text('Mouse Y:  '+ mouseY,0,40); 
  
}