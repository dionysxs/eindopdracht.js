class App

{
    runApplication()
    {
        let canvas = document.getElementById('canvasId');
        let g = canvas.getContext("2d");
        document.body.style.overflow="hidden"
        document.body.style.background="#0c6611"
        canvas.height = screen.height;
        canvas.width = screen.width;

        this.DrawCircle = function(x,y,hex,pix,g) {
            g.beginPath();
            g.fillStyle = hex;
            g.arc(x,y,pix,0,Math.PI*2);
            g.stroke();
            g.fill();
            g.closePath();
        }

        this.DrawSquare = function(x,y,hex,xp,yp,g) {
            g.beginPath()
            g.fillStyle = hex
            g.moveTo(x, y);
            g.lineTo(x + xp, y);
            g.lineTo(x + xp, y + yp);
            g.lineTo(x, y + yp);
            g.closePath();
            g.stroke();
            g.fill()
        }

        this.DrawTriangle = function(x,y,hex,xp,yp,g) {
            g.beginPath()
            g.fillStyle = hex
            g.moveTo(x, y);
            g.lineTo(x + xp / 2, y - yp);
            g.lineTo(x + xp, y);
            g.closePath();
            g.stroke();
            g.fill()
        }

        //DrawCircle(X pos, Y pos, Hex, Size, g)
        //DrawSquare(X pos, Y pos, Hex, X size, Y Size, g)
        //DrawTriangle(X pos, Y pos, Hex, X size, Y Size, g) 
        this.DrawBuilding=function(x,y,g){
            this.DrawSquare(x, y, "#00FF00", 50, 50, g)
            this.DrawTriangle(x, y, "#FF0000", 50, 40, g)
            this.DrawSquare(x + 20, y + 20, "#0000FF",20, 30, g)
        }
        this.DrawBuilding(50,50,g)
        this.DrawBuilding(500,50,g)
        this.DrawBuilding(1000,50,g)
        this.DrawBuilding(50,500,g)
        this.DrawBuilding(500,500,g)
        this.DrawBuilding(1000,500,g)

        this.DrawTree=function(x,y,g){
            this.DrawSquare(x + 20, y + 30, "#0000FF",20, 30, g)
            this.DrawTriangle(x, y, "#00FF00", 60, 30, g)
            this.DrawTriangle(x, y + 20, "#00FF00", 60, 30, g)
            this.DrawTriangle(x, y + 40, "#00FF00", 60, 30, g)
        }
        this.DrawTree(225,50,g)
        this.DrawTree(725,50,g)
        this.DrawTree(1225,50,g)
        this.DrawTree(225,500,g)
        this.DrawTree(725,500,g)
        this.DrawTree(1225,500,g)

        this.DrawSnow=function(x,y,g){
            this.DrawCircle(x, y, "#FFFFFF", 30, g)
            this.DrawCircle(x - 10, y - 10, "#000000", 2, g)
            this.DrawCircle(x + 10, y - 15, "#000000", 2, g)
            this.DrawCircle(x, y + 40, "#FFFFFF", 40, g)
            this.DrawCircle(x, y + 80, "#FFFFFF", 45, g)
        }
        this.DrawSnow(420, 50,g)
        this.DrawSnow(920, 50,g)
        this.DrawSnow(1420, 50,g)
        this.DrawSnow(420, 500,g)
        this.DrawSnow(920, 500,g)
        this.DrawSnow(1420, 500,g)

        this.draw = function(x,y,g) {
            g.font = "48px serif";
            g.strokeText("fijne feeatdagen", x, y);
        }
          this.draw(400, 400,g)
    }

}


let app = new App();
app.runApplication();