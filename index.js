var recipes={
  "prop":1
}

function updateObjectWithKeyAndValue(object, key, value){
  //var recipes={prop:1}
  return Object.assign({}, recipes,{prop2:2})
}


function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  recipes.prop2=2
  return destructivelyUpdateObjectWithKeyAndValue(recipes,'prop2',2)
}



function destructivelyDeleteFromObjectByKey(){
  var newRecipes
}
