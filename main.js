canvas = new fabric.Canvas('myCanvas');
player_x = 10;
player_y = 10;
block_image_width = 50;
block_image_height = 50;
object_player = "";
object_block_image = "";
object_type_2 = "";
ctx = canvas.getContext("2d");
ctx.beginPath();
ctx.strokeStyle = "black";
ctx.lineWidth = 5;
ctx.moveTo(0, 600);
ctx.lineTo(1000, 600);
ctx.stroke();
function add_player() {
    fabric.Image.fromURL("Doctor strange-player.png", function(Img) {
        object_player = Img;
        object_player.scaleToWidth(91);
        object_player.scaleToHeight(200);
        object_player.set({
            top: player_y,
            left: player_x
        });
        canvas.add(object_player);
    });
}
function set_block_image(get_image) {
    fabric.Image.fromURL(get_image, function(Img) {
        object_block_image = Img;
        object_block_image.scaleToWidth(block_image_width);
        object_block_image.scaleToHeight(block_image_height);
        object_block_image.set({
            top: player_y,
            left: player_x
        });
        canvas.add(object_block_image);
    });
}
function set_block_image_2(get_image) {
    fabric.Image.fromURL(get_image, function(Img) {
        object_type_2 = Img;
        object_type_2.scaleToWidth(block_image_width);
        object_type_2.scaleToHeight(block_image_height);
        object_type_2.set({
            top: 605,
            left: 0
        });
        canvas.add(object_type_2);
    });
}
window.addEventListener("keydown", my_keydown);
function my_keydown(e) {
    keyPressed = e.keyCode;
    console.log(keyPressed);
    if (e.shiftKey == true && keyPressed == '49') {
        block_image_width = block_image_width + 1;
        document.getElementById("current_width").innerHTML = block_image_width;
    }
    if (e.shiftKey == true && keyPressed == '50') {
        block_image_width = block_image_width - 1;
        document.getElementById("current_width").innerHTML = block_image_width;
    }
    if (e.shiftKey == true && keyPressed == '51') {
        block_image_height = block_image_height + 1;
        document.getElementById("current_height").innerHTML = block_image_height;
    }
    if (e.shiftKey == true && keyPressed == '52') {
        block_image_height = block_image_height - 1;
        document.getElementById("current_height").innerHTML = block_image_height;
    }
    if (keyPressed == '38') {
        up();
    }
    if (keyPressed == '40') {
        down();
    }
    if (keyPressed == '37') {
        left();
    }
    if (keyPressed == '39') {
        right();
    }
    if (keyPressed == '65') {
        set_block_image_2('Captain america body.png');
    }
    if (keyPressed == '66') {
        set_block_image_2('Captain america head.png');
    }
    if (keyPressed == '67') {
        set_block_image_2('Captain america left hand.png');
    }
    if (keyPressed == '68') {
        set_block_image_2('Captain america legs.png');
    }
    if (keyPressed == '69') {
        set_block_image_2('Captain america right hand.png');
    }
    if (keyPressed == '70') {
        set_block_image_2('Hulk body.png');
    }
    if (keyPressed == '71') {
        set_block_image_2('Hulk head.png');
    }
    if (keyPressed == '72') {
        set_block_image_2('Hulk left hand.png');
    }
    if (keyPressed == '73') {
        set_block_image_2('Hulk legs.png');
    }
    if (keyPressed == '74') {
        set_block_image_2('Hulk right hand.png');
    }
    if (keyPressed == '75') {
        set_block_image_2('Iron man body.png');
    }
    if (keyPressed == '76') {
        set_block_image_2('Iron man head.png');
    }
    if (keyPressed == '77') {
        set_block_image_2('Iron man left hand.png');
    }
    if (keyPressed == '78') {
        set_block_image_2('Iron man legs.png');
    }
    if (keyPressed == '79') {
        set_block_image_2('Iron man right hand.png');
    }
    if (keyPressed == '80') {
        set_block_image_2('Spider man body.png');
    }
    if (keyPressed == '81') {
        set_block_image_2('Spider man head.png');
    }
    if (keyPressed == '82') {
        set_block_image_2('Spider man left hand.png');
    }
    if (keyPressed == '83') {
        set_block_image_2('Spider man legs.png');
    }
    if (keyPressed == '84') {
        set_block_image_2('Spider man right hand.png');
    }
    if (keyPressed == '85') {
        set_block_image_2('Thor body.png');
    }
    if (keyPressed == '86') {
        set_block_image_2('Thor head.png');
    }
    if (keyPressed == '87') {
        set_block_image_2('Thor left hand.png');
    }
    if (keyPressed == '88') {
        set_block_image_2('Thor legs.png');
    }
    if (keyPressed == '89') {
        set_block_image_2('Thor right hand.png');
    }
    if (e.shiftKey == true && keyPressed == '65') {
        set_block_image('Captain america body.png');
    }
    if (e.shiftKey == true && keyPressed == '66') {
        set_block_image('Captain america head.png');
    }
    if (e.shiftKey == true && keyPressed == '67') {
        set_block_image('Captain america left hand.png');
    }
    if (e.shiftKey == true && keyPressed == '68') {
        set_block_image('Captain america legs.png');
    }
    if (e.shiftKey == true && keyPressed == '69') {
        set_block_image('Captain america right hand.png');
    }
    if (e.shiftKey == true && keyPressed == '70') {
        set_block_image('Hulk body.png');
    }
    if (e.shiftKey == true && keyPressed == '71') {
        set_block_image('Hulk head.png');
    }
    if (e.shiftKey == true && keyPressed == '72') {
        set_block_image('Hulk left hand.png');
    }
    if (e.shiftKey == true && keyPressed == '73') {
        set_block_image('Hulk legs.png');
    }
    if (e.shiftKey == true && keyPressed == '74') {
        set_block_image('Hulk right hand.png');
    }
    if (e.shiftKey == true && keyPressed == '75') {
        set_block_image('Iron man body.png');
    }
    if (e.shiftKey == true && keyPressed == '76') {
        set_block_image('Iron man head.png');
    }
    if (e.shiftKey == true && keyPressed == '77') {
        set_block_image('Iron man left hand.png');
    }
    if (e.shiftKey == true && keyPressed == '78') {
        set_block_image('Iron man legs.png');
    }
    if (e.shiftKey == true && keyPressed == '79') {
        set_block_image('Iron man right hand.png');
    }
    if (e.shiftKey == true && keyPressed == '80') {
        set_block_image('Spider man body.png');
    }
    if (e.shiftKey == true && keyPressed == '81') {
        set_block_image('Spider man head.png');
    }
    if (e.shiftKey == true && keyPressed == '82') {
        set_block_image('Spider man left hand.png');
    }
    if (e.shiftKey == true && keyPressed == '83') {
        set_block_image('Spider man legs.png');
    }
    if (e.shiftKey == true && keyPressed == '84') {
        set_block_image('Spider man right hand.png');
    }
    if (e.shiftKey == true && keyPressed == '85') {
        set_block_image('Thor body.png');
    }
    if (e.shiftKey == true && keyPressed == '86') {
        set_block_image('Thor head.png');
    }
    if (e.shiftKey == true && keyPressed == '87') {
        set_block_image('Thor left hand.png');
    }
    if (e.shiftKey == true && keyPressed == '88') {
        set_block_image('Thor legs.png');
    }
    if (e.shiftKey == true && keyPressed == '89') {
        set_block_image('Thor right hand.png');
    }
}
function up() {
    if (player_y >= 0) {
        player_y = player_y - block_image_height;
        canvas.remove(object_player);
        add_player();
    }
}
function down() {
    if (player_y <= 468) {
        player_y = player_y + block_image_height;
        canvas.remove(object_player);
        add_player();
    }
}
function left() {
    if (player_x >= 0) {
        player_x = player_x - block_image_width;
        canvas.remove(object_player);
        add_player();
    }
}
function right() {
    if (player_x <= 909) {
        player_x = player_x + block_image_width;
        canvas.remove(object_player);
        add_player();
    }
}