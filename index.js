
var recipes {};
function updateObjectWithKeyAndValue(object, key, value){
return Object.assign({}, object, {[key]: value});
}

function updateObjectWithKeyAndValue(object,key,value){ 
object [key] = value;
return object
}

  describe('destructivelyUpdateObjectWithKeyAndValue(object, key, value)', function() {
    it('updates `object` with the given `key` and `value` (it is destructive) and returns the entire updated object', function() {
      var obj = { prop: 1 }

      expect(destructivelyUpdateObjectWithKeyAndValue(obj, 'prop2', 2)).toMatch({
        prop: 1,
        prop2: 2
      })

      expect(obj).toMatch({
        prop: 1,
        prop2: 2
      })
    })
  })

function destructivelyUpdateObjectWithKeyAndValue(object,key,value){
  object [key] = value
  return object 
}


function deleteFromObjectByKey(object, key) {
  var newObj = Object.assign({}, object);
  delete newObj[key];
  return newObj;
}


function destructivelyDeleteFromObjectByKey(object, key) {
  delete object[key];
  return object;
}
