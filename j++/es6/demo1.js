var IDValidator = require('id-validator');
var GB2260 = require('id-validator/src/GB2260');

var Validator = new IDValidator( GB2260 );
var id = "210921198911062335";
//田慧敏 6541271990****154X

console.info(Validator.isValid( id ));


var dateArr = getAlldate("1990-01-01","1990-12-31");
for (let index = 0; index < dateArr.length; index++) {
    const element = dateArr[index];
    var cardID = "6541271990"+element+"154X";
    //console.info(cardID);
    if(Validator.isValid(cardID)){
        console.info(cardID);
    }
    
}


function getDate(datestr){
    var temp = datestr.split("-");
    var date = new Date(temp[0],temp[1],temp[2]);
    return date;
}
  
function getAlldate(start,end){
  //var start = "2016-01-10";
  //var end = "2016-10-18";
  var startTime = getDate(start);
  var endTime = getDate(end);
  var i = 0;
  var arr = [];
  while((endTime.getTime()-startTime.getTime())>=0){
    var year = startTime.getFullYear();
    var month = startTime.getMonth().toString().length==1?"0"+startTime.getMonth().toString():startTime.getMonth();
    var day = startTime.getDate().toString().length==1?"0"+startTime.getDate():startTime.getDate();
    //console.info(year+"-"+month+"-"+day);
    arr[i]=month+""+day;
    i++
    startTime.setDate(startTime.getDate()+1);
    
  }
  return arr;
}
