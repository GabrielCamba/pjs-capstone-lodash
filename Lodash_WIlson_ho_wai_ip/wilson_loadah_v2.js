const _ = {

  //clamp
            clamp(number, lower, upper){
                const lowerClampedValue = Math.max(number, lower);
                const clampedValue = Math.min(lowerClampedValue, upper);
                return clampedValue;
                },

  //inRange
           inRange(number, start, end){
             if(end=== undefined){
                  end = start;
                  start = 0;
                  };
             if(start > end){
                  const temp = end;
                    end = start;
                    start = temp;
                      };

             const isInRange = (start <= number && number <= end);
             return isInRange;
            },

	//words
           words(string){
             const words = string.split(' ');
             return words;
              },

  //.pad()

           pad(string, length){
           		if(length <= string.length){
              		return string
             		};
             	let startPaddingLength = Math.floor((length-string.length)/2);
          		let endPaddingLength = length-string.length-startPaddingLength;
             	let paddedString = (' '.repeat(startPaddingLength) + string +
                  							 ' '.repeat(endPaddingLength));

             	return paddedString;
              },

 //has
           has(object, key){
             const hasValue = object[key] !== undefined;
             return hasValue;

              },

//invert
          invert(object) {
   						let invertedObject = {};
    					for (let key in object) {
      				let originalValue = object[key];
      				invertedObject[originalValue] = key;
   						};
    					return invertedObject;
  						},

//findkey

           findKey(object, predicate){
             for(let key in object){
                const value = object.key;
                  const predicateReturnValue = predicate(value);
                    if( predicateReturnValue == true){
                        return key;
                        };
                        return undefined;
                        }
                      },


//drop
          drop(array, number){
            if(number == undefined){
                  number = 1;
                  };
           	      const droppedArray = array.slice(number);
                  return droppedArray;
                },


//dropWhile

				  dropWhile(array,predicate){
              const annoy = (element, index)=>{
                  return !predicate(element, index, array);
                  };
                  let dropNumber = array.findIndex(annoy);
                  let droppedArray = this.drop(array, dropNumber);
                  return droppedArray;
                },


//chunk

				chunk(array, size){
              if(size == undefined){
                  size = 1;
                  };
                  const arrayChunks = [];
                  for(x=0; x<array.length; x+=size){
                      let arrayChunk = array.slice(x,x+size);
                      arrayChunks.push(arrayChunk);};

                      return arrayChunks;},


 }

// Do not write or modify code below this line.
module.exports = _;
