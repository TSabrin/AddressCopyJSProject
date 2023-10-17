//for holding number
var presentholding=document.getElementById('presentHolding');
var parmanentholding=document.getElementById('parmanentHolding');
//for Road No
var presentRoadNo=document.getElementById('presentRoadNo');
var parmanentRoadNo=document.getElementById('permanentRoadNo');
//for Village
var presentVillage=document.getElementById('presentVillage');
var parmanentVillage=document.getElementById('permanentVillage');
//for post office
var presentPostOffice=document.getElementById('presentPostOffc');
var parmanentPostOffice=document.getElementById('parmanentPostOffc');
//for post Code
var presentPostCode=document.getElementById('presentPostCode');
var parmanentPostCode=document.getElementById('parmanentPostCode');
//for Upazzila/Thana
var PresentUpazzila_thana=document.getElementById('presentUpazilla_Thana');
var parmanentUpazzila_thana=document.getElementById('ParmanentUpazzila_Thana');
//for post District
var presentDistrict=document.getElementById('presentDistrict');
var parmanentDistrict=document.getElementById('parmanentDistrict');
//for post Country
var presentCountry=document.getElementById('presentCountry');
var parmanentCountry=document.getElementById('parmanentCountry');

//for selecting checkbox
var checkitem= document.getElementById('flexCheckDefault');

checkitem.addEventListener('change', checkbox=()=>{
    if(checkitem.checked){
    parmanentholding.value=presentholding.value;
    parmanentRoadNo.value=presentRoadNo.value;
    parmanentVillage.value=presentVillage.value;
    parmanentPostOffice.value=presentPostOffice.value;
    parmanentPostCode.value=presentPostCode.value;
    parmanentUpazzila_thana.value=PresentUpazzila_thana.value;
    parmanentDistrict.value=presentDistrict.value;
    parmanentCountry.value=presentCountry.value;

    //for making disable after checked
    parmanentholding.disabled=true;
    parmanentRoadNo.disabled=true;
    parmanentVillage.disabled=true;
    parmanentPostOffice.disabled=true;
    parmanentPostCode.disabled=true;
    parmanentUpazzila_thana.disabled=true;
    parmanentDistrict.disabled=true;
    parmanentCountry.disabled=true;

    }
    else{

    parmanentholding.value="";
    parmanentRoadNo.value="";
    parmanentVillage.value="";
    parmanentPostOffice.value="";
    parmanentPostCode.value="";
    parmanentUpazzila_thana.value="";
    parmanentDistrict.value="";
    parmanentCountry.value="";


    parmanentholding.disabled=false;
    parmanentRoadNo.disabled=false;
    parmanentVillage.disabled=false;
    parmanentPostOffice.disabled=false;
    parmanentPostCode.disabled=false;
    parmanentUpazzila_thana.disabled=false;
    parmanentDistrict.disabled=false;
    parmanentCountry.disabled=false;

    }
});




