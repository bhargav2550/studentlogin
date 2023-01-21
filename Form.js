var JsonPdb="http://api.login2explore.com:5577";
var JsonIRL="/api/irl";
var JsonIML="/api/iml";
var schooldbname="SCHOOL-DB";
var schoolrelname="STUDENT-TABLE";
var connToken="90932396|-31949271534325697|90955591";
function saveRecNo2LS(jsonObj){
    var lvdata = JSON.parse(jsonObj.data);
    localStorage.setItem('recno',lvdata.rec_no);
}
function getStudentRollAsJsonObj(){
    var sturoll=$("#sturoll").val();
    var jsonStr={
        Rollnumber: sturoll
    };
    return JSON.stringify(jsonStr);
}
function savedata(){
    alert("Data saved successfully!!");
}
function fillData(jsonObj){
    saveRecNo2LS(jsonObj);
    var  record=JSON.parse(jsonObj.data).record;
    $("#sturoll").val(record.Rollnumber);
    $("#stuname").val(record.Name);
    $("#stuclass").val(record.Studentclass);
    $("#stubirth").val(record.Birth_date);
    $("#stuaddress").val(record.Address);
    $("#stuenrollment").val(record.Enrollment_date);
}
function resetform(){
    $('#sturoll').val('');
    $('#stuname').val('');
    $('#stuclass').val('');
    $('#stubirth').val('');
    $('#stuaddress').val('');
    $('#stuenrollment').val('');
    $('#sturoll').prop("disabled",false);
    $('#save').prop("disabled",true);
    $('#change').prop('disabled',true);
    $('#reset').prop('disabled',true);
    $('#sturoll').focus();
}
function validateData(){
    var Rollnumber,Name,Studentclass,Birth_date,Address,Enrollment_date;
    Rollnumber=$('sturoll').val();
    Name=$('stuname').val();
    Studentclass=$('stuclass').val();
    Birth_date=$('stubirth').val();
    Address=$('stuaddress').val();
    Enrollment_date=$('stuenrollment').val();
            
    if (Rollnumber === ""){
        alert('student roll number is missing');
        $("#sturoll").focus();
        return "";
    }
    if (Name === "") {
        alert("Student Name is Missing!!");
        $("#stuname").focus();
        return "";
    }
    if (Studentclass === "") {
        alert("Student class is missing!!");
        $("#stuclass").focus();
        return "";
    }
    if (Birth_date === "") {
        alert("Birth Date is missing!!");
        $("#stubirth").focus();
        return "";
    }
    if (Address === ""){
        alert("Address is Missing!!");
        $("#stuaddress").focus();
        return "";
    }
    if (Enrollment_date === ""){
        alert("Enrollment Date is Missing!!");
        $("#stuenrollment").focus();
        return "";
    }
            
    var jsonStrObj={
        Rollnumber:Rollnumber,
        Name: Name,
        Studentclass: Studentclass,
        Birth_date: Birth_date,
        Address: Address,
        Enrollment_date: Enrollment_date
    };
    return JSON.stringify(jsonStrObj);
}
function saveData(){
    var jsonStrObj=validateData();
    if (jsonStrObj === ""){
        return "";
    }
    var putRequest=createPUTRequest(connToken,jsonStrObj,schooldbname,schoolrelname);
    jQuery.ajaxSetup({async: false});
    var resJsonObj=executeCommandAtGivenBaseUrl(putRequest,JsonPdb,JsonIML);
    alert("Data Saved Successfully");
    jQuery.ajaxSetup({async: true});
    console.log(resJsonObj);
    resetform();
    $("#sturoll").focus();
}
function changeData(){
    $("#change").prop("disabled",true);
    jsonChg=validateData();
    var updateRequest=createUPDATERecordRequest(connToken,jsonChg,schooldbname,schoolrelname,localStorage.getItem('recno'));
    jQuery.ajaxSetup({async: false});
    var resJsonObj=executeCommandAtGivenBaseUrl(updateRequest,JsonPdb,JsonIML);
    jQuery.ajaxSetup({async: true});
    console.log(resJsonObj);
    resetform();
    $('#sturoll').focus();
}
function getstudent(){
    var sturolljsonobj=getStudentRollAsJsonObj();
    var getRequest=createGET_BY_KEYRequest(connToken,schooldbname,schoolrelname,sturolljsonobj);
    jQuery.ajaxSetup({async:false});
    var resjsonobj=executeCommandAtGivenBaseUrl(getRequest,JsonPdb,JsonIRL);
    jQuery.ajaxSetup({async: true});
    if (resjsonobj.status ===400){
        $("#save").prop("disabled",false);
        $("#reset").prop("disabled",false);
        $("#stuname").focus();
    }
    else if(resjsonobj === 200){
        $("#sturoll").prop("disabled",true);
        fillData(resjsonobj);
        $("#change").prop("disabled",false);
        $("#reset").prop("disabled",false);
        $("#stuname").focus();
    }
}
