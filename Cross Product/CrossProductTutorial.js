/**
 * @author Gabe Webb <gwebb@unca.edu>
 * @author Owen Feldmann <ofeldman@unca.edu>
 * Assignment 2: Vector Operations Tutorial Site: Cross Product
 * Last Modified: 2/15/2022
 */

var canvas;
var canvasContext;
var canvasWidth;
var canvasHeight;

/**
 * points[0] is the start point of the first vector.
 * points[1] is the end point of the first vector.
 * points[2] and points[3] coorespond to the second vector.
 */
var points = [null, null, null, null];
/**
 * points[0][x] gives the x coordinate of the first point
 */
var x = 0, y = 1, z = 2;

/**
 * Prepares canvas variables and canvas on page load
 * @returns {undefined}
 */
function setup()
{
    canvas = document.getElementById('canvas');
    if (!canvas){
        console.log('Failed to retrieve the <canvas> element named pointCanvas');
        return;
    }
	
    canvasWidth  = canvas.width;
    canvasHeight = canvas.height;
    canvasContext = canvas.getContext('2d');
	canvasSetup(canvasContext);
}

/**
 * 
 * @param {DOM event} event
 */
function clickCanvas(event)
{
	//console.log(event);
	/**
	 * Find the clicked coordinates on the canvas and
	 * convert to Cartesian coordinates with the origin at the bottom left corner.
	 */
	var canvasX = event.offsetX;
	var canvasY = event.offsetY;
	
	var coorX = canvasX;
	var coorY = canvasHeight - canvasY;
	//console.log(canvasX + " " + canvasY + "-->" + coorX + " " + coorY);
	
	//check if points are full
	if(points[points.length-1] != null)
	{//empty points and reset canvas
		for(var i = 0; i < points.length; i++)
		{
			points[i] = null;
			canvasSetup(canvasContext);
		}
	}
	
	//store coords as next point
	for(var i = 0; i < points.length; i++)
	{
		if(points[i] != null) continue;//skip to first empty point
		
		points[i] = [coorX, coorY, 0];
		var pointSize = 5;//bigger point size used like an arrow cap
		
		//draw a vector for every second point
		if(i % 2 == 1)
		{
			pointSize = 15;
			canvasContext.lineWidth = 5;
			canvasContext.strokeStyle = 'rgba(0,0,0,1.0)';//black
			
			canvasContext.beginPath();
				canvasContext.moveTo(points[i-1][x], 500 - points[i-1][y]);
				canvasContext.lineTo(canvasX, canvasY);
				canvasContext.stroke();
			canvasContext.closePath();
		
			canvasContext.fillStyle = 'rgba(0,0,255,1.0)';//blue
			canvasContext.font = '15px Arial';
			var vectorName = ((i==3) ? "u" : "v");
			canvasContext.fillText(vectorName, canvasX + pointSize, canvasY + pointSize);
		}
		
		canvasContext.fillStyle = 'rgba(0,0,0,1.0)';//black
		canvasContext.fillRect(canvasX - pointSize/2, canvasY - pointSize/2, pointSize, pointSize);
		
		break;
	}

	
	//if all points are placed, draw vector information.
	if(points[points.length-1] != null)
	{
		var v = PointPointSubtraction(points[0],points[1]);
		var u = PointPointSubtraction(points[2],points[3]);
		var crossProduct = CrossProduct(v, u);
		var text = "v = ["+v[x]+", "+v[y]+", "+v[z]+"], u = ["+u[x]+", "+u[y]+", "+u[z]+"], v??u = [" +crossProduct[0]+
			", " +crossProduct[1]+ ", "+crossProduct[2]+ "]";
		
		canvasContext.fillStyle = 'rgba(0,0,255,1.0)';//blue
		canvasContext.font = '15px Arial';
		canvasContext.fillText(text, 50, canvasHeight - 30);
	}
}

/**
 * Create the frame and background for the canvas. Clears everything drawn.
 * @param {type} canvasContext   -- assumes a 2d context from canvas  
 * @returns {undefined}  -- this is a void method
 */
function canvasSetup(canvasContext)
{
	canvasContext.strokeStyle = 'rgba(100,50,0,1.0)';
    canvasContext.fillStyle = 'rgba(255,255,255,1.0)'; //white
    canvasContext.shadowBlur = 10;
    canvasContext.shadowColor = "black";
    canvasContext.lineWidth = 15;
	
    canvasContext.fillRect(0, 0, canvasWidth, canvasHeight); //background
    canvasContext.strokeRect(0, 0, canvasWidth, canvasHeight); //frame
}
