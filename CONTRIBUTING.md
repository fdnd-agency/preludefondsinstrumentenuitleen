## Teamafspraken 

- Elke lesdag houden we een korte standup
- Taken en voortgang houden we bij in het projectboard
- Iedere taak heeft een duidelijke hoofdverantwoordelijke
- We starten taken aan de hand van issues
- Blockers communiceren we op tijd
- We verdelen het werk zo dat iedereen bijdraagt aan alle fases van de dlc
- We vragen en geven actief feedback
- We volgen de FDND code conventies
- We reviewen elkaars werk voordat het wordt gemerged
- We ondersteunen elkaar bij onze persoonlijke leerdoelen.
- Aan het einde van iedere week reflecteren we kort op onze samenwerking 

## Workflow
We werken vanuit kleine en duidelijke issues (proces en doel moet navolgbaar zijn)

```bash
issue
-> branch
-> commits
-> pull request
-> review
-> feedback verwerken
-> mergen
-> done
```

### `Branches`
Vanuit de main maken wij branches aan voor een korte taak.
- De naam beschrijft waar je aan werkt, bijvoorbeeld:
```
feature-person-card
fix-person-image
docs-contributing
```
Een branch hoort bij een duidelijk issue en blijft gericht op 1 taak of feature

### `Commits`
We volgen de FDND workflowconventies en gebruiken conventional commits.

Structuur:
```
type: korte beschrijving #issuenummer
```
- `Feat:` nieuwe functionaliteit
- `Fix:` probleem oplossen
- `docs:` documentatie
- `Refactor:` code verbeteren zonder de functionaliteit te veranderen
- `test:` tests toevoegen of aanpassen
- `style:`
  
> Iedere relevante commit verwijst naar het bijbehorende issue

## Code conventies
We volgen de [FDND code conventies](https://docs.fdnd.nl/conventies.html#pull-request)

***


### Reflecteren op de samenwerking
Aan het einde van iedere week bespreken we kort:
- Wat ging goed?
- Wat liep minder goed?
- Waren verantwoordelijkheden duidelijk?
- Hebben we knelpunten op tijd besproken?
- Hoe verliep feedback geven en ontvangen?
- Wat willen we volgende week verbeteren?

### Stand ups & communicatie
Op iedere lesdag houden we een korte stand up

iedereen benoemt:
- Waar werk ik aan?
- Wat heb ik gedaan?
- Wat is mijn volgende stap?
- Loop ik ergens op vast?
- Heb ik hulp of feedback nodig?