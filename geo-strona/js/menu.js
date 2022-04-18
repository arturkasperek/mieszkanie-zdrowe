setExpandableEvent();

function hideCovid(){
   document.querySelector('.h-c-header__bar').classList.add('move');
   document.querySelector('.covid-banner').classList.add('move');
   var sectionsList = document.querySelectorAll('section');
   for(var i = 0; i < sectionsList.length; i++){
    sectionsList[i].classList.add('move');
   }
}

function setExpandableEvent(){
    var allListItem = document.getElementsByClassName('custom-expandalbe-option-event');
    var i = 0;
    for(; i < allListItem.length; i++){
        allListItem[i].addEventListener('click',expandMenu)
    }
}

function expandMenu(event){
    event.target.parentNode.classList.toggle("active");
    var dataIndex = event.target.parentNode.getAttribute("data-type-index");
    var siblingElement = event.target.parentNode.nextElementSibling;
    expandAnimation(siblingElement, dataIndex);
}

function expandAnimation(elementSelected, index){
    if (elementSelected.hasAttribute('style')){
        elementSelected.removeAttribute('style');
    } else {
        elementSelected.style.maxHeight = "3000px";
    } 
}

function maxHeightCalculator(index){
    var elem = document.querySelectorAll('.custom-mobile-navigation > .custom-mobile-ul:nth-child(' + index + ') .custom-mobile-option');
    var i;
    var maxHeight = 0;
    for(i = 0; i < elem.length; i++){
        maxHeight += elem[i].offsetHeight;
    }

    return maxHeight
}

setManualCloseEvent();

function setManualCloseEvent(){
    document.getElementsByClassName('custom-close')[0].addEventListener("click", hideHamburgerMenu);
}

function hideHamburgerMenu(){
    document.getElementsByTagName('body')[0].className = "ng-scope";
}
