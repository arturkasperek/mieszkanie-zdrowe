$(document).ready(function (){
    const opinion = {
        nameAndSurname: "Rafał",
        placement: "Słubice",
        description: "Bardzo profesjonalne podejście do tematu. Najlepszy doradcą z jakim miałem styczność. Wcześniej korzystałem z usług innego w Słubicach, dzieli ich przepaść w poświęceniu się swojej pracy, profesjonalizmem oraz kontaktem z klientem. Bank robił naprawdę duże problemy i mieliśmy pod górkę. Finalnie wszystko wyszło wręcz idealnie. Jeśli polecać to tylko NOTUS finanse. Dziękuję za wszystko i pozdrawiam 😀"
    }
    const opinion2 = {
        nameAndSurname: "Magdalena",
        placement: "Opole",
        description: "Szczerze polecam współprace z Panem Jakubem K. Pełen profesjonalizm, szybkość działania i pomoc w każdej sytuacji, nawet tej najmniej spodziewanej. Od przyjścia do Pana Kuby z wybraną nieruchomością marzeń do zakupu domu i finalizacji u notariusza włącznie z załatwianiem kredytu minęło 1,5 miesiąca co uważam za błyskawiczne załatwianie tak poważnego tematu jak zakup domu na kredyt. Szczerze polecam i z całego serca dziękuje. Magda"
    }
    const opinion3 = {
        nameAndSurname: "Tomasz",
        placement: "Katowice",
        description: "Profesjonalne podejście firmy NOTUS do potencjalnego klienta. W szczególności chylę czoła i składam podziękowania Pani Aleksandrze Zwolińskiej, która bez zbędnego koloryzowania wprost potrafiła przedstawić rzetelnie sytuację w mojej sprawie zarówno na dziś, jak i za parę miesięcy wskazując tym samy kompetentnie ścieżkę pozytywnego rozwiązania sprawy. Ponadto z Panią Aleksandrą można swobodnie porozmawiać na wiele tematów. Serdecznie dziękuję za spotkanie i do zobaczenia za parę miesięcy :)"
    }
    const opinion4 = {
        nameAndSurname: "Miłosz",
        placement: "Słubice",
        description: "Proces zakupu mieszkania załatwiony w ekspresowym tempie. Pierwsza decyzja kredytowa po 2 tygodniach !!! Pełen profesjonalizm-mega wiedza. Całkowite zaangażowanie i wsparcie. Mariusz zawsze wstawiał się z nami na spotkania umowne z różnymi stronami, czy to z bankiem czy z właścicielem nieruchomości. Cotygodniowy raport z jego strony o postępie kredytowania. Sprawy \"papierkowe\" dopięte na ostatni guzik, świetny kontakt"
    }
    const opinion5 = {
        nameAndSurname: "Oliwia",
        placement: "Opole",
        description: "Gdyby Nie Pani Małgosia z Notusa kredyt hipoteczny byłby nie do ogarnięcia. Polecam z czystym sumieniem, pełen profesjonalizm, pomoc o każdej porze dnia i nocy. Dostępność telefoniczna i mailowa 24h. Dodatkowo przemiła atmosfera. Wszystko wytłumaczone nic nie zatajone. W 100% oddany personel szczególnie Pani Małgorzata. Polecam dodatkowo ubezpieczenie na życie wszystko prosto szybko  zrozumiale załatwione. Polecam każdemu i na pewno wrócę i oddam się w ręce Pani Małgosi ponownie!!!!"
    }
    const opinion6 = {
        nameAndSurname: "Ryszard Wojtkiewicz",
        placement: "Warszawa",
        description: "Bardzo sprawnie i w pełni profesjonalnie. Pani Beata Zaręba rzetelnie przygotowała wnioski, wybraliśmy wspólnie najbardziej sensowną propozycję. Wszystko terminowo, bez błędów i zbędnego oczekiwania. Co jeszcze ważniejsze, sprawny kontakt i szybkie zdobywanie odpowiedzi na moje pytania. Polecam."
    }
    const opinion7 = {
        nameAndSurname: "Daniel Gnieździński",
        placement: "Poznań",
        description: "Serdecznie polecam Notus Finanse w Poznaniu. Doradca dokładnie wytłumaczył nam wszystkie aspekty na życiowych przykładach, a następnie poprowadził przez cały proces kredytowy od początku do końca. Świetny kontakt, pełen profesjonalizm, a jednocześnie ludzkie podejście. Dostaliśmy kredyt dokładnie taki jaki chcieliśmy. Korzystaliśmy również z doradztwa w kwestii ubezpieczeń i z tej usługi także jesteśmy bardzo zadowoleni. Polecamy kontaktować się konkretnie z Panem Januszem Olszewskim. Panie Januszu, dobra robota! 😉"
    }
    const opinion8 = {
        nameAndSurname: "Julia Godlewska",
        placement: "Wrocław",
        description: "Polecam serdecznie! Starałam się o kredyt hipoteczny, pan Dariusz Stanek pomógł mi w wielu kwestiach, zarówno związanych z wnioskiem kredytowym jak i innych formalnościach. Dzięki niemu udało mi się wszystko załatwić, tak jak należy i bez zbędnych stresów. Wszystko po kolei mi tłumaczył co, gdzie i jak załatwić, za co jestem mu bardzo wdzięczna. Na pewno będę polecać pana Dariusza znajomym! :)"
    }
    const opinion9 = {
        nameAndSurname: "Adam Kozak",
        placement: "Warszawa",
        description: "No muszę przyznać że jestem mega zadowolony, kredyt z problemami, i terminem na \"już\" , mam wrażenie że w trakcie załatwiania mojego kredytu Pani Kubińska Joanna nie miała życia prywatnego. Znosiła dzielnie moje telefony i profesjonalnie załatwiła całą sprawę, Niemożliwe robi od ręki, na cuda trzeba troszkę poczekać :) Bardzo dziękuję i gorąco polecam!"
    }
    const opinion10 = {
        nameAndSurname: "Zoriana Oliinyk",
        placement: "Kraków",
        description: "BARDZO kompetentni w pytaniach doradztwa kredytu hipotecznego , dobra wiedza na temat oferty banków i ich dopasowanie do wymagań klienta . BARDZO zadowoleni ze współpracy z Panem Krzysztofem S. , wszystko zawsze dopilnowane i załatwione na czas , serdecznie POLECAM!!!"
    }
    const opinion11 = {
        nameAndSurname: "Michał Jankowiak",
        placement: "Warszawa",
        description: "Z narzeczoną staraliśmy się o kredyt hipoteczny, z racji wieku oraz innych czynników nie dawaliśmy sobie wielu nadziei. Natomiast Pan Dariusz Stanek oraz Pani Dorota Bukowska pomogli nam przekuć marzenia w rzeczywistość, przejść przez cały proces i pomogli w staraniu się o kredyt. Udało się i już niedługo będziemy się cieszyć własnym \"kawałkiem podłogi\"."
    }
    const opinion12 = {
        nameAndSurname: "techSequence",
        placement: "Warszawa",
        description: "Zacząłem interesować się kredytem rok temu i byłem na spotkaniu w Notus z Panem Markiem Stylińskim. Wróciłem do tematu po kilku miesiącach i nie było problemu kontynuować rozmowy, gdzie przez ten cały okres nie miałem żadnych ofert marketingowych - bardzo fajne podejście. Teraz jestem zadowolonym kredytobiorcą i przyznam, że nigdy nie miałem tak profesjonalnej i responsywnej obsługi."
    }
    const opinion13 = {
        nameAndSurname: "Natalia Trochanowska",
        placement: "Legnica",
        description: "Polecam z całego serca! Świetny kontakt z panią Joanną, wszystko załatwione bez problemu, w szybkim tempie. Procedura kredytowa oraz umowy wytłumaczone krok po kroku. Pani Joanna przypomina o wszystkich formalnościach i terminach tak, że nie sposób czegokolwiek przeoczyć. Zabrzmi bardzo \"marketingowo\", ale jeśli kredyt- to tylko z Notus Finanse Legnica :) Dziękujemy i pozdrawiamy!"
    }
    const opinion14 = {
        nameAndSurname: "Marcin Sobala",
        placement: "Łódź",
        description: "Dzięki firmie Notus nie musiałem się martwić praktycznie o nic przy załatwianiu kredytu hipotecznego. Przez proces gładko przeprowadził mnie profesjonalny doradca, Michał K., którego nigdy nie udało mi się zaskoczyć pytaniem, na które nie znałby odpowiedzi, a bywam dociekliwy. Wszystko udało się załatwić na czas i bezproblemowo."
    }
    const opinion15 = {
        nameAndSurname: "Kamil O",
        placement: "Kraków",
        description: "Serdecznie polecam współpracę z Panem Grzegorzem Sitkiem. Fachowiec z najwyższej półki, mega profesjonalizm i doświadczenie. Odpowie na każde pytanie i wszystko konkretnie wytłumaczy. Proces uzyskania kredytu hipotecznego przeszedł bardzo szybko i bez żadnego problemu. Polecam w 100%"
    }
    const opinion16 = {
        nameAndSurname: "Martyna Frąckiel",
        placement: "Białystok",
        description: "Kredyt? Tylko w notus-bialystok! Pani Asia i Ania dokładnie analizują, szacują zdolność i prowadzą za rękę do finalizacji kredytu na najlepszych dla klienta warunkach. Dzięki wysokich kompetencji obu Pań mogę się cieszysz spełnieniem marzeń i posiadaniu domu :) Szczerze polecam dobra kawa, miła atmosfera, rzetelne doradztwo."
    }
    const opinion17 = {
        nameAndSurname: "Iza G",
        placement: "Lubin",
        description: "Moim kredytem zajmował się p. Marek Kaźmierczak - trafiłam do niego z polecenia znajomych - wszystko objaśnia, poświęca duuużo czasu klientowi. Uzyskaliśmy kredyt na dobrych warunkach. Dziękuje Panie Marku, będę Pana szczerze polecać"
    }
    const opinion18 = {
        nameAndSurname: "Adam Wieckowski",
        placement: "Gdańsk",
        description: "Polecam w 100% firmę Notus a w szczególności Panią Sylwię Olszewską. Szybka i profesjonalna obsługa z jej strony. Błyskawiczne załatwienie sprawy oraz indywidualne podejście do klienta. Wykonała ogromna pracę w maksymalnie krótkim czasie. Kredyt obrotowy na firmę został przyznany dzięki jej kontaktom i doświadczeniu. Dziękuję!"
    }
    const opinion19 = {
        nameAndSurname: "Ewelina Guzik",
        placement: "Gdańsk",
        description: "Serdecznie polecam firmę Notus za pomoc, doradztwo w uzyskaniu kredytu. W szczególności dziękuję za profesjonalne i indywidualne podejście Panu Michałowi N., który w rzetelny sposób wyjaśnił jak działa proces pozyskania kredytu hipotecznego oraz sprawnie i efektywnie przeprowadził przez proces otrzymania kredytu. Kontakt do Pana Michała poleciła mi znajoma, która również skorzystała z usług firmy Notus w Gdańsku. Serdecznie dziękuję i polecam dalej :)"
    }
    const opinion20 = {
        nameAndSurname: "Maciej Bielawski",
        placement: "Szczecin",
        description: "Jeżeli komuś zależy na profesjonalnym podejściu do tematyki kredytów hipotecznych, pełnym zaangażowaniu w sprawę klienta i uzyskaniu pełnych i rzetelnych informacji to polecam wszystkim współpracę z Panem Karolem Orzechowskim. Z usług Pana Karola korzystałem dwukrotnie, za każdym razem miałem problemy stwarzane przez bank, ale dzięki profesjonalizmowi doradcy i jego zaangażowaniu z każdego problemu udało się wyjść obronną ręką. Polecam w 100%."
    }
    const opinion21 = {
        nameAndSurname: "Łukasz Bączek",
        placement: "Olsztyn",
        description: "Fachowcy pełną gębą, bynajmniej Pan Przemek Poniatowski. Owocne lata doświadczeń na rynku kredytowym zrobiły swoje. Doradca nie koloryzuje, nie obiecując gruszek na wierzbie, przedstawia szanse i zagrożenia transakcji. Proponuje kilka rozwiązań. Przy tym wszystko dzieje się sprawnie, transparentnie dzięki sieci kontaktów. Podziękowania za cierpliwość i świetną pracę. Ukłony!"
    }
    const opinion22 = {
        nameAndSurname: "Marzena Pożoga",
        placement: "Kielce",
        description: "Kamil przeszedł z nami cały proces, tak naprawdę od wyboru mieszkania po jego zakup. Nie ważne jakie było pytanie, jaka wątpliwość zawsze pomógł. Wszystko praktycznie od ręki. Super kontakt zarówno telefoniczny jak i mailowy. Bardzo elastyczne godziny pracy, nie było problemu się umówić (pomimo moich sztywnych godzin pracy 9-17). Oprócz ostatniej wizyty w banku (podpisania dokumentów kredytowych) wszystko załatwiał za nas. Zna się na tym co robi, kompetentna osoba. Polecam :)"
    }
    const opinion23 = {
        nameAndSurname: "Barbara Baran",
        placement: "Stalowa Wola",
        description: "Zdecydowanie polecam! Kontakt z Doradcą na bieżąco, można zapytać o wszystko w każdym momencie. Indywidualne podejście, miła atmosfera, wszystko załatwione szybko, sprawnie, bez stresu. Polecam szczególnie osobom, które nie mają czasu same biegać po bankach, albo nie bardzo wiedzą, od czego zacząć, jeśli chcą np sfinansować kredytem budowę domu."
    }
    const opinion24 = {
        nameAndSurname: "Patrycja Wandzik",
        placement: "Tarnowskie Góry",
        description: "Fantastyczna firma z najwyższej półki. Ekspresowo i rzeczowo. Pan Marcin profesjonalny ekspert finansowy!! Jednym słowem wszystko na najwyższym poziomie!! Polecam!"
    }
    document.getElementById("name").innerHTML = opinion.nameAndSurname;
    document.getElementById("place").innerHTML = opinion.placement;
    document.getElementById("description").innerHTML = opinion.description;

    document.getElementById("name2").innerHTML = opinion2.nameAndSurname;
    document.getElementById("place2").innerHTML = opinion2.placement;
    document.getElementById("description2").innerHTML = opinion2.description;

    document.getElementById('name3').innerHTML = opinion3.nameAndSurname;
    document.getElementById("place3").innerHTML = opinion3.placement;
    document.getElementById('description3').innerHTML = opinion3.description;

    document.getElementById('name4').innerHTML = opinion4.nameAndSurname;
    document.getElementById("place4").innerHTML = opinion4.placement;
    document.getElementById('description4').innerHTML = opinion4.description;

    document.getElementById('name5').innerHTML = opinion5.nameAndSurname;
    document.getElementById("place5").innerHTML = opinion5.placement;
    document.getElementById('description5').innerHTML = opinion5.description;

    document.getElementById('name6').innerHTML = opinion6.nameAndSurname;
    document.getElementById("place6").innerHTML = opinion6.placement;
    document.getElementById('description6').innerHTML = opinion6.description;

    document.getElementById('name7').innerHTML = opinion7.nameAndSurname;
    document.getElementById("place7").innerHTML = opinion7.placement;
    document.getElementById('description7').innerHTML = opinion7.description;

    document.getElementById('name8').innerHTML = opinion8.nameAndSurname;
    document.getElementById("place8").innerHTML = opinion8.placement;
    document.getElementById('description8').innerHTML = opinion8.description;

    document.getElementById('name9').innerHTML = opinion9.nameAndSurname;
    document.getElementById("place9").innerHTML = opinion9.placement;
    document.getElementById('description9').innerHTML = opinion9.description;

    document.getElementById('name10').innerHTML = opinion10.nameAndSurname;
    document.getElementById("place10").innerHTML = opinion10.placement;
    document.getElementById('description10').innerHTML = opinion10.description;

    document.getElementById("name11").innerHTML = opinion11.nameAndSurname;
    document.getElementById("place11").innerHTML = opinion11.placement;
    document.getElementById('description11').innerHTML = opinion11.description;

    document.getElementById("name12").innerHTML = opinion12.nameAndSurname;
    document.getElementById("place12").innerHTML = opinion12.placement;
    document.getElementById('description12').innerHTML = opinion12.description;

    document.getElementById("name13").innerHTML = opinion13.nameAndSurname;
    document.getElementById("place13").innerHTML = opinion13.placement;
    document.getElementById('description13').innerHTML = opinion13.description;

    document.getElementById("name14").innerHTML = opinion14.nameAndSurname;
    document.getElementById("place14").innerHTML = opinion14.placement;
    document.getElementById('description14').innerHTML = opinion14.description;

    document.getElementById("name15").innerHTML = opinion15.nameAndSurname;
    document.getElementById("place15").innerHTML = opinion15.placement;
    document.getElementById('description15').innerHTML = opinion15.description;

    document.getElementById("name16").innerHTML = opinion16.nameAndSurname;
    document.getElementById("place16").innerHTML = opinion16.placement;
    document.getElementById('description16').innerHTML = opinion16.description;

    document.getElementById("name17").innerHTML = opinion17.nameAndSurname;
    document.getElementById("place17").innerHTML = opinion17.placement;
    document.getElementById('description17').innerHTML = opinion17.description;

    document.getElementById("name18").innerHTML = opinion18.nameAndSurname;
    document.getElementById("place18").innerHTML = opinion18.placement;
    document.getElementById('description18').innerHTML = opinion18.description;

    document.getElementById("name19").innerHTML = opinion19.nameAndSurname;
    document.getElementById("place19").innerHTML = opinion19.placement;
    document.getElementById('description19').innerHTML = opinion19.description;

    document.getElementById("name20").innerHTML = opinion20.nameAndSurname;
    document.getElementById("place20").innerHTML = opinion20.placement;
    document.getElementById('description20').innerHTML = opinion20.description;

    document.getElementById("name21").innerHTML = opinion21.nameAndSurname;
    document.getElementById("place21").innerHTML = opinion21.placement;
    document.getElementById('description21').innerHTML = opinion21.description;

    document.getElementById("name22").innerHTML = opinion22.nameAndSurname;
    document.getElementById("place22").innerHTML = opinion22.placement;
    document.getElementById('description22').innerHTML = opinion22.description;

    document.getElementById("name23").innerHTML = opinion23.nameAndSurname;
    document.getElementById("place23").innerHTML = opinion23.placement;
    document.getElementById('description23').innerHTML = opinion23.description;

    document.getElementById("name24").innerHTML = opinion24.nameAndSurname;
    document.getElementById("place24").innerHTML = opinion24.placement;
    document.getElementById('description24').innerHTML = opinion24.description;
});

