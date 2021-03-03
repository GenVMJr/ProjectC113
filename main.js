function preload() {
}

function setup() {
  canvas = createCanvas(640, 480);
  canvas.position(110, 250);
  video = createCapture(VIDEO);
  video.hide();

  tint_color = "";
}
function draw() {
  image(video, 0, 0, 640, 480);
  tint(tint_color);
  fill(0, 128, 0);
  stroke(128, 128, 128);
    circle(100,100,80);
    fill(128, 0, 0);
    stroke(128, 128, 128);
    ellipse(220, 100, 120, 130, 5);
    fill(0, 0, 128);
    stroke(128, 128, 128);
    rect(350, 100, 170, 100, 40, 35, 40, 35);
  }

  function take_snapshot(){    
    save('name1.png');
  }
  
  function filter_tint()
  {
    tint_color = document.getElementById("color_name").value;
  }