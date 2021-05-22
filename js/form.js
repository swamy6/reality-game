class Form{
    constructor(){
       this.input = createInput("Name");
       this.button = createButton('Next');
      //this.button1 = createButton('play');
       this.greeting = createElement('h2');
       this.title = createElement('h2');
       this.reset = createButton('Reset');
      
    }
    hide() {
        this.greeting.hide();
        this.button.hide();
       
        this.input.hide();
        this.title.hide();
        
    }
    display() {
        this.title.html("Reality Game");
        this.title.position(350, 50);
        this.title.style('font-size', '70px');
        this.title.style('color', 'red');
        this.input.position(400,400);
        this.input.style('width', '200px');
        this.input.style('height', '20px');
        this.input.style('background', 'lavender');
        this.button.position(560,500);     
        this.button.style('width', '90px');
        this.button.style('height', '20px');
        this.button.style('background', 'lightpink');
        this.reset.position(900, 660);
        this.reset.style('width', '100px');
        this.reset.style('height', '30px');
        this.reset.style('background', 'lightpink');
        
        this.button.mousePressed(() => {
            this.input.hide();
            this.button.hide();
            player.name = this.input.value();
          
            this.greeting.html("Hello " + player.name)
            this.greeting.position(300,200);
            this.greeting.style('color', 'yellow');
            this.greeting.style('font-size', '100px');
        });
        

        this.reset.mousePressed(() => {
           
            game.update(0);
        });

    }
}