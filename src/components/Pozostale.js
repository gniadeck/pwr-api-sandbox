import React from 'react';

const Pozostale = () => (
    <div class='container'>
        <h2>Jak inaczej można korzystać z PWr-API?</h2>
        <h5>Tworząc PWr-API chcieliśmy dać wszystkim narzędzie do łatwego
            dostępu do wewnętrznych systemów politechniki. Podczas wdrażania na produkcje,
            najbardziej polecamy skorzystanie z najnowszego release'a i uruchomienie go na dedykowanej
            maszynie, niezależnej od naszego środowiska. 
        </h5>
        <h5>API prócz ogólnodostępnych, niewymagających autentykacji modułów, składa
            się również z modułów wymagających autentykacji, umożliwiających dostęp
            do systemów wymagających logowania się użytkownika, takich jak
        </h5>
        <h5>
            - JSOS <br></br>
            - edukacja.cl <br></br>
            - eportal <br></br>
        </h5>
        <h5><b>JSOS</b></h5>
        <h6>Moduł JSOS zawiera endpointy, dzięki którym można uzyskać
            dostęp do w zasadzie wszystkich danych, jakie można uzyskać korzystając
            z JSOSowego front-endu. Dane te obejmują spis zajęć dla użytkownika, plan
            zajęć tygodniowy (w tym obsługiwalny offset), odbieranie wiadomości, pozyskiwanie ocen
        , operacji finansowych itd.
        </h6>
        <h5><b>ePortal</b></h5>
        <h6>Korzystając z modułu eportalu można uzyskać dostęp do kursów do których użytkownik
            jest przypisany, a także do ocen konkretnego kursu i sekcji konkretnego kursu. Ponadto,
            można pobrać kalendarz wszystkich eventów dla użytkownika, co daje możliwości ekstrakcji
            danych z ICALa w celu np. stworzenia zunifikowanej aplikacji politechnicznego kalendarza.
        </h6>
        <h5><b>edukacja.cl</b></h5>
        <h6>System edukacja.cl jest uznawany za system legacy, więc mimo istnienia funkcjonalności
            identycznych jak w JSOSie, nasze API nie zapewnia do nich dostępu. Zapewniamy natomiast
            dostęp do danych dotyczących zapisów (pobieranie wszystkich dostępnych dla użytkownika grup zapisowych).
        </h6>
        <h5><b>Roadmapa</b></h5>
        <h6>Planujemy do końca 2022 dodać support dla nowego, wdrażanego obecnie, systemu
            USOS. Jeżeli jesteś chętny, aby pomóc nam w developmencie, dawaj znać :))
        </h6>
    </div>
)
export default Pozostale;