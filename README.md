# FFD_3

Frontend For Designers opdracht 3 - Lekker films klikken (mobiel/tablet):

<img width="311" alt="screen shot 2018-04-12 at 17 27 58" src="https://user-images.githubusercontent.com/33866004/38687456-09e41a44-3e77-11e8-9562-438806f9e15c.png">

<img width="315" alt="screen shot 2018-04-12 at 17 28 14" src="https://user-images.githubusercontent.com/33866004/38687491-1e232b80-3e77-11e8-909c-bd74ba6ae4f1.png">

<img width="313" alt="screen shot 2018-04-12 at 17 28 26" src="https://user-images.githubusercontent.com/33866004/38687511-26f4f39c-3e77-11e8-96eb-992675b2e444.png">

<img width="640" alt="screen shot 2018-04-12 at 17 29 02" src="https://user-images.githubusercontent.com/33866004/38687544-3629f862-3e77-11e8-9137-4cc26fa183fe.png">

## Code talen

Code talen die hiervoor gebruikt zijn:

```
1. HTML
2. CSS
3. Javascript

```

## Opdracht

Voor deze opdracht heb ik besloten om een website te maken waar je kan browsen tussen mijn "favoriete" films.
De data voor deze films haal ik op van een API. In dit geval: http://dennistel.nl/movies.
Naast data ophalen gebruikte ik verschillende manieren van UI Events zodat gebruikers het ontwerp
op verschillende manieren kan bedienen.
Met data ophalen komen er natuurlijk allerlei states naar boven. Ik heb de loadingstate in de opdracht
verwerkt.

### Card

<img width="315" alt="screen shot 2018-04-12 at 17 28 14" src="https://user-images.githubusercontent.com/33866004/38687491-1e232b80-3e77-11e8-909c-bd74ba6ae4f1.png">

Dit is de layout geworden voor een film. Ik heb gekozen om metadata te laten, maar als de gebruiker
meer info wilt, kan diegene op de card klikken voor meer info. Op mobiel past de height van een individueel card zich aan de content dat erin zit. In de meer info komt info te komen van director en actors.
Op tablet/desktop worden alle cards hieght veranderd gebaseerd op de hoogste card.


### Techniek

Scroll Event:

<img width="222" alt="screen shot 2018-04-12 at 19 28 10" src="https://user-images.githubusercontent.com/33866004/38693878-8bbd1d16-3e88-11e8-9331-7b54a7c8802b.png">

Ik heb beslotem om de scrollevent erin te verwerken sinds ik dat ook had gedaan in opdracht 2. Daar pakte ik het iets anders aan met opgevulde cirkels. Dit keer probeerde ik het ook erin te verwerken, maar dan met een bar bovenaan die horizontaal van links naar rechts gaat. Deze progressbar indicator geeft aan hoe ver de gebruiker zit in de verticale as.
De kleur is gebaseerd, net als de banner, op de kleuren van één van de films.

Click Event:

<img width="313" alt="screen shot 2018-04-12 at 17 28 26" src="https://user-images.githubusercontent.com/33866004/38687511-26f4f39c-3e77-11e8-96eb-992675b2e444.png">

Met de Click event wordt er meer informatie getoond. Naast meer informatie draait het de 'more' icon 180 graden heen en terug. Ook krijgt de afbeeldingen en card-border een focus waarbij de box-shadow donkerder wordt.

Load Event:

<img width="311" alt="screen shot 2018-04-12 at 17 27 58" src="https://user-images.githubusercontent.com/33866004/38687456-09e41a44-3e77-11e8-9562-438806f9e15c.png">

<img width="640" alt="screen shot 2018-04-12 at 17 29 02" src="https://user-images.githubusercontent.com/33866004/38687544-3629f862-3e77-11e8-9137-4cc26fa183fe.png">

Wanneer de pagina geladen wordt krijgen de header en progressbar een random kleur dat gebaseerd is op één van de films.


### UI State: Loadingstate

<img width="302" alt="screen shot 2018-04-12 at 19 15 36" src="https://user-images.githubusercontent.com/33866004/38693020-ea182db8-3e85-11e8-8c12-4761986b94f4.png">
<img width="299" alt="screen shot 2018-04-12 at 19 16 38" src="https://user-images.githubusercontent.com/33866004/38693071-1c9369f6-3e86-11e8-8a30-b0806797b295.png">

In de loadingstate heb ik een loading animation van cards die rondom elkaar heendraaien. Dit komt de gebruiker pas te zien wanneer de request.status onder de 200 zit.


## Versies

Ik heb twee versies van de website:

V1 - Hier is zijn de films horizontaal scrollbaar. Dit was ook mijn eerste idee, maar het bleek dat het wat minder goed deed, de aangepaste hoogtes van een card niet ervor zorgt dat de andere cards aan de bovenkant gealigned worden.

V2_Final - Is mijn uiteindelijke versie geworden, waar ik ook meer verder ben gegaan, omdat het probleem wat je krijgt in V1 er niet is. Deze versie werkt goed en fijn ongeacht de hoogte van zo'n card

## Link to project

* https://oege.ie.hva.nl/~tarumaa001/FFD_3/

## Acknowledgments

* www.css-tricks.com
* Stackoverflow
* Koop Reynders
