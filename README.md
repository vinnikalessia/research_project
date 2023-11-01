br# Research project

Hoe maak je een interactieve boekenwebshop met Astro en de View Transition API?

# Installatie

```
npm create astro@latest
```

En typ y om de installatie te laten starten. Dan komen er een aantal vragen die je moet beantwoorden. Hier heb ik even de antwoorden opgesomd die ik heb gegeven.

1. "Where should we create your new project?" Omdat Astro alleen in een lege mag een project kan maken, moet je een nieuwe map aanmaken of een bestaande lege ingeven. In mijn geval heb ik een nieuwe map aangemaakt met de naam `./project` omdat ik al een README.md file had.

2. "How would you like to start your project?" Hier kies je voor `Empty`.

3. "Install dependencies? (recommended)" Hier kies je voor `Yes`.

4. "Do you plan to write TypeScript?" Hier kies je voor `Yes`.

5. "How strict should TypeScript be?" Hier kies je voor `Strict (recommended)`.

6. "Initialize a new git repository? (optional)" Hier kies je voor `No` als je geen git repository hebt aangemaakt. In mijn geval had ik dat wel al gedaan.

Nadat de installatie gedaan is, zou je dit moeten zien: </br>
![folder na installatie](./photo/folder_bij_installatie.jpg)

Voordat ik alles verzet naar de root folder `Research_project`, hernoem ik de README.md naar `README_project.md` om conflicten te voorkomen. De `README_project.me` hou ik nog even bij om belangrijke zaken niet te missen. Pas dan verzet ik alles naar de root folder `Research_project` en ziet de folder er zo uit: </br>
![folder na het verzetten van files naar rootmap](./photo/folder_na_verzetten_van_files.jpg)

Dan verwijder ik de map `project` en lees ik de `README_project.md` om te zien wat ik moet doen om de server te starten.


# Eerste test
Om te zien of alles gewerkt heeft, kan je de volgende commando uitvoeren: `npm run dev`.
Indien dit niet werkt en je de volgende error krijgt: </br>
`Node.js v18.14.0 is not supported by Astro!
Please upgrade Node.js to a supported version: ">=18.14.1"`</br>
Dan moet je eerst nog je node.js updaten.

## Node.js updaten/installeren (optioneel)
Om je node.js te updaten, kan je de volgende commando's uitvoeren: `nvm install v18.14.1` en daarna `nvm use v18.14.1`
