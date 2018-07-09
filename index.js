var recipes ={
  prop: 1
}

function updateObjectWithKeyAndValue(object, key, value){
  return Object.assign({}, recipes,{prop2:2})
}


function destructivelyUpdateObjectWithKeyAndValue(object,key,value){
  obj[key]=value
  return obj
  
}

function destructivelyDeleteFromObjectByKey(){

}
