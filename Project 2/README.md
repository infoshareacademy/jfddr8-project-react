# Projekt React - integracja komponentów

## Zadanie 1:

1. w folderze `src/components` utwórz komponenty:

- `ProductsList` - odpowiedzialny za wyświetlenie listy produktów
- `ProductsListItem`- odpowiedzialny za wyświetlenie pojedynczego elementu na liście (obrazek, tytuł, opis i cena)

dane do wyświetlenia na liście znajdują się w pliku `src/data/products.js`

2. zaimportuj utworzone komponenty do głównego komponentu aplikacji (`App.js`)

## Zadanie 2:

1. Dodaj przycisk `Dodaj do koszyka` do komponentu `ProductsListItem`

2. W folderze `src/components` utwórz komponent `ShoppingCart` odpowiedzialny za wyświetlanie sumy cen produktów dodanych do koszyka

3. Zaimportuj utworzone komponenty do głównego komponentu aplikacji (`App.js`)

## Zadanie 3:

1. Utwórz komponenty `Home` oraz `Login`. W komponencie `Home` umieść renderowanie listy produktów oraz koszyka, a w komponencie `Login` stwórz formularz do podania `login` oraz `password`.

2. W komponencie `App.js` utwórz Routes - adres `/home` ma wyświetlać komponent `Home`, a adres `/login` - komponent `Login`.

3. Utwórz plik `Auth.js` w katalogu `src/providers` i stwórz w nim `Context Provider`, który ma posiadać dwie wartości - `isLogged` oraz `setIsLogged`.

4. Sprawdzaj parametr `isLogged` w `App.js`. Jezeli uzytkownik jest zalogowany - przekierowuj go na `/home`, jeśli nie - na `/login`. Zrób to samo w komponentach `Home` i `Login` - sprawdzaj, czy uzytkownik jest zalogowany.

5. Komponent `Login` po wpisaniu nazwy uzytkownika i hasła ma tworzyć w localStorage pole `user` z loginem uzytkownika jako value i przestawiać `isLogged` na `true`. `Auth.js` ma sprawdzać w `useEffect` czy istnieje takie pole w localStorage i jeśli istnieje - ustawiać `isLogged` na `true`.

6. Po zalogowaniu uzytkownika ma się odbyć przekierowanie na `/home`.

7. Obok koszyka dodaj przycisk `Log out`, ktory spowoduje przestawienie `isLogged` na `false`, wyczyszczenie localStorage i przekierowanie na `/login`.

Podsumowując, lista produktów i dodawanie do koszyka mają być dostępne tylko dla zalogowanego uzytkownika (czyli istniejącego wpisu `user` w localStorage).

## Zadanie 4:

Napisz e2e test w cypress testujący formularz do logowania.
https://docs.cypress.io/guides/conpm install cypress -Dmponent-testing/react/quickstart

1. Stwórz sobie w folderze fixtures plik user.json w którym ma być testowy login i hasło.

2. Stwórz plik Login.cy.ts w katalogu e2e, przypisz user.json do wewnętrznej zmiennej user.

3. Napisz warunki poprawnego logowania - wizyta na stronie /login, przechwycenie inputów, przekazanie im testowych danych, przechwycenie i kliknięcie buttona do logowania. Sprawdzenie czy nowy url to “/home”. Sprawdzenie czy w localStorage znajduje się user o wartości z inputa login (to.deep.equal). Sprawdzenie, czy jest widoczny koszyk.

## Zadanie 5:

Przetestuj jednostkowo za pomocą `jest` funkcję fetchItems (z pliku src/utils/fetchItems.ts). Powinny się znaleźć 3 przypadki testowe:

1. Gdy podany argument resourceUrl jest inny niż “users” - mamy wyjść przedwcześnie z funkcji.

2. Gdy podany argument resourceUrl to “users” i gdy poprawnie się wykona request to ma zwrócić userów oraz success. (Promise.resolve) - skorzystaj z zamockowanej odpowiedzi:
```
const users = [
    {
      id: 1,
      email: "test@test.com",
      first_name: "test",
      last_name: "test",
      avatar: "avatar",
    },
  ];
```

3. Gdy podany argument resourceUrl to "users" i gdy niepoprawnie się wykona request to ma zwrócić success na false. (Promise.reject)

## Zadanie 6:

Firebase.

1. Dodaj firebase do aplikacji.

2. Skonfiguruj firebase w taki sposób, żeby dodać autentykację oraz autoryzację w aplikacji.

3. Podłącz autoryzację z firebase do aplikacji i teraz zamiast przechowywać dane użytkownika w localStorage to przechowuj je po stronie firebase (1 formularz logowania który od razu załatwi nam rejestrację oraz zalogowanie użytkownika - jeśli użytkownik jest już zarejestrowany to przeprowadzamy tylko logowanie - można tu skorzystać z odpowiedzi z firebase w momencie, gdy próbujemy zarejestrować istniejącego użytkownika - 'auth/email-already-in-use').

4. Z poziomu App.tsx ustawiamy listener sprawdzający czy użytkownik jest zalogowany i na tej podstawie update'ujemy context. Pozwoli nam to utrzymać zalogowanego użytkownika po odświeżeniu przeglądarki.

5. Następnie przechowywanie ceny produktów usuwamy z localStorage i dodajemy do przechowania w pamięci firebase produktów per użytkownik.

