# algolia-instantsearch-widgets
Some custom widgets to enhance Algolia UI

## algolia-instantsearch-select.js

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

## algolia-instantsearch-googlemaps.js

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
