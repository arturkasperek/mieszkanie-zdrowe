var xmlHttp = createXmlHttpRequestObject();

function createXmlHttpRequestObject()
{
    var xmlHttp;

    try
    {
        xmlHttp = new XMLHttpRequest();
        xmlKodowanie = 'iso2'
    }
    catch(e)
    {
        var xmlHttpVersions = new Array( "MSXML2.XMLHTTP.6.0",
                                        "MSXML2.XMLHTTP.5.0",
                                        "MSXML2.XMLHTTP.4.0",
                                        "MSXML2.XMLHTTP.3.0",
                                        "MSXML2.XMLHTTP",
                                        "Microsoft.XMLHTTP");

         for( var i=0; i<xmlHttpVersions.length && !xmlHttp; i++ )
         {
             try
             {
                 xmlHttp = new ActiveXObject(xmlHttpVersions[i]);
                 xmlKodowanie = 'utf8';
             }
             catch(e) {}
         }
    }

    if( !xmlHttp)
    {
        alert("B³±d tworzenia obiektu XMLHttpRequest");
        return false;
    }else
        return xmlHttp;
}
