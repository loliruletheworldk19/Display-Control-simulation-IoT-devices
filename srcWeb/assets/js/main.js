
// load-data-circle

let circle_data = document.getElementById('circle_data');
let count_data = 69;
let count = 0;
setInterval (() => {
    if(count == count_data){
        clearInterval();  
    }else {
        count += 1;
        circle_data.innerHTML = count + "%";
    } 
},28);


// time loading 

window.setInterval(function(){
    var times = Date();
    times.toString();
    let result_time = times.slice(-34, -26);
    document.getElementById("time_show").innerHTML = result_time;
}, 1002);

// control-display
//control ON/OFF camera
var cameraFirebase;
function myFunction_2 (x) {
    var CheckBox = document.getElementById('CheckBox02');
    var img1 = document.getElementById('img_2A');
    var img2 = document.getElementById('img_2B');
    var title = document.getElementById('title_2');
    var textA = document.getElementById('text_2A');
    var textB = document.getElementById('text_2B');
    if (x == 'on') {
        CheckBox.checked = true;
    } if (x == 'off') {
        CheckBox.checked = false;
    }
    
    if(CheckBox.checked == true) {
        img1.style.display = "none";
        img2.style.display = "block";
        title.style.color = "#fff";
        textA.style.color = "var(--color-data-on)";
        textB.style.color = "var(--color-data-on)";
        cameraFirebase = "1";
    }
    else
    {
        img1.style.display = "block";
        img2.style.display = "none";
        title.style.color = "var(--font-color1)";
        textA.style.color = "var(--font-color1)";
        textB.style.color = "var(--font-color1)";
        cameraFirebase = "0";
    };
    //console.log('function_2 Run');
    //console.log(`cameraFirebase: ${cameraFirebase}`);
};
//myFunction_3();
var outletsFirebase;
function myFunction_3(x) {

    var CheckBox = document.getElementById('CheckBox03');
    var img1 = document.getElementById('img_3A');
    var img2 = document.getElementById('img_3B');
    var title = document.getElementById('title_3');
    var textA = document.getElementById('text_3A');
    var textB = document.getElementById('text_3B');
    if (x == 'on') {
        CheckBox.checked = true;
    } if (x == 'off') {
        CheckBox.checked = false;
    }

    if(CheckBox.checked == true) {
        img1.style.display = "none";
        img2.style.display = "block";
        title.style.color = "#fff";
        textA.style.color = "var(--color-data-on)";
        textB.style.color = "var(--color-data-on)";
        outletsFirebase = "1"
    }
    else
    {
        img1.style.display = "block";
        img2.style.display = "none";
        title.style.color = "var(--font-color1)";
        textA.style.color = "var(--font-color1)";
        textB.style.color = "var(--font-color1)";
        outletsFirebase = "0"
        
    };
};
//myFunction_4();
var wifiFirebase;
function myFunction_4(x) {

    var CheckBox = document.getElementById('CheckBox04');
    var img1 = document.getElementById('img_4A');
    var img2 = document.getElementById('img_4B');
    var title = document.getElementById('title_4');
    var textA = document.getElementById('text_4A');
    var textB = document.getElementById('text_4B');
    if (x == 'on') {
        CheckBox.checked = true;
    } if (x == 'off') {
        CheckBox.checked = false;
    }

    if(CheckBox.checked == true) {
        img1.style.display = "none";
        img2.style.display = "block";
        title.style.color = "#fff";
        textA.style.color = "var(--color-data-on)";
        textB.style.color = "var(--color-data-on)";
        wifiFirebase = "1";
    }
    else
    {
        img1.style.display = "block";
        img2.style.display = "none";
        title.style.color = "var(--font-color1)";
        textA.style.color = "var(--font-color1)";
        textB.style.color = "var(--font-color1)";
        wifiFirebase = "0";
    };
};
//myFunction_5();
var thermostatFirebase;
function myFunction_5(x) {

    var CheckBox = document.getElementById('CheckBox05');
    var img1 = document.getElementById('img_5A');
    var img2 = document.getElementById('img_5B');
    var title = document.getElementById('title_5');
    var textA = document.getElementById('text_5A');
    var textB = document.getElementById('text_5B');
    if (x == 'on') {
        CheckBox.checked = true;
    } if (x == 'off') {
        CheckBox.checked = false;
    }

    if(CheckBox.checked == true) {
        img1.style.display = "none";
        img2.style.display = "block";
        title.style.color = "#fff";
        textA.style.color = "var(--color-data-on)";
        textB.style.color = "var(--color-data-on)";
        thermostatFirebase = "1";
    }
    else
    {
        img1.style.display = "block";
        img2.style.display = "none";
        title.style.color = "var(--font-color1)";
        textA.style.color = "var(--font-color1)";
        textB.style.color = "var(--font-color1)";
        thermostatFirebase = "0";
    };
};

//click to open board-select

//myFunction_overview();
function myFunction_overview() {
    var checkbox = document.getElementById("myCheck_overview").click();
    var flw = document.getElementById("flw_overview");
    if(checkbox = true) {
        flw.style.display = "flex";
    }
};
//myFunction_devices();
function myFunction_devices() {
    var checkbox = document.getElementById("myCheck_devices").click();
    var flw = document.getElementById("flw_devices");
    if(checkbox = true) {
        flw.style.display = "flex";
    }
};
//myFunction_analitics();
function myFunction_analitics() {
    var checkbox = document.getElementById("myCheck_analitics").click();
    var flw = document.getElementById("flw_analitics");
    if(checkbox = true) {
        flw.style.display = "flex";
    }
};
//myFunction_rules();
function myFunction_rules() {
    var checkbox = document.getElementById("myCheck_rules").click();
    var flw = document.getElementById("flw_rules");
    if(checkbox = true) {
        flw.style.display = "flex";
    }
};
//myFunction_gallery();
function myFunction_gallery() {
    var checkbox = document.getElementById("myCheck_gallery").click();
    var flw = document.getElementById("flw_gallery");
    if(checkbox = true) {
        flw.style.display = "flex";
    }
};
//myFunction_history();
function myFunction_history() {
    var checkbox = document.getElementById("myCheck_history").click();
    var flw = document.getElementById("flw_history");
    if(checkbox = true) {
        flw.style.display = "flex";
    }
};
//myFunction_settings();
function myFunction_settings() {
    var checkbox = document.getElementById("myCheck_settings").click();
    var flw = document.getElementById("flw_settings");
    if(checkbox = true) {
        flw.style.display = "flex";
    }
};


//myFunction_cls_overview();
function myFunction_cls_overview() {
    var checkbox = document.getElementById("close_overview").click();
    var flw = document.getElementById("flw_overview");
    var t1A = document.getElementById("t1A");
    var t1B = document.getElementById("t1B");
    if(checkbox = true) {
        t1A.style.animation = "close_rotate_45to90 linear forwards 0.3s";
        t1B.style.animation = "close_rotate_135to90 linear forwards 0.3s";
        setTimeout(function(){ 
            flw.style.display = "none";
            t1A.style.animation = "none";
            t1B.style.animation = "none";
        }, 400);
    }
};
//myFunction_cls_devices();
function myFunction_cls_devices() {
    var checkbox = document.getElementById("close_devices").click();
    var flw = document.getElementById("flw_devices");
    var t1A = document.getElementById("t2A");
    var t1B = document.getElementById("t2B");
    if(checkbox = true) {
        t1A.style.animation = "close_rotate_45to90 linear forwards 0.3s";
        t1B.style.animation = "close_rotate_135to90 linear forwards 0.3s";
        setTimeout(function(){ 
            flw.style.display = "none";
            t1A.style.animation = "none";
            t1B.style.animation = "none";
        }, 400);
    }
};
//myFunction_cls_analitics();
function myFunction_cls_analitics() {
    var checkbox = document.getElementById("close_analitics").click();
    var flw = document.getElementById("flw_analitics");
    var t1A = document.getElementById("t3A");
    var t1B = document.getElementById("t3B");
    if(checkbox = true) {
        t1A.style.animation = "close_rotate_45to90 linear forwards 0.3s";
        t1B.style.animation = "close_rotate_135to90 linear forwards 0.3s";
        setTimeout(function(){ 
            flw.style.display = "none";
            t1A.style.animation = "none";
            t1B.style.animation = "none";
        }, 400);
    }
};
//myFunction_cls_rules();
function myFunction_cls_rules() {
    var checkbox = document.getElementById("close_rules").click();
    var flw = document.getElementById("flw_rules");
    var t1A = document.getElementById("t4A");
    var t1B = document.getElementById("t4B");
    if(checkbox = true) {
        t1A.style.animation = "close_rotate_45to90 linear forwards 0.3s";
        t1B.style.animation = "close_rotate_135to90 linear forwards 0.3s";
        setTimeout(function(){ 
            flw.style.display = "none";
            t1A.style.animation = "none";
            t1B.style.animation = "none";
        }, 400);
    }
};
//myFunction_cls_gallery();
function myFunction_cls_gallery() {
    var checkbox = document.getElementById("close_gallery").click();
    var flw = document.getElementById("flw_gallery");
    var t1A = document.getElementById("t5A");
    var t1B = document.getElementById("t5B");
    if(checkbox = true) {
        t1A.style.animation = "close_rotate_45to90 linear forwards 0.3s";
        t1B.style.animation = "close_rotate_135to90 linear forwards 0.3s";
        setTimeout(function(){ 
            flw.style.display = "none";
            t1A.style.animation = "none";
            t1B.style.animation = "none";
        }, 400);
    }
};
//myFunction_cls_history();
function myFunction_cls_history() {
    var checkbox = document.getElementById("close_history").click();
    var flw = document.getElementById("flw_history");
    var t1A = document.getElementById("t6A");
    var t1B = document.getElementById("t6B");
    if(checkbox = true) {
        t1A.style.animation = "close_rotate_45to90 linear forwards 0.3s";
        t1B.style.animation = "close_rotate_135to90 linear forwards 0.3s";
        setTimeout(function(){ 
            flw.style.display = "none";
            t1A.style.animation = "none";
            t1B.style.animation = "none";
        }, 400);
    }
};
//myFunction_cls_settings();
function myFunction_cls_settings() {
    var checkbox = document.getElementById("close_settings").click();
    var flw = document.getElementById("flw_settings");
    var t1A = document.getElementById("t7A");
    var t1B = document.getElementById("t7B");
    if(checkbox = true) {
        t1A.style.animation = "close_rotate_45to90 linear forwards 0.3s";
        t1B.style.animation = "close_rotate_135to90 linear forwards 0.3s";
        setTimeout(function(){ 
            flw.style.display = "none";
            t1A.style.animation = "none";
            t1B.style.animation = "none";
        }, 400);
    }
};
//myFunction_opselectHOME();
function myFunction_opselectHOME() {
    var checkbox = document.getElementById("btn_myhome");
    var show_home = document.getElementById("select_home_op_cls");
    var x = document.getElementById("Home_slct_1");
    var y = document.getElementById("Home_slct_2");
    var z = document.getElementById("Home_slct_3");


    if (checkbox.checked == true) {
        show_home.style.display = "block";
        show_home.style.animation = "stretch_out ease-in 0.15s";
        console.log('OpenHomeSelect');
        setTimeout(function(){
            x.style.display = "block";
            y.style.display = "block";
            z.style.display = "block";
        },100);
    }
    else {
        console.log('CloseHomeSelect');
        show_home.style.animation = "stretch_in ease-in 0.2s";
        x.style.display = "none";
        y.style.display = "none";
        z.style.display = "none";
        setTimeout(function(){
            show_home.style.display = "none";
        }, 120);
    }
};

// window.addEventListener('mouseup', function(event){
//     var main = document.getElementById('select_home_op_cls');
//     if(event.target != main && event.target.parentNode != main) {
//         main.style.display = 'none';
//     }
// });


cls_HOME();
function cls_HOME() {
    var show_home = document.getElementById('select_home_op_cls');
    var checkbox = document.getElementById("btn_myhome");
    var btn_home = document.getElementById("sw_home");
    var btn_point = document.getElementById("sw_point");
    var x = document.getElementById("Home_slct_1");
    var y = document.getElementById("Home_slct_2");
    var z = document.getElementById("Home_slct_3");
document.onclick = function(e) {
    if(show_home.style.display == 'block') {
        if(e.target != show_home && e.target != checkbox && e.target != btn_home && e.target != btn_point) {
                console.log('CloseHomeSelect');
                checkbox.checked = false;
                show_home.style.animation = "stretch_in ease-in 0.2s";
                x.style.display = "none";
                y.style.display = "none";
                z.style.display = "none";
                setTimeout(function(){
                    show_home.style.display = "none";
                },120);
        };
    };
}
};






// fire base 



// import { getDatabase, ref, onValue} from "firebase/database";

// const db = getDatabase();
// const database = ref(db, 'data_1/');
// onValue(database, (snapshot) => {
//   const data = snapshot.val();
//   updateStarCount(postElement, data);
//   console.log(data);
// });
