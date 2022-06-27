var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

canvas.width = window.innerWidth -100;
canvas.height = window.innerHeight -100;



var dino = {
x:10,
y:200,
width: 50,
height :50,
draw() {
    ctx.fillStyle ='green';
    ctx.fillRect(this.x,this.y,this.width,this.height);
 } 

}
  
dino.draw()

/*애니메이션을 만드려면 1초에 60번 x++ 해줘야함  
dino.x +=1; */

class Cactus  {
    constructor(){
        this.x = 500;
        this.y =200;
        this.width =50;
        this.heigth =50;

    }
    daraw(){

        ctx.fillStyle ='red';
        ctx.fillRect (this.x, this.y , this.width, this.heigth);

        
    }
}
 var cactus = new cactus ();
 cactus.draw();


  var timer = 0 ;
  var cactusX= [];

 function basic(){
        requestAnimationFrame(basic )

    timer++; 

    ctx.clearRect(0,0, canvas.width, canvas.heigth)

    if (timer % 60 === 0 )  {
        var cactus = new Cactus();
        cactusX.push(cactus) ; 
    
    }
     cactusX.forEach((a)=>{
            a.x--; 
            a.draw();
        })
        
        dino.draw()
    }


        
       

 basic();