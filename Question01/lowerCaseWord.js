function lowerCaseWorlds(mixedarray){
    return new Promise((resolve , reject)=> {
     if (Array.isArray(mixedarray)){
        const filteredArray = mixedarray.filter(item => typeof item === 'string');

        const lowerCaseArray = filteredArray.map(item => item.toLowerCase());
        resolve (lowerCaseArray);


     }else{
        reject('Input is not an array');  
     }
    });
}

//Input
const mixedArray = ['PIZZA', 10, true, 25, false, 'Wings'];

//priNT
lowerCaseWorlds(mixedArray)
.then(result=> console.log(result))
.catch(error =>  console.error(error));
