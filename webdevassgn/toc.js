function createTocFigure() {
    let tocFigure = document.createElement("figure");
    let tocFigCaption = document.createElement("figcaption");
    tocFigCaption.innerText = "Table of Contents";
    tocFigure.append(tocFigCaption);
    return tocFigure;
}

function createTocListItem(href, linkText) {
    let tocItemElem = document.createElement("li");
    let anchorElem = document.createElement("a");
    anchorElem.href = href;
    anchorElem.innerText = linkText;
    tocItemElem.append(anchorElem);
    return tocItemElem;
}

function generateToc() {
    let tocElem = document.getElementById("toc-list");
    document.querySelectorAll("h1, h2, h3").forEach((heading) => {
        let href = "#" + heading.id;
        let tocItem = createTocListItem(href, heading.innerText);
        tocElem.append(tocItem);
    });
}

document.addEventListener("DOMContentLoaded", generateToc);
