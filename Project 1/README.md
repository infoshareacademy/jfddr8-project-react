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
