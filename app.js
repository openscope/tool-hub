import { MDCTopAppBar } from '@material/top-app-bar/index';
import { MDCRipple } from '@material/ripple';

// Top App Bar

const topAppBarElement = document.querySelector('.mdc-top-app-bar');
const topAppBar = new MDCTopAppBar(topAppBarElement);

// Button Ripples

const polyconvVisitRipple = new MDCRipple(document.querySelector('.polyconv__visit'));
const polyconvMoreInfoRipple = new MDCRipple(document.querySelector('.polyconv__more-info'));

const centrelineVisitRipple = new MDCRipple(document.querySelector('.centreline__visit'));
const centrelineMoreInfoRipple = new MDCRipple(document.querySelector('.centreline__more-info'));

const requestAddition = new MDCRipple(document.querySelector('.add__request'));

const item1Ripple = new MDCRipple(document.querySelector('.item1'));
const item2Ripple = new MDCRipple(document.querySelector('.item2'));
const item3Ripple = new MDCRipple(document.querySelector('.item3'));
const item4Ripple = new MDCRipple(document.querySelector('.item4'));

const menuRipple = new MDCRipple(document.querySelector('.menu-button'));
menuRipple.unbounded = true;
const backRipple = new MDCRipple(document.querySelector('.back-button'));
backRipple.unbounded = true;
const gitRipple = new MDCRipple(document.querySelector('.git-button'));
gitRipple.unbounded = true;

// Other Ripples

const polyRipple = new MDCRipple(document.querySelector('.polyconv__media'))