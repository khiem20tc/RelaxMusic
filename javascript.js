var test = 0;
function KiemTra()

{
    for(var i=0; i<document.getElementById("content").value.length;i++){
    if (document.getElementById("content").value.indexOf('buồn') == i 
    || document.getElementById("content").value.indexOf('buon') == i
    || document.getElementById("content").value.indexOf('sad') == i
    || document.getElementById("content").value.indexOf('that tinh') == i
    || document.getElementById("content").value.indexOf('thất tình') == i
    || document.getElementById("content").value.indexOf('chán') == i
    ) {
    var audio = document.getElementById("audio1");
    audio.play();
    test = 1;
    }

    else if (document.getElementById("content").value.indexOf('vui') == i 
        || document.getElementById("content").value.indexOf('hanh phuc') == i
        || document.getElementById("content").value.indexOf('hạnh phúc') == i
        || document.getElementById("content").value.indexOf('tuyệt vời') == i
        || document.getElementById("content").value.indexOf('tuyet voi') == i
        ) {
        var audio = document.getElementById("audio2");
        audio.play();
        test = 1;
        }

    // else {
    //     var random = Math.floor(Math.random() * 10);     // returns a number between 0 and 9
    //     alert(random);
    //     if (random%2==0){
    //     var audio = document.getElementById("audio3");
    //     audio.play();
    //     }
    //     else if (random%2!=0) {
    //     var audio = document.getElementById("audio4");
    //     audio.play();
    //     }
    // }

    if (test==0){
      
        var audio = document.getElementById("audio3");
        audio.play();
       
    }
    }
    document.getElementById("text").innerHTML="Chúc bạn có những phút giây thư giãn với âm nhạc theo tâm trạng!!"
}

