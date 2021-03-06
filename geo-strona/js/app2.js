/*

 * CookieConsent v2 DEMO config.

*/



// obtain cookieconsent plugin

var cc = initCookieConsent();



// run plugin with config object

cc.run({

    autorun : true, 

    delay : 0,

    current_lang : 'en',

    auto_language : false,

    autoclear_cookies : true,

    cookie_expiration : 365,

    theme_css: '/dist/cookieconsent.css',

    force_consent: true,



    /* New options from v2.4 (everything is optional) */

    // remove_cookie_tables: false              // default: false (if set to true, cookie table's html will not be generated)



    // cookie_domain: location.hostname,       	// default: current domain

    // cookie_path: "/",                        // default: root

    // cookie_same_site: "Lax",

    

    /* Manage existing <scripts> tags (check readme.md) */

    page_scripts: true,                         // default: false (by default don't manage existing script tags)



    /* Basic gui options */

    gui_options : {

        consent_modal : {

            layout : 'cloud',               // box(default),cloud,bar

            position : 'bottom center',     // bottom(default),top + left,right,center:=> examples: 'bottom' or 'top right'

            transition : 'slide'            // zoom(default),slide

        },

        settings_modal : {

            layout : 'box',                 // box(default),bar

            // position: 'left',            // right(default),left (available only if bar layout selected)

            transition : 'slide'            // zoom(default),slide

        }

    },



    /* End new options added in v2.4 */



    onAccept: function(cookie){

        console.log("onAccept fired ...");

        disableBtn('btn2');

        disableBtn('btn3');

        

        // Delete line below

        document.getElementById("cookie_val").innerHTML = JSON.stringify(cookie, null, 2);

    },



    onChange: function(cookie){

        console.log("onChange fired ...");

        // do something ...
        

        // Delete line below

        document.getElementById("cookie_val").innerHTML = JSON.stringify(cookie, null, 2);

    },



    languages : {

        'en' : {	

            consent_modal : {

                title :  "",

                description :  'Wykorzystujemy pliki cookie w celu zapewnienia funkcjonowania naszej strony internetowej (niezb??dne pliki cookie), jej optymalizacji i ulepszania (analityczne pliki cookie) oraz spersonalizowania tre??ci i reklam (cookie marketingowy). Niezb??dne pliki cookie wykorzystujemy niezale??nie od Twojej zgody. Mo??esz zaakceptowa?? (przycisk ???wyra??am zgod?????) lub nie zgodzi?? si?? na wykorzystanie plik??w cookie innych ni?? niezb??dne (przycisk ???nie wyra??am zgody???) poprzez klikni??cie odpowiedniego przycisku. Wyra??enie zgody jest dobrowolne. Mo??na j?? cofn???? w ka??dej chwili zmieniaj??c ustawienia. Ustawienia plik??w cookie mo??esz zmieni?? za pomoc?? ustawie?? przegl??darki. Wi??cej informacji znajdziesz w naszej Polityce prywatno??ci (cz?????? Polityka plik??w cookie). Administratorem danych osobowych jest Integrum Management Sp. z o.o. z siedzib?? w Warszawie, kt??ra jest w??a??cicielem strony. Informacje o przetwarzaniu przez nas danych osobowych znajdziesz w naszej <a href="https://integrummanagement.pl/files/igm/polityka-prywatnosci-integrummanagment.pdf?date=7-12-2020" class="cc-link">Polityce prywatno??ci</a>.',

                primary_btn: {

                    text: 'Akceptuj??',

                    role: 'accept_all'      //'accept_selected' or 'accept_all'

                },

                secondary_btn: {

                    text : 'Zarz??dzaj',

                    role : 'settings'       //'settings' or 'accept_necessary'

                }

            },

            settings_modal : {

                title : '',

                save_settings_btn : "Zapisz bierz??c?? sesj??",

                accept_all_btn : "Zaakceptuj wszystko",

                close_btn_label: "Zamknij",

                cookie_table_headers : [

                    {col1: "Nazwa pliku" }, 

                    {col2: "Rodzaj pliku" }, 

                    {col3: "Cel" }, 

                    {col4: "Okres wyga??ni??cia" }




                ],

                blocks : [

                    {

                        title : "Wykorzystywanie plik??w cookie",

                        description: 'Aby dowiedzie?? si?? wi??cej na temat wykorzystywania plik??w cookie przejd?? do naszej <a href="https://integrummanagement.pl/files/igm/polityka-prywatnosci-integrummanagment.pdf?date=7-12-2020" class="cc-link">Polityki prywatno??ci</a>.',

                    },{

                        title : "Niezb??dne pliki cookies",

                        description: '',

                        toggle : {

                            value : 'necessary',

                            enabled : true,

                            readonly: true  //cookie categories with readonly=true are all treated as "necessary cookies"

                        },
			cookie_table: [

                            {

                                col1: 'php-console-server',

                                col2: 'HTTP',

                                col3: 'Techniczny plik cookies niezb??dny do prawid??owego dzia??ania frameworku Bootstrap i wbudowanej funkcjonalno??ci PhpConsole, z kt??re korzysta strona.',

                                col4: 'z chwil?? zamkni??cia przegl??darki',
                            },

                            {

                                col1: 'TO5SESSID',

                                col2: 'HTTP',

                                col3: 'Techniczny plik cookies niezb??dny do prawid??owego dzia??ania frameworku Bootstrap, z kt??re korzysta strona.',

                                col4: 'z chwil?? zamkni??cia przegl??darki',

                            },

                            {

                                col1: 'cc_cookie',

                                col2: 'HTTP',

                                col3: 'Plik cookies zawieraj??cy informacje o wy??wietlaniu b??d?? ukryciu (zatwierdzenie przez u??ytkownika) informacji o korzystaniu z plik??w cookies oraz prefernecjach plik??w cookies.',

                                col4: '1 rok',
                                
                            },

                                                       
                        ]

                    },{

                        title : "Dane analityczne",

                        description: '',

                        toggle : {

                            value : 'analytics',

                            enabled : false,

                            readonly: false

                        },

                        cookie_table: [

                            {

                                col1: '_gid',

                                col2: 'HTTP',

                                col3: 'Google Universal Analytics kr??tki unikatowy identyfikator ??ledzenia u??ytkownika',

                                col4: '1 dzie??',
                               
                            },

                            {

                                col1: '_ga',

                                col2: 'HTTP',

                                col3: 'Plik cookie ??ledz??cy Google Analytics',

                                col4: '730 dni',
                                                               
                            },

                            {

                                col1: '_gcl_au',

                                col2: 'HTTP',

                                col3: 'Plik Google AdSense do testowania skuteczno??ci reklam na stronach internetowych korzystaj??cych z tych us??ug',

                                col4: '90 dni',
                                

                            },   
 			{

                                col1: '_gat_UA-210341-11',

                                col2: 'HTTP',

                                col3: 'Plik Google Analytics s??u????cy do blokowania zapyta?? przez u??ytkownik??w',

                                col4: '10 minut',
                                

                            },            
               

                        ]
                    }
                ]

            }

        }

    }

});



function getLoremIpsum(){

    return 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';

}



// DELETE ALL CONTENT BELOW THIS COMMENT!!!

if(cc.validCookie('cc_cookie')){

    //if cookie is set => disable buttons

    disableBtn('btn2');

    disableBtn('btn3');

}



function disableBtn(id){

    document.getElementById(id).disabled = true;

    document.getElementById(id).className = "styled_btn disabled";

}



var darkmode = false;



function toggleDarkmode(){

    if(!darkmode){

        document.getElementById('theme').innerText = 'dark theme';

        document.body.className='d_mode c_darkmode';

        darkmode = true;

    }else{

        document.getElementById('theme').innerText = 'light theme';

        document.body.className='d_mode';

        darkmode = false;

    }

}



/*

* The following lines of code are for demo purposes (show api functions)

*/

if(document.addEventListener){



    document.getElementById("btn2").addEventListener('click', function(){

        cc.show(0);

    });



    document.getElementById("btn3").addEventListener('click', function(){

        cc.hide();

    });



    document.getElementById("btn5").addEventListener('click', function(){

        cc.showSettings(0);  

    });



    document.getElementById("btn6").addEventListener('click', function(){

        toggleDarkmode();

    });

}else{

    document.getElementById("btn2").attachEvent('onclick', function(){

        cc.show(0);

    });



    document.getElementById("btn3").attachEvent('onclick', function(){

        cc.hide();

    });



    document.getElementById("btn5").attachEvent('onclick', function(){

        cc.showSettings(0);  

    });



    document.getElementById("btn6").attachEvent('onclick', function(){

        toggleDarkmode();

    });

}