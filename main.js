var canvas=new fabric.Canvas("myCanvas");
block_imgwidth=30;
block_imgheight=30;
player_x=10;
player_y=10;
var player_object="";
var block_img_obj="";

function player_update()
{
    fabric.image.fromURL("player.png",function(Img)
    {
        player_object=Img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({
            top:player_y,
            left:player_x
        });
        canvas.add(player_object);
    });
}


function new_image(get_image)
{
    fabric.Image.fromURL(get_image,function(Img)
    {
        block_img_obj=Img;
        block_img_obj.scaleToWidth(block_imgwidth);
        block_img_obj.scaleToHeight(block_imgheight);
        block_img_obj.set({
            top:player_y,
            left:player_x
        });
        canvas.add(block_img_obj);
    });
}

window.addEventListener("keydown", my_keydown);
function my_keydown(e)
{
    keypressed=e.keyCode;
    console.log(keypressed);
    if(e.shiftKey==true && keypressed=='80')
    {
        console.log("p and shift keys pressed together");
        block_imgwidth=block_imgwidth+10;
        block_imgheight=block_imgheight+10;
        document.getElementById("current_width").innerHTML=block_imgwidth;
        document.getElementById("current_height").innerHTML=block_imgheight;
        
    }
    if(e.shiftKey && keypressed=='77')
    {
        console.log("m and shift keys pressed together");
        block_imgwidth=block_imgwidth-10;
        block_imgheight=block_imgheight-10;
        document.getElementById("current_width").innerHTML=block_imgwidth;
        document.getElementById("current_height").innerHTML=block_imgheight;
    }
    if(keypressed=='38')
    {
        up();
        console.log("up");

    }
    if(keypressed=='40')
    {
        down();
        console.log("down");
        
    }
    if(keypressed=='37')
    {
        left();
        console.log("left");
        
    }
    if(keypressed=='39')
    {
        right();
        console.log("right");
        
    }
    if(keypressed=='87')
    {
        new_image('wall.jpg');
        console.log("w");
        
    }
    if(keypressed=='71')
    {
        new_image('ground.png');
        console.log("g");
        
    }
    if(keypressed=='76')
    {
        new_image('light_green.png');
        console.log("l");
        
    }
    if(keypressed=='84')
    {
        new_image('trunk.jpg');
        console.log("t");
        
    }
    if(keypressed=='82')
    {
        new_image('roof.jpg');
        console.log("r");
        
    }
    if(keypressed=='89')
    {
        new_image('yellow_Wall.png');
        console.log("y");
        
    }
    if(keypressed=='68')
    {
        new_image('dark_green.png');
        console.log("d");
        
    }
    if(keypressed=='85')
    {
        new_image('unique.png');
        console.log("u");
        
    }
    if(keypressed=='67')
    {
        new_image('cloud.jpg');
        console.log("c");
        
    }
}