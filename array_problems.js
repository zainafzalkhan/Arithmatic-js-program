 // Create an empty array in js
        // first of all we need to know what it is.
        // Array is a collection of variables that can be from different data types.

        let arr=[];
        const arr1=new Array();
        const mixArray=[1,3.4,true,"hi",{name:"Raj"},['music','singing']];

        // get length
        let arrLength=mixArray.length;
        let firstElem=mixArray[0];
        let lastElem=mixArray[arrLength-1];

        // read and return
        let lastByPop=mixArray.pop();

        // add at last position
        mixArray.push('new Added');

        // add at first 

        mixArray.unshift('added at first')  // complexcity is complext , bcz every element will shift from thier position

        // iterate
        for(let i=0;i<mixArray.length;i++){
            console.log(mixArray[i])
        }

        mixArray.forEach(item=>console.log(item));

        // find elem and find  index


        // delete , add at specific index and dlt % add
        // Splice will be change the same array
        let startIndex=2;
        let dltCount=1;
        let dataToInsert=4343
        // dlt count will be 0 if you don't want to dlt anything and inserting values,
        // if dlt count is>0 then it will dlt then add given values to it
        arr.splice(startIndex,dltCount,dataToInsert)

        // Slice : use to get subarray, will not be affacting the original array,it will return the array value.
        let start=3;
        let end=5;
        let subInfo=mixArray.slice(start,end);


        // Deep vs Shallow copy 
        // Array is non-primitve data type :means it need the blocks of memory
        // like if you write some variant it will need only single memo block,so that you can directly access it,
        // but when you create array, it creates colleciton and store collection ref in a single block memo..

        let originalArr=[4342,543,32];
        let copyArray=originalArr;

        // now if will make changes in any of them will it affact to other 

        // let's check it

        copyArray.push('new added string');
        console.log(originalArr,copyArray);

        // yes making changes in copied array, will be reflect on the original one also
        // now do the reverse

        originalArr.push('added via original');
        console.log(originalArr,copyArray);
        // it's also doing the same

        // why this is happening , bcz both of theme are pointing to the same memory block.

        // to avoid it we can use deep copy
        let o1=[35432,235,3];
        let c1=[...o1];
        let c2=Array.from(c1);
        let c3=o1.concat(0);
        let c4=o1.slice(0);

        o1.push('new String')
        console.log(o1,c1,c2,c3,c4);

        // merge two array
        let ar1=['hellow'];
        let ar2=['Word']
        let mergeData=[...ar1,...ar2];
        // what dot did here, it spread the values of array, or we can say it romove the wrapper of array ,and provide numbers or values in the naked form.
        console.log(mergeData);

        let arr3=['How ','are ', 'guys ','are doing'];
        // concat does not change the original, it returns the concated array, that we have need to store someware
        let merge1=mergeData.concat(arr3);
        console.log(mergeData,merge1);

        // check two arrays are the same or not

        const isEquel=(a1,a2)=>{
            // first easy steps,is checking length;
            if(a1.length!==a2.length) return false;
            for(let i=0;i<a1.length;i++){
                if(a1[i]!==a2[i]){
                    return false
                }
            };

            return true;
        };

        console.log(isEquel([4,3,6],[4,3]))
        console.log(isEquel([5,2,8,5],[5,2,8,5]))

