var config = {
    facebook: {
        ico: favicon("www.facebook.com"),
        url: "http://www.facebook.com/sharer.php?u={articleUrl}"
    },
    twitter: {
        ico: favicon("twitter.com"),
        url: "http://twitter.com/share?url={articleUrl}&text={articleTitle}"
    },
    linkedin: {
        ico: favicon("linkedin.com"),
        url: "http://www.linkedin.com/shareArticle?mini=true&url={articleUrl}&title={articleTitle}"
    },
    gplus: {
        ico: favicon("plus.google.com"),
        url: "https://plus.google.com/share?url={articleUrl}"
    },
    email: {
        ico: "https://mail.google.com/mail/u/0/images/favicon2.ico",
        url: "mailto://?subject={articleTitle}&subject={articleUrl}"
    },
    github: {
        ico: favicon("github.com"),
        url: "http://github.com"
    }
};

function favicon(domain) {
    return "http://www.google.com/s2/favicons?domain=" + domain;
}
document.addEventListener("DOMContentLoaded", function (event) {
    var btns = document.querySelectorAll("a.share");
    for (i = 0; i < btns.length; i++) {
        btn = btns[i];
        var classNames = btn.className;
        var classes = classNames.split(" ");
        var service = null;
        for (j = 0; j < classes.length; j++) {
            var current = classes[j];
            if (current.indexOf("btn-") > -1) {
                service = current.replace("btn-", "");
            }
        }
        var btnConfig = config[service];
        var icon = btnConfig.ico;
        var text = btn.innerHTML;
        text = "<img width='16' height='16' src='" + icon + "' style='vertical-align:text-bottom'/>&nbsp;" + text;
        btn.innerHTML = text;
        if (btn.href == "") {
            var articleUrl = window.location;
            var articleTitle = document.title;
            var url = btnConfig.url
                .replace("{articleUrl}", encodeURIComponent(articleUrl))
                .replace("{articleTitle}", encodeURIComponent(articleTitle));
            btn.href = url;
        }
        btn.style.display = "block";
        btn.style.border = "1px solid black";
        btn.style.padding = "5px";
        btn.style["border-radius"] = "3px";
        btn.style["text-decoration"] = "none";
        btn.style.color = "black";
        btn.parentNode.style.display = "inline-block";
        btn.parentNode.parentNode.style.margin = "0";
        btn.parentNode.parentNode.style.padding = "0";
    }
});
