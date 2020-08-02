var http = require('http')
var console = require('console')

module.exports.function = function search (keyword, category, author) {

  var url = "http://perfectcartoon.com/site/search"
  var options = {}

  if(typeof(keyword)!='undefined')
    options['keyword']=keyword

  if(typeof(category)!='undefined')
    options['category']=category

  if(typeof(author)!='undefined')
    options['author']=author

  try {
    var ret = http.getUrl(url, {query: options});
    return JSON.parse(ret);
  } catch(err){
    console.debug("ERR : "+err)
  }
  return {}
}
