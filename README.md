# Title of the project
Student Login Form
# Description
-This is a simple and elegant HTML,Js/jQuery Login/SignUp Page,to demonstrate the data sending & request handling over JsonPowerDB-api for database management.  
-This project uses JsonPoweredDB for the backend usage of saving all users data in the Json-format.  
-Being the most efficient database, the time taken to POST & GET user-data from the database is almost null.  
-Unlike SQL and relational databases, this JsonPoweredDB feels user and developer friendly.
# Benefits of using JsonPowerDB
-Proprietary algorithm for High Performance CRUD operations. Multiple times faster than popular DBMS.  
-Serverless support for faster development - A UI developer can develop complete dynamic application.  
-DBMS with built in web / application server and embedded caching makes the performance lightning fast.  
-Server side Native NoSQL - best query performance.  
-In-built support to query on multiple JPDB databases.  
-Multi-mode DBMS - Document DB, Key-Value DB, RDBMS support.  
-Schema free - easy to develop and maintain.  
-Web-services API - Can be used with any programming language that has support for HTTP.  

# Syntax usage of insert,update,get and put requests.   
// PUT query 

    {  
      "token": "90932396|-31949271534325697|90955591",  
      "cmd": "PUT",  
      "dbName": "Student",  
      "rel": "Student-Relation",  
      "jsonStr": {  
      "id":"68",  
      "name":"Name",  
      "email":"kanigirisunilkumar",  
      "mobile number":9676######  
    }  
}  
   
// GET Query

    {
    "token": "2134770734|19056227XXXXX281054|2134XXXXXX",
    "cmd": "GET",
    "dbName": "Company",
    "rel": "Employee",
    "jsonStr":{
    "empName": "Oshin Pojta"
    }
//UPDATE Query

    {
    "token": "90937075|-31948812362179105|90938333",
    "cmd": "UPDATE",
    "dbName": "Employee-DB",
    "rel": "Employee",
    "jsonStr": {
    
       "3":{
        "full_name": "Gargee Mishra",
        "email_address":"gargee@gmail.com",
        "mobile_number": 7098162348
        
      },
       "6":{
        "full_name":"Kanishk Mishra",
        "email_address":"kanishk@gmail.com",
        "mobile_number": 9000876578
      },
       "5":{
        "full_name":"Sulbha Mishra",
        "email_address":"sulbha@gmail.com"
      }
      }
// REMOVE Query

    {
        "token": "90932396|-31949271534325697|90955591",
        "cmd": "REMOVE",
        "dbName": "Student",
        "rel": "Student-Relation",
        "jsonStr": {
         "record":"3"
    }
    }
