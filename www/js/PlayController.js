angular.module('starter.controllers')

.controller('PlayCtrl', function($scope, $stateParams, $state) {
  var minutes = $stateParams.mins;
  if(minutes == 0) {
    minutes = 30;
  }
  $scope.canvas=document.getElementById('mycanvas');
  $scope.play=true;

  // forward to failure page
  $scope.stopTimer = function() {
    $scope.play = false;
    $state.go('tab.failure');
  };

  //timer code

  var ctx=$scope.canvas.getContext('2d');
  var cWidth=$scope.canvas.width;
  var cHeight=$scope.canvas.height;

  var min=minutes - 1;
  var sec= 60;
  var counter=0;
  var angle=270;
  var inc=360/(minutes*60); 

  function drawScreen() {
  
    //======= reset canvas
    
    ctx.fillStyle="#FFFFFF";
    ctx.fillRect(0,0,cWidth,cHeight);
    
    //========== base arc
    
    ctx.beginPath();
    ctx.strokeStyle="#0FABE0";
    ctx.lineWidth=14;
    ctx.arc(cWidth/2,cHeight/2,100,(Math.PI/180)*0,(Math.PI/180)*360,false);
    ctx.stroke();
    ctx.closePath();
    
    //========== dynamic arc
    
    ctx.beginPath();
    ctx.strokeStyle="#FCBF4A";
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
    
    
    
    ctx.fillStyle='#0FABE0';
    
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

});