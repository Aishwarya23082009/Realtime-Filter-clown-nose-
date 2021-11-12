function preload(){
clownImage = loadImage("https://i.postimg.cc/W4XzKH79/clown-nose-circle-hd-png-download-removebg-preview.png");
}

function setup(){
    canvas = createCanvas(300,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();

    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}

function draw(){
    image(video, 0,0,300,300);
    image(clownImage,noseX,noseY,50,40)
}

function take_snapshot(){
    console.log("snapshot take!!");
    save("my_nose_clown_picture.png");
}

function modelLoaded(){
    console.log("PoseNet Loaded!!");
}

noseX=0;
noseY=0;

function gotPoses(results){
if(results.length > 0){
    console.log(results);
    noseX= results[0].pose.nose.x-25;
    noseY= results[0].pose.nose.y-15;
    console.log("Nose x="+ results[0].pose.nose.x);
    console.log("Nose y="+ results[0].pose.nose.y);
}}