
var ankieta = new Ankieta();

function selectedChange(INnumber)
{
    selectedField = INnumber;
}

function checkEmailForm()
{
    komunikat();

    var form    = document.getElementById('emailForm');
    var wydanie = null;
    var email   = null;
    //var wzorEmail = /^[\-\_\.a-z0-9]+\@([\-\_\.a-z0-9]+)\.[a-z]{2,4}$/;
    var wzorEmail = /^[0-9a-zA-Z_.-]+@+[0-9a-zA-Z_.-]+\.[a-zA-Z]{2,3}$/;

    if( wzorEmail.test(form.email1.value) )
    {
        selectedWydanie = 'dwutygodnik';
        email = form.email1.value;

    }else if( wzorEmail.test(form.email2.value) )
    {
        selectedWydanie = 'kreator';
        email = form.email2.value;
    
    }else if( wzorEmail.test(form.email3.value) )
    {
        selectedWydanie = 'dodatki';
        email = form.email3.value;
    }else
         selectedWydanie = 'dwutygodnik';


    if( form.email1.value!='' && selectedField==1 )
        form.email2.value = form.email3.value = '';

    else if( form.email2.value!='' && selectedField==2 )
        form.email1.value = form.email3.value = '';

    else if( form.email3.value!='' && selectedField==3 )
        form.email1.value = form.email2.value = '';


    if( selectedWydanie === null)
        komunikat('Podany adres email jest nieprawid³owy');
    else
        checkEmail(email,selectedWydanie);
}

function checkLink() // geeruje ankiete z linku
{
    selectedWydanie = '';
    if( document.getElementById('email1') )
    {
         if( xmlHttp.readyState==4 ||xmlHttp.readyState==0 )
         {
            xmlHttp.open('POST','/klientLogin.php',true);
            xmlHttp.onreadystatechange = daneZSerwera;
            xmlHttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
            xmlHttp.send('email=clearForm&wydanie=clearForm');

        }else
            setTimeout('checkLink()', 100);
    }else
        komunikat('Jeste¶ ju¿ zalogowany');

}

function checkEmail(INemail, INwydanie)
{
     if( xmlHttp.readyState==4 ||xmlHttp.readyState==0 )
     {
        xmlHttp.open('POST','/klientLogin.php',true);
        xmlHttp.onreadystatechange = daneZSerwera;
        xmlHttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        xmlHttp.send('email='+INemail+'&wydanie='+INwydanie);

    }else
        setTimeout('checkEmail("'+INemail+'","'+INwydanie+'")', 100);
}

function komunikat(INtresc, INkomunikatField)
{
    if( INkomunikatField!= undefined )
    {
        var komunikatFieldContainer  = document.getElementById(INkomunikatField);

        if( INtresc==undefined || INtresc.length==0 )
            komunikatFieldContainer.innerHTML = '';
        else if( INtresc.length>0 )
             komunikatFieldContainer.innerHTML += INtresc+'<br>';

    }else if( document.getElementById('komunikatContainer') )
    {
        var komunikatContainer  = document.getElementById('komunikatContainer');
        var komunikatAnimuj     = new animateWindow('komunikatContainer');
        var komunikatField      = komunikatContainer.getElementsByTagName('div')[0];

        if( INtresc==undefined || INtresc.length==0 )
        {
            if( komunikatContainer.style.display == 'block')
            {
                komunikatAnimuj.setAfterFunction(komunikatClear);
                //komunikatAnimuj.animuj();
                komunikatAnimuj.wlacz();
            }else
                komunikatClear();

        }else if( INtresc.length>0 )
        {
            komunikatField.innerHTML += INtresc+'<br>';
            //komunikatAnimuj.animuj();
            komunikatAnimuj.wlacz();

        }
    }else
        komunikat(INtresc, 'komunikat');
}


function komunikatClear()
{
    var komunikatFieldName  = 'komunikat';
    if( document.getElementById(komunikatFieldName) )
        document.getElementById(komunikatFieldName).innerHTML = '';
}


function komunikatOld(INtresc, INfield)
{
    var feldName = ((INfield==undefined )?'komunikat':INfield);

    if( document.getElementById(feldName) )
    {
        var field = document.getElementById(feldName);

        if( INtresc==undefined || INtresc.length==0 )
        {
            field.innerHTML = '';
            field.style.display='none';

        }else if( INtresc.length>0 )
        {
            field.innerHTML += INtresc+'<br>';
            field.style.display = 'block';
        }
    }
}

function daneZSerwera()
{
    if( xmlHttp.readyState==4 )
    {
        if( xmlHttp.status == 200 )
        {
            xmlDocumentElement  = xmlHttp.responseXML.documentElement;
            
            var kontrolka = xmlDocumentElement.getElementsByTagName("kontrolka").item(0).firstChild.data;
            
            if( kontrolka == 0 )
                checkEmailFormSubmit();
            else if( kontrolka == 6 )
                formCreateAnkieta(xmlDocumentElement);
            else
                komunikat(xmlDocumentElement.getElementsByTagName("komunikat").item(0).firstChild.data);
        }else
            alert("Wyst±pi³ b³±d podczas dostêpu do serwera "+xmlHttp.statusText);
    }
}

function getAnkietaXML()
{
     if( xmlHttp.readyState==4 ||xmlHttp.readyState==0 )
     {
        xmlHttp.open('POST','/updateClient.php',true);
        xmlHttp.onreadystatechange = daneZSerweraAnkieta;
        xmlHttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        xmlHttp.send('akcja=getAnkieta');

    }else
        setTimeout('checkEmail("'+INemail+'","'+INwydanie+'")', 100);
}

function daneZSerweraAnkieta()
{
    if( xmlHttp.readyState==4 )
    {
        if( xmlHttp.status == 200 )
        {
            xmlDocumentElement  = xmlHttp.responseXML.documentElement;
            document.getElementById('ankietaElementy').innerHTML = ankieta.genrujFormularz(xmlDocumentElement);

        }else
            alert("Wyst±pi³ b³±d podczas dostêpu do serwera "+xmlHttp.statusText);
    }
}

function formCreateAnkieta(INxml)
{
    var emailForm = document.getElementById('emailForm');
    var email;

    document.getElementById('loginform1').style.visibility = 'hidden';
    document.getElementById('loginform2').style.visibility = 'hidden';

    if( emailForm.email1.value!='' && selectedField==1 )
        email = emailForm.email1.value;
    else if( emailForm.email2.value!='' && selectedField==2 )
        email = emailForm.email2.value;
    else if( emailForm.email3.value!='' && selectedField==3 )
        email = emailForm.email3.value;
    else
        email = '';

    document.getElementById('ankietaContainer').style.display = 'block';
    
    /*
    var elementy = new animateElement('elementRozwijany');
    elementy.uruchom('ankietaContainer');
    */

    var okladkaAnimuj = new animateWindow('ankietaContainer');
    okladkaAnimuj.animuj();

    komunikat();

    document.getElementById('ankietaEmail').value = email;

    if( document.getElementById(selectedWydanie) )
        document.getElementById(selectedWydanie).checked = true;

    document.getElementById('ankietaElementy').innerHTML = ankieta.genrujFormularz(INxml);
    
}

function formCreateAnkietaUzupelnienie(INemail)
{
    
    if( INemail!=undefined && INemail.length>3 )
    {
        var form = document.getElementById('ankietaForm');

        var emailTag = document.createElement('input');
        emailTag.setAttribute('value', INemail);
        emailTag.setAttribute('type', 'hidden');
        emailTag.setAttribute('name', 'email');

        form.appendChild(emailTag);
        var emailField = document.getElementById('ankietaEmail').parentNode.innerHTML = INemail
    }
    var okladkaAnimuj = new animateWindow('ankietaContainer');
    okladkaAnimuj.wlacz();
    
    getAnkietaXML();
}

function formCreateAnkietaField(INfieldName, INfieldValue)
{
    var form = document.getElementById('ankietaForm');
    
    if( form[INfieldName] && form[INfieldName].type=='checkbox')
    {
        form[INfieldName].checked = (INfieldValue==0)?false:true;
    }
}


function checkEmailFormSubmit()
{
    var form = document.getElementById('emailForm');

    var fieldWydanie = document.createElement('input');
    fieldWydanie.setAttribute('type', 'hidden');
    fieldWydanie.setAttribute('name', 'wydanie');
    fieldWydanie.setAttribute('value', selectedWydanie);

    var fieldEmail = document.createElement('input');
    fieldEmail.setAttribute('type', 'hidden');
    fieldEmail.setAttribute('name', 'email');
    fieldEmail.setAttribute('value', document.getElementById('email'+selectedField).value);

    form.appendChild(fieldWydanie);
    form.appendChild(fieldEmail);

    form.action = "";
    form.submit();
}

function checkAnkietaForm(INformAction)
{
    //komunikat();
    komunikat('','komunikat_ankieta');

    var form = document.getElementById('ankietaForm');
    var wzorEmail = /^[\-\_\.a-z0-9]+\@([\-\_\.a-z0-9]+)\.[a-z]{2,4}$/;
    var isFormOk = true;
    var fields = new Array('email','wydawnictwo','nazwa','imie','zgodana');
    var badFields = new Array();

    for( var fieldNr=0; fieldNr<fields.length; fieldNr++ )
    {
        document.getElementById(fields[fieldNr]).className = 'ankieta_pytanie';
    }

    // ankietaData zaaiwetra ID pytan ktore sa bez odpowiedzi, w przypadku gdy ankieta jest obowiazkowa
    if( ankieta.formCheck() == false )
    {
        badFields = ankieta.getBledy();
        isFormOk = false;
        komunikat('Proszê wype³niæ poni¿sz± ankietê', 'komunikat_ankieta');
    }

    if( !wzorEmail.test(form.email.value) )
    {
        isFormOk = false;
        badFields.push('email')
        komunikat('Nie podano adresu email', 'komunikat_ankieta');
    }

    if( form.kreator.checked==false && form.dwutygodnik.checked==false && form.dodatki.checked==false )
    {
        isFormOk = false;
        badFields.push('wydawnictwo')
        komunikat('Proszê wybraæ czasopismo', 'komunikat_ankieta');
    }

    if( form.zgoda.checked==false )
    {
        isFormOk = false;
        badFields.push('zgodana')
        komunikat('Wyra¿enie zgodny na przetwarzanie danych jest obowi±zkowe', 'komunikat_ankieta');
    }

    if( form.nazwa.value.length<=1 )
    {
        isFormOk = false;
        badFields.push('nazwa');
        komunikat('Proszê podaæ nazwê firmy', 'komunikat_ankieta');
    }

    if( form.imie.value.length<=1 || form.nazwisko.value.length<=1)
    {
        isFormOk = false;
        badFields.push('imie');
        komunikat('Proszê podaæ imiê i nazwisko', 'komunikat_ankieta');
    }

    if( isFormOk == true )
    {
        var odpowiedzi = ankieta.getOdpowiedzi();
        var odpowiedziStr = new String();

        for( var odpNr=0; odpNr<odpowiedzi.length; odpNr++ )
        {
            odpowiedziStr += odpowiedzi[odpNr]+',';
        }

        var fieldOdpowiedzi = document.createElement('input');
        fieldOdpowiedzi.setAttribute('type', 'hidden');
        fieldOdpowiedzi.setAttribute('name', 'odpowiedzi');
        fieldOdpowiedzi.setAttribute('value', odpowiedziStr);

        form.appendChild(fieldOdpowiedzi);
        
        form.action = "";
        form.submit();

    }else
    {
        if( badFields.length>0 )
            for( var fieldNr=0; fieldNr<badFields.length; fieldNr++ )
                document.getElementById(badFields[fieldNr]).className = 'ankieta_pytanie_fail'
    }
}

function akietaClose()
{
    var okladkaAnimuj = new animateWindow('ankietaContainer');
    okladkaAnimuj.setAfterFunction(ankietaFormAfter);
    okladkaAnimuj.animuj();


}

function ankietaFormAfter()
{
    document.getElementById('ankietaElementy').innerHTML = 'dupa';
    
    document.getElementById('loginform1').style.visibility = 'visible';
    document.getElementById('loginform2').style.visibility = 'visible';
    

    komunikat();

}

function clearForm()
{
    var formFields = document.getElementsByTagName('input');

    for( var fieldNr=0; fieldNr<formFields.length; fieldNr++ )
    {
        if( formFields[fieldNr].type=='text' )
            formFields[fieldNr].value = '';
        else if( formFields[fieldNr].type=='checkbox' )
            formFields[fieldNr].checked = false;
    }
}

