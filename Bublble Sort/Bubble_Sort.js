
// Funtion To Sort Any Array By Using Bubble Sort
function BubbleSort(array) {
    let Array = array ;
    for(let i = 0 ; i < Array.length -  1 ; ++ i ) {
        for(let j = i + 1 ; j < Array.length ; ++ j ) {
            if( Array[i] > Array[j] ) {
            // This To Swap The Number 
                Array[i] ^= Array[j] ;
                Array[j] ^= Array[i] ;
                Array[i] ^= Array[j];
            }
        }
    }
    return Array ;
} // Complexity O(N^2);

// Test Case 

let Array = [ 8 , 3 , 2 , 1 , 5 , 4 ] ;

console.log(`The Array Befor Sorted :`) ;
console.log(Array) ;

console.log(`The Array After Sorted :`) ;
let SortedArray = BubbleSort(Array) ;
console.log(SortedArray);