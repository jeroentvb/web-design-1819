# Web Design
Enhanced closed captions for Deaf people.

## Inhoud
* [User scenario](#user-scenario)
* [Test 1](#test-1)
* [Test 2](#test-2)
* [Test 3](#test-3)
* [To do](#to-do)

## User Scenario
### V1
> Marie is Doof met een hoofdletter. Dat betekent dat ze zichzelf als Doof identificeert, wat simpelgezegd betekent dat haar eerste taal Nederlandse Gebarentaal is. Geschreven Nederlands is haar tweede taal, maar deze beheerst ze goed. Ook weet ze niet wat geluid is. Ze is ook een designer en denkt daarom snel in oplossingen.  
Als Marie een film kijkt gaat dat natuurlijk met closed captions aan. Echter gaat er veel nuance verloren in de closed captions. Als er buiten beeld een geluid afspeelt, bijvoorbeeld kloppen, heeft Marie geen idee of dat een hard of zacht geluid is. Het zou dus fijn zijn om die nuance op een of andere manier toch mee te kunnen krijgen.  
Als Marie mijn prototype gebruikt krijgt ze dat wel mee doormiddel van geanimeerde closed captions en een aangepast font op momenten dat nuance nodig is.

### V2
> Marie is Doof met een hoofdletter. Dat betekent dat ze zichzelf als Doof identificeert, wat simpelgezegd betekent dat haar eerste taal Nederlandse Gebarentaal is. Geschreven Nederlands is haar tweede taal, maar deze beheerst ze goed. Ook weet ze niet wat geluid is. Ze is ook een designer en denkt daarom snel in oplossingen.  
Marie wil Cars 1 kijken en daarbij alle nuance meekrijgen. Ze wil ervaren wat voor soort geluid er wordt omschreven, vooral als dit niet te zien is. De manier waarop dit gebeurt moet passen bij de film. Ook wil ze graag weten we wanneer wat zegt als dat niet in beeld is. 

## Test 1
### Plan
Omdat ik voor de eerste test Marie nog niet had ontmoet had ik iets gemaakt wat volledig op aannames was gebaseerd. Dit was een hele simpele [geanimeerde ondertiteling](closed_caption_knocking.mp4).  

### Feedback
In dat specifieke voorbeeld ging het om het een handeling binnen beeld, dat is niet super waardevol omdat ze door de beweging in kan schatten hoe hard er geklopt wordt. Het is echter wel heel waardevol wanneer een geluid van buiten het beeld komt.

## Test 2
### Prototype
Voor deze test heb ik een werkend prototype gebouwd met geanimeerde ondertiteling op basis van hoe hard het daadwerkelijke geluid is. Dit heb ik gedaan door tegelijk met de video een mp3 af te spelen en het geluid daarvan te analyseren met [p5 sound](https://p5js.org/reference/#/libraries/p5.sound).  
De ondertiteling moet helaas onder de video worden gerenderd met [vtt.js](https://github.com/mozilla/vtt.js) omdat het niet mogelijk is de font-size of scale van een onderiteling in een video aan te passen terwijl de video speelt.  
Het is mogelijk om dit prototype met andere video's te gebruiken omdat de audio realtime geanalyseerd wordt.  
Dit prototype is ook nog erg basic en 'safe' omdat het erg lang duurde om de ondertiteling werken en geanimeerd te krijgen.

### De test
Voor de test heb ik twee vragen bedacht.

#### Snapte je of het geluid hard of zacht was?
Ik wist dat de aannames van mijn eerste prototype grotendeels juist waren en geanimeerde ondertiteling dus wat toevoegt. Maar ik wist niet of ik dat juist had toegepast in mijn prototype. Vandaar deze vraag om dat te verifiëren.  
Wel kreeg ik de vraag of het geluid van het [kloppen op een trailer](assets/subtitles/cars_nl.vtt) anders klinkt dan op een tafel. Hiermee bedoelde ze dat ze niet weet wanneer een soort geluid anders kan klinken in een andere context.

#### Had je door dat er twee personages in het fragment zaten?
Marie haar antwoord was nee. Hier moest ik dus nog wat aan doen.

#### Verdere feedback
In het nabesprekingsgesprek met Koop en Daan kreeg ik de feedback dat het prototype vrij 'safe' was. Hier kon ik me in vinden. Dit kwam voornamelijk door tijdsdruk.  
Ook werd er aangeraden om te proberen het wat interessanter en/of uitbundiger te maken. M.a.w. add nonsense.

## Test 3
### Prototype
Na de feedback van test 2 heb ik verschillende lettertypes toegepast op de ondertiteling die het geluid beschrijft. Dit moet er voor zorgen dat de ondertiteling wat meer gevoel overbrengt. Verder heb ik de bewegingen in de ondertiteling wat uitbundiger gemaakt.   
Daarnaast heb ik elk personage een andere kleur ondertiteling gegeven zodat het duidelijk is als er een ander persoon iets zegt.

### De test
Ik heb weer twee vragen en een aantal subvragen bedacht.

#### Wat vond je van het aangepaste font?
* Voegt het wat toe?
* Is het afleidend?
* Is het leesbaar?

Marie vond dat het lettertype wel wat toevoegde al kreeg ik sterk het idee dat dat vooral kwam doordat het 'nonsense' was. Het geluid wordt er niet per se duidelijker door omschreven. Het was wel nog leesbaar en leidde niet te veel af.

#### Had je door dat er twee personages in het fragment zaten?
* Waren de kleuren vervelend?
* Denk je dat kleuren nog overzichtelijk zouden zijn bij een film van normale lengte zolang je niet voor elke kleine bijrol een aparte kleur gaat gebruiken?

De kleuren zorgden er goed voor dat het duidelijk was als er iemand anders praatte. De kleuren zelf waren echter niet altijd goed gekozen omdat ik te weinig rekening had gehouden met het contrast. Hierbij speelde de lichtinval en reflectie van het beeldscherm ook mee.

## To do
Ik had graag nog willen testen of het trillen van een telefoon toegevoegde waarde heeft als er een de ondertiteling een geluid beschrijft.  
Helaas kon ik dit niet testen omdat de Web Vibration API vrij slecht wordt ondersteund en ik dus geen apparaat had om het te proberen.
