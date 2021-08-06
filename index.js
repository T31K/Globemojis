$('.ge').each(function(i, obj) {
  if (obj.classList.length === 2) {

    let last = obj.classList[1].split('-').pop().trim()
    if (!Number.isNaN(Number(last))) {
      let number = last + ""
      var check = obj.classList[1].split('-').slice(0, -1).join('-')
      var link = json[check] ? check : 'bad-link'
      $(this).replaceWith($(`<img class="ge ${link}-${number}" src="${json[link]}">`))
      $(`.ge.${link}-${number}`).css('width', `${number}px`)
    } else {
      var check = obj.classList[1]
      var link = json[check] ? check : 'bad-link'
      $(this).replaceWith($(`<img class="ge ${link}" src="${json[link]}">`))
    }
  }
});

