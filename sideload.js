!function(){"use strict";function e(e,t,n,o){return window.entry=document.createElement("div"),window.tickbox=document.createElement("input"),window.tickbox.type="checkbox",window.tickbox.id=n,window.configElements.push(n),window.entry.appendChild(window.tickbox),window.window.label=document.createElement("label"),window.label.innerText=e,window.entry.appendChild(window.label),null!=o&&(window.configbutton=document.createElement("button"),window.configbutton.innerText="Configure",window.configbutton.style.marginLeft="7px",window.configbutton.style.border="1px solid #5f5f5f",window.configbutton.style.boxShadow="inset 0 0 5px rgba(0, 0, 0, 0.6)",window.configbutton.style.backgroundColor="rgb(39, 39, 39)",window.configbutton.style.color="#f9a619",window.configbutton.style.borderRadius="3px",window.configbutton.onclick=function(){"unset"==document.getElementById(o).style.visibility?document.getElementById(o).style.visibility="hidden":document.getElementById(o).style.visibility="unset"},window.entry.appendChild(window.configbutton)),window.desc=document.createElement("p"),window.desc.innerHTML=t,window.entry.appendChild(window.desc),window.entry}function t(e,t,n,o,i,d){window.pane=document.createElement("div"),window.pane.style.width=n,window.pane.style.height=o,window.pane.style.position="absolute",window.pane.style.marginTop=i,window.pane.style.marginLeft=d,window.pane.style.border="1px solid rgb(95, 95, 95)",window.pane.style.borderRadius="3px",window.pane.style.backgroundColor="rgb(39, 39, 39)",window.pane.style.overflow="hidden",window.pane.style.color="rgb(249, 166, 25)",window.pane.style.textAlign="center",window.pane.style.overflowY="scroll",window.pane.id=t,window.panetitle=document.createElement("h1"),window.panetitle.innerText=e,window.pane.appendChild(window.panetitle),window.pane.appendChild(document.createElement("hr")),document.getElementById("overlay").appendChild(window.pane)}for(var n of(window.configElements=[],window.overlay=document.createElement("div"),window.overlay.style.width="100vw",window.overlay.style.height="100vh",window.overlay.style.zIndex="1",window.overlay.style.position="fixed",window.overlay.style.visibility="hidden",window.overlay.id="overlay",document.body.prepend(window.overlay),window.tweaksbutton=document.createElement("button"),window.tweaksbutton.innerText="  ",window.tweaksbutton.id="tweaksbutton",window.tweaksbutton.style.border="1px solid #5f5f5f",window.tweaksbutton.style.boxShadow="inset 0 0 5px rgba(0, 0, 0, 0.6)",window.tweaksbutton.style.backgroundColor="rgb(39, 39, 39)",window.tweaksbutton.style.color="#f9a619",window.tweaksbutton.style.borderRadius="3px",window.tweaksbutton.style.marginLeft="40%",window.tweaksbutton.style.zIndex="2",document.getElementsByClassName("mainfoot")[0].appendChild(window.tweaksbutton),t("EdgenTweaks","tweaksmenu","50%","50%","20vh","25%"),document.getElementById("tweaksmenu").appendChild(e("Auto Advance","Advance to the next portion of the course automatically when it becomes available","AutoAdvance.tickbox")),document.getElementById("tweaksmenu").appendChild(e("Auto Complete Vocab","Automatically completes vocab assignments","AutoCompleteVocabTickbox")),document.getElementById("tweaksmenu").appendChild(e("Skip intro","Lets you interact with practices while the intro audio is playing","SkipIntro.tickbox")),document.getElementById("tweaksmenu").appendChild(e("Guess Practice","Most teachers don't count practices twords your final grade, so you can guess your way thru them. This automatically guesses thru practices.","GuessPractice.tickbox","practiceconfig")),document.getElementById("tweaksmenu").appendChild(e("Show Columns","On practices where you have to write a text response to a prompt, there is an example response to the prompt. However, it is hidden until you submit your response. This forces it to show even if you haven't submitted a response yet","ShowColumn.tickbox")),t("Guess Practice Config","practiceconfig","15%","15%","0","0"),document.getElementById("practiceconfig").style.visibility="hidden",document.getElementById("practiceconfig").appendChild(e("Guess thru Assignments","Guesses thru assignments. This is highly discouraged","guessassignments")),window.copyright=document.createElement("p"),window.copyright.innerHTML="Version 9.9.9 ",window.copyright.style.color="gray",window.copyright.style.width="100%",document.getElementById("tweaksmenu").append(window.copyright),document.getElementById("tweaksbutton").addEventListener("click",function(){"hidden"==document.getElementById("overlay").style.visibility?document.getElementById("overlay").style.visibility="visible":document.getElementById("overlay").style.visibility="hidden"}),configElements))o=n,i=n,null!=localStorage.getItem(o)&&("true"==localStorage.getItem(o)?document.getElementById(i).checked=!0:document.getElementById(i).checked=!1);var o,i;window.menutitleclicks=0,document.getElementById("tweaksmenu").firstChild.onclick=function(){if(window.menutitleclicks<10&&(window.menutitleclicks++,10==window.menutitleclicks)){console.log("Easter egg activated");var e=document.createElement("img");e.src="https://i.gifer.com/zYw.gif",e.style.position="fixed",e.style.bottom="40px",e.style.marginLeft="80%",document.body.appendChild(e)}},window.masterloop=setInterval(function(){!function(){if(document.getElementById("AutoCompleteVocabTickbox").checked&&"Vocabulary"==document.getElementById("activity-title").innerText){try{window.frames[0].document.getElementsByClassName("word-textbox")[0].value=window.frames[0].document.getElementsByClassName("word-background")[0].value}catch(e){}try{for(var e of window.frames[0].document.getElementsByClassName("playbutton vocab-play"))e.click()}catch(e){}try{window.frames[0].document.getElementsByClassName("uibtn uibtn-blue uibtn-arrow-next")[0].click()}catch(e){}}}(),function(){if(document.getElementById("AutoAdvance.tickbox").checked)try{var e=byId("activity-title").innerText.toLowerCase(),t=!0;switch(e){case"quiz":case"unit test":case"unit test review":case"cumulative exam":case"cumulative exam review":t=!1}if(t){try{document.getElementsByClassName("footnav goRight")[0].click()}catch(e){}try{window.frames[0].API.FrameChain.nextFrame()}catch(e){}}}catch(e){}}(),function(){if(document.getElementById("SkipIntro.tickbox").checked)try{window.frames[0].document.getElementById("invis-o-div").remove()}catch(e){}}(),function(){if(document.getElementById("GuessPractice.tickbox").checked)try{if("Assignment"==document.getElementById("activity-title").innerText&&!document.getElementById("guessassignments").checked)return;if(["Instruction","Assignment","Warm-Up"].includes(document.getElementById("activity-title").innerText)){try{window.options=window.frames[0].frames[0].document.getElementsByClassName("answer-choice-button"),window.options[Math.floor(Math.random()*window.options.length)].click()}catch(e){}try{window.frames[0].API.Frame.check()}catch(e){}}}catch(e){}}(),function(){for(var e of configElements)localStorage.setItem(e,document.getElementById(e).checked.toString())}(),function(){if(document.getElementById("ShowColumn.tickbox").checked){try{window.frames[0].frames[0].document.getElementsByClassName("right-column")[0].children[0].style.display="block"}catch(e){}try{window.frames[0].frames[0].document.getElementsByClassName("left-column")[0].children[0].style.display="block"}catch(e){}}}()},1e3)}(),function(){"use strict";var e=!1,t=document.getElementById("stageFrame").contentDocument,n=document.getElementById("stageFrame").contentWindow,o=document.getElementById("stageFrame"),i=!1,d=document.createElement("button");function c(e){var n=t.getSelection().toString();if(0==i&&""!=n){var c=o.getBoundingClientRect();d.style.visibility="visible",d.style.top=e.clientY+c.y+10+"px",d.style.left=e.clientX+c.x+"px"}else i=!1}function l(e){document.getElementById("searchButton").style.visibility="hidden",n.getSelection?n.getSelection().empty?n.getSelection().empty():n.getSelection().removeAllRanges&&n.getSelection().removeAllRanges():t.selection&&t.selection.empty()}d.id="searchButton",d.innerText="Search on Brainly",d.style.position="absolute",d.style.visibility="visible",document.body.append(d),document.getElementById("searchButton").onclick=function(){i=!0;var e="https://brainly.com/app/ask?entry=top&q="+encodeURIComponent(t.getSelection().toString());window.open(e,"_blank")},setInterval(function(){var o=document.getElementById("stageFrame");null==o.contentDocument.getElementById("iFramePreview")&&1!=e||(o=o.contentDocument.getElementById("iFramePreview"),e=!0),null!=o&&(null!=o.onmousedown&&null!=o.onmouseup||(t=o.contentDocument,n=o.contentWindow,o.contentDocument.body.onmouseup=c,o.contentDocument.body.onmousedown=l))},300)}();


var skip_speaking_intros = true;
// Default = true (If problems occur, try turning this off by replacing true with false)
// Description: This will allow the user to check boxes, complete assignments, or skip instructions as the speaker is talking as in the intro buttons.  If problems are occuring, try turning this off
// Bugs:
//
// May cause "Unable to load video file." error (You can change skip_speaking_intros if this problem occurs).  The program as of right now will just turn off the display of the error message that pops up.  I will look into fixing it

var is_auto_clicking = true;
// Default = true (If problems occur, try turning this off by replacing true with false)
// Description: This will automatically click the next button
// Bugs:
//
// Untested if left at false
// MAJOR: After Direct Instructions, it will get stuck in a loop at going to the next assignment.  This must be fixed!

var autodefi = true;
// Default = true (If problems occur, try turning this off by replacing true with false)
// Description: This will fill out textboxes for Vocabulary automatically using a method found by /u/Turtlemower.  The code for this part of the script was created by /u/Mrynot88 and has been greatly appreciated.
// Bugs:
//
// Currently, there are no bugs reported!

var prevent_inactive = true;
// Default = true (If problems occur, try turning this off by replacing true with false)
// Description: This will prevent inactivity emails and automatic logoff.  The code for this part of the script was created by XANADryden.
// Bugs:
//
// Doesn't yet work, TODO: Change element

var e;

function triggerEvent(el, type) {
                    if ('createEvent' in document) {
                        // modern browsers, IE9+
                        e = document.createEvent('HTMLEvents');
                        e.initEvent(type, false, true);
                        el.dispatchEvent(e);
                    } else {
                        // IE 8
                        e = document.createEventObject();
                        e.eventType = type;
                        el.fireEvent('on'+e.eventType, e);
                    }
                }

(function() {
    'use strict';
/*
----- Developer Info -----
Built on top of the "edgenuity next clicker" which can be found at https://greasyfork.org/en/scripts/19842-edgenuity-next-clicker, and https://greasyfork.org/en/scripts/395567-edgenuity-master-controller-v0-3/code
This is open and is available for the public as long as it is not sold in any way or form, even if modified.  
Any questions or any contact about the original program can be sent to joseph.tortorelli5@gmail.com or you can contact them on reddit with the username /u/hemlck
Any bugs or issues should go to https://github.com/XANADryden/Edgenuity-Master-Controller/issues
Any questions or any contact about the current version should go to dryden@bonnerclan.com
--- Program Info ---
variable "pageload" is set to an interval every 1 second (1000ms)
variable "current_frame" will only get the current frame if it has been completed.  It will not actually get the current frame.
variable "nextactivity" and "nextactivity_disabled" are for the next button on the bottom of the screen.  It will not only turn to the next acitivty, but also the next lesson if its after a quiz.
variable "alreadyPlayedCheck" is specific to the code for the auto-completion of the vocab.
variable "no_inactive" is set to an interval every 10 seconds (10000ms)
variable current_page is unused as of right now because of a bug
*/
    var pageload, nextclicker, nextslide_button, nextactivity, nextactivity_disabled, no_inactive;
    var current_frame;
    var current_frame_id;
    var alreadyPlayedCheck;
    var current_page;
    function loadpage() {
        if(skip_speaking_intros){
            var invis = document.getElementById("invis-o-div");
            var error_message_delete = document.getElementById("uid1_errorMessage");
            if(invis){
                invis.parentElement.removeChild(invis);
            }
            if(error_message_delete){
                error_message_delete.parentElement.removeChild(error_message_delete);
            }
        }
        if(is_auto_clicking){
        pageload = setInterval(function() {
           current_page = document.getElementById("activity-title");
           nextactivity = document.getElementsByClassName("footnav goRight")[0];
           nextactivity_disabled = document.getElementsByClassName("footnav goRight disabled")[0];
            if (nextactivity && !nextactivity_disabled) {
                nextactivity.click();
                clearInterval(pageload);
                if (prevent_inactive) {
                    clearInterval(no_inactive);
                }
                setTimeout(loadpage, 1000);
            }
            document.querySelector('iframe').contentWindow.API.E2020.freeMovement = true
            current_frame = document.getElementsByClassName("FrameCurrent FrameComplete")[0];
            //if(current_frame){
            //current_frame_id = current_frame.id;
            //}
            nextslide_button = document.getElementsByClassName("FrameRight")[0];
            if (nextslide_button && current_frame) {
                nextclicker = setInterval(function() {
                    nextslide_button.click();
                    setTimeout(function () {
                        //var invis = document.getElementById("invis-o-div");
                        //if (invis) {
                            //invis.setAttribute("style", "display: none;");
                        //}
                    }, 500);
                }, 500);
                clearInterval(pageload);
                if (prevent_inactive) {
                    clearInterval(no_inactive);
                }
            }
        }, 1000);
    }
       //if(current_page.innerhtml == "Vocabulary"){
        if (autodefi){ // This is for the auto-completition of the vocab
            setInterval(function () {
                var normalTextBox = document.getElementsByClassName("word-textbox word-normal")[0];
                var correctTextBox = document.getElementsByClassName("word-textbox word-correct")[0];
                var normalTextButton = document.getElementsByClassName("plainbtn alt blue selected")[0];
                var firstDefButton = document.getElementsByClassName("playbutton vocab-play")[0];
                var nextButton = document.getElementsByClassName("uibtn uibtn-blue uibtn-arrow-next")[0];
                if(normalTextBox && !correctTextBox){
                    normalTextBox.value = normalTextButton.innerHTML;
                    alreadyPlayedCheck = false;
                    triggerEvent(normalTextBox, "keyup");
                }
                if(correctTextBox && !alreadyPlayedCheck){
                    firstDefButton.click();
                    alreadyPlayedCheck = true;
                }
                if(nextButton && correctTextBox){
                    nextButton.click();
                }
            },2000);
    }
    if (prevent_inactive) {
        no_inactive = setInterval(function () {
            document.body.click();
            //nextactivity_disabled = document.getElementsByClassName("footnav goRight disabled")[0];
        },10000);
    }
       //}
    }
    loadpage();
})();
