$(document).ready(function() {
    $(".main__image-img-hidden").on("mousemove", function(event) {
        bounds=this.getBoundingClientRect();
        var left=bounds.left;
        var top=bounds.top;
        var x = event.pageX - left;
        var y = event.pageY - top;
        var cw=this.clientWidth;
        var ch=this.clientHeight;
        var iw=this.naturalWidth;
        var ih=this.naturalHeight;
        var px=x/cw*iw;
        var py=y/ch*ih;
        /*console.log("click on "+this.tagName+" at pixel ("+px+","+py+") mouse pos ("+x+"," + y+ ") relative to boundingClientRect at ("+left+","+top+") client image size: "+cw+" x "+ch+" natural image size: "+iw+" x "+ih );*/

        // console.log(px+","+py);

        function hideElements() {
            $(".main__img-overlays img").css({
                "transition": "visibility 0.3s, opacity 0.3s linear",
                "opacity": "0",
                "visibility": "hidden"
            });
            $(".main__img-title").css({
                "transition": "visibility 0.3s, opacity 0.3s linear",
                "opacity": "0",
                "visibility": "hidden"
            });
        }

        function showElements(element) {
            $(".main__img-overlays img.level-" + element).css({
                "transition": "visibility 0.3, opacity 0.3s linear",
                "opacity": "1",
                "visibility": "visible"
            });
            $(".main__img-title-level" + element).css({
                "transition": "visibility 0.3, opacity 0.3s linear",
                "opacity": "1",
                "visibility": "visible"
            });
            $("body").css('cursor', 'pointer');
            $(".main__footer").css('z-index', '2');
            $(".main__img-title").css('left', x).css('top', y);
            if(x > (cw-650)) {
                $(".main__img-title").css('left', cw-650).css('top', y);
            }
            // $(".main__image").css('background', '#203044').css('transition', 'background-color 0.3s linear');
        }

        if(py > 460 && py <= 530) {
            hideElements();
            showElements(5);
        } else if(py > 530 && py <= 600) {
            hideElements();
            showElements(4);
        } else if(py > 600 && py <= 670) {
            hideElements();
            showElements(3);
        } else if(py > 670 && py <= 740) {
            hideElements();
            showElements(2);
        } else {
            hideElements();
            $("body").css('cursor', 'default');
            $(".main__footer").css('z-index', '4');
        }
    });
});