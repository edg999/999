
(function() {
    'use strict';
    window.configElements = []
    window.overlay = document.createElement("div")
    window.overlay.style.width = "100vw"
    window.overlay.style.height = "100vh"
    window.overlay.style.zIndex = "1"
    window.overlay.style.position = "fixed"
    window.overlay.style.visibility = "hidden"
    window.overlay.id = "overlay"
    document.body.prepend(window.overlay)
    function BuildMenuEntry (name, info, id, configpane) {
        window.entry = document.createElement("div")
        window.tickbox = document.createElement("input")
        window.tickbox.type = "checkbox"
        window.tickbox.id = id
        window.configElements.push(id)
        window.entry.appendChild(window.tickbox)
        window.window.label = document.createElement("label")
        window.label.innerText = name
        window.entry.appendChild(window.label)
        if (configpane != undefined) {
            window.configbutton = document.createElement("button")
            window.configbutton.innerText = "Configure"
            window.configbutton.style.marginLeft = "7px"
            window.configbutton.style.border = "1px solid #5f5f5f"
            window.configbutton.style.boxShadow = "inset 0 0 5px rgba(0, 0, 0, 0.6)"
            window.configbutton.style.backgroundColor = "rgb(39, 39, 39)"
            window.configbutton.style.color = "#f9a619"
            window.configbutton.style.borderRadius = "3px"
            window.configbutton.onclick = function () {
                if (document.getElementById(configpane).style.visibility == "unset") {
                    document.getElementById(configpane).style.visibility = "hidden"
                } else {
                    document.getElementById(configpane).style.visibility = "unset"
                }
            }
            window.entry.appendChild(window.configbutton)
        }
        window.desc = document.createElement("p")
        window.desc.innerHTML = info;
        window.entry.appendChild(window.desc)
        return window.entry
    }
    function RenderPane(name, id, width, height, margintop, marginleft) {
        window.pane = document.createElement("div")
        window.pane.style.width = width
        window.pane.style.height = height
        window.pane.style.position = "absolute"
        window.pane.style.marginTop = margintop
        window.pane.style.marginLeft = marginleft
        window.pane.style.border = "1px solid rgb(95, 95, 95)"
        window.pane.style.borderRadius = "3px"
        window.pane.style.backgroundColor = "rgb(39, 39, 39)"
        window.pane.style.overflow = "hidden"
        window.pane.style.color = "rgb(249, 166, 25)"
        window.pane.style.textAlign = "center"
        window.pane.style.overflowY = "scroll"
        window.pane.id = id
        window.panetitle = document.createElement("h1")
        window.panetitle.innerText = name
        window.pane.appendChild(window.panetitle)
        window.pane.appendChild(document.createElement("hr"))
        document.getElementById("overlay").appendChild(window.pane)
    }
    // Add the button
    window.twbut = document.createElement("button")
    window.twbut.innerText = "           "
    window.twbut.id = "twbut"
    window.twbut.style.border = "1px solid #5f5f5f"
    window.twbut.style.boxShadow = "inset 0 0 5px rgba(0, 0, 0, 0.6)"
    window.twbut.style.backgroundColor = "rgb(39, 39, 39)"
    window.twbut.style.color = "#f9a619"
    window.twbut.style.borderRadius = "3px"
    window.twbut.style.marginLeft = "40%"
    window.twbut.style.zIndex = "2"

    document.getElementsByClassName("mainfoot")[0].appendChild(window.twbut)
    RenderPane("Twe", "twmeu", "50%", "50%", "20vh", "25%")
    document.getElementById("twmeu").appendChild(BuildMenuEntry("A!D", " ", "AAD"))
    document.getElementById("twmeu").appendChild(BuildMenuEntry("v0!c!ab"," ","ACV"))
    document.getElementById("twmeu").appendChild(BuildMenuEntry("Sk!p !ntr0", " ", "SI"))
    document.getElementById("twmeu").appendChild(BuildMenuEntry("Gu355 Practice", " ", "GP", "prac"))
    document.getElementById("twmeu").appendChild(BuildMenuEntry("Sh0w C0lUnns"," ", "ShCo"))
    RenderPane("Gu3ss practic3", "prac", "15%", "15%", "0", "0")
    document.getElementById("prac").style.visibility = "hidden"
    document.getElementById("prac").appendChild(BuildMenuEntry("GTA", "GTA", "GUAs"))
    window.copyright = document.createElement("p")
    window.copyright.innerHTML = "(HA!!)"
    window.copyright.style.color = "gray"
    window.copyright.style.width = "100%"
    document.getElementById("twmeu").append(window.copyright)
    document.getElementById("twbut").addEventListener("click", function () {
        if (document.getElementById("overlay").style.visibility == "hidden") {
            document.getElementById("overlay").style.visibility = "visible"
        } else {
            document.getElementById("overlay").style.visibility = "hidden"
        }
    })


    function autadv () {
        if (document.getElementById("AAD").checked) {
            if (document.getElementById("activity-title").innerText == "Quiz") {
            } else {
                try {document.getElementsByClassName("footnav goRight")[0].click()} catch (TypeError) {}
                try {window.frames[0].API.FrameChain.nextFrame()} catch (TypeError) {}
            }
        }
    }
    function skpIn() {
        if (document.getElementById("SI").checked) {
            try {window.frames[0].document.getElementById("invis-o-div").remove()} catch (TypeError) {}
        }
    }
    function GuePracticla() {
        if (document.getElementById("GP").checked) {
            try { // document.getElementById("activity-title") may error
                if (document.getElementById("activity-title").innerText == "Assignment") {
                    if (!document.getElementById("GUAs").checked) {
                        return // End the method call so we dont guess
                    }
                }
                if (["Instruction", "Assignment", "Warm-Up"].includes(document.getElementById("activity-title").innerText)) {
                    try {window.options = window.frames[0].frames[0].document.getElementsByClassName("answer-choice-button");
                    window.options[Math.floor(Math.random() * window.options.length)].click();} catch (TypeError) {}
                    try {window.frames[0].API.Frame.check()} catch (TypeError) {} // This has to be seporate from the option clicker in case it's a text only practice
                }
            }
            catch (TypeError) {}
        }
    }
    function shoCoolmn() {
        if (document.getElementById("ShCo").checked) {
            try {window.frames[0].frames[0].document.getElementsByClassName("right-column")[0].children[0].style.display = "block"} catch (TypeError) {}
            try {window.frames[0].frames[0].document.getElementsByClassName("left-column")[0].children[0].style.display = "block"} catch (TypeError) {}
        }
    }
    function voComp() {
        if (document.getElementById("ACV").checked) {
            if (document.getElementById("activity-title").innerText == "Vocabulary"){
                try {window.frames[0].document.getElementsByClassName("word-textbox")[0].value = window.frames[0].document.getElementsByClassName("word-background")[0].value} catch(TypeError) {}
                try {for (var x of window.frames[0].document.getElementsByClassName("playbutton vocab-play")) {
                    x.click()
                }} catch (TypeError) {}
                try {window.frames[0].document.getElementsByClassName("uibtn uibtn-blue uibtn-arrow-next")[0].click()} catch(TypeError) {}
            }
        }
    }

    function loaditem (item, id) {
        if (localStorage.getItem(item) != null) {
            if (localStorage.getItem(item) == "true") { //Because LocalStorage only stores strings
                document.getElementById(id).checked = true
            } else {
                document.getElementById(id).checked = false
            }
        }
    }
    for (var x of configElements) {
        loaditem(x, x)
    }
    function syncConfig() {
        for (var x of configElements) {
            localStorage.setItem(x, document.getElementById(x).checked.toString())
        }
    }
   
    function loop () {
        voComp()
        autadv()
        skpIn()
        GuePracticla()
        syncConfig()
        shoCoolmn()
    }
    window.masterloop = setInterval(loop, 1000);
})();

