# algolia-instantsearch-widgets
Some custom widgets to enhance Algolia UI

## instantsearch-select.js

![Screenshot](/screenshot1.jpg?raw=true)

### Introduction
An Algolia select widget to represent an attribute as a dropdown list. No dependency

### usage

```
var search = instantsearch({
    appId: 'XXXXXXXXXXX',
    apiKey: 'YYYYYYYYYY',
    indexName: 'youIndexName'
});

search.addWidget(
  instantsearch.widgets.selectWidget({
    container: '#select',
    attributeName: 'yourAlgoliaAttributeName',
    title: 'titleForYourSelect'
  })
);
```

## instantsearch-googlemaps.js

![Screenshot](/screenshot2.jpg?raw=true)

### Introduction
An Algolia googlemaps widget. You'll need to add `<script src="https://maps.googleapis.com/maps/api/js?key=xxxxxxxxxxx"></script>` in your page. Furthermore, your algolia hits must contain a _geoloc object.

### usage

```
var search = instantsearch({
    appId: 'XXXXXXXXXXX',
    apiKey: 'YYYYYYYYYY',
    indexName: 'youIndexName'
});

search.addWidget(
  instantsearch.widgets.mapWidget({
    container: '#map'
  })
);
```

## instantsearch-numeric-input.js

### Introduction
An Algolia numeric input widget. An input on which you can create any numeric filter (operators allowed: <, <=, =, >=, >)

### usage

```
var search = instantsearch({
    appId: 'XXXXXXXXXXX',
    apiKey: 'YYYYYYYYYY',
    indexName: 'youIndexName'
});

search.addWidget(
  instantsearch.widgets.numericInputWidget({
    container: '#price',
    attributeName: 'price',
    operator: '<='
  })
);
```
You can also create array of numeric inputs for the same attribute (ie. min & max limits):

```
search.addWidget(
  instantsearch.widgets.numericInputWidget(
    [
      {
        container: '#surfaceMin',
        attributeName: 'surfaceTotale',
        operator: '>='
      },
      {
        container: '#surfaceMax',
        attributeName: 'surfaceTotale',
        operator: '<='
      }
    ]
  )
);
```

