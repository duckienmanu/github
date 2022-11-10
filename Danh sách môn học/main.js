function validate(){
  var arr = document.getElementsByTagName('input');
  var check1 = arr[0].checked;
  var check2= arr[1].checked;
  var check3 = arr[2].checked;
  var checkbox="";
  for(var i=0 ;i<=2;i++){
    if(arr[i].checked){
        checkbox = checkbox + arr[i].value+ "\n";
    }
  }
 if(check1||check2||check3){

 }else{
    alert("chọn 1 môn học");
    return;
 }
 alert(checkbox);
}