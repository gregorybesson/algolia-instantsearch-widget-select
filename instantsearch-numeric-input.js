instantsearch.widgets.numericInputWidget = function numericInputWidget(options) {
  var container = options.container;
  var attributeName = options.attributeName;
  var operator = options.operator;

  container = document.querySelector(container);

  return {
    // Called on the first instantsearch search
    init: function init(opts) {
      console.log('init');
      var helper = opts.helper;

      if (helper.getNumericRefinement(attributeName, operator)) {
        console.log('result', helper.getNumericRefinement(attributeName, operator));
        container.value = helper.getNumericRefinement(attributeName, operator)[0];
      }

      container.addEventListener('input', function () {
        var value = container.value;

        helper.removeNumericRefinement(attributeName);
        if (value !== undefined && value !== '') {
          helper.addNumericRefinement(attributeName, operator, value);
        }
        helper.search();
      });
    }
  };
};
