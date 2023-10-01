// This Funtion Sort Any Array Using Insertion Sort 
function InsertionSort(Array) {
    let array = Array , 
        size = array.length ; 
    for( let i = 1 ; i < size ; ++ i ) {
        let copy = array[i] ,
            index = i ;
        while( index > 0 && array[ index - 1 ] >= copy ) {
            array[index] = array[index - 1 ] ;
            index -- ;
        }
        array[index] = copy ;
    }
    return array ;
}// Complexity O(N^2)

// Test Case 

let array = [ 10 , 8 , 9 , 5 , 2 , 3 , 1 , 6 ] ;

console.log("The Array Before Sort :") ;
console.log(array) ;

let sortedArray = InsertionSort(array) ;

console.log("The Array After Sort :") ;
console.log(sortedArray) ;