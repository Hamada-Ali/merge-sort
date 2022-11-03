// just merging

function merge(arr1, arr2) {
   let result = [],
        i = 0,
        j = 0;
        
    while(i < arr1.length && j < arr2.length) {
      if (arr1[i] < arr2[j]) {
        result.push(arr1[i]);
        i++;
      } else {
        result.push(arr2[j]);
        j++;
      }
    }
    while (i < arr1.length) {
        result.push(arr1[i]);
        i++;
      }
    while (j < arr2.length) {
      result.push(arr2[j]);
      j++;
    }
    return result;
}

// Dividing
function mergeSort(arr) {
  if(arr.length <= 1) {
    return arr;
  }
  let mid = Math.floor(arr.length / 2);
  let leftArr = mergeSort(arr.slice(0, mid));
  let rigthArr = mergeSort(arr.slice(mid));
  return merge(leftArr, rigthArr);
}

// comment added 

console.log(mergeSort([22,51,63,1,12,99, 0]))
