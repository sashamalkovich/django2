function openAlert() {
  // window.alert("Hello World");
  sendData();
}

function countRabbits() {
  for (let i = 1; i <= 3; i++) {
    alert("Rabbit number " + i);

  }
}


setInterval(function () {
  // Call a function repetatively with 2 Second interval
  getData();
}, 2000); //2000mSeconds update rate

function getData() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      let temp1 = this.responseText.split(",");
      document.getElementById("ADCValue_0").innerHTML =
        temp1[0];
      document.getElementById("ADCValue_1").innerHTML =
        temp1[1];
      document.getElementById("ADCValue_2").innerHTML =
        temp1[2];
      document.getElementById("ADCValue_3").innerHTML =
        temp1[3];
      document.getElementById("ADCValue_4").innerHTML =
        temp1[4];
      if (temp1[5] == "1") {
        document.getElementById("ADCValue_5").innerHTML = "ON";
      } else if (temp1[5] == "0") {
        document.getElementById("ADCValue_5").innerHTML = "OFF";
      }
      if (temp1[6] == "1") {
        document.getElementById("ADCValue_6").innerHTML = "ON";
      } else if (temp1[6] == "0") {
        document.getElementById("ADCValue_6").innerHTML = "OFF";
      }
      if (temp1[7] == "1") {
        document.getElementById("ADCValue_7").innerHTML = "ON";
      } else if (temp1[7] == "0") {
        document.getElementById("ADCValue_7").innerHTML = "OFF";
      }
      if (temp1[8] == "1") {
        document.getElementById("ADCValue_8").innerHTML = "ON";
      } else if (temp1[8] == "0") {
        document.getElementById("ADCValue_8").innerHTML = "OFF";
      }
      if (temp1[9] == "0") {
        document.getElementById("ADCValue_9").innerHTML = "DRAIN";
      } else if (temp1[9] == "1") {
        document.getElementById("ADCValue_9").innerHTML = "FILL";
      } else if (temp1[9] == "2") {
        document.getElementById("ADCValue_9").innerHTML = "FILL T";
      } else if (temp1[9] == "3") {
        document.getElementById("ADCValue_9").innerHTML = "DRAIN T";
      }
      if (temp1[10] == "1") {
        document.getElementById("ADCValue_10").innerHTML = "ON";
      } else if (temp1[10] == "0") {
        document.getElementById("ADCValue_10").innerHTML = "OFF";
      }
      document.getElementById("ADCValue_11").innerHTML =
        temp1[11];

    }
  };
  xhttp.open("GET", "readADC", true);
  xhttp.send();
}


function sendLights(identifier) {
  var xhttp = new XMLHttpRequest();
  var color = 'green';
  var color1 = "#008CBA"; // Либо hex #fafafa и т.д.
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      if (this.responseText == "ON") {
        identifier.style.background = color;
      } else if (this.responseText == "OFF") {
        identifier.style.background = color1;
      }
      // window.alert("QU" + this.responseText);
    }
  };
  xhttp.open("GET", "sendLights", true);
  xhttp.send();
}

function sendLight_0(identifier) {
  var xhttp = new XMLHttpRequest();
  var color = 'green';
  var color1 = "#008CBA"; // Либо hex #fafafa и т.д.
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      if (this.responseText == "ON") {
        identifier.style.background = color;
      } else if (this.responseText == "OFF") {
        identifier.style.background = color1;
      }
      // window.alert("QU" + this.responseText);
    }
  };
  xhttp.open("GET", "sendLight_0", true);
  xhttp.send();
}

function sendLight_1(identifier) {
  var xhttp = new XMLHttpRequest();
  var color = 'green';
  var color1 = "#008CBA"; // Либо hex #fafafa и т.д.
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      if (this.responseText == "ON") {
        identifier.style.background = color;
      } else if (this.responseText == "OFF") {
        identifier.style.background = color1;
      }
      // window.alert("QU" + this.responseText);
    }
  };
  xhttp.open("GET", "sendLight_1", true);
  xhttp.send();
}

function sendLight_2(identifier) {
  var xhttp = new XMLHttpRequest();
  var color = 'green';
  var color1 = "#008CBA"; // Либо hex #fafafa и т.д.
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      if (this.responseText == "ON") {
        identifier.style.background = color;
      } else if (this.responseText == "OFF") {
        identifier.style.background = color1;
      }
      // window.alert("QU" + this.responseText);
    }
  };
  xhttp.open("GET", "sendLight_2", true);
  xhttp.send();
}

function sendDrain(identifier) {
  var xhttp = new XMLHttpRequest();
  var color = 'green';
  var color1 = "#008CBA"; // Либо hex #fafafa и т.д.
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      if (this.responseText == "0ON") {
        identifier.style.background = color;
      } else if (this.responseText == "0OFF") {
        identifier.style.background = color1;
      }
      // window.alert("QU" + this.responseText);
    }
  };
  xhttp.open("GET", "sendDrain", true);
  xhttp.send();
}

function sendFill(identifier) {
  var xhttp = new XMLHttpRequest();
  var color = 'green';
  var color1 = "#008CBA"; // Либо hex #fafafa и т.д.
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      if (this.responseText == "1ON") {
        identifier.style.background = color;
      } else if (this.responseText == "1OFF") {
        identifier.style.background = color1;
      }
      // window.alert("QU" + this.responseText);
    }
  };
  xhttp.open("GET", "sendFill", true);
  xhttp.send();
}

function sendFillT(identifier) {
  var xhttp = new XMLHttpRequest();
  var color = 'green';
  var color1 = "#008CBA"; // Либо hex #fafafa и т.д.
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      if (this.responseText == "2ON") {
        identifier.style.background = color;
      } else if (this.responseText == "2OFF") {
        identifier.style.background = color1;
      }
      // window.alert("QU" + this.responseText);
    }
  };
  xhttp.open("GET", "sendFillT", true);
  xhttp.send();
}

function sendDrainT(identifier) {
  var xhttp = new XMLHttpRequest();
  var color = 'green';
  var color1 = "#008CBA"; // Либо hex #fafafa и т.д.
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      if (this.responseText == "3ON") {
        identifier.style.background = color;
      } else if (this.responseText == "3OFF") {
        identifier.style.background = color1;
      }
      // window.alert("QU" + this.responseText);
    }
  };
  xhttp.open("GET", "sendDrainT", true);
  xhttp.send();
}

function sendLoad(identifier) {
  var xhttp = new XMLHttpRequest();
  var color = 'green';
  var color1 = "#008CBA"; // Либо hex #fafafa и т.д.
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      if (this.responseText == "4ON") {
        identifier.style.background = color;
      } else if (this.responseText == "4OFF") {
        identifier.style.background = color1;
      }
      // window.alert("QU" + this.responseText);
    }
  };
  xhttp.open("GET", "sendLoad", true);
  xhttp.send();
}

function sendSave(identifier) {
  var xhttp = new XMLHttpRequest();
  var color = 'green';
  var color1 = "#008CBA"; // Либо hex #fafafa и т.д.
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      if (this.responseText == "5ON") {
        identifier.style.background = color;
      } else if (this.responseText == "5OFF") {
        identifier.style.background = color1;
      }
      // window.alert("QU" + this.responseText);
    }
  };
  xhttp.open("GET", "sendSave", true);
  xhttp.send();
}

function sendReset(identifier) {
  var xhttp = new XMLHttpRequest();
  var color = 'green';
  var color1 = "#008CBA"; // Либо hex #fafafa и т.д.
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      if (this.responseText == "6ON") {
        identifier.style.background = color;
      } else if (this.responseText == "6OFF") {
        identifier.style.background = color1;
      }
      // window.alert("QU" + this.responseText);
    }
  };
  xhttp.open("GET", "sendReset", true);
  xhttp.send();
}

function changeColor(identifier) {

  var color = 'green';
  var color1 = "#008CBA"; // Либо hex #fafafa и т.д.
  for (let index = 0; index < 100000; index++) {
    identifier.style.background = color1;
  
  }
  
    identifier.style.background = color;

}
// Менять цвет при клике, либо сразу после загрузки dom

