document.write("92. to find the maximum difference between any two adjacent elements of a given array of integers"+"<br>");
function test92(arr){
    var r=0;
    for(let i=0;i<arr.length-1;i++){
         var x=Math.abs(arr[i]-arr[i+1]);
        r=Math.max(r,x);
    }
    return r;
}
document.write("The array :[1,2,10,4,5,5,6] , Ans :"+test92([1,2,10,4,5,5,6])+"<br><br>");