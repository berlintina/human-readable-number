module.exports = function toReadable (number) {
  // Try edit message

  var unit = (',one,two,three,four,five,six,seven,eight,nine,ten,eleven,twelve,thirteen,fourteen,fifteen,sixteen,seventeen,eighteen,nineteen').split(',');
  var digit= (',,twenty,thirty,forty,fifty,sixty,seventy,eighty,ninety').split(',');
  var readable_number;
  if(number == 0 && number== ""){
    return 'zero';
  }
  if(number%100 < 20){
       unit_word= unit[number%100];
     }
     else{
       unit_word=digit[(number%100-number%10)/10]+' '+ unit[number%10];
     }

  if(number<100){ 
    readable_number= unit_word;
  }
   else if(number<1000){
    readable_number= unit[(number-number%100)/100]+' hundred '+ unit_word;
  }
  
  return readable_number.trim();

}
