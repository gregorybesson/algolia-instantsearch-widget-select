instantsearch.widgets.numericInputWidget = function numericInputWidget(options) {
  var optionsArray = options;

  if (!Array.isArray(options)) {
    optionsArray = [options];
  }

  return {
    // Called on the first instantsearch search
    init: function init(opts) {
      var helper = opts.helper;

      optionsArray.forEach(function (elt) {
        var container = elt.container;
        var attributeName = elt.attributeName;
        var operator = elt.operator;

        container = document.querySelector(container);
        if (helper.getNumericRefinement(attributeName, operator)) {
          container.value = helper.getNumericRefinement(attributeName, operator)[0];
        }

        container.addEventListener('input', function () {
          var value = container.value;

          helper.removeNumericRefinement(attributeName, operator);
          if (value !== undefined && value !== '') {
            helper.addNumericRefinement(attributeName, operator, value);
          }
          helper.search();
        });
      });
    }
  };
};
