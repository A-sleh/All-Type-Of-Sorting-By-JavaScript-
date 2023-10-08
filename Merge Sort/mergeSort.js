// This Funtion To Sort Any Array By Merge Sort 
let newArray ;

function MergeSort(newArray,startPoint,mid,endPoint) {
    let index = 0 ,
        midll = mid - 1 ;// This Be End Point in order To Startpoint
        numberOfElements = endPoint - startPoint  + 1 ,
        dis = startPoint ;
        while( startPoint <= midll && mid <= endPoint ) {
            if( sortArray[startPoint] < sortArray[mid] ) {
                newArray[index++] = sortArray[startPoint++ ] ;
            }else {
                newArray[index++] = sortArray[mid++] ;
            }
        }
        while(startPoint <= midll ) {
            newArray[index++] = sortArray[startPoint++ ] ;
        }
        while( mid <= endPoint ) {
            newArray[index++] = sortArray[mid++] ;
        }
        for(let i = 0 ; i < numberOfElements ; ++ i ) {
            sortArray[dis + i ] = newArray[i];
        }
}

function reMergeSort(newArray,startPoint,endPoint) {
    if ( startPoint == endPoint ) {
        return false;
    } else {
        let mid = parseInt((startPoint + endPoint ) / 2 );
        reMergeSort(newArray,startPoint,mid);
        reMergeSort(newArray,mid+1,endPoint);
        MergeSort(newArray,startPoint,mid+1,endPoint) ;
    }
}// Complexity O(N * log(N))

// Test Case 

let sortArray = [ 8 , 9 , 10 , 3 , 2 , 1 , 5 , 4 ] ;

console.log(`The Array Befor Sorted :`) ;
console.log(sortArray)

console.log(`The Array After Sorted :`) ;
newArray = [...Array(sortArray.length)]
reMergeSort(newArray , 0 , sortArray.length - 1) ;
console.log(sortArray);

