document.addEventListener("DOMContentLoaded", function () {
    (function () {
        var isIE = window.navigator.userAgent.indexOf("MSIE") >= 0 || !!window.document.documentMode;
        if (isIE) {
            var text = '';
            text += '<p>';
            text += 'Ze względów bezpieczeństwa zainstaluj najnowszą wersję ';
            text += 'jednej z rekomendowanych przeglądarek:';
            text += '</p>';
            text += '<p>';
            text += '<a href="https://www.google.com/chrome/" target="_blank">Google Chrome</a><br/>';
            text += '<a href="https://www.mozilla.org/pl/firefox/" target="_blank">Mozilla FireFox</a><br/>';
            text += 'Microsoft Edge<br/>';
            text += 'Opera<br/>';
            text += 'Safari';
            text += '</p>';

            var modal = '';
            modal += '<div class="modal fade" id="ieModal" tabindex="-1" role="dialog" aria-hidden="true">';
            modal += '<div class="modal-dialog" role="document">';
            modal += '<div class="modal-content">';

            modal += '<div class="modal-header text-center">';
            modal += '<div style="width: 100%;">Korzystasz z przeglądarki <strong>Internet Explorer</strong>, ';
            modal += 'która nie jest już rozwijana.</div>';
            modal += '<button type="button" class="close" data-dismiss="modal" aria-label="Close">';
            modal += '<span aria-hidden="true">&times;</span>';
            modal += '</button>';
            modal += '</div>';

            modal += '<div class="modal-body text-center">';
            modal += text;
            modal += '</div>';

            modal += '</div>';
            modal += '</div>';
            modal += '</div>';

            $('body').append(modal);

            $('#ieModal').modal('show');

            document.getElementById('ie-info').innerHTML = text;
            document.body.className += ' ' + 'is-ie';
        }
    })();
});

$(document).ready(function () {
    setTimeout(function () {
        var $features = $('.module-text-slider .slider-feature').each(function () {
            $(this).tooltip({
                delay: 0,
                template: '<div class="tooltip tooltip-white" role="tooltip">' +
                    '<div class="arrow"></div><div class="tooltip-inner"></div>' +
                    '</div>',
            });
        });
    }, 50);

    $('#property').each(function () {
        var $modalbody = $('#contactModal').find('.modal-body');
        var h1 = $('h1').text();

        let formId = 'K2MwHlV9wL33esC1';
        if (h1.toLowerCase().includes("zdrowe")) {
            formId = 'Wjm365A4nGf1HTRn';
        } else if (h1.toLowerCase().includes("mazowiecka")) {
            formId = 'EKEMK2cwC693w7kc';
        }

        var src = 'https://geo.onebutton.pl/forms/users/' + formId + '?message=' + $modalbody.attr('data-message');
        var iframe = '<iframe id="iframe' + formId + '"\n' +
            '                      src="' + src + '"\n' +
            '                      frameborder="0"\n' +
            '                      scrolling="no"\n' +
            '                      height="676px"\n' +
            '                      style="display: block; overflow: hidden; margin: 0 -15px; width: 100%;"></iframe>';
        $modalbody.html(iframe);

        window.addEventListener("message", function (event) {
            if (event.origin !== 'https://geo.onebutton.pl') {
                return;
            }

            try {
                var parsed = JSON.parse(event.data);
                if (parsed.event !== 'resize') {
                    return;
                }

                var data = parsed.data;
                var height = data.height;

                if (height) {
                    var iframe = document.getElementById('iframe' + formId);
                    iframe.height = height + "px";
                }
            } catch (e) {
                return null;
            }
        }, false);
    });

    $('.listable-posts').each(function () {
        var $listable = $(this);

        $listable.find('.item').click(function () {
            var href = $(this).find('a').first().attr('href');

            href && (window.location.href = href);
        });
    });

    $('#module-169 .module-posts').each(function () {
        var $posts = $(this);

        $posts.find('.post').click(function () {
            var href = $(this).find('a').first().attr('href');

            href && (window.location.href = href);
        });
    });
});

$(document).ready(function () {
    var cookiesAccepted = Cookies.get('cookiesGeoAccepted');
    if (cookiesAccepted) {
        return;
    }

    var cookies = '';
    cookies += '<div id="cookies-geo">';
    cookies += '<div class="container">';
    cookies += '<div class="cookies-content">';

    cookies += '<div class="text">';
    cookies += 'Powiadomienie o plikach cookie. ' +
        'Strona korzysta z plików cookies i innych technologii automatycznego przechowywania ' +
        'danych do celów statystycznych, realizacji usług i reklamowych.';
    cookies += '<br/>';
    cookies += 'Korzystając z naszych stron bez zmiany ustawień przeglądarki ' +
        'będą one zapisane w pamięci urządzenia. ';
    cookies += 'Szczeguły znajdują się w <a href="/polityka-prywatnosci">Polityce Prywatności</a>.';
    cookies += '</div>';

    cookies += '<div class="buttons">';
    cookies += '<button type="button" class="btn btn-sm btn-outline-secondary btn-price">';
    cookies += 'Akceptuję';
    cookies += '</button>';
    cookies += '</div>';

    cookies += '</div>';
    cookies += '</div>';
    cookies += '</div>';

    $('body').append(cookies);

    var $cookies = $('#cookies-geo');
    $cookies.find('button').click(function () {
        $cookies.fadeOut(300);

        setTimeout(function () {
            $cookies.remove();
        }, 301);

        Cookies.set('cookiesGeoAccepted', 1, {expires: 365, path: '/'});
    })
});