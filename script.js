'use strict';

let colorInput = document.querySelector('#bcolor');
let hexInput = document.querySelector('#backgroundcolor');
let shadowbox = document.getElementById("box_shadow_output");

let colorInputt = document.querySelector('#scolor');
let hexInputt = document.querySelector('#shadowcolor');
let outputbox = document.getElementById("box_shadow_output");

$(function () {
    $("#hslider-range-min").slider({
        range: "min",
        value: 10,
        min: -200,
        max: 200,
        slide: function (event, ui) {
            let bxscolor = document.getElementById("scolor").value;
            let vslider_val = document.getElementById("vslider_amount").value;
            let sslider_val = document.getElementById("sslider_amount").value;
            let bslider_val = document.getElementById("bslider_amount").value;
            let oslider_val = document.getElementById("oslider_amount").value;

            let inset = document.getElementById("inset");
            let insetval;
            if (inset.checked == true) {
                insetval = "inset";
            }
            else {
                insetval = "";
            }

            $("#hslider_amount").val(ui.value);
            document.getElementById("box_shadow_output").style.boxShadow = "rgba(" + hexToRgb(bxscolor).r + ", " + hexToRgb(bxscolor).g + ", " + hexToRgb(bxscolor).b + ", " + oslider_val + ") " + ui.value + "px " + vslider_val + "px " + bslider_val + "px " + sslider_val + "px " + insetval + " ";

            let myboxshadow = document.getElementById("box_shadow_output").style.boxShadow;
            document.getElementById("boxs_code").innerText = " box-shadow: " + myboxshadow + ";\r\n -webkit-box-shadow: " + myboxshadow + ";\r\n moz-box-shadow" + myboxshadow;
        }
    });


    $("#vslider-range-min").slider({
        range: "min",
        value: 10,
        min: -200,
        max: 200,
        slide: function (event, ui) {
            let bxscolor = document.getElementById("scolor").value;
            let hslider_val = document.getElementById("hslider_amount").value;
            let sslider_val = document.getElementById("sslider_amount").value;
            let bslider_val = document.getElementById("bslider_amount").value;
            let oslider_val = document.getElementById("oslider_amount").value;

            let inset = document.getElementById("inset");
            let insetval;
            if (inset.checked == true) {
                insetval = "inset";
            }
            else {
                insetval = "";
            }

            $("#vslider_amount").val(ui.value);
            document.getElementById("box_shadow_output").style.boxShadow = "rgba(" + hexToRgb(bxscolor).r + ", " + hexToRgb(bxscolor).g + ", " + hexToRgb(bxscolor).b + ", " + oslider_val + ") " + hslider_val + "px " + ui.value + "px " + bslider_val + "px " + sslider_val + "px " + insetval + " ";

            let myboxshadow = document.getElementById("box_shadow_output").style.boxShadow;
            document.getElementById("boxs_code").innerText = " box-shadow: " + myboxshadow + ";\r\n -webkit-box-shadow: " + myboxshadow + ";\r\n moz-box-shadow" + myboxshadow;
        }
    });


    $("#bslider-range-min").slider({
        range: "min",
        value: 10,
        min: -1,
        max: 101,
        slide: function (event, ui) {
            let bxscolor = document.getElementById("scolor").value;
            let hslider_val = document.getElementById("hslider_amount").value;
            let vslider_val = document.getElementById("vslider_amount").value;
            let sslider_val = document.getElementById("sslider_amount").value;
            let oslider_val = document.getElementById("oslider_amount").value;

            let inset = document.getElementById("inset");
            let insetval;
            if (inset.checked == true) {
                insetval = "inset";
            }
            else {
                insetval = "";
            }

            $("#bslider_amount").val(ui.value);
            document.getElementById("box_shadow_output").style.boxShadow = "rgba(" + hexToRgb(bxscolor).r + ", " + hexToRgb(bxscolor).g + ", " + hexToRgb(bxscolor).b + ", " + oslider_val + ") " + hslider_val + "px " + vslider_val + "px " + ui.value + "px " + sslider_val + "px " + insetval + " ";

            let myboxshadow = document.getElementById("box_shadow_output").style.boxShadow;
            document.getElementById("boxs_code").innerText = " box-shadow: " + myboxshadow + ";\r\n -webkit-box-shadow: " + myboxshadow + ";\r\n moz-box-shadow" + myboxshadow;
        }
    });


    $("#sslider-range-min").slider({
        range: "min",
        value: -5,
        min: -51,
        max: 51,
        slide: function (event, ui) {
            let bxscolor = document.getElementById("scolor").value;
            let hslider_val = document.getElementById("hslider_amount").value;
            let vslider_val = document.getElementById("vslider_amount").value;
            let bslider_val = document.getElementById("bslider_amount").value;
            let oslider_val = document.getElementById("oslider_amount").value;

            let inset = document.getElementById("inset");
            let insetval;
            if (inset.checked == true) {
                insetval = "inset";
            }
            else {
                insetval = "";
            }

            $("#sslider_amount").val(ui.value);
            document.getElementById("box_shadow_output").style.boxShadow = "rgba(" + hexToRgb(bxscolor).r + ", " + hexToRgb(bxscolor).g + ", " + hexToRgb(bxscolor).b + ", " + oslider_val + ") " + hslider_val + "px " + vslider_val + "px " + bslider_val + "px " + ui.value + "px " + insetval + " ";

            let myboxshadow = document.getElementById("box_shadow_output").style.boxShadow;
            document.getElementById("boxs_code").innerText = " box-shadow: " + myboxshadow + ";\r\n -webkit-box-shadow: " + myboxshadow + ";\r\n moz-box-shadow" + myboxshadow;
        }
    });


    $("#oslider-range-min").slider({
        range: "min",
        value: .5,
        min: 0,
        max: 1,
        step: .01,
        slide: function (event, ui) {
            let bxscolor = document.getElementById("scolor").value;
            let hslider_val = document.getElementById("hslider_amount").value;
            let vslider_val = document.getElementById("vslider_amount").value;
            let bslider_val = document.getElementById("bslider_amount").value;
            let sslider_val = document.getElementById("sslider_amount").value;

            let inset = document.getElementById("inset");
            let insetval;
            if (inset.checked == true) {
                insetval = "inset";
            }
            else {
                insetval = "";
            }

            $("#oslider_amount").val(ui.value);
            document.getElementById("box_shadow_output").style.boxShadow = "rgba(" + hexToRgb(bxscolor).r + ", " + hexToRgb(bxscolor).g + ", " + hexToRgb(bxscolor).b + ", " + ui.value + ") " + hslider_val + "px " + vslider_val + "px " + bslider_val + "px " + sslider_val + "px " + insetval + " ";

            let myboxshadow = document.getElementById("box_shadow_output").style.boxShadow;
            document.getElementById("boxs_code").innerText = " box-shadow: " + myboxshadow + ";\r\n -webkit-box-shadow: " + myboxshadow + ";\r\n moz-box-shadow" + myboxshadow;
        }
    });

});

// INSET JS

function applyinset() {
    let bxscolor = document.getElementById("scolor").value;
    let hslider_val = document.getElementById("hslider_amount").value;
    let vslider_val = document.getElementById("vslider_amount").value;
    let bslider_val = document.getElementById("bslider_amount").value;
    let sslider_val = document.getElementById("sslider_amount").value;
    let oslider_val = document.getElementById("oslider_amount").value;

    let inset = document.getElementById("inset");
    let insetval;
    if (inset.checked == true) {
        insetval = "inset";
    }
    else {
        insetval = "";
    }

    document.getElementById("box_shadow_output").style.boxShadow = "rgba(" + hexToRgb(bxscolor).r + ", " + hexToRgb(bxscolor).g + ", " + hexToRgb(bxscolor).b + ", " + oslider_val + ") " + hslider_val + "px " + vslider_val + "px " + bslider_val + "px " + sslider_val + "px " + insetval + " ";

    let myboxshadow = document.getElementById("box_shadow_output").style.boxShadow;
    document.getElementById("boxs_code").innerText = " box-shadow: " + myboxshadow + ";\r\n -webkit-box-shadow: " + myboxshadow + ";\r\n moz-box-shadow" + myboxshadow;
};

// COLOR JS

function hexToRgb(hex) {
    let result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : null;
};

function getColor(hex) {
    let rgb = hexToRgb(hex);
    let opacityb2 = document.getElementById("opacity").value;
    let rgbString = "rgba(" + rgb.r + "," + rgb.g + "," + rgb.b + "," + opacityb2 + ")";
    return rgbString;
};

function boxcolor_alert() {
    let color = colorInput.value;
    hexInput.value = color;
    shadowbox.style.backgroundColor = color;
};

function shadowcolor_alert() {
    let color = colorInputt.value;
    hexInputt.value = color;
    outputbox.style.shadowColor = color;

    let bxscolor = document.getElementById("scolor").value;
    let hslider_val = document.getElementById("hslider_amount").value;
    let vslider_val = document.getElementById("vslider_amount").value;
    let bslider_val = document.getElementById("bslider_amount").value;
    let sslider_val = document.getElementById("sslider_amount").value;
    let oslider_val = document.getElementById("oslider_amount").value;

    let inset = document.getElementById("inset");
    let insetval;
    if (inset.checked == true) {
        insetval = "inset";
    }
    else {
        insetval = "";
    }

    document.getElementById("box_shadow_output").style.boxShadow = "rgba(" + hexToRgb(bxscolor).r + ", " + hexToRgb(bxscolor).g + ", " + hexToRgb(bxscolor).b + ", " + oslider_val + ") " + hslider_val + "px " + vslider_val + "px " + bslider_val + "px " + sslider_val + "px " + insetval + " ";
};

// COPY JS

function copyStyle() {

    let copyText = document.getElementById("boxs_code");
    let textArea = document.createElement("textarea");
    textArea.value = copyText.textContent;

    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand("Copy");
    textArea.remove();
    let msg = "CODE COPIED SUCESSUFULLY !";
    document.getElementById("code_copied").innerHTML = msg;

    setTimeout(function () {
        document.getElementById("code_copied").innerHTML = '';
    }, 1000);
};