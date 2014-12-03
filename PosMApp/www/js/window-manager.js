// U "CAN" touch this
// 名前変えたい
function windowManager () {
    var FRAME_TIME = 1000 / 30;
	var STATIC_WIDTH =  108;
	var STATIC_HEIGHT = 144;
	var INIT_SCALE = window.innerWidth / STATIC_WIDTH;

	var $mapMain = $('#mapMain');
	// $mapMain.css("zoom", INIT_SCALE);
	// $mapMain.css("width", window.innerWidth);
	// $mapMain.css("height", STATIC_HEIGHT);
    $("#mapImg").css("width", window.innerWidth);

    var el = $("#mapMain")[0];
    el.className = 'animate';

    var START_X = el.offsetWidth;
    var START_Y = el.offsetHeight;

    var isAnimated = false;
    var transform = null;

    var posx = 0;
    var posy = 0;
    var scale = 1;

    reset();

    var mc = new Hammer.Manager($("#mapFrame")[0]);
    mc.add(new Hammer.Pan());
    mc.add(new Hammer.Pinch()).recognizeWith(mc.get("pan"));
    mc.add(new Hammer.Tap({ event: 'doubletap', taps: 2 }));

    mc.on("panstart", function() {
        isAnimated = true;
        transform = {
            translate : { x: posx, y: posy },
            scale: scale
        };
        animation();
    });

    mc.on("panmove", function(ev) {
        transform.translate = {
            x: posx + ev.deltaX,
            y: posy + ev.deltaY
        };
    });

    mc.on("panend pancancel", function() {
        isAnimated = false;
        posx = transform.translate.x;
        posy = transform.translate.y;
    });

    mc.on("pinchstart", function() {
        isAnimated = true;
        transform = {
            translate: { x: posx, y: posy },
            scale: scale
        };
        animation();
    });

    mc.on("pinchmove", function(ev) {
        transform.scale = scale * ev.scale;
    });

    mc.on("pinchend pinchcancel", function(ev) {
        isAnimated = false;
        scale = transform.scale;
    });

    mc.on("doubletap", function() {
        reset();
        isAnimated = true;
        animation();
        isAnimated = false;
    });

    function reset() {
        posx = START_X;
        posy = START_Y;
        scale = 1;
        transform = {
            translate: { x: START_X, y: START_Y },
            scale: 1
        };
    }

    function animation() {
        if (!isAnimated) {
            return;
        }

        transform.scale = (transform.scale >= 4.0) ? 4.0 : transform.scale;
        transform.scale = (transform.scale <= 0.5) ? 0.5 : transform.scale;

        var value = [
            'translate(' + transform.translate.x + 'px, ' + transform.translate.y + 'px)',
            'scale(' + transform.scale + ', ' + transform.scale + ')'
        ];

        value = value.join(" ");
        el.style.webkitTransform = value;
        el.style.mozTransform = value;
        el.style.transform = value;

        setTimeout(animation, FRAME_TIME);
    }

}