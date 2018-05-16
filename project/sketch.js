var img, mySound;

function preload() { //need to preload all assets
    img = loadImage('../assets/Godzilla.png');
    soundFormats('mp3');
    mySound = loadSound('../assets/godzilla.mp3');
}

function setup() {
    // put setup code here
    createCanvas(1000, 500);
   
}

function draw() {
    sunset(); //call sunset function
    bkground(); //call background function
    midground(); //call midground function
    pushIt(); //call pushIt function, allows me to put Godzilla in midground
    foreground(); //call foreground function
}

function sunset() {
    //I split the canvas into 6 sections. The sections all correspond to a specific background collor. The background only changes when the mouse is at a certain area

    //I made a sun that also follows the mouse location and as you bring the mouse to the right the sun "sets"
    var yPos;
    if (mouseX < 166) { 
        background(219, 127, 142);

        yPos = map(pmouseY, 0, height, 100, 100); //create a new range so the ellipse has a unique feel
        noStroke();
        fill(232, 235, 239);
        ellipse(mouseX, yPos, 200, 200); //sun follows the location of mouseX and mouseY
    } else if (mouseX < 332 && mouseX >= 166) { // fixed the bug where if im at pixel 166, it would go to the else stmnt
        background(178, 115, 146);

        yPos = map(pmouseY, 0, height, 100, 150);
        noStroke();
        fill(232, 235, 239);
        ellipse(mouseX, yPos, 200, 200);
    } else if (mouseX < 498 && mouseX >= 332) {// fixed the bug where if im at pixel 166, it would go to the else stmnt
        background(120, 104, 149);

        yPos = map(pmouseY, 0, height, 100, 200);
        noStroke();
        fill(232, 235, 239);
        ellipse(mouseX, yPos, 200, 200);
    } else if (mouseX < 664 && mouseX >= 498) {// fixed the bug where if im at pixel 166, it would go to the else stmnt
        background(70, 83, 135);

        yPos = map(pmouseY, 0, height, 100, 250);
        noStroke();
        fill(232, 235, 239);
        ellipse(mouseX, yPos, 200, 200);
    } else if (mouseX < 830 && mouseX >= 664) {// fixed the bug where if im at pixel 166, it would go to the else stmnt
        background(34, 40, 84);

        yPos = map(pmouseY, 0, height, 100, 300);
        noStroke();
        fill(232, 235, 239);
        ellipse(mouseX, yPos, 200, 200);
    } else {
        background(42, 43, 68);

        //I wanted to make stars and decided to make a bunch of them twinkle when the sun is all the way down and is dark

        stroke(255, 255, 255);
        strokeWeight(1.5); //smaller star size
        for (var i = 0; i < 50; i++) {
            point(random(0, 1000), random(0, 250));
        }
    }

}

function foreground() {

    //These are all the small buildings in the blue color in front of all the other buildings

    fill(68, 93, 135);
    noStroke();
    rect(0, 400, 60, 299);

    rect(50, 420, 60, 299);

    quad(100, 450, 170, 400, 170, 500, 100, 500);

    rect(170, 300, 70, 299);
    rect(186, 250, 2, 299);
    rect(185, 270, 4, 299);
    rect(184, 290, 6, 299);
    rect(220, 230, 2, 299);
    rect(219, 260, 4, 299);
    rect(218, 290, 6, 299);

    rect(200, 350, 75, 299);

    rect(270, 450, 70, 299);

    rect(330, 380, 50, 299);
    rect(370, 350, 50, 299);
    rect(420, 365, 10, 299);
    rect(430, 380, 30, 299);
    triangle(370, 350, 395, 300, 420, 350);
    rect(460, 420, 50, 299);

    rect(500, 393, 70, 299);

    rect(570, 350, 40, 299);
    rect(610, 300, 50, 300);
    rect(633, 265, 3, 299);

    quad(660, 370, 720, 400, 720, 500, 660, 500);
    rect(710, 450, 55, 300);

    rect(760, 480, 70, 300);

    rect(830, 370, 50, 299);
    rect(880, 390, 10, 299);

    rect(890, 400, 60, 299);
    quad(940, 450, 1000, 400, 1000, 500, 940, 500);
    rect(970, 400, 3, 299);
}

function midground() {

    //These buildings are in the middle... they're light blue

    fill(130, 159, 206);
    noStroke();
    rect(50, 300, 50, 299);
    rect(150, 200, 70, 299);
    rect(185, 165, 3, 299);
    quad(220, 300, 250, 330, 250, 500, 220, 500);
    rect(270, 250, 70, 299);
    rect(350, 150, 50, 299);
    rect(420, 265, 10, 299);
    rect(430, 180, 30, 299);
    rect(460, 360, 50, 299);
    ellipse(480, 360, 60);
    triangle(479, 320, 482, 290, 485, 320);
    rect(477, 320, 10, 299);
    rect(475, 325, 15, 299);
    quad(660, 270, 710, 300, 710, 500, 660, 500);
    rect(690, 290, 20, 300);
    rect(760, 280, 50, 300);
    rect(820, 170, 70, 399);
    rect(880, 190, 10, 299);
    rect(890, 300, 50, 299);
}

function bkground() {

    //These are the super tall buildings at the back. They're dark blue

    fill(5, 21, 48);
    noStroke();

    rect(0, 170, 30, 500);

    rect(30, 350, 65, 500);

    rect(95, 150, 75, 500);
    rect(100, 130, 60, 500);
    rect(110, 120, 50, 500);
    rect(145, 130, 20, 500);
    rect(120, 100, 10, 500);
    rect(145, 105, 10, 500);
    rect(130, 90, 20, 500);
    triangle(130, 90, 140, 80, 150, 90);
    rect(139, 70, 2, 500);

    rect(245, 90, 65, 500);

    rect(330, 100, 65, 500);

    rect(410, 260, 70, 500);

    rect(500, 200, 65, 500);

    rect(590, 90, 40, 500);
    triangle(607, 90, 610, 20, 613, 90);
    ellipse(610, 85, 30, 4);

    rect(700, 250, 65, 500);
    triangle(700, 250, 740, 220, 765, 250);

    rect(780, 150, 65, 500);
    rect(785, 145, 55, 500);
    rect(790, 140, 45, 500);
    rect(795, 135, 35, 500);
    rect(800, 130, 25, 500);
    rect(805, 110, 15, 500);
    ellipse(813, 110, 14, 25);
    ellipse(812, 110, 14, 25);
    triangle(797, 250, 813, 40, 825, 250);


    rect(920, 200, 65, 500);
}

function pushIt() {
    imageMode(CENTER);
    if (keyIsPressed === true) {
        image(img, 400, 300, 500, 500); //displays image when key is pressed at specified loc
        mySound.setVolume(0.1); //the original vol was waaay to loud... so broght it down 
        mySound.playMode('untilDone'); //the sound will keep playing unless I specify when to play
        mySound.play();
    }
    else{
        mySound.stop(); //sound ends when key is released
    }
}