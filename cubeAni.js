$(document).ready(function(){
				
				var canvas = $("#Project3");
				var context = canvas.get(0).getContext("2d");
				
				var canvasWidth= 500;
				var canvasHeight = 500;
				var xPos = 20;
				var yPos =90;
				var xPos2 = 20;
				var yPos2 = 120;
				var xPos3 = 0;
				var yPos3 = 205;
				var xPos4 = -10;
				var yPos4 = 295;
				var xPos5 = 250;
				var yPos5 = 100;
				var xPosShip = 0;
				var yPosShip = 0;
				var speed = 1 ;
				var frameRate = speed;
				var image = new Image();
				var image2 = new Image();
				var image3 = new Image();
				var image4 = new Image();
				var spaceship = new Image();
				var background = new Image();
				var arrowDown = 40;
				var arrowUp = 38;
				var arrowRight = 39;
				var arrowLeft = 37;
				var maxSpeed=3;
				var minSpeed = 0.2;
				var scale = 1;
				
				
				
				
				
				//event Listeners
				
				$(window).keydown(function(e){
					var keyCode = e.keyCode;
					if(keyCode == arrowUp)
					{
						yPos5-=2;
					};
					
					if(keyCode==arrowDown)
					{
						yPos5++;
						
					};
					
					if(keyCode == arrowRight)
					{
						speed-=0.99;
						if(speed<=minSpeed)
						{
							speed=minSpeed;
						};
						
					};
					
					if(keyCode == arrowLeft)
					{
						speed+=0.04;
						if(speed>=maxSpeed)
						{
							speed=maxSpeed;
							
						};
					};
					
					if(keyCode == 65)
					{
						
						scale-=0.01;
						
					};
					
					if(keyCode == 68)
					{
						
						scale+=0.01;
					};
					
				});
				
				
					$(window).keydown(function(e){
					
					
					});
					//alert("hello world");
					
					//resize canvas function
					function resizeCanvas()
					{
						context.fillStyle = "rgb(0,0,0)";
						canvasWidth = 500;
						canvasHeight = 500;
						context.fillRect(0,0,canvasWidth,canvasHeight);
						
					
					};
					
					
					//resizeCanvas();
					
					
					
					//animtion loop
					function animate()
					{
							image.src = "images/brick.jpg";
							image4.src="images/brick2.jpg";
							image2.src = "images/station.jpg";
							image3.src = "images/scifi.jpg";
							spaceship.src="images/spaceship.png";
							background .src="images/scificity4.png";
							xPos+=speed;
							xPos2+=speed*3;
							xPos3+=speed;
							xPos4+=speed*3;
							xPosShip+=speed/2;
							context.clearRect(0,0,canvasWidth,canvasHeight);
							resizeCanvas();
							//context.fillStyle = "rgb(0,0,0)";
							context.drawImage(background,xPosShip,yPosShip,500,210);
							context.drawImage(background,xPosShip-500,yPosShip,500,210);
							context.drawImage(image,xPos,yPos,120,120);
							
							context.drawImage(image2,xPos3,yPos3,500,90);
							context.drawImage(image2,xPos3-500,yPos3,500,90);
							context.drawImage(spaceship,xPos5,yPos5,70*scale,70*scale);
							context.drawImage(image4,xPos2,yPos2,190,190);
							context.drawImage(image3,xPos4,yPos4,530,200);
							context.drawImage(image3,xPos4-500,yPos4,530,200);
							
							
							context.fillStyle = "rgb(255,255,255)";
							//context.fillRect(xPos,yPos,60,60);
							//context.fillRect(xPos2,yPos2,90,90);
							
							if(xPos>canvasWidth+10)
							{
								xPos = 0-20;
							}
							if(xPos2>=canvasWidth+10)
							{
								xPos2=0-90;
							}
							
							if(xPos3>=canvasWidth-10)
							{
								xPos3=0-10;
							}
							if(xPos4>=canvasWidth-10)
							{
								xPos4=0-10;
							}
							if(xPosShip>=canvasWidth-10)
							{
								xPosShip=0-10;
							}
							
							
							//bounds
							if(yPos5<=0)
							{
								yPos5=0;
							};
							
							if(yPos5>=200)
							{
								yPos5=200;
							};
						setTimeout(animate,frameRate);
					
					};
					
					animate();
					
				
				});