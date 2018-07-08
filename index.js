var recipes ={
  eggs:'1'
}

function updateObjectWithKeyAndValue(object, key, value){
  return Object.assign({}, recipes, {flour:'2 cups'})
}
