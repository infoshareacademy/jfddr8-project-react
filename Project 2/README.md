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
