


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



function Circle(x,y,dx,dy,radius){
  this.x=x
  this.y=y
  this.dx=dx
  this.dy=dy
  this.radius=radius
  
  this.draw = function(){
    c.beginPath();
    c.arc(this.x,this.y, this.radius , Math.PI *2, 0 , false);
    // radius = 20*Math.random();
    c.strokeStyle = `rgba(100,100,100,${(this.radius/20)})`;
    c.fillStyle = `rgba(100,100,100,${(this.radius/20)})`;
    c.fill();
    //c.shadowColor = `#ee22cc`;
    //c.shadowBlur='5'
    c.stroke();
  }
  this.update = function(){
    if(this.x>innerWidth-this.radius  || this.x<this.radius ) this.dx=-this.dx;
    if(this.y>innerHeight-this.radius  || this.y<this.radius ) this.dy=-this.dy;
    this.x+=this.dx;
    this.y+=this.dy;
    this.draw();
  }

 
}





var x= innerWidth*Math.random();
var y=innerHeight*Math.random();
var dx =20*(Math.random() - .5);
var dy=20*(Math.random() - .5);
var radius = 10;



var circles=[];

/*
for(var z=0;z<3;z++){
 circles.push(new Circle(innerWidth*Math.random()/8+20,innerHeight*Math.random()/8+20,20*(Math.random() - .5),20*(Math.random() - .5),20*Math.random()));
}
*/


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