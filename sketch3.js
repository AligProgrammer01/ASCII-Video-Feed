
// code written based on coding train youtube channel

const density = "Ñ@A#W$98765Qiklmsndnjwojdowdwjdkwdk022n2210?!abc;:.[]]//\\                                    ";

let video;
let asciiDiv;

function setup() {
  noCanvas();
  video = createCapture(VIDEO);
  video.size(1, 1);
  
  asciiDiv = createDiv();
}

function draw() {
  video.loadPixels();
  let asciiImage = "";
  for (let j = 0; j < video.height; j++) {
    for (let i = 0; i < video.width; i++) {
      const pixelIndex = (i + j * video.width) * 4;
      const r = video.pixels[pixelIndex + 0];
      const g = video.pixels[pixelIndex + 1];
      const b = video.pixels[pixelIndex + 2];
      const avg = (r + g + b) / 3;
      const len = density.length;
      const charIndex = floor(map(avg, 0, 255, 0, len)); // maps all the 256 
      const c = density.charAt(charIndex);
      if (c == " ") asciiImage += "&nbsp;";
      else asciiImage = `${asciiImage}<p style="color:rgb(${r}, ${g}, ${b});">${c}</p>`;
    }
    asciiImage += '<br/>';
  }
  asciiDiv.html(asciiImage);
}

