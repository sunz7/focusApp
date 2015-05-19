angular.module('starter.controllers')

.controller('PlayCtrl', function($scope, Acts) {
  $scope.minutes = 30;
  $scope.play = true;
  $scope.button_clicked = false;
  $scope.canvas=document.getElementById('mycanvas');

  $scope.init = function(){
   
    //======= reset canvas
    var ctx=$scope.canvas.getContext('2d');
    var cWidth=$scope.canvas.width;
    var cHeight=$scope.canvas.height;
    ctx.fillStyle="#FFFFFF";
    ctx.fillRect(0,0,cWidth,cHeight);
    
    //========== base arc
    ctx.beginPath();
    ctx.strokeStyle="#EAEFBE";
    ctx.lineWidth=14;
    ctx.arc(cWidth/2,cHeight/2,100,(Math.PI/180)*0,(Math.PI/180)*360,false);   
    ctx.stroke();
    ctx.closePath();

    //=========== draw image
    var img = new Image();
    img.onload = function() {
      ctx.drawImage(img,cWidth/4,cHeight/4,120,120);
    } 
    img.src = 'https://raw.githubusercontent.com/sunz7/focusApp/master/www/img/u18.png';
  }

  // forward to failure page
  $scope.stopTimer = function() {
    $scope.play = false;
  }

  //timer code
  $scope.startTimer = function(minutes){

  var ctx=$scope.canvas.getContext('2d');
  var cWidth=$scope.canvas.width;
  var cHeight=$scope.canvas.height;
  
  
  var min=minutes - 1;
  var sec= 60;
  var counter=0;
  var angle=270;
  var inc=360/(minutes*60); 

  $scope.button_clicked = true;

  function drawScreen() {
  
    //======= reset canvas
    
    ctx.fillStyle="#FFFFFF";
    ctx.fillRect(0,0,cWidth,cHeight);
    
    //========== base arc
    
    ctx.beginPath();
    ctx.strokeStyle="#EAEFBE";
    ctx.lineWidth=14;
    ctx.arc(cWidth/2,cHeight/2,100,(Math.PI/180)*0,(Math.PI/180)*360,false);
    ctx.stroke();
    ctx.closePath();
    
    //========== dynamic arc
    
    ctx.beginPath();
    ctx.strokeStyle="#1EB89D";
    ctx.lineWidth=14;
    ctx.arc(cWidth/2,cHeight/2,100,(Math.PI/180)*270,(Math.PI/180)*angle,false);
    ctx.stroke();
    ctx.closePath();
    
    //====== Labels
    
    var textColor='#646464';
    var textSize="12";
    var fontFace="helvetica, arial, sans-serif";
    
    ctx.fillStyle=textColor;
    ctx.font=textSize+"px "+fontFace;
    ctx.fillText('MIN',cWidth/2-46,cHeight/2-40);
    ctx.fillText('SEC',cWidth/2+25,cHeight/2-15);
    
    //====== Values
    
    
    
    ctx.fillStyle='#6292ae';
    
    // if (min>9) {
    //   ctx.font='84px '+fontFace;
    //   ctx.fillText('9' ,cWidth/2-55,cHeight/2+35);
      
    //   ctx.font='24px '+fontFace;
    //   ctx.fillText('+' ,cWidth/2-72,cHeight/2-5);      
    // }
    // else {
      ctx.font='60px '+fontFace;
      ctx.fillText(min ,cWidth/2-60,cHeight/2+35);
    // }
    
    ctx.font='30px '+fontFace;
    if (sec<10) {
      ctx.fillText('0'+sec,cWidth/2+10,cHeight/2+35);
    } 
    else {
      ctx.fillText(sec,cWidth/2+10,cHeight/2+35);
    }
    
    if($scope.play) {
      if (sec<=0 && counter<minutes*60) {
      angle+=inc;
      counter++;
      min--;
      sec=59; 
    } else if (counter>=minutes*60) {
        sec=0;
        min=0;
      } else {
        angle+=inc;
        counter++;
        sec--;
      }
    }

    //forward to success page!    
  }
  
  setInterval(drawScreen,1000);
  
};

});