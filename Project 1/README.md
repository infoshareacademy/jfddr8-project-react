# Projekt React - budowanie niezależnych komponentów

## Zadanie 1:

1. w folderze `src/components` utwórz niezależne komponenty:

- `Header` - obsługujący parametr `title` oraz `logoSrc`
- `Sidebar`- obsługujący parametr `menuItems`
- `Content`
- `Footer` - obsługujący parametr `text`

2. zaimportuj utworzone komponenty do głównego komponentu aplikacji (`App.js`) i rozmieść według schematu:

```
 ______________________
|                      |
|       Header         |
|______________________|
|       |              |
|   S   |              |
|   i   |              |
|   d   |   Content    |
|   e   |              |
|   b   |              |
|   a   |              |
|   r   |              |
|_______|______________|
|                      |
|        Footer        |
|______________________|

```

## Zadanie 2:

- utwórz komponent `Users` oraz `User`, który wyświetli listę uzytkowników (nazwę oraz email) z pliku `users-data.js` z folderu `src/data` poprzez zaimportowanie jej w głównym komponencie aplikacji (`App`) i przekazanie do komponentu `Users`. Lista ma się wyświetlać wewnątrz `Content`.

## Zadanie 3

- zaimportuj do `App.js` listę itemów z pliku `src/data/menu-items.js`, a następnie przekaz ją w propsie do sidebara. W sidebarze wyświetl itemy jako listę linków, o nazwie z pola `name` i odnośniku z pola `link`

## Zadanie 4

- utwórz przełącznik: `dark theme/light theme` dla całej strony
- za pomocą `Styled components` ostyluj aplikację i reaguj odpowiednio na zmiany Theme.

## Zadanie 5

- dodaj do komponentu `User` przycisk `Delete` i napisz jego obsługę (po jego naciśnięciu z listy ma się usuwać dany User, po odświezeniu strony pojawi się ponownie). Jeśli usuniesz wszystkich userów, wyświetl w miejscu listy komunikat - "Users list empty!"

## Zadanie 6
- dodaj wyszukiwarkę userów (po `name`) - input powyżej listy użytkowników, za pomocą którego będzie można wyfiltrować użytkowników, których `name` zawiera wpisaną frazę. Po skasowaniu frazy, lista ma wrócić do pierwotnego stanu. Przyda się useState i useEffect. Jeżeli wyszukiwarka nie znajdzie żadnego usera, wyświetl w miejscu listy komunikat - "Users list empty!"

- stworzyć dodatkowy stan dla przefiltowanej listy
- stworzyć jeszcze jeden stan dla frazy którą ktoś wyszukuje w wyszukiwarce
- stworzyć useEffect który przyjmie dwie zaleności: twoją listę userów `UsersList` i przyjmie tą frazę którą uzytkownik wpisuje
- w środku use effecta przyjmij callback function filter. Mają zostać tylko ci userzy których name zawiera wpisywaną frazę.
- do propsa w users list przekaz filteredUsersList i ustawianie wpisywanej frazy
- logikę filtrowania napisz w App.js ale wywołanie musisz zrobić w Users.js bo tam jest input