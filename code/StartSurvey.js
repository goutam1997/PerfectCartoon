var console = require('console')

module.exports.function = function startSurvey (name, like) {
  console.debug("Name: "+name);
  console.debug("Like: "+like)
  var ret={};
  ret['name']=name;
  ret['like']=like;
  return ret;
}
