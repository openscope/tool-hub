let open = 'none';

// ... Card Height ...

window.onload = () => {
    const cardOne = document.querySelector('.polyconv');
    const cardOneHeight = cardOne.clientHeight + 10;

    const CSSVars = document.querySelector('.add');

    CSSVars.style.cssText = '--card-height: ' + cardOneHeight + 'px; height: var(--card-height);';
}

// ... Scrolling ...

window.onscroll = scrollUpdate;

function scrollUpdate() {
    console.log(getScrollPercent());

    let percentage = getScrollPercent();
    let radius;

    percentage > 99.9 ? radius = 0 : radius = 10;

    const CSSVars = document.getElementsByTagName('html')[0];
    CSSVars.style.cssText = "--scroll-height: " + percentage + "%; --scroll-radius: " + radius + "px;";
}

function getScrollPercent() {
    let h = document.documentElement,
        b = document.body,
        st = 'scrollTop',
        sh = 'scrollHeight';
    return (h[st] || b[st]) / ((h[sh] || b[sh]) - h.clientHeight) * 100;
}

// ... Menu Toggling ...

function toggleMenu() {
    var menuElem = document.querySelector('.menu');
    
    if (menuElem.classList.contains('open')) {
        menuElem.classList.remove('open');
    }
    else {
        menuElem.classList.add('open');
    }
}

// ... Hover Effects ...

function isHovered(element) {
    return (element.parentElement.querySelector(':hover') === element || element.parentNode.querySelector(":hover") === element);
}

const polyCard = document.querySelector('.polyconv'),
    polyContent = document.querySelector('.polyconv__content'),
    polyMedia = document.querySelector('.polyconv__media'),
    polyTitle = document.querySelector('.polyconv__title'),
    centreCard = document.querySelector('.centreline'),
    centreContent = document.querySelector('.centreline__content'),
    centreMedia = document.querySelector('.centreline__media'),
    centreTitle = document.querySelector('.centreline__title'),
    addCard = document.querySelector('.add'),
    addContent = document.querySelector('.add__content'),
    addMedia = document.querySelector('.add__media'),
    addTitle = document.querySelector('.add__title');

document.addEventListener('mousemove', function checkHover() {
    let polyHovered = isHovered(polyContent),
        centreHovered = isHovered(centreContent),
        addHovered = isHovered(addContent);

    if (polyHovered !== isHovered.polyHovered && !polyCard.classList.contains('open')) {
        polyHovered ? polyMedia.classList.add('hovered') : polyMedia.classList.remove('hovered');
        polyHovered ? polyTitle.classList.add('hovered') : polyTitle.classList.remove('hovered');
        isHovered.polyHovered = polyHovered;
    }
    if (centreHovered !== isHovered.centreHovered) {
        centreHovered ? centreMedia.classList.add('hovered') : centreMedia.classList.remove('hovered');
        centreHovered ? centreTitle.classList.add('hovered') : centreTitle.classList.remove('hovered');
        isHovered.centreHovered = centreHovered;
    }
    if (addHovered !== isHovered.addHovered) {
        addHovered ? addMedia.classList.add('hovered') : addMedia.classList.remove('hovered');
        addHovered ? addTitle.classList.add('hovered') : addTitle.classList.remove('hovered');
        isHovered.addHovered = addHovered;
    }
})

// ... Card Expansion ...

let topAppBarState = 'open';

function expandCard(card) {
    cardClass = '.' + card;

    const cardElem = document.querySelector(cardClass),
        cardMedia = document.querySelector(cardClass + "__media"),
        cardContent = document.querySelector(cardClass + "__content"),
        cardTitle = document.querySelector(cardClass + "__title"),
        cardActions = document.querySelector(cardClass + "__actions"),
        cardMoreInfo = document.querySelector(cardClass + "__more-info"),
        cardText = document.querySelector(cardClass + "__text"),
        cardOpenTitle = document.querySelector(cardClass + "__title-open"),
        cardDescription = document.querySelector(cardClass + "__description"),
        cardVerticalDivider = document.querySelector(cardClass + "__vertical-divider"),
        cardMoreInfoRemove = card + "__more-info",
        cardCloseInfoAdd = card + "__close-info";

    cardElem.classList.add('open');
    cardMedia.classList.add('open');
    cardContent.classList.add('open');
    cardTitle.classList.add('hide');
    cardActions.classList.add('open');
    cardText.classList.add('open');
    cardOpenTitle.classList.remove('hide');
    cardDescription.classList.remove('hide');
    cardVerticalDivider.classList.remove('hide');


    cardMoreInfo.setAttribute('onclick', "closeCard('" + card + "')");
    cardMoreInfo.classList.remove(cardMoreInfoRemove);
    cardMoreInfo.classList.add(cardCloseInfoAdd);
    cardMoreInfo.innerHTML = "Close Info";

    if (document.querySelector('.mdc-top-app-bar').classList.contains('mdc-top-app-bar--short-collapsed')) {
        document.querySelector('.mdc-top-app-bar').classList.remove('mdc-top-app-bar--short-collapsed');
        topAppBarState = 'collapsed';
    }
    document.querySelector('body').classList.add('no-scroll');
    document.querySelector('.overlay').classList.remove('noShow');

    open = card;
}

// ... Card Closure ...

function closeCard(card) {
    cardClass = '.' + card;

    const cardElem = document.querySelector(cardClass),
        cardMedia = document.querySelector(cardClass + "__media"),
        cardContent = document.querySelector(cardClass + "__content"),
        cardTitle = document.querySelector(cardClass + "__title"),
        cardActions = document.querySelector(cardClass + "__actions"),
        cardCloseInfo = document.querySelector(cardClass + "__close-info"),
        cardText = document.querySelector(cardClass + "__text"),
        cardOpenTitle = document.querySelector(cardClass + "__title-open"),
        cardDescription = document.querySelector(cardClass + "__description"),
        cardVerticalDivider = document.querySelector(cardClass + "__vertical-divider"),
        cardMoreInfoAdd = card + "__more-info",
        cardCloseInfoRemove = card + "__close-info";

    cardElem.classList.remove('open');
    cardMedia.classList.remove('open');
    cardContent.classList.remove('open');
    cardTitle.classList.remove('hide');
    cardActions.classList.remove('open');
    cardText.classList.remove('open');
    cardOpenTitle.classList.add('hide');
    cardDescription.classList.add('hide');
    cardVerticalDivider.classList.add('hide');


    cardCloseInfo.setAttribute('onclick', "expandCard('" + card + "')");
    cardCloseInfo.classList.remove(cardCloseInfoRemove);
    cardCloseInfo.classList.add(cardMoreInfoAdd);
    cardCloseInfo.innerHTML = "More Info";

    if (topAppBarState == 'collapsed') {
        document.querySelector('.mdc-top-app-bar').classList.add('mdc-top-app-bar--short-collapsed');
    }

    document.querySelector('body').classList.remove('no-scroll');
    document.querySelector('.overlay').classList.add('noShow');

    open = 'none';
}

// ... Esc Close ...

document.onkeydown = function(evt) {
    evt = evt || window.event;
    let escape = "key" in evt ? evt.key == "Escape" || evt.key == "Esc" : evt.keyCode == 27;
    if (escape == true) {
        if (open != 'none') {
            closeCard(open);
        }
    }
}
