angular.module('starter.controllers')

.controller('PlayCtrl', function($scope, Acts, $stateParams, $rootScope,$state) {
  
  var minutes = $stateParams.mins;
  var act = Acts.get($stateParams.actId);
  if(minutes == 0) {
    minutes = 30;
  }

  $scope.min = minutes;
  $scope.play = false;

  // forward to failure page
  $scope.stopTimer = function() {
    clearInterval($scope.timer);
    var canvas = document.getElementById('mycanvas');
  var ctx= canvas.getContext('2d');
  var cWidth= canvas.width;
  var cHeight= canvas.height;
      ctx.fillStyle="#FFFFFF";
    ctx.fillRect(0,0,cWidth,cHeight);

    $scope.play = false;
    var remain = minutes-$scope.min;
    $state.go("failure", {actId: $stateParams.actId, mins: remain});
  };

  //timer code

 $scope.startTimer = function() {
  $scope.play = true;
  var canvas = document.getElementById('mycanvas');
  var ctx= canvas.getContext('2d');
  var cWidth= canvas.width;
  var cHeight= canvas.height;

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
    ctx.strokeStyle="#FFCA44";
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
    $scope.min = min;
    
    //forward to success page!
    if(min == 0 && sec == 0) {
      act.completed = act.completed + minutes/60;
      Acts.updateOne(act);
      $rootScope.$broadcast('addNewActSuccess');
      $state.go("success", {actId: $stateParams.actId, mins: minutes}); 
   } 

  }
  
  // drawScreen()
  $scope.timer = setInterval(drawScreen,1000);  
  }
});