// ==UserScript==
// @name         DSL.SK fixer
// @namespace    pk-userscripts-collection
// @version      1.1.4
// @description  bigger font
// @author       PK
// @match        http://www.dsl.sk/*
// @match        https://www.dsl.sk/*
// @match        http://dsl.sk/*
// @match        https://dsl.sk/*
// @grant        GM_addStyle
// @run-at       document-idle
// @downloadURL  https://github.com/pkajan/userscripts-collection/raw/main/dsl.sk_fix.user.js
// @updateURL    https://github.com/pkajan/userscripts-collection/raw/main/dsl.sk_fix.user.js

// ==/UserScript==

var moarPIXELZ = "12pt";
var moarPIXELZ2 = "10pt";
var moarPIXELZ_discus = "12pt";
var myBgColor = "#222233";
var myTxColor = "#FFFFFF";
var myTxColor2 = "#BBDDEE";
var myTxColorLink = "#f4a460";
var myBorderColor = "1px solid #FFFFFF"
var logoImage = "invert(0.83) hue-rotate(180deg)";
var faviconURL = "https://img.icons8.com/3d-fluency/94/globe.png";
var i;

function addFavicon(url) {
    let link = document.createElement("link");
    link.rel = "icon";
    link.type = "image/png"; // Change to "image/x-icon" for .ico files
    link.href = url;
    document.head.appendChild(link);
}


if (location.protocol !== 'https:') {
    location.replace(`https:${location.href.substring(location.protocol.length)}`);
}
for (i = 0; i < document.getElementsByTagName("a").length; i++) {
    document.getElementsByTagName("a")[i].href.replace('http://','https://');
}
document.getElementById("header").getElementsByTagName("a")[0].href="https://www.dsl.sk/"; //logoURL

/* main page */
if (!window.location.href.match(/article.php\?/)) {
    document.getElementById("news_box").style.backgroundColor=myBgColor;
    document.getElementById("news_box").style.color=myTxColor;
    document.getElementById("body").getElementsByTagName("td")[2].style.display="none"; //hide adbox
    document.getElementById("news_box").style.width="750px"; //wider news
    document.getElementById("news_box").style.border="2px solid #FFFFFF"; //wider news
    document.getElementById("header").style.backgroundColor=myBgColor;
    document.getElementById("header").getElementsByTagName("tr")[1].style.display="none";
    document.getElementById("header").getElementsByTagName("table")[1].style.display="none";
    document.getElementById("header").getElementsByTagName("img")[0].style.filter=logoImage;
    document.getElementById("header").getElementsByTagName("img")[1].style.filter=logoImage;
    document.getElementsByClassName("top_link")[0].style.backgroundColor=myBgColor;
    for (i = 0; i < document.getElementsByClassName("header_info_text").length; i++) {
        document.getElementsByClassName("header_info_text")[i].style.display="none";
    }
    for (i = 0; i < document.getElementById("body").getElementsByTagName("a").length; i++) {
        document.getElementById("body").getElementsByTagName("a")[i].style.textDecoration="none";
    }

    for (i = 0; i < document.getElementById("news_box").getElementsByTagName("a").length; i++) {
        document.getElementById("news_box").getElementsByTagName("a")[i].onmouseover = function() {
            this.style.fontWeight= "bold";
            this.style.color= myTxColor;
        }
        document.getElementById("news_box").getElementsByTagName("a")[i].onmouseout = function() {
            this.style.backgroundColor = "transparent";
            this.style.color= myTxColor2;
        };
    }

    /* font size menu */
    for (i = 0; i < document.getElementById("body").getElementsByTagName("td").length; i++) {
        document.getElementById("body").getElementsByTagName("td")[i].style.fontSize=moarPIXELZ_discus;
    }

    for (i = 0; i < document.getElementById("body").getElementsByClassName("article_perex").length; i++) {
        document.getElementById("body").getElementsByClassName("article_perex")[i].style.fontSize=moarPIXELZ_discus;
        document.getElementById("body").getElementsByClassName("article_perex")[i].style.color=myTxColor;
    }
    for (i = 0; i < document.getElementsByClassName("small_notes").length; i++) {
        document.getElementsByClassName("small_notes")[i].getElementsByTagName("a")[0].style.color=myTxColor2;
    }
    document.getElementsByClassName("title_day")[0].style.color=myTxColor2;
    document.getElementsByClassName("box_title")[0].style.color=myTxColor2;

    for (i = 0; i < document.getElementsByClassName("title").length; i++) {
        document.getElementsByClassName("title")[i].style.color=myTxColor2;
    }
    for (i = 0; i < document.getElementById("body").getElementsByTagName("tbody")[0].getElementsByTagName("a").length; i++) {
        document.getElementById("body").getElementsByTagName("tbody")[0].getElementsByTagName("a")[i].style.color=myTxColor2;
    }
}

/* article page */
if (window.location.href.match(/article.php\?/)) {
    document.getElementById("header").style.backgroundColor=myBgColor;
    document.getElementById("header").getElementsByTagName("tr")[1].style.display="none";
    document.getElementById("header").getElementsByTagName("table")[1].style.display="none";
    document.getElementById("header").getElementsByTagName("img")[0].style.filter=logoImage;
    document.getElementById("header").getElementsByTagName("img")[1].style.filter=logoImage;
    document.getElementsByClassName("top_link")[0].style.backgroundColor=myBgColor;
    document.getElementsByClassName("header_info_text")[0].style.display="none";
    document.getElementById("body").getElementsByTagName("table")[1].style.display="none"; //hide adbox
    document.getElementsByClassName("article_body")[0].style.fontSize=moarPIXELZ;
    if(document.getElementById("tags_label")!=null) document.getElementById("tags_label").style.color=myTxColor;
    for (i = 0; i < document.getElementById("article_menu").getElementsByTagName("a").length; i++) {
        document.getElementById("article_menu").getElementsByTagName("a")[i].style.color=myTxColor;
        document.getElementById("article_menu").getElementsByTagName("a")[i].style.fontSize=moarPIXELZ2;
    }
    for (i = 0; i < document.getElementsByClassName("article_perex").length; i++) {
        document.getElementsByClassName("article_perex")[i].style.color=myTxColor;
    }
    for (i = 0; i < document.getElementsByClassName("article_body")[0].getElementsByTagName("a").length; i++) {
        document.getElementsByClassName("article_body")[0].getElementsByTagName("a")[i].style.color=myTxColorLink;
    }
    document.getElementById("bg").getElementsByTagName("tbody")[9].getElementsByTagName("img")[0].style.filter="invert(1)";

    /* comment section */
    if(document.getElementsByTagName("table")[13]){
        for (i = 0; i < document.getElementsByTagName("table")[13].getElementsByTagName("td").length; i++) {
            document.getElementsByTagName("table")[13].getElementsByTagName("td")[i].style.fontSize=moarPIXELZ_discus;
        }
    }
    if(document.getElementsByTagName("table")[12]){
        for (i = 0; i < document.getElementsByTagName("table")[12].getElementsByTagName("td").length; i++) {
            document.getElementsByTagName("table")[12].getElementsByTagName("td")[i].style.fontSize=moarPIXELZ_discus;
        }
    }
    document.querySelectorAll('td[bgcolor="#ffffff"]').forEach(cell => {
        cell.style.backgroundColor = myBgColor;
        cell.style.setProperty("color", myTxColor, "important");
    });

    document.querySelectorAll('font[style*="color: #808080"]').forEach(cell => {
        cell.style.backgroundColor = myBgColor;
        cell.style.setProperty("color", myTxColor, "important");
    });

}

/* whole page */
document.getElementById("title_bar").getElementsByTagName("img")[1].style.display="none";
document.getElementById("title_bar").getElementsByTagName("img")[2].style.filter=logoImage;
document.getElementById("bg").style.width="1200px"; /* make page wider */
document.getElementById("bg").style.backgroundColor=myBgColor;
document.getElementById("bg").getElementsByTagName("td")[7].style.backgroundImage="none";
document.body.style.backgroundColor=myBgColor;
document.getElementById("body").style.backgroundColor=myBgColor;
document.getElementById("body").style.color=myTxColor;
document.getElementById("menu").style.backgroundImage="none";
document.getElementById("menu").style.backgroundColor=myBgColor;

document.getElementsByTagName("table")[0].getElementsByTagName("table")[2].style.backgroundColor=myBgColor;
document.getElementsByTagName("table")[0].getElementsByTagName("table")[2].style.color=myTxColor;
document.getElementsByTagName("table")[0].getElementsByTagName("table")[3].style.backgroundColor=myBgColor;

/*center page*/
document.getElementsByTagName("table")[0].style.margin="auto";
document.getElementsByTagName("table")[0].style.width="50%";
document.getElementsByTagName("table")[0].style.padding="10px";
/*left menu*/
for (i = 0; i < document.getElementById("menu").getElementsByTagName("div").length; i++) {
    document.getElementById("menu").getElementsByTagName("div")[i].style.backgroundColor=myBgColor;
    document.getElementById("menu").getElementsByTagName("div")[i].style.color=myTxColor;
    document.getElementById("menu").getElementsByTagName("div")[i].style.border=myBorderColor;
}
var headersColorBG = "#e3dfd3";
var headersColor = "#29261d";
var menuDivs = document.getElementById("menu").getElementsByTagName("div");

for (i = 0; i < menuDivs.length; i++) {
    if (i === 0 || i === 5 || i === 8 || i === 11 || i === 14) {
        menuDivs[i].style.background = headersColorBG;
        menuDivs[i].style.color = headersColor;
    }
}

for (i = 0; i < document.getElementById("menu").getElementsByClassName("menu_line").length; i++) {
    document.getElementById("menu").getElementsByClassName("menu_line")[i].style.color=myTxColor;
    //document.getElementById("menu").getElementsByClassName("menu_line")[i].style.border=myBorderColor;
}
for (i = 0; i < document.getElementById("menu").getElementsByClassName("article_menu_line").length; i++) {
    document.getElementById("menu").getElementsByClassName("article_menu_line")[i].style.color=myTxColor;
}

const textlogodiv = document.createElement("div"); //create DIV
const breakline = document.createElement("br"); //create BR
const shortcut = document.createElement("a"); //create A
const textlogospan = document.createElement("span"); //create SPAN
const textlogospan2 = document.createElement("span"); //create SPAN

textlogodiv.setAttribute("id", "TextLOGOdiv");
textlogospan.setAttribute("id", "textlogo_dsl_big");
textlogospan2.setAttribute("id", "textlogo_dsl_small");

shortcut.appendChild(textlogospan);
shortcut.setAttribute("href", "https://www.dsl.sk/");
shortcut.setAttribute("id", "logoShortcut");
textlogodiv.appendChild(shortcut);
textlogodiv.appendChild(breakline);
textlogodiv.appendChild(textlogospan2);

const textlogo_dsl_big = document.createTextNode("DSL.sk");
const textlogo_dsl_small = document.createTextNode("Digitálny Svet pod Lupou");

textlogospan.appendChild(textlogo_dsl_big);
textlogospan2.appendChild(textlogo_dsl_small);

document.getElementById("header").getElementsByTagName("img")[1].parentElement.appendChild(textlogodiv);
document.getElementById("TextLOGOdiv").style.color=myTxColor;
document.getElementById("textlogo_dsl_big").style.fontSize="70px";
document.getElementById("textlogo_dsl_big").style.fontFamily="Arial, Helvetica, sans-serif";
document.getElementById("textlogo_dsl_big").style.fontWeight="900";
document.getElementById("textlogo_dsl_big").style.position="relative";
document.getElementById("textlogo_dsl_small").style.position="relative";
document.getElementById("textlogo_dsl_big").style.top="-30px";
document.getElementById("textlogo_dsl_small").style.top="-30px";
document.getElementById("textlogo_dsl_small").style.fontFamily="Arial, Helvetica, sans-serif";
document.getElementById("header").getElementsByTagName("img")[0].style.display="none";
document.getElementById("header").getElementsByTagName("img")[1].style.display="none";
document.getElementById("logoShortcut").style.textDecoration="none";
document.getElementById("logoShortcut").style.color=myTxColor;

addFavicon(faviconURL);

console.log("FIX");
