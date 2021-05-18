
window.addEventListener("load", ()=>{

    var outer = document.createElement("div");

    outer.style.backgroundColor = "#242526";
    outer.style.position = "fixed";
    outer.style.width = "320px";
    outer.style.height = "610px";
  	outer.style.right = "15px";
  	outer.style.top = "110px";
  	outer.style.borderRadius = "7px";
    outer.style.display = "flex";
    outer.style.flexDirection = "column";
    outer.style.alignContent = "center";

    var supcont = document.createElement("div");
    supcont.width = "290px";
    supcont.height = "600px";
    supcont.style.display = "flex";
    supcont.style.flexDirection = "column";
    supcont.style.alignContent = "center";

    var titl = document.createElement('p');
    titl.innerHTML = "Draw";
    titl.style.color = "#cdd2d9";
    titl.style.fontWeight = "bolder";
    titl.style.fontSize = "48px";
    titl.style.marginLeft = "30%";
    titl.style.marginRight = "30%";
    titl.style.marginTop = "30px";
    titl.style.marginBottom = "10px";

    var canvas = document.createElement('canvas');
    canvas.id = "drawboard";
    canvas.style.width = "290px";
    canvas.style.height = "410px";
  	canvas.width = 290;
  	canvas.height = 410;
    canvas.style.backgroundColor = "#18191a";
    //canvas.style.backgroundColor = "white";
    canvas.style.marginLeft = "10px";
    canvas.style.marginRight = "10px";
    canvas.style.borderRadius = "7px";
    canvas.style.boxShadow = "none";

    var clear = document.createElement("input");
    clear.value = "Clear";
    clear.type = "button";
    clear.style.width = "130px";
    clear.style.height = "40px";
    clear.style.marginTop = "25px";
    clear.style.marginLeft = "100px";
    clear.id = "clear";
    clear.style.background = "#18191a";
    clear.style.borderRadius = "5px";
    clear.style.color = "#cdd2d9";
    clear.style.border = "none";
    //clear.style.boxShadow = "0px 4px 16px 6px rgba(0, 0, 0, 0.25)";
    clear.style.fontSize = "22px";
    clear.style.cursor = "pointer";

    supcont.appendChild(titl);
    outer.appendChild(supcont);
    outer.appendChild(canvas);
    outer.appendChild(clear);
    
    document.querySelector("body").appendChild(outer);



    let isDrawing = false;
    let x = 0;
    let y = 0;

    const myPics = document.getElementById('drawboard');
    const context = myPics.getContext('2d');

    // event.offsetX, event.offsetY gives the (x,y) offset from the edge of the canvas.

    // Add the event listeners for mousedown, mousemove, and mouseup
    myPics.addEventListener('mousedown', e => {
    x = e.offsetX;
    y = e.offsetY;
    isDrawing = true;
    });

    myPics.addEventListener('mousemove', e => {
    if (isDrawing === true) {
        drawLine(context, x, y, e.offsetX, e.offsetY);
        x = e.offsetX;
        y = e.offsetY;
    }
    });

    window.addEventListener('mouseup', e => {
    if (isDrawing === true) {
        drawLine(context, x, y, e.offsetX, e.offsetY);
        x = 0;
        y = 0;
        isDrawing = false;
    }
    });

    function drawLine(context, x1, y1, x2, y2) {
    context.beginPath();
    context.strokeStyle = 'cyan';
    context.lineWidth = 3;
    context.moveTo(x1, y1);
    context.lineTo(x2, y2);
    context.stroke();
    context.closePath();
    }

    document.getElementById("clear").addEventListener("click", ()=>{
        const myPics = document.getElementById('drawboard');
        const context = myPics.getContext('2d');
        context.clearRect(0, 0, myPics.width, myPics.height);
    })

})
