var trex, trex_correndo;
var solo, soloImg, soloInvisivel;
var imgNuven
var obs1,obs2,obs3,obs4,obs5,obs6;
function preload(){
  trex_correndo = loadAnimation("trex1.png", "trex3.png", "trex4.png");
  soloImg = loadImage("solo2.png");
  imgNuven=loadImage('nuvem.png')
  obs1=loadImage('obstaculo1.png')
  obs2=loadImage('obstaculo2.png')
  obs3=loadImage('obstaculo3.png')
  obs4=loadImage('obstaculo4.png')
  obs5=loadImage('obstaculo5.png')
  obs6=loadImage('obstaculo6.png') 
}

function setup(){
  createCanvas(600,200);
  
  //cria trex
  trex = createSprite(50,100,20,50);
  trex.addAnimation("correndo", trex_correndo);
  trex.scale = 0.5;
  
  solo = createSprite(300,170,1200,5);
  solo.addImage(soloImg);
  
  soloInvisivel = createSprite(300,180,1200,5);
  soloInvisivel.visible = false;
  
}

function draw(){
  background("white");
  
  //pulo
  if (keyDown("space") && trex.y > 153){
    trex.velocityY = -22;
  }
  
  //gravidade
  trex.velocityY = trex.velocityY + 1.8;
  
  trex.collide(soloInvisivel);
  solo.velocityX = -6;
  
  if (solo.x < 0){
    solo.x = solo.width/2;
  }
  
  //console.log(trex.y);

  //gerando nuvens
  gerarNuvens();
  gerarCactos();
  drawSprites();
}

//definição da função de gerar nuvens
function gerarNuvens(){
 
  
  if (frameCount%60===0) {
    var nuven=createSprite(650,Math.round(random(40,120)))
    nuven.addImage(imgNuven)
    nuven.scale=0.6
    nuven.velocityX=-3
    trex.depth=nuven.depth
    trex.depth+=1
    nuven.lifetime=230
  }

}
function gerarCactos(){
  if (frameCount%60===0) {
   var cactos=createSprite(650,150 )
   var num=Math.round(random(1,6))
   switch (num) {
     case 1: cactos.addImage(obs1)
       break;
     case 2: cactos.addImage(obs2)
       break;
     case 3: cactos.addImage(obs3)
       break;
     case 4: cactos.addImage(obs4)
       break;
     case 5: cactos.addImage(obs5)
       break;
     case 6: cactos.addImage(obs6)
       break;
       
     default:
       break;
   }
    cactos.velocityX=-6
    cactos.scale=0.6
    cactos.lifetime=230
  }
}