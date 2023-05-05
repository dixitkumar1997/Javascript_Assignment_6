document.getElementById('heading').innerHTML= 'List Of States';
function StatesList(){
    let arr=['Andhra Pradesh','Arunachal Pradesh','Assam','Bihar','Chhattisgarh','Goa','Gujarat','Haryana','Himachal Pradesh','Jharkhand','Karnataka','Kerala','Madhya Pradesh','Maharashtra','Manipur','Meghalaya','Mizoram','Nagaland','Odisha','Punjab','Rajasthan','Sikkim','Tamil Nadu','Telangana','Tripura','Uttarakhand','Uttar Pradesh','West Bengal'];
    let x="";

    for(let i=0;i<arr.length;i++){
        x+= `<ul><li>${arr[i]}</ul></li>`
    }
    document.getElementById('States').innerHTML=x;

}
StatesList()