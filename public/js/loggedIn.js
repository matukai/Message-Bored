angular.module('myApp')
.value('LoggedInVaue', function () {
  if(!localStorage.user_id){
    return false;
  }else{
    return true;
  }
})