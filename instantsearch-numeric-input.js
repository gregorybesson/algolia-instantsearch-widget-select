instantsearch.widgets.numericInputWidget = function numericInputWidget(options) {
  var container = options.container;
  var attributeName = options.attributeName;
  var operator = options.operator;

  container = document.querySelector(container);

  return {
    // Method called at startup, to configure the Algolia settings
    // getConfiguration: function getConfiguration() {
    //   return {
    //     numericRefinements: {
    //       [attributeName]: {
    //         [operator]: [value]
    //       }
    //     }
    //   };
    // },

    // Called on the first instantsearch search
    init: function init(opts) {
      var helper = opts.helper;

      container.addEventListener('input', function () {
        var value = container.value;
        if (value !== undefined) {
          console.log('max price has changed', value);
          helper
            .removeNumericRefinement(attributeName)
            .addNumericRefinement(attributeName, operator, value)
            .search();
        }
      });
    },

    // Called whenever we receive new results from Algolia
    render: function render() {
    }
  };
};
