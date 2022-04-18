
function Ankieta()
{
    this.ankietaArray   = new Array();
    this.ankietaHTML    = new String();
    this.ankietaFields  = new Array();
    this.toPytanie      = new Object();
    this.pytania        = new Array();
    this.bledy          = new Array();
    this.odpowiedzi     = new Array();

    this.obowiazkowa    = false;

    this.createHTML = function(INnodeName, INnodeValue, INnodeParams)
    {
        switch(INnodeName)
        {
            case 'obowiazkowa':
                this.obowiazkowa = (INnodeValue==1)?true:false;
            break;
            case 'nazwa':
                //this.ankietaHTML += '<div  class="ankieta_nazwa">'+INnodeValue+'</div>';
            break;
            case 'pytanie':
                if( this.toPytanie['typ'] == 2 )
                    this.ankietaHTML += '<div id="pytanie_'+this.toPytanie['id']+'" class="ankieta_pytanie">'+INnodeValue+'</div><div class="ankieta_odpowiedz"><select id="select_pytanie_'+this.toPytanie['id']+'" name="pytanie_'+this.toPytanie['id']+'" >';
                else
                    this.ankietaHTML += '<div id="pytanie_'+this.toPytanie['id']+'" class="ankieta_pytanie">'+INnodeValue+'</div>';
            break;
            case 'odpowiedz':
                switch(this.toPytanie['typ'])
                {
                    case '0':
                    default:
                        this.ankietaHTML += '<div class="ankieta_odpowiedz">';
                        this.ankietaHTML += '<input type="checkbox" class="ankieta_field" name="odpowiedz_'+INnodeParams+'" value="1" id="odpowiedz_'+INnodeParams+'">'+INnodeValue;
                        this.ankietaHTML += '</div>';
                    break;
                    case '1':
                        this.ankietaHTML += '<div class="ankieta_odpowiedz">';
                        this.ankietaHTML += '<input type="radio" class="ankieta_field" name="pytanie_'+this.toPytanie['typ']+'" value="'+INnodeParams+'" id="odpowiedz_'+INnodeParams+'">'+INnodeValue;
                        this.ankietaHTML += '</div>';
                    break;
                    case '2':
                        this.ankietaHTML += '<option value="'+INnodeParams+'" id="odpowiedz_'+INnodeParams+'">'+INnodeValue+'</options>';
                    break;
                }
                
            break;
        }
    }

    this.analizujXML = function(INnodeXML)
    {
        if( INnodeXML!=null )
        {
            for( var nr=0; nr<INnodeXML.childNodes.length; nr++ )
            {
                switch(INnodeXML.childNodes[nr].nodeName)
                {
                    case 'pytania':
                    case 'form':
                        this.analizujXML(INnodeXML.childNodes[nr]);
                    break;
                    case 'nazwa':
                    case 'obowiazkowa':
                        var thisNode = INnodeXML.childNodes[nr];
                        this.createHTML(thisNode.nodeName, thisNode.firstChild.nodeValue, null);
                    break;
                    case 'pytanie':

                        if( this.toPytanie['typ'] != undefined && this.toPytanie['typ']==2 )
                            this.ankietaHTML += '</select></div>';

                        var thisNode = INnodeXML.childNodes[nr];

                        this.toPytanie['id'] = thisNode.getElementsByTagName('id')[0].firstChild.nodeValue;
                        this.toPytanie['typ'] = thisNode.getElementsByTagName('typ')[0].firstChild.nodeValue;

                        this.pytania['pytanie_'+this.toPytanie['id']] = new Object();
                        this.pytania['pytanie_'+this.toPytanie['id']]['typ'] =  this.toPytanie['typ'];
                        this.pytania['pytanie_'+this.toPytanie['id']]['odpowiedzi'] =  new Array();

                        this.createHTML(thisNode.nodeName, thisNode.getElementsByTagName('nazwa')[0].firstChild.nodeValue,null);
                        this.analizujXML(thisNode.getElementsByTagName('odpowiedzi')[0]);
                    break;
                    case 'odpowiedz':
                        var thisNode = INnodeXML.childNodes[nr];
                        var odpowiedzId = thisNode.attributes.getNamedItem('id').nodeValue;
                        this.pytania['pytanie_'+this.toPytanie['id']]['odpowiedzi'].push(odpowiedzId);

                        this.createHTML(thisNode.nodeName, thisNode.firstChild.nodeValue, odpowiedzId);
                    break;
                }
            }
        }
    }

    this.genrujFormularz = function(INformXML)
    {
        this.ankietaHTML = '';
        
        this.form = document.getElementById(this.formName);
        this.analizujXML(INformXML.getElementsByTagName("form").item(0));
        return this.ankietaHTML;
    }

    this.formCheck = function()
    {
        this.odpowiedzi     = new Array();
        this.bledy          = new Array();

        for( var pytanie in this.pytania )
        {
            document.getElementById(pytanie).className='ankieta_pytanie';

            switch( this.pytania[pytanie]['typ'] )
            {
                case '0': // checkbox
                case '1': // radio
                    var wybrane = false;

                    for( var odpNr=0; odpNr<this.pytania[pytanie]['odpowiedzi'].length; odpNr++ )
                    {
                        if( document.getElementById('odpowiedz_'+this.pytania[pytanie]['odpowiedzi'][odpNr]).checked==true )
                        {
                            this.odpowiedzi.push(this.pytania[pytanie]['odpowiedzi'][odpNr]);
                            wybrane = true;
                        }
                    }
                    if( wybrane==false )
                        this.bledy.push(pytanie);
                break;
                case '2': // select
                    this.odpowiedzi.push(document.getElementById('select_'+pytanie).value);
                break;
            }
        }

        return ( this.obowiazkowa==true && this.bledy.length>0 )?false:true;
    }
    

    this.getBledy = function()
    {
        return this.bledy;
    }

    this.getOdpowiedzi = function()
    {
        return this.odpowiedzi;
    }
}
