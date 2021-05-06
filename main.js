//these 5 are varibles
nose_x=0;
nose_y=0;
diffirence=0;
rightWrist=0;
leftWrist=0;
function preload(){

}
function setup(){
    //in these two we have create canvas and we have set the position of the canvas
    canvas=createCanvas(450,480);
    canvas.position(660,100);
    //in these two we have add webcam to our website and we have set the size of the webcam
    video=createCapture(VIDEO);
    video.size(550,500);
    // loading poseNet
    poseNet=ml5.poseNet(video,modeLoaded);
    //running poseNet
    poseNet.on('pose',gotPoses)
}
function modeLoaded(){
    console.log("poseNet model is loaded");
}

function draw(){
document.getElementById("square_side").innerHTML="the width of the square is="+diffirence+"px";
background("#adaba6");
fill("#F90093");
stroke("#F90093");
square(nose_x,nose_y,diffirence)
}
function gotPoses (results){
    if (results.length > 0) {
        console.log(results);
        nose_x=results[0].pose.nose.x;
        nose_y=results[0].pose.nose.y;
        console.log(nose_x,nose_y);
        leftWristx=results[0].pose.leftWrist.x;
        rightWristx=results[0].pose.rightWrist.x;
        diffirence=floor(leftWristx-rightWristx)
    }
}