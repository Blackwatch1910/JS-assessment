$(document).ready(function() {
    //console.log("READY!");

    $('#yellow-skin').click(function() {
        console.log("Yellow Skin!");
        
        $('#skin').attr('src','./assets/skin/yellow.png');
        $("#select-skin-card").hide();
        $('#select-eyes-card').show();
    })

    $('#green-skin').click(function() {
        console.log("Green Skin!");
    
        $('#skin').attr('src','./assets/skin/green.png');
        $("#select-skin-card").hide();
        $('#select-eyes-card').show();
    })

    $('#red-skin').click(function() {
        console.log("Red Skin!");
    
        $('#skin').attr('src','./assets/skin/red.png');
        $("#select-skin-card").hide();
        $('#select-eyes-card').show();
    })

//***************SKIN EVENTS DONE****************** */

    $('#eye-normal').click(function() {
        console.log('Normal eyes clicked!');

        $('#eyes').attr('src','./assets/eyes/normal.png');
        $('#select-eyes-card').hide();
        $('#select-mouth-card').show();
    })

    $('#eye-closed').click(function() {
        console.log('Closed eyes clicked!');

        $('#eyes').attr('src','./assets/eyes/closed.png');
        $('#select-eyes-card').hide();
        $('#select-mouth-card').show();
    })

    $('#eye-long').click(function() {
        console.log('Long eyes clicked!');

        $('#eyes').attr('src','./assets/eyes/long.png');
        $('#select-eyes-card').hide();
        $('#select-mouth-card').show();
    })

    $('#eye-laughing').click(function() {
        console.log('Laughing eyes clicked!');

        $('#eyes').attr('src','./assets/eyes/laughing.png');
        $('#select-eyes-card').hide();
        $('#select-mouth-card').show();
    })

    $('#eye-rolling').click(function() {
        console.log('Rolling eyes clicked!');

        $('#eyes').attr('src','./assets/eyes/rolling.png');
        $('#select-eyes-card').hide();
        $('#select-mouth-card').show();
    })

    $('#eye-winking').click(function() {
        console.log('winking eyes clicked!');

        $('#eyes').attr('src','./assets/eyes/winking.png');
        $('#select-eyes-card').hide();
        $('#select-mouth-card').show();
    })

    //******************EYES EVENT DONE************** */

    $('#mouth-open').click(function() {
        console.log('Mouth open clicked!');

        $('#mouth').attr('src','./assets/mouth/open.png');
    })

    $('#mouth-smiling').click(function() {
        console.log('Smiling open clicked!');

        $('#mouth').attr('src','./assets/mouth/smiling.png');
    })

    $('#mouth-straight').click(function() {
        console.log('Straight open clicked!');

        $('#mouth').attr('src','./assets/mouth/straight.png');
    })

    $('#mouth-sad').click(function() {
        console.log('Sad open clicked!');

        $('#mouth').attr('src','./assets/mouth/sad.png');
    })

    $('#mouth-teeth').click(function() {
        console.log('Teeth open clicked!');

        $('#mouth').attr('src','./assets/mouth/teeth.png');
    })

    //*************MOUTH EVENTS DONE************** */

    $('.next-step').click(function() {
        console.log('Next Step clicked from skin!');

        $("#select-skin-card").hide();
        $('#select-eyes-card').show();
    })

    $('.previous-step').click(function() {
        console.log('Previous Step clicked from mouth!');

        $("#select-mouth-card").hide();
        $('#select-eyes-card').show();
    })

    $('#show-mouth-card').click(function() {
        console.log('Next Step clicked from eyes!');

        $("#select-eyes-card").hide();
        $('#select-mouth-card').show();
    })

    $('#show-skin-card').click(function() {
        console.log('Previous step Clicked from eyes!');

        $("#select-eyes-card").hide();
        $('#select-skin-card').show();
    })
})