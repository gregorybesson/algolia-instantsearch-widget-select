# algolia-instantsearch-widget-select
An Algolia select widget to represent an attribute as a dropdown list


# usage

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
