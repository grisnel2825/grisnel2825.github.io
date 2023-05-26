function setup() {
  createCanvas(300, 300);
}

function draw() {
  background('black');
  line(100, 0, 100, 300);
  line(200, 0, 200, 300);
  
  
  if (mouseX > 0 && mouseX <= 50) {
    background ('pink')
    fill('white');
    rect(mouseX, mouseY, 40, 40);
  }
  
  else if (mouseX > 50 && mouseX <= 100) {
    background ('lightblue')
    fill('pink');
    ellipse(mouseX, mouseY, 40, 40);
  }
  
  else if (mouseX > 100 && mouseX <= 150) {
    background ('lightgreen')
    fill('white');
    rect(mouseX, mouseY, 40, 40);
  }
  
   else if (mouseX > 150 && mouseX <= 200) {
    background ('lightblue')
    fill('white');
    circle(mouseX, mouseY, 40, 40);
  }
  
     else if (mouseX > 200 && mouseX <= 250) {
    background ('lightpink')
    fill('white');
    rect(mouseX, mouseY, 40, 40);
  }
  
       else if (mouseX > 250 && mouseX <= 300) {
    background ('white')
    fill('lightblue');
    rect(mouseX, mouseY, 40, 40);
  }
  
  

  

  
  
  







}