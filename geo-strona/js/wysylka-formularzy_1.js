getData = () => {
    params = getCustomData();
    params['detal'] = {
        "cel_kredytu" : $("input[name='cel']:checked").val() ? $("input[name='cel']:checked").val() : null,
        "rynek" : $("input[name='rynek']:checked").val() ? $("input[name='rynek']:checked").val() : null,
        "kwota_kredytu" : $("input[name='kwota_kredytu']").val(),
        "wklad_wlasny" : $("input[name='wklad_wlasny']").val(),
        "okres_kredytowania" : $("input[name='okres_kredytowania']").val(),
        "rodzaj_spotkania" : $("input[name='rodzaj_spotkania']").val()
    };
    return params;
}