var mainView="hoursAndMinutes";

function  getTimeWithHoursAndMinutes(){
    var hours= new Date().getHours();
    var minutes = new Date().getMinutes();
    var seconds = new Date().getSeconds();
    var date= new Date().getDate();
    var NumberOfMounth = new Date().getMonth()+1;
    if( minutes < 10 ){
    minutes = "0"+minutes;}
    if(  seconds < 10 ){
    seconds= "0"+ seconds;}
    return hours+":"+minutes;
    }
 
function  getTimeWithHoursAndMinutesAndSeconds(){
    var hours= new Date().getHours();
    var minutes = new Date().getMinutes();
    var seconds = new Date().getSeconds();
    var date= new Date().getDate();
    var NumberOfMounth = new Date().getMonth()+1;
    if( minutes < 10 ){
    minutes = "0"+minutes;}
    if(  seconds < 10 ){
    seconds= "0"+ seconds;}
    return  hours+":"+minutes+":"+seconds
    }

function getDate(){
    var date= new Date().getDate();
    var NumberOfMounth = new Date().getMonth()+1;
    var year = new Date().getFullYear();
    var NumberOfMounth = new Date().getMonth()+1;
    var year = new Date().getFullYear();    
    if (date<10){
    date="0"+date;}
    if ( NumberOfMounth<10){
    NumberOfMounth="0"+ NumberOfMounth;}    
    return date+"."+NumberOfMounth +"."+year;
 }
 
function leftClick(){
    if(mainView == "hoursAndMinutes"){
    mainView="hoursAndMinutesAndSeconds";}

    else if(mainView == "hoursAndMinutesAndSeconds"){
    mainView = "hoursAndMinutes";} 

    else if(mainView == "date"){
    mainView = "hoursAndMinutes";}   
  }

function rightClick(){
    if(mainView== "hoursAndMinutes"){
    mainView="date";}

    else if(mainView== "hoursAndMinutesAndSeconds"){
    mainView= "date";}  
    }

function view(){
    if(mainView== "hoursAndMinutes"){
    cont.innerHTML=getTimeWithHoursAndMinutes();}
  
    else if(mainView== "hoursAndMinutesAndSeconds"){
    cont.innerHTML=getTimeWithHoursAndMinutesAndSeconds();} 
  
    else if(mainView== "date"){
    cont.innerHTML=getDate();} 
  }

cont.addEventListener('click', leftClick);
cont.addEventListener('contextmenu',rightClick);
cont.addEventListener('contextmenu', event => event.preventDefault());

setInterval(view, 1000);