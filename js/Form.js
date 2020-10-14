class Form{
constructor(){}

display(){
    var title=createElement('h2');
    title.html("CAR RACING GAME");
    title.position(280,0);

    var input=createInput("Name");
    var button=createButton("Play");
    var greet=createElement('h3');

    input.position(330,160);
    button.position(380,200);

    button.mousePressed(
function(){
    input.hide();
    button.hide();

    var name=input.value();

    playerCount+=1;
    player.update(name);
    player.updateCount(playerCount);

    greet.html("Hello "+name);
    greet.position(330,160);
}

    );
}
}