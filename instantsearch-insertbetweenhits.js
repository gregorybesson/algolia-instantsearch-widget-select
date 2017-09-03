search.addWidget({
  render: function(data) {
  	var $hits = [];
    data.results.hits.forEach(function(hit, index, array) {
      $hits.push($('<div class="hit">' + hit.name + '</div>'));
      if ((index + 1) % 4 === 0) {
        $hits.push($('<div class="hit inserted">This was inserted manually</div>'));
      }
    });
    $('#myHits').html($hits);
  }
});
