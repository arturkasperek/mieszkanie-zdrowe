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

                description :  'Wykorzystujemy pliki cookie w celu zapewnienia funkcjonowania naszej strony internetowej (niezbędne pliki cookie), jej optymalizacji i ulepszania (analityczne pliki cookie) oraz spersonalizowania treści i reklam (cookie marketingowy). Niezbędne pliki cookie wykorzystujemy niezależnie od Twojej zgody. Możesz zaakceptować (przycisk „wyrażam zgodę”) lub nie zgodzić się na wykorzystanie plików cookie innych niż niezbędne (przycisk „nie wyrażam zgody”) poprzez kliknięcie odpowiedniego przycisku. Wyrażenie zgody jest dobrowolne. Można ją cofnąć w każdej chwili zmieniając ustawienia. Ustawienia plików cookie możesz zmienić za pomocą ustawień przeglądarki. Więcej informacji znajdziesz w naszej Polityce prywatności (część Polityka plików cookie). Administratorem danych osobowych jest Integrum Management Sp. z o.o. z siedzibą w Warszawie, która jest właścicielem strony. Informacje o przetwarzaniu przez nas danych osobowych znajdziesz w naszej <a href="https://integrummanagement.pl/files/igm/polityka-prywatnosci-integrummanagment.pdf?date=7-12-2020" class="cc-link">Polityce prywatności</a>.',

                primary_btn: {

                    text: 'Akceptuję',

                    role: 'accept_all'      //'accept_selected' or 'accept_all'

                },

                secondary_btn: {

                    text : 'Zarządzaj',

                    role : 'settings'       //'settings' or 'accept_necessary'

                }

            },

            settings_modal : {

                title : '',

                save_settings_btn : "Zapisz bierzącą sesję",

                accept_all_btn : "Zaakceptuj wszystko",

                close_btn_label: "Zamknij",

                cookie_table_headers : [

                    {col1: "Nazwa pliku" }, 

                    {col2: "Rodzaj pliku" }, 

                    {col3: "Cel" }, 

                    {col4: "Okres wygaśnięcia" }




                ],

                blocks : [

                    {

                        title : "Wykorzystywanie plików cookie",

                        description: 'Aby dowiedzieć się więcej na temat wykorzystywania plików cookie przejdź do naszej <a href="https://integrummanagement.pl/files/igm/polityka-prywatnosci-integrummanagment.pdf?date=7-12-2020" class="cc-link">Polityki prywatności</a>.',

                    },{

                        title : "Niezbędne pliki cookies",

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

                                col3: 'Techniczny plik cookies niezbędny do prawidłowego działania frameworku Bootstrap i wbudowanej funkcjonalności PhpConsole, z które korzysta strona.',

                                col4: 'z chwilą zamknięcia przeglądarki',
                            },

                            {

                                col1: 'TO5SESSID',

                                col2: 'HTTP',

                                col3: 'Techniczny plik cookies niezbędny do prawidłowego działania frameworku Bootstrap, z które korzysta strona.',

                                col4: 'z chwilą zamknięcia przeglądarki',

                            },

                            {

                                col1: 'cc_cookie',

                                col2: 'HTTP',

                                col3: 'Plik cookies zawierający informacje o wyświetlaniu bądź ukryciu (zatwierdzenie przez użytkownika) informacji o korzystaniu z plików cookies oraz prefernecjach plików cookies.',

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

                                col3: 'Google Universal Analytics krótki unikatowy identyfikator śledzenia użytkownika',

                                col4: '1 dzień',
                               
                            },

                            {

                                col1: '_ga',

                                col2: 'HTTP',

                                col3: 'Plik cookie śledzący Google Analytics',

                                col4: '730 dni',
                                                               
                            },

                            {

                                col1: '_gcl_au',

                                col2: 'HTTP',

                                col3: 'Plik Google AdSense do testowania skuteczności reklam na stronach internetowych korzystających z tych usług',

                                col4: '90 dni',
                                

                            },   
 			{

                                col1: '_gat_UA-210341-11',

                                col2: 'HTTP',

                                col3: 'Plik Google Analytics służący do blokowania zapytań przez użytkowników',

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