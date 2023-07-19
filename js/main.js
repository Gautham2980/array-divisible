var arr=[1,2,3,4,5,20,25,30,33,12];
document.write("the given number is"+arr);
document.write("<br>");
for(let i=0;i<arr.length;i++){
	
	if((arr[i]%3==0)&&(arr[i]%5==0)){
		document.write(arr[i]);
	}
}