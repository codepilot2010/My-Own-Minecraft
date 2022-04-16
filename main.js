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
    fabric.image.fromURL(get_image,function(Img)
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