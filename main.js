img = "";
img1= "";
img2= "";
img3= "";
img4="";
img5="";

function preload()
{
    img = loadImage("dog_cat.jpg");
    img1 = loadImage("image-1.jpg");
    img2 = loadImage("image-2.jpg");
    img3 = loadImage("image-3.jpg");
    img4 = loadImage("image-4.jpg");
    img5 = loadImage("image-5.jpg");
}
function setup()
{
    canvas = createCanvas(640, 420);
    canvas.center();
}

function draw()
{
    image(img,0,0,200,160);
    image(img1,210,0,200,160);
    image(img2,420,0,200,160);
    image(img3,0,200,200,160);
    image(img4,210,200,200,160);
    image(img5,420,200,200,160);
    fill("#FF0000");
    text("House",45,75);
    noFill();
    stroke("#FF0000");
    rect(30,60,450,350);
    
}