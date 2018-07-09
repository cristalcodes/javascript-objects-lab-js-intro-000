var recipes ={
  prop: 1,
}

function updateObjectWithKeyAndValue(object, key, value){
  var obj={prop:1}
  return Object.assign({}, obj,{prop2:2})
}


function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  destructivelyUpdateObjectWithKeyAndValue(obj, 'prop2', '2')
}



function destructivelyDeleteFromObjectByKey(){
  var newRecipes
}
