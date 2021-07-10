var lastPosition_ofX,lastPosition_ofY
var currentPosition_of_touchX,currentPosition_of_touchY
canvas=document.getElementById("myCanvas")
ctx=canvas.getContext("2d")
color="chocolate"
widthOfLine=5
var width=screen.width
new_width=screen.width-70
new_height=screen.height-300
if (width<992){
    document.getElementById("myCanvas").width=new_width
    document.getElementById("myCanvas").height=new_height
    document.body.style.overflow="hidden"
}
canvas.addEventListener("touchstart",my_touch_start)
function my_touch_start(e)
{   console.log("my_touch_start")
    color=document.getElementById("color").value
    widthOfLine=document.getElementById("width_of_line").value
    lastPosition_ofX=e.touches[0].clientX-canvas.offsetLeft
    lastPosition_ofY=e.touches[0].clientY-canvas.offsetTop
}
canvas.addEventListener("touchmove",my_touch_move)
function my_touch_move(e){
    currentPosition_of_touchX=e.touches[0].clientX-canvas.offsetLeft
    currentPosition_of_touchY=e.touches[0].clientY-canvas.offsetTop
        ctx.beginPath()
        ctx.strokeStyle=color
        ctx.lineWidth=widthOfLine
        console.log("last position of X and Y coordinates is equal to")
        console.log("X= "+lastPosition_ofX+"Y= "+lastPosition_ofY)
        ctx.moveTo(lastPosition_ofX,lastPosition_ofY)
        console.log("current position of X and Y coordinates is equal to")
        console.log("X= "+currentPosition_of_touchX+"Y= "+currentPosition_of_touchY)
        ctx.lineTo(currentPosition_of_touchX,currentPosition_of_touchY)   
        ctx.stroke()
    lastPosition_ofX=currentPosition_of_touchX
    lastPosition_ofY=currentPosition_of_touchY
}
function clearArea(){
    ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height)
}