




// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.1/firebase-app.js";
import { getDatabase, ref, set, onValue, update } from "https://www.gstatic.com/firebasejs/9.8.1/firebase-database.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAyQzZ98rghR1dvLnm1VuV9tWF0HiI9JW8",
    authDomain: "iot-web-001-c5a08.firebaseapp.com",
    projectId: "iot-web-001-c5a08",
    storageBucket: "iot-web-001-c5a08.appspot.com",
    messagingSenderId: "813509920256",
    appId: "1:813509920256:web:0140c0bb5f551c0dfcbae5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//Update Data Units to FireBase
function writeAndReadData() {
    // var LIVINGROOM = document.getElementById('LIVINGROOM').innerHTML;
    // var OUTSIDE = document.getElementById('OUTSIDE').innerHTML;
    // var INSIDE = document.getElementById('INSIDE').innerHTML;
    // var WATER = document.getElementById('WATER').innerHTML;
    // var INTERNET = document.getElementById('INTERNET').innerHTML;
    const db = getDatabase();
    //Write Data
    // set(ref(db, 'dataUnits/'), {
    //     LIVINGROOM: LIVINGROOM,
    //     OUTSIDE: OUTSIDE,
    //     INSIDE: INSIDE,
    //     WATER: WATER,
    //     INTERNET: INTERNET
    // });
    //Read Data
    
    var saveLIVINGROOM  = [];
    var saveOUTSIDE  = [];
    var saveINSIDE  = [];
    var saveWATER  = [];
    var saveINTERNET  = [];
    
    const starCountRef = ref(db, 'dataUnits/');
    onValue(starCountRef, (snapshot) => {
        const data = snapshot.val();
        //updateStarCount(postElement, data);
        console.log(`LastUpdateDataUnits:`);
        console.log(data);
        document.getElementById('LIVINGROOM').innerHTML = data.LIVINGROOM;
        document.getElementById('OUTSIDE').innerHTML = data.OUTSIDE;
        document.getElementById('INSIDE').innerHTML = data.INSIDE;
        document.getElementById('WATER').innerHTML = data.WATER;
        document.getElementById('INTERNET').innerHTML = data.INTERNET;

        saveLIVINGROOM.push(data.LIVINGROOM);
        var saveLIVINGROOMLast = saveLIVINGROOM.length - 1;
        saveOUTSIDE.push(data.OUTSIDE);
        var saveOUTSIDELast = saveOUTSIDE.length - 1;
        saveINSIDE.push(data.INSIDE);
        var saveINSIDELast = saveINSIDE.length - 1;
        saveWATER.push(data.WATER);
        var saveWATERLast = saveWATER.length - 1;
        saveINTERNET.push(data.INTERNET);
        var saveINTERNETLast = saveINTERNET.length - 1;

        if(saveLIVINGROOM.length >= 2) {
            //console.log('can calc!');
            var deviant = saveLIVINGROOM[saveLIVINGROOMLast] - saveLIVINGROOM[saveLIVINGROOMLast - 1]
            if(deviant > 0) {
                console.log('Up!');
                document.getElementById('LIVINGROOM-up').style.display = "block";
                document.getElementById('LIVINGROOM-down').style.display = "none";
            } if(deviant <0) {
                console.log('Down!');
                document.getElementById('LIVINGROOM-up').style.display = "none";
                document.getElementById('LIVINGROOM-down').style.display = "block";
            };
        };
        if(saveOUTSIDE.length >= 2) {
            //console.log('can calc!');
            var deviant = saveOUTSIDE[saveOUTSIDELast] - saveOUTSIDE[saveOUTSIDELast - 1]
            if(deviant > 0) {
                console.log('Up!');
                document.getElementById('OUTSIDE-up').style.display = "block";
                document.getElementById('OUTSIDE-down').style.display = "none";
            } if(deviant <0) {
                console.log('Down!');
                document.getElementById('OUTSIDE-up').style.display = "none";
                document.getElementById('OUTSIDE-down').style.display = "block";
            };
        };
        if(saveINSIDE.length >= 2) {
            //console.log('can calc!');
            var deviant = saveINSIDE[saveINSIDELast] - saveINSIDE[saveINSIDELast - 1]
            if(deviant > 0) {
                console.log('Up!');
                document.getElementById('INSIDE-up').style.display = "block";
                document.getElementById('INSIDE-down').style.display = "none";
            } if(deviant <0) {
                console.log('Down!');
                document.getElementById('INSIDE-up').style.display = "none";
                document.getElementById('INSIDE-down').style.display = "block";
            };
        };
        if(saveWATER.length >= 2) {
            //console.log('can calc!');
            var deviant = saveWATER[saveWATERLast] - saveWATER[saveWATERLast - 1]
            if(deviant > 0) {
                console.log('Up!');
                document.getElementById('WATER-up').style.display = "block";
                document.getElementById('WATER-down').style.display = "none";
            } if(deviant <0) {
                console.log('Down!');
                document.getElementById('WATER-up').style.display = "none";
                document.getElementById('WATER-down').style.display = "block";
            };
        };
        if(saveINTERNET.length >= 2) {
            //console.log('can calc!');
            var deviant = saveINTERNET[saveINTERNETLast] - saveINTERNET[saveINTERNETLast - 1]
            if(deviant > 0) {
                console.log('Up!');
                document.getElementById('INTERNET-up').style.display = "block";
                document.getElementById('INTERNET-down').style.display = "none";
            } if(deviant <0) {
                console.log('Down!');
                document.getElementById('INTERNET-up').style.display = "none";
                document.getElementById('INTERNET-down').style.display = "block";
            };
        };
    });
};
writeAndReadData();

//ReadDevices _FIST TIME WHEN START WEB APP TO GET STATE DEVICE
//DEVICE-CAMERA
function ReadCAMERA() {
    const db = getDatabase();
    //Read
    const starCountRef = ref(db, 'dataDevices/');
    onValue(starCountRef, (snapshot) => {
        const data = snapshot.val();
        //updateStarCount(postElement, data);
        cameraFirebase = data.Camera;
        // /console.log(cameraFirebase);
        if(cameraFirebase == '1') {
            myFunction_2('on');
        } if (cameraFirebase == '0') {
            myFunction_2('off');
        }
    });
};
ReadCAMERA();

//DEVICE-OUTLETS
function ReadOutlets() {
    const db = getDatabase();
    //Read
    const starCountRef = ref(db, 'dataDevices/');
    onValue(starCountRef, (snapshot) => {
        const data = snapshot.val();
        //updateStarCount(postElement, data);
        outletsFirebase = data.Outlets;
        // /console.log(cameraFirebase);
        if(outletsFirebase == '1') {
            myFunction_3('on');
        } if (outletsFirebase == '0') {
            myFunction_3('off');
        }
    });
};
ReadOutlets();

//DEVICE-WIFI
function ReadWifi() {
    const db = getDatabase();
    //Read
    const starCountRef = ref(db, 'dataDevices/');
    onValue(starCountRef, (snapshot) => {
        const data = snapshot.val();
        //updateStarCount(postElement, data);
        wifiFirebase = data.Wifi;
        // /console.log(cameraFirebase);
        if(wifiFirebase == '1') {
            myFunction_4('on');
        } if (wifiFirebase == '0') {
            myFunction_4('off');
        }
    });
};
ReadWifi();

//DEVICE-THERMOSTAT
function ReadThermostat() {
    const db = getDatabase();
    //Read
    const starCountRef = ref(db, 'dataDevices/');
    onValue(starCountRef, (snapshot) => {
        const data = snapshot.val();
        //updateStarCount(postElement, data);
        thermostatFirebase = data.Thermostat;
        // /console.log(cameraFirebase);
        if(thermostatFirebase == '1') {
            myFunction_5('on');
        } if (thermostatFirebase == '0') {
            myFunction_5('off');
        }
    });
};
ReadThermostat();

// function WriteDevices(cameraFirebase) {
//     const db = getDatabase();
//     set(ref(db, 'dataDevices/'), {
//         Camera: cameraFirebase
//     });
// }
// WriteDevices();

// function test() {
//     var passLIVINGROOM;
//     passLIVINGROOM = document.getElementById('LIVINGROOM').innerHTML;
//     console.log(passLIVINGROOM);
    
// };
// test();/////////////////////////////////////////////


//cameraFirebase
//WriteDataDevices CheckEventClick
CheckBox02.addEventListener('click',(e) => {
    const db = getDatabase();
    update(ref(db, 'dataDevices/'), {
      Camera: cameraFirebase
    });
    console.log(`WriteData ${cameraFirebase}`);
});
CheckBox03.addEventListener('click',(e) => {
    const db = getDatabase();
    update(ref(db, 'dataDevices/'), {
        Outlets: outletsFirebase
    });
    console.log(`WriteData ${outletsFirebase}`);
});
CheckBox04.addEventListener('click',(e) => {
    const db = getDatabase();
    update(ref(db, 'dataDevices/'), {
        Wifi: wifiFirebase
    });
    console.log(`WriteData ${wifiFirebase}`);
});
CheckBox05.addEventListener('click',(e) => {
    const db = getDatabase();
    update(ref(db, 'dataDevices/'), {
        Thermostat: thermostatFirebase
    });
    console.log(`WriteData ${thermostatFirebase}`);
});



/////////////////////////////////////////////////test//////////











