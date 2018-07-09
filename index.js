var recipes={
  "prop":1
}

function updateObjectWithKeyAndValue(object, key, value){
  //var recipes={prop:1}
  return Object.assign({}, recipes,{prop2:2})
}


function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  recipes.prop2=2;
  return recipes
}



function destructivelyDeleteFromObjectByKey(){
  var newRecipes= Object.assign({},recipes)
  delete newRecipes.prop


}
