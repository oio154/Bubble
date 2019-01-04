

var canv = document.querySelector("canvas");

canv.width = window.innerWidth;
canv.height = window.innerHeight;


var c = canv.getContext('2d');
//c.fillRect(10,10,10,10);

/*
for(var i=0;i<600;i++){
  c.beginPath();
  c.arc(window.innerWidth*Math.random(),window.innerHeight*Math.random(), 16 , Math.PI *2, 0 , false);
  c.stroke();
}




  c.beginPath();
  c.arc(window.innerWidth*Math.random(),window.innerHeight*Math.random(), 16 , Math.PI *2, 0 , false);
  c.stroke();
*/


/**
 * 
 * @param {*} x 
 * @param {*} y 
 * @param {*} dx 
 * @param {*} dy 
 * @param {*} radius 
 */
function Circle(x,y,dx,dy,radius){
  this.x=x
  this.y=y
  this.dx=dx
  this.dy=dy
  this.radius=radius
  
  // this.draw = function(){
  //   c.beginPath();
  //   c.arc(this.x,this.y, this.radius , Math.PI *2, 0 , false);
  //   // radius = 20*Math.random();
  //   c.strokeStyle = `rgba(100,100,100,${(this.radius/20)})`;
  //   c.fillStyle = `rgba(100,100,100,${(this.radius/20)})`;
  //   c.fill();
  //   //c.shadowColor = `#ee22cc`;
  //   //c.shadowBlur='5'
  //   c.stroke();
  // }



  // this.update = function(){
  //   if(this.x>innerWidth-this.radius  || this.x<this.radius ) this.dx=-this.dx;
  //   if(this.y>innerHeight-this.radius  || this.y<this.radius ) this.dy=-this.dy;
  //   this.x+=this.dx;
  //   this.y+=this.dy;
  //   this.draw();
   
  // }
 
 
}


Circle.prototype.update = function(){
    if(this.x>innerWidth  || this.x<0 ) this.dx=-this.dx;
    if(this.y>innerHeight  || this.y<0 ) this.dy=-this.dy;
    //gravity
    // if(Math.round(this.dy)==0) this.dy++;
    // if(this.dy>0) this.dy=this.dy*1.1
    // if(this.dy<0) this.dy=this.dy/1.1
    // console.log(this.y)
    this.x+=this.dx/22;
    this.y+=this.dy/22;
    this.draw();
}


Circle.prototype.draw = function(){
    c.beginPath();
    c.arc(this.x,this.y, this.radius , Math.PI *2, 0 , false);
    c.strokeStyle = `rgba(100,100,100,.2`;
    c.fillStyle = `rgba(200,200,200,.1)`;
    c.fill();
    c.stroke();
  }






var x= innerWidth*Math.random();
var y=innerHeight*Math.random();
var dx =20*(Math.random() - .5);
var dy=20*(Math.random() - .5);
var radius = 10;

 

var circles=[];


for(var z=0;z<10;z++){
 circles.push(new Circle(innerWidth*Math.random(),innerHeight*Math.random(),20*(Math.random() - .5),20*(Math.random() - .5),400+380*Math.random()));
}



function animate(){
  
  requestAnimationFrame(animate);
  c.clearRect(0,0,innerWidth, innerHeight);
  circles.forEach(el=>el.update())
}


animate();

window.addEventListener("resize",()=>{
  canv.height=window.innerHeight;
  canv.width=window.innerWidth;
});


document.querySelector("canvas").addEventListener("click", (e)=>{
    console.dir(e);
    circles.push(new Circle(e.clientX,e.clientY,20*(Math.random() - .5),20*(Math.random() - .5),20*Math.random()));
} );