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

        console.log(px+","+py);

        if(py > 450 && py < 510) {
            $(".level-5").css('display', 'block');
        } else {
            $(".level-5").css('display', 'none');
        }
    });
});