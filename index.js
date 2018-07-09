var recipes ={
  prop: 1,
}

function updateObjectWithKeyAndValue(object, key, value){
  return Object.assign({}, recipes,{prop2:2})
}


function destructivelyUpdateObjectWithKeyAndValue(recipes, prop2,2){
  recipes[prop2]=2

  var recipes={prop:1}

  return recipes
}

function destructivelyDeleteFromObjectByKey(){

}
