class Game{
    constructor(){

    }
    getState() {
        var gameStateRef = database.ref('gameState');
        gameStateRef.on("value", function (data) {
            gameState = data.val();
        })

    }

    update(state) {
        database.ref('/').update({
            gameState: state
        });
    }
    async start() {
            if (gameState === 0) {
                player = new Player();
            }
    player1 = createSprite(200,500);
    player1.addImage("player1",player1Img);
    players=[player1];
    
   
        }
    
    play(){
        
               // form.hide();

                Player.getPlayerInfo();
               if (gameState === 1) {
       // player = new Player();
       
        form = new Form()
        form.display();
    }
              
                 image(WALLPAPERImg, 0, 0, 1000, 800);
                 var x =100;
                 var y=200;
                 var index =0;
                 drawSprites();
                 for(var plr in allPlayers){
                    
                    
                     index = index+1;
                     x = 500-allPlayers[plr].distance;
                     y=500;
                     
                    
                       
                     if(index === player.index){
                         
 fill("yellow");
 textSize(25);
 text(allPlayers[plr].name ,x-25,y+25);

                         
 }
  textSize(25);
 fill("yellow");
 
 }
 
 }
        

    end(){
       console.log("Game Ended");
    }
}