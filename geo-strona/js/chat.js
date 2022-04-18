var al_chat_profile = {};
    al_chat_profile.customer = "4";
    al_chat_profile.params = "p=1";
    al_chat_profile.guiUrl = 'https://czat.notus.pl/chat-gui';
    al_chat_profile.chatServerUrl = 'https://czat.notus.pl/chat-server';
    al_chat_profile.accentColor = '#EF7F1A';
    al_chat_profile.mainColor = '#9b0050';
    al_chat_profile.startFromScenario = "false";
    al_chat_profile.openChatInWindow = "false";
    al_chat_profile.maxMessageLength = "3000";
    (function() {
        setTimeout(function() {
            var s = document.createElement('script');
            s.type = 'text/javascript';
            s.async = true;
            s.src = al_chat_profile.guiUrl + "/static-pages/chat-starter.js?v\x3d" + (new Date).getTime();
 
            var el = document.getElementsByTagName('script')[0];
            el.parentNode.insertBefore(s, el);
        }, 1000);
    })();