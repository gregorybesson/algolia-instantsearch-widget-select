instantsearch.widgets.selectWidget = function selectWidget(options) {
  var container = options.container;
  var attributeName = options.attributeName;
  var limit = options.limit || 10;
  var title = options.title || attributeName;

  container = document.querySelector(container);
  var selectElement = null;
  var currentlySelectedValue = null;

  return {
    // Method called at startup, to configure the Algolia settings
    getConfiguration: function getConfiguration() {
      // We use a hierarchicalFacet and not a classical facet because we want to keep
      // the list of all possible values displayed at all times. With a classical facet
      // we would only have the list of possible values for the current filters.
      return {
        hierarchicalFacets: [{
          name: attributeName,
          attributes: [attributeName]
        }]
      };
    },

    // Called on the first instantsearch search
    init: function init(options) {
      var helper = options.helper;

      container.innerHTML = '<label for="'+attributeName+'-select">'+title+'</label><select id="'+attributeName+'-select"></select>';
      selectElement = container.querySelector('select');

      selectElement.addEventListener('change', function() {
        var selectedValue = selectElement.options[selectElement.selectedIndex].value;

        if (selectedValue === '__EMPTY__') {
          selectedValue = currentlySelectedValue;
        }
        helper.toggleRefinement(attributeName, selectedValue);
        helper.search();

        currentlySelectedValue = selectedValue;
      });
    },

    // Called whenever we receive new results from Algolia
    render: function render(options) {
      var results = options.results;
      var sortBy = ['name:asc'];
      var facetValues = results.getFacetValues(attributeName, {sortBy: sortBy}).data;
      var innerOptions = ['<option value="__EMPTY__">ALL</option>'];

      if(facetValues != null){
        facetValues = facetValues.slice(0, limit);
        facetValues.forEach(function(facetValue) {
          var selected = facetValue.isRefined ? 'selected="selected"' : '';
          innerOptions.push(
            '<option value="' + facetValue.name + '" ' + selected + '>' + facetValue.name + '</option>'
          );
        });
        selectElement.innerHTML = innerOptions.join('\n');
      }
    }
  }
};
