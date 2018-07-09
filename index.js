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



function deleteFromObjectByKey(){
  var obj={prop:1}
  var newObj= Object.assign({},obj)
  delete newObj.prop
}
