//--------------------------------------TUGAS WEEKEND------------------------------------------
//Function ABbCcc
const ABbCcc = (str) => { 
    var a = ''
    for(let i = 0 ; i < str.length ; i++){
        for(let j = i ; j <= i ; j++){
            a += str[i].toUpperCase()
        }
        for(let k = 1 ; k <= i ; k++){
            a += str[i]
        }
        if(i < str.length-1){
            a += '-'
        }
    }
    return a
}
console.log(ABbCcc('fgji'))
//------------------------------------------------------------------------------------------------
//Function Duplikat Filter
const duplikatFilter = (arr,fn) => {
   var newArr = []
   for(let i = 0 ; i < arr.length ; i++){
       if(fn(arr[i])){
        newArr.push(arr[i])
       }
   }
   return newArr
}
var arr = [4,3,2,1,5]
console.log(duplikatFilter(arr , (val) => {return val != 2}))
//------------------------------------------------------------------------------------------------
//Function Duplikat Sort
const duplikatSort = (arr,fn) => {
    for(let i = 0 ; i < arr.length ; i++){
        for(let j = i+1 ; j < arr.length ; j++){
            if(fn(arr[i],arr[j])){
                if(arr[i]-arr[j]){ // kalo c-b
                    if(arr[i] > arr[j]){
                    var temp = arr[i]
                    arr[i] = arr[j]
                    arr[j] = temp
                    }
                } else {
                    if(arr[j] > arr[i]){ // kalo b-c *gamau masuk ke elseeee
                        var temp = arr[j]
                        arr[j] = arr[i]
                        arr[i] = temp
                        
                    }
                }
                
            }
            
        }
    }
    
return arr           
}

//if(fn(arr[i],arr[j] < 0))--> kalo c-b  atau if(fn(arr[i],arr[j] > 0)--> kalo b-c)

var a = [1,4,5,2,34,40,4,5,1,3,11]
console.log(duplikatSort(a , (c,b) => {return c-b}))
//------------------------------------------------------------------------------------------------


