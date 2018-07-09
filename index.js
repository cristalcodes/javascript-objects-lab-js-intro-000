var recipes ={
  prop: 1,
}

function updateObjectWithKeyAndValue(object, key, value){
  return Object.assign({}, recipes,{prop2:2})
}


function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  var obj={prop:1}
  obj.prop2=2
  return object

}

function destructivelyDeleteFromObjectByKey(){

}
