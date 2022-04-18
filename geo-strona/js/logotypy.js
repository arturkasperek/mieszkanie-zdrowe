var logotypyPliki   = new Array();
var logotypyAdresy  = new Array();

var filePath        = '/grafika/katalog_logotypy/';
var firstLogoId     = null;
var logoWidth       = 150;

var stepTime    = 50;
var stepDef     = -1;
var step        = stepDef;
var timeId      = null;
var margin      = 0;

function changeLogo(INstep, INlogoId, INlistaName)
{
    step = (INstep!=undefined && INstep!=null && INstep==0 )?0:stepDef;

    if (step == 0)
        document.getElementById(INlistaName+'_logo'+INlogoId).getElementsByTagName('img')[0].src=filePath+logotypyPliki[INlogoId]+'.png'
    else
        document.getElementById(INlistaName+'_logo'+INlogoId).getElementsByTagName('img')[0].src=filePath+logotypyPliki[INlogoId]+'_black.png'
}


function createLogotyp(INlogoId, INlistaName)
{
    var divTag = document.createElement('div');
    divTag.setAttribute('id',INlistaName+'_logo'+INlogoId);
    divTag.setAttribute('style','float:left;margin-left:0px;cursor:pointer');
    divTag.style.height = '50px';
    divTag.style.width = logoWidth+'px';
    divTag.setAttribute('onMouseOver','changeLogo(0, '+INlogoId+', "'+INlistaName+'")');
    divTag.setAttribute('onMouseOut','changeLogo(null, '+INlogoId+', "'+INlistaName+'")');
    divTag.setAttribute('onMouseDown','location.href="http://'+logotypyAdresy[INlogoId]+'"');

    //divTag.onmouseover('setStep(INstep)');

    //divTag.style.cssFloat = 'left';

    var imgTag = document.createElement('img');
    imgTag.setAttribute('src',filePath+logotypyPliki[INlogoId]+'_black.png')

    divTag.appendChild(imgTag);
    document.getElementById(INlistaName).appendChild(divTag);
}

function createListaLogotypow(INlistaName)
{
    var listwa = document.getElementById(INlistaName);

    for( var logoNr=0; logoNr<logotypyPliki.length;logoNr++ )
    {
        createLogotyp(logoNr, INlistaName);

        if( logoNr==0 )
            firstLogoId = logoNr;
    }
    listwa.style.width = (logotypyPliki.length*logoWidth)+'px';
}

function createListaLogotypowMenu(INlistaName)
{
    for( var logoNr=0; logoNr<logotypyPliki.length;logoNr++ )
        createLogotyp(logoNr, INlistaName);
}

function animujListaLogotypow()
{
    var firstLogo = document.getElementById('logotypyListwa_logo'+firstLogoId);

    var newMargin = (parseInt(firstLogo.style.marginLeft)+step);

    if( newMargin<= -1*logoWidth )
    {
        var listwa = document.getElementById('logotypyListwa');

        listwa.removeChild(listwa.getElementsByTagName('div').item(0));
        createLogotyp(firstLogoId,'logotypyListwa');
        firstLogoId = ((firstLogoId+1)<logotypyPliki.length)?firstLogoId+1:0;

    }else
        firstLogo.style.marginLeft = newMargin+'px';
    //alert(firstLogo.style.marginLeft);
}
