// declare your functions here...
$(run)

function run() {
  paragraphSelector()
  lastImageSelector()
  ninjaBabySelector()
  divSelector()
  firstListItem()
}

  function paragraphSelector(){
    return $('p')
  }

  function lastImageSelector(){
    return $('img:last')
  }

  function ninjaBabySelector(){
    return $('img#baby-ninja')
  }

  function divSelector(){
    return $('div.pics')
  }

  function firstListItem(){
    return $('ul li').first()
  }
