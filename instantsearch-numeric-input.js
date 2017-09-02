instantsearch.widgets.numericInputWidget = function numericInputWidget(options) {
  var container = options.container;
  var attributeName = options.attributeName;
  var operator = options.operator;

  container = document.querySelector(container);

  return {
    // Called on the first instantsearch search
    init: function init(opts) {
      var helper = opts.helper;

      container.addEventListener('input', function () {
        var value = container.value;
        if (value !== undefined) {
          helper
            .removeNumericRefinement(attributeName)
            .addNumericRefinement(attributeName, operator, value)
            .search();
        }
      });
    }
  };
};
