# Research project

Hoe maak je een interactieve boekenwebshop met Astro en de View Transition API?

## Installatie

```
npm create astro@latest
```

En typ y om de installatie te laten starten. Dan komen er een aantal vragen die je moet beantwoorden. Hier heb ik even de antwoorden opgesomd die ik heb gegeven.

1. "Where should we create your new project?" Omdat Astro alleen in een lege map een project kan maken, moet je een nieuwe map aanmaken of een bestaande lege ingeven. In mijn geval heb ik een nieuwe map aangemaakt met de naam `./project` omdat ik al een README.md file had.

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

## Eerste test

Om te zien of alles gewerkt heeft, kan je de volgende commando uitvoeren:

```
npm run dev
```

Indien dit niet werkt en je de volgende error krijgt: </br>
`Node.js v18.14.0 is not supported by Astro!
Please upgrade Node.js to a supported version: ">=18.14.1"`</br>
Dan moet je je node.js updaten. Hoe je dit doet, kan je hieronder lezen.

### Node.js updaten/installeren (optioneel)

Het kan zijn dat je Nodejs op je laptop geïnstalleerd staat tussen alle apps
en hoef je die alleen te verwijderen en een nieuwere versie te installeren.
Om je node.js te updaten, kan je de volgende commando's uitvoeren:

```
nvm install v18.14.1
nvm use v18.14.1
```

Test dit met:

```
nvm list
```

Je zou moeten zien dat de versie `v18.14.1` nu op "current" staat. </br>

> [!NOTE]
> Het hoeft niet exact deze versie te zijn, maar het moet wel een versie zijn die hoger is dan `v18.14.1`.

## Implementatie TailwindCSS

Voor de styling van de webshop gebruik ik TailwindCSS. Om deze te installeren voer je de volgende commando uit:

```
npx astro add tailwind
```

Er worden weer een aantal vragen gesteld die je moet beantwoorden. Hier heb ik even de antwoorden opgesomd die ik heb gegeven.

1. "Astro will run the following commands: <br/>
   npm install @astrojs/tailwind tailwindcss@^3.0.24 &nbsp; Continue?"<br/>
   Hier kies je voor `Yes`.

2. "Astro will generate a minimal ;/tailwind.config.mjs file. &nbsp; Continue?" <br/>
   Hier kies je voor `Yes`.

3. "Astro will make the following changes to your config file: astro.config.mjs
   &nbsp; Continue?" <br/>
   Hier kies je voor `Yes`.

De stappen en commando kan je ook hierin vinden: [Install Tailwind CSS with Astro](https://tailwindcss.com/docs/guides/astro).<br/>
Je kan heel gemakkelijk testen of TailwindCSS werkt door in je code tekst een kleur te geven zoals text-red-500. Als je dit ziet, dan werkt het.
