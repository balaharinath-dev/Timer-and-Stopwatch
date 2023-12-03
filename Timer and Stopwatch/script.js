//1
var interval;
var intervalst;
$(document).ready(function(){
    var hours=0;
    var minutes=0;
    var seconds=0;
    var milliseconds=0;
    $("#timer").html(hours.toString().padStart(2,0)+":"+minutes.toString().padStart(2,0)+":"+seconds.toString().padStart(2,0));
    $("#ms").html(milliseconds.toString().padStart(2,0));
    $("#start").click(function(){
        interval=setInterval(function(){
            $("#lapbtn").removeClass("d-none");
            $(".blink").addClass("blinkani");
            $("#startdiv").addClass("d-none");
            $("#stopdiv").removeClass("d-none");
            $("#restartdiv").removeClass("d-none");
            $("#stop").addClass("stopani");
            milliseconds+=1;
            if(milliseconds>=100){
                milliseconds=0;
                seconds+=1;
                if(seconds>=60){
                    seconds=0;
                    minutes+=1;
                    if(minutes>=60){
                        minutes=0;
                        hours+=1;
                    }
                }
            }
            $("#timer").html(hours.toString().padStart(2,0)+":"+minutes.toString().padStart(2,0)+":"+seconds.toString().padStart(2,0));
            $("#ms").html(milliseconds.toString().padStart(2,0));
        },10);
    });
    var laps=0;
    $("#lapbtn").click(function(){
        $(".lapsm").removeClass("d-none").addClass("d-block d-md-none");
        $(".lap").addClass("d-md-block");
        laps+=1;
        var newlap=$('<div><b>Lap' + laps + ': ' + hours.toString().padStart(2, '0') + ':' + minutes.toString().padStart(2, '0') + ':' + seconds.toString().padStart(2, '0') + '</b></div>');
        $(".lap").append(newlap);
        $(".lapsm").append(newlap.clone());
    });
    $("#stop").click(function(){
        clearInterval(interval);
        $(".blink").removeClass("blinkani");
        $("#stopdiv").addClass("d-none");
        $("#startdiv").removeClass("d-none");
        
    });
    $("#restart").click(function(){
        laps=0;
        $(".lap").html("");
        $(".lapsm").html("");
        $(".lapsm").addClass("d-none").removeClass("d-block d-md-none");
        $(".lap").removeClass("d-md-block");
        $("#lapbtn").addClass("d-none");
        $(".blink").removeClass("blinkani");
        $("#restartdiv").addClass("d-none");
        $("#stopdiv").addClass("d-none");
        $("#startdiv").removeClass("d-none");
        hours=0;
        minutes=0;
        seconds=0;
        milliseconds=0;
        clearInterval(interval);
        $("#timer").html(hours.toString().padStart(2,0)+":"+minutes.toString().padStart(2,0)+":"+seconds.toString().padStart(2,0));
        $("#ms").html(milliseconds.toString().padStart(2,0));
    });
    var switcher=0;
    $(".stopwatchpart").click(function(){
        switcher=1;
        $(".circle").removeClass("revcircleani");
        $(".circle").addClass("circleani");
        document.getElementById("stopwatchdiv").style.transform="translateX(0px)";
        document.getElementById("timerdiv").style.transform="translateX(-400px)";
        laps=0;
        $(".lap").html("");
        $(".lapsm").html("");
        $(".lapsm").addClass("d-none").removeClass("d-block d-md-none");
        $(".lap").removeClass("d-md-block");
        $("#lapbtn").addClass("d-none");
        $(".blink").removeClass("blinkani");
        $("#restartdiv").addClass("d-none");
        $("#stopdiv").addClass("d-none");
        $("#startdiv").removeClass("d-none");
        hours=0;
        minutes=0;
        seconds=0;
        milliseconds=0;
        clearInterval(interval);
        $("#timer").html(hours.toString().padStart(2,0)+":"+minutes.toString().padStart(2,0)+":"+seconds.toString().padStart(2,0));
        $("#ms").html(milliseconds.toString().padStart(2,0));
    });
    $(".timerpart").click(function(){
        $(".circle").removeClass("circleani");
        if(switcher==1){
            $(".circle").addClass("revcircleani");
        }
        document.getElementById("stopwatchdiv").style.transform="translateX(400px)";
        document.getElementById("timerdiv").style.transform="translateX(0px)";
        flag=0;
        $("plusmin").addClass("d-none");    
        $("form").removeClass("d-none");
        $("input").val("");
        $("#msdivst").addClass("mb-3");
        $(".blink").removeClass("blinkani");
        $("#restartdivst").addClass("d-none");
        $("#stopdivst").addClass("d-none");
        $("#startdivst").removeClass("d-none");
        $("#startst").attr("disabled",true);
        $("#restartst").removeClass("fader");
        hours=0;
        minutes=0;
        seconds=0;
        milliseconds=0;
        clearInterval(intervalst);
        $("#timerst").html(hours.toString().padStart(2,0)+":"+minutes.toString().padStart(2,0)+":"+seconds.toString().padStart(2,0));
        $("#msst").html(milliseconds.toString().padStart(2,0));
    });
});

//2
$(document).ready(function(){
    document.getElementById("hr").addEventListener("input",function(){
        if(document.getElementById("hr").value.trim().length>=1&&document.getElementById("hr").value.trim().length<=2&&document.getElementById("min").value.trim().length>=1&&document.getElementById("min").value.trim().length<=2&&document.getElementById("sec").value.trim().length>=1&&document.getElementById("sec").value.trim().length<=2){
            $("#startst").attr("disabled",false);
        }
        else{
            $("#startst").attr("disabled",true);
        }
    });
    document.getElementById("min").addEventListener("input",function(){
        if(document.getElementById("hr").value.trim().length>=1&&document.getElementById("hr").value.trim().length<=2&&document.getElementById("min").value.trim().length>=1&&document.getElementById("min").value.trim().length<=2&&document.getElementById("sec").value.trim().length>=1&&document.getElementById("sec").value.trim().length<=2){
            $("#startst").attr("disabled",false);
        }
        else{
            $("#startst").attr("disabled",true);
        }
    });
    document.getElementById("sec").addEventListener("input",function(){
        if(document.getElementById("hr").value.trim().length>=1&&document.getElementById("hr").value.trim().length<=2&&document.getElementById("min").value.trim().length>=1&&document.getElementById("min").value.trim().length<=2&&document.getElementById("sec").value.trim().length>=1&&document.getElementById("sec").value.trim().length<=2){
            $("#startst").attr("disabled",false);
        }
        else{
            $("#startst").attr("disabled",true);
        }
    });
    var hours=0;
    var minutes=0;
    var seconds=0;
    var milliseconds=0;
    var flag=0;
    $("#timerst").html(hours.toString().padStart(2,0)+":"+minutes.toString().padStart(2,0)+":"+seconds.toString().padStart(2,0));
    $("#msst").html(milliseconds.toString().padStart(2,0));
    $("#startst").click(function(){
        $("form").addClass("d-none");
        $("#msdivst").removeClass("mb-3");
        if(flag==0){
            hours=parseInt($("#hr").val(), 10);
            minutes=parseInt($("#min").val(), 10);
            seconds=parseInt($("#sec").val(), 10);
            milliseconds=100;
        }
        intervalst=setInterval(function(){
            $(".blink").addClass("blinkani");
            $("#startdivst").addClass("d-none");
            $("#stopdivst").removeClass("d-none");
            $("#restartdivst").removeClass("d-none");
            $("#stopst").addClass("stopani");
            $("#plusmin").removeClass("d-none");
            milliseconds-=1;
            if(milliseconds<=0||milliseconds===100){
                milliseconds=99;
                seconds-=1;
                if(seconds<=0||seconds===60){
                    seconds=59;
                    minutes-=1;
                    if(minutes<=0||minutes===60){
                        minutes=59;
                        hours-=1;
                    }
                }
            }
            if(hours<=0&&minutes<=0&&seconds<=1&&milliseconds<=1){
                clearInterval(intervalst);
                seconds=0;
                milliseconds=0;
                $("plusmin").addClass("d-none");
                $("#msdivst").removeClass("mb-3");
                $(".blink").removeClass("blinkani");
                $("#stopdivst").addClass("d-none");
                $("#timerst").html(hours.toString().padStart(2,0)+":"+minutes.toString().padStart(2,0)+":"+seconds.toString().padStart(2,0));
                $("#msst").html(milliseconds.toString().padStart(2,0));
                $("#restartst").addClass("fader");
            }
            $("#timerst").html(hours.toString().padStart(2,0)+":"+minutes.toString().padStart(2,0)+":"+seconds.toString().padStart(2,0));
            $("#msst").html(milliseconds.toString().padStart(2,0));
        },10);
    });
    $("#plusmin").click(function(){
        if(minutes==59){
            hours=parseInt(hours, 10) + 1;
            minutes=0;
        }
        else{
            minutes=parseInt(minutes, 10) + 1;
        }
        $("#timerst").css("color","rgb(127, 193, 255)");
        setTimeout(function(){
            var dark=localStorage.getItem("darkmode");
            if(dark==1){
                $("#timerst").css("color","white");
            }
            else{
                $("#timerst").css("color","black");
            }
        },1000)
    });
    $("#stopst").click(function(){
        clearInterval(intervalst);
        flag=1;
        $(".blink").removeClass("blinkani");
        $("#stopdivst").addClass("d-none");
        $("#startdivst").removeClass("d-none");
    });
    $("#restartst").click(function(){
        flag=0;
        $("plusmin").addClass("d-none");
        $("form").removeClass("d-none");
        $("input").val("");
        $("#msdivst").addClass("mb-3");
        $(".blink").removeClass("blinkani");
        $("#restartdivst").addClass("d-none");
        $("#stopdivst").addClass("d-none");
        $("#startdivst").removeClass("d-none");
        $("#startst").attr("disabled",true);
        $("#restartst").removeClass("fader");
        hours=0;
        minutes=0;
        seconds=0;
        milliseconds=0;
        clearInterval(intervalst);
        $("#timerst").html(hours.toString().padStart(2,0)+":"+minutes.toString().padStart(2,0)+":"+seconds.toString().padStart(2,0));
        $("#msst").html(milliseconds.toString().padStart(2,0));
    });
});

//darkmode
$(document).ready(function(){
    var dark=localStorage.getItem("darkmode");
    if(dark==1){
        $("#darkmode").attr("checked",true);
        $("body").css("background-color","#010101");
        $(".lap,.mybtn,.lapsm,.circle,#lapbtn,#plusmin").css("background-color","rgb(0, 97, 189)");
        $(".container,h1,.stopwatchpart,.timerpart,lapsm,.lap,#start,#stop,#restart,#startst,#stopst,#restartst,#lapbtn,#plusmin").css("color","white");
        $(".container").css("border-color","white");
        $(".blink").css("background-color","rgba(255,255,255,0.05)");
    }
    else{
        $("#darkmode").attr("checked",false);
        $("body").css("background-color","white");
        $(".lap,.mybtn,.lapsm,.circle,#lapbtn,#plusmin").css("background-color","rgb(127, 193, 255)");
        $(".container,h1,.stopwatchpart,.timerpart,lapsm,.lap,#start,#stop,#restart,#startst,#stopst,#restartst,#lapbtn,#plusmin").css("color","black");
        $(".container").css("border-color","black");
    }
    document.getElementById("darkmode").addEventListener("change",function(){
        if(document.getElementById("darkmode").checked){
            localStorage.setItem("darkmode",1);
            $("body").css("background-color","#010101");
            $(".lap,.mybtn,.lapsm,.circle,#lapbtn,#plusmin").css("background-color","rgb(0, 97, 189)");
            $(".container,h1,.stopwatchpart,.timerpart,lapsm,.lap,#start,#stop,#restart,#startst,#stopst,#restartst,#lapbtn,#plusmin").css("color","white");
            $(".container").css("border-color","white");
            $(".blink").css("background-color","rgba(255,255,255,0.05)");
            $(".blink").css("background-color","rgba(0,0,0,0.02)");
        }
        else{
            localStorage.setItem("darkmode",0);
            $("body").css("background-color","white");
            $(".lap,.mybtn,.lapsm,.circle,#lapbtn,#plusmin").css("background-color","rgb(127, 193, 255)");
            $(".container,h1,.stopwatchpart,.timerpart,lapsm,.lap,#start,#stop,#restart,#startst,#stopst,#restartst,#lapbtn,#plusmin").css("color","black");
            $(".container").css("border-color","black");
            $(".blink").css("background-color","rgba(0,0,0,0.02)");
        }
    });
});