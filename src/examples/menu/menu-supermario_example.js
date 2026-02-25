class SuperMarioMenu extends Game{
 constructor(renderer) {
        super(renderer);
        // Declare game objects
    }

    Start() {
        // Set the screen size (canvas width and height)
        this.screenWidth = 640;
        this.screenHeight = 342;


        this.ui = new SuperMarioUI(this,canvas);
       
        

        // Initialize the game objects
    }

    Update(deltaTime) {
        super.Update(deltaTime);  // Update the game objects of this.gameObjects array
    }

    Draw() {
        // Draw a black rectangle that fills the canvas
        this.renderer.DrawFillBasicRectangle(0, 0, this.screenWidth, this.screenHeight, Color.black);

        super.Draw(); // Draw the game objects of this.gameObjects array
    }
}

class SuperMarioUI extends HTMLMenu {
    constructor (game,canvas) {
        super(game, "#inGameUI", "#container", canvas, false );
    }
}

// call Init (global function defined in the main.js script) with the class of your game as parameter once the document has been loaded 
window.onload = () => {
    Init(SuperMarioMenu);
}