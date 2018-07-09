function Objects(){
  var recipes={
    object
  }
}

function updateObjectWithKeyAndValue(object, key, value){
  var obj={prop:1}
  return Object.assign({}, obj,{prop2:2})
}


function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  var obj={prop:1}

  obj["prop2"]='2'

  return obj
}



function destructivelyDeleteFromObjectByKey(){
  var newRecipes
}
