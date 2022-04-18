let rules = {
    imie: {
        required: true,
        checkSigns: true
    },
    telefon: {
        required: true,
        polishPhone: true
    },
};

let url = 'https://lp-api.notuskredyt.pl/api/lead';

let getData = () => {
    return getCustomData();
}
let getUrlData = () => {
    let params = {};

    location.search
        .substr(1)
        .split("&")
        .forEach(function (item) {
            let param = item.split("=");

            if (param[0] && param[1]) {
                params[param[0]] = param[1];
            }
        });

    return params;
}
const getCustomData = () => {
    params = getUrlData();

    params['idpos'] = params['idpos'] && params.idpos.match(/^[0-9]{1,5}$/) ? +params.idpos : 549;
    params['idzrodlo'] = params['idzrodlo'] && params.idzrodlo.match(/^[0-9]{1,5}$/) ? +params.idzrodlo : 1713;
    params['individual'] = params['individual'] && params.individual.match(/^[a-z0-9]{1,}$/) ? params.individual : null;
    params['imie'] = $("input[name='imie']").val();
    params['telefon'] = $("input[name='telefon']").val();
    params['uwagi'] = $("input[name='uwagi']").val();
    params['a_aid'] = params['a_aid'] && params.a_aid.match(/^[a-z0-9]{1,}$/) ? params.a_aid : null;
    params['a_bid'] = params['a_bid'] && params.a_bid.match(/^[a-z0-9]{1,}$/) ? params.a_bid : null;
    params['id_zew'] = params['id_zew'] && params.id_zew.match(/^[a-z0-9]{1,}$/) ? params.id_zew : null;
    params['amicus'] = params['amicus'] && params.amicus.match(/^[a-z0-9]{1,}$/) ? params.amicus : null;
    params['data1'] = params['data1'] && params.data1.match(/^[a-z0-9]{1,}$/) ? params.data1 : null;
    params['data2'] = params['data2'] && params.data2.match(/^[a-z0-9]{1,}$/) ? params.data2 : null;
    params['data3'] = params['data3'] && params.data3.match(/^[a-z0-9]{1,}$/) ? params.data3 : null;
    params['data4'] = params['data4'] && params.data4.match(/^[a-z0-9]{1,}$/) ? params.data4 : null;
    params['data5'] = params['data5'] && params.data5.match(/^[a-z0-9]{1,}$/) ? params.data5 : null
    params['branch'] = params['branch'] ? params.branch : null;
    params['param_id'] = params['param_id'] ? params.param_id : null;
    params['paramHash'] = params['paramHash'] ? params.paramHash : null;
    params['test'] = params['test'] ? true : false;

    return params;
};

$(document).ready(() => {
    $( "#btnClose" ).click(function() {
        $("#strona-podziekowan").hide();
    });

    $('form').validate({
        rules: rules,
        submitHandler: () => {
            fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json; charset=utf-8'
                },
                body: JSON.stringify(getData())
            }).then(async (response) => {
                let responseJSON = {};

                try {
                    responseJSON = await response.json();
                } catch {}

                if (response.status >= 400 && responseJSON) {
                    throw responseJSON;
                } else if (response.status >= 400) {
                    throw new Promise((resolve) => {
                        resolve({message: 'Blad komunikacji z serwerem'});
                    });
                }

                return responseJSON;
            }).then((response) => {

                var popupTemplate = '<div class="form-info wyslano" style="position:fixed;top:0;left:0;background:rgba(0,0,0,0.4);width:100%;height:100%;overflow:auto"><div style="display:table;width:100%;height:100%"><div style="display:table-cell;vertical-align:middle;padding:20px 0 20px 0"><div style="background:#ffffff;border-radius:5px;padding:30px;box-sizing:border-box;width:90%;max-width:900px;border:1px solid #e1e1e1;margin:auto;text-align:center;"><div style="font-weight:700;margin:20px 0 30px 0;color:#5d5d5d;font-size:36px;line-height:42px">Dziękujemy!</div><div style="margin:30px 0 20px 0;font-size:20px;line-height:26px;font-weight:700;color:#5d5d5d">Zgłoszenie <span class="proposalid">[proposalId]</span> zostało wysłane poprawnie.</div><p style="margin:20px 0 20px 0;">Oddzwonimy w ciągu 1 godziny lub szybciej<br><div style="color:#EF7F1A;font-size: 36px;font-weight: 700;padding-top: 10px"><img src="../zbiorczy/telefon.png"> 603 804 805</div><br> pracujemy: pon. - pt., <span style="white-space:nowrap">8:00 - 19:00</span></p><div style="margin:30px 0 20px 0;font-size:20px;line-height:26px;font-weight:700;color:#5d5d5d">Co nastąpi dalej:</div><div class="tabela-dziekujemy"><div class="wiersz"><div class="komorka" style="width: 200px;"><img class="telefon-dziekujemy" src="../zbiorczy/business.png" alt="Kontakt telefoniczny" /> <span>Oddzwonimy, odpowiemy na Twoje pytania</span></div><div class="komorka" style="width: 200px;"><img class="spotkanie-dziekujemy" src="../zbiorczy/spotkanie-dziekujemy.png" alt="Spotkanie z ekspertem" /> <span>Bezpłatnie przedstawimy najlepsze oferty kredytowe z ponad 15 banków</span></div><div class="komorka" style="width: 200px;"><img class="oferta-dziekujemy" src="../zbiorczy/oferta-dziekujemy.png" alt="Wybór oferty" /> <span>Pomożemy skompletować dokumenty oraz wyślemy wnioski kredytowe do wspólnie wybranych banków </span></div></div></div><div style="font-size:24px;line-height:28px;font-weight:700;margin:10px 0 10px 0;color:#EF7F1A;text-align:center">Nasze usługi są bezpłatne!</div><span style="display:block;width:100%;max-width:300px;box-sizing:border-box;height:auto;text-align:center;border:1px solid #9b0050;background:#9b0050;color:#fff;font-size:16px;line-height:20px;cursor:pointer;font-weight:400;margin:30px auto 30px auto;border-radius:6px;padding:20px">Zamknij</span></div></div></div></div>';

                $(popupTemplate.replace("[proposalId]", response.proposalId)).hide().appendTo("body").fadeIn("slow");
                $(".form-info.wyslano").click(function () {
                    $(this).remove()
                });

            }).catch((error) => {

                // Obsluga  bledow
                error.then(response => {
                    if (response.message) {
                        alert(response.message);
                    } else {
                        alert('Blad komunikacji z serwerem');
                    }
                })
            });
        }
    });
});
