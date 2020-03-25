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

        if(py > 460 && py <= 530) {
            $(".main__img-overlays img").css({
                "transition": "visibility 0.3s, opacity 0.3s linear",
                "opacity": "0",
                "visibility": "hidden"
            });
            $(".main__img-overlays img.level-5").css({
                "transition": "visibility 0.3, opacity 0.3s linear",
                "opacity": "1",
                "visibility": "visible"
            });
            $("body").css('cursor', 'pointer');
            $(".main__footer").css('z-index', '2');
            // $(".main__image").css('background', '#203044').css('transition', 'background-color 0.3s linear');
        } else if(py > 530 && py <= 600) {
            $(".main__img-overlays img").css({
                "transition": "visibility 0.3s, opacity 0.3s linear",
                "opacity": "0",
                "visibility": "hidden"
            });
            $(".main__img-overlays img.level-4").css({
                "transition": "visibility 0.3s, opacity 0.3s linear",
                "opacity": "1",
                "visibility": "visible"
            });
            $("body").css('cursor', 'pointer');
            $(".main__footer").css('z-index', '2');
            // $(".main__image").css('background', '#203044').css('transition', 'background-color 0.3s linear');
        } else if(py > 600 && py <= 670) {
            $(".main__img-overlays img").css({
                "transition": "visibility 0.3s, opacity 0.3s linear",
                "opacity": "0",
                "visibility": "hidden"
            });
            $(".main__img-overlays img.level-3").css({
                "transition": "visibility 0.3s, opacity 0.3s linear",
                "opacity": "1",
                "visibility": "visible"
            });
            $("body").css('cursor', 'pointer');
            $(".main__footer").css('z-index', '2');
            // $(".main__image").css('background', '#203044').css('transition', 'background-color 0.3s linear');
        } else if(py > 670 && py <= 740) {
            $(".main__img-overlays img").css({
                "transition": "visibility 0.3s, opacity 0.3s linear",
                "opacity": "0",
                "visibility": "hidden"
            });
            $(".main__img-overlays img.level-2").css({
                "transition": "visibility 0.3s, opacity 0.3s linear",
                "opacity": "1",
                "visibility": "visible"
            });
            $("body").css('cursor', 'pointer');
            $(".main__footer").css('z-index', '2');
            // $(".main__image").css('background', '#203044').css('transition', 'background-color 0.3s linear');
        } else {
            $(".main__img-overlays img").css({
                "transition": "visibility 0.3s, opacity 0.3s linear",
                "opacity": "0",
                "visibility": "hidden"
            });
            $("body").css('cursor', 'default');
            $(".main__footer").css('z-index', '4');
            // $(".main__image").css('background', '#4a72a5').css('transition', 'background-color 0.3s linear');
        }
    });
});