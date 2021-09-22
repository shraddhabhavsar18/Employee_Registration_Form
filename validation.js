function validate() {
  //Employee Name
  var name = document.Registrationform.emp_name.value;
  var no = document.Registrationform.emp_no.value;
  var patt = /[^a-z]/i;
  var fname = patt.test(name);
  if (name == "") {
    alert('Please Enter Employee Name');

    return false;
  }
  if (name == null || fname == true) {
    alert("Enter only Alphabet for Employee Name");
    return false;
  }

  //Employee Number
  var no = document.Registrationform.emp_no.value;
  if (no == "") {
    alert('Please Enter Employee Number');

    return false;
  }
  if (isNaN(no)) {
    alert("Enter only numbers for Employee Number");
    return false;
  }

  //Email_ID
  var em = document.Registrationform.email.value;
  var atpos = em.indexOf("@");
  var dotpos = em.lastIndexOf(".");
  if (em == "") {
    alert("Enter Email ID");
    return false;
  }
  if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= em.length) {
    alert("Invalid email id");
    return false;
  }

  //Gender
  var m = document.getElementById('male');
  var f = document.getElementById('female');
  if ((m.checked == false) && (f.checked == false)) {
    alert("Please choose Gender");
    document.getElementById("gen").style.border = "2px solid red";
    return false;
  } else {
    document.getElementById("gen").style.border = "";
  }

  //Location
  var l = document.getElementById("location")
  if (l.value == null || l.value == "") {
    alert("Please select a location");
    return false;
  }

  //Contact Number
  var c = document.Registrationform.contact.value;
  if (c == "") {
    alert("Enter your Contact Number");
    return false;
  }
  if (isNaN(c)) {
    alert("Enter only numbers");
    return false;
  }

  if (c.length > 10) {
    alert("Enter 10 digits");
    return false;
  }
  if(c.length < 10){
    alert("Enter 10 digits");
    return false;
  }



  alert('Successfully submitted.');
  addEmployee();
}
function addEmployee(){
  var name = document.Registrationform.emp_name.value;
  var no = document.Registrationform.emp_no.value;
  var email = document.Registrationform.email.value;
  var gender=document.Registrationform.gender.value;
  var address = document.Registrationform.address.value;
  var location = document.Registrationform.location.value;
  var contact = document.Registrationform.contact.value;
  var designation = document.Registrationform.designation.value;

  var tr=document.createElement('tr');

  var td1=tr.appendChild(document.createElement('td'));
  var td2=tr.appendChild(document.createElement('td'));
  var td3=tr.appendChild(document.createElement('td'));
  var td4=tr.appendChild(document.createElement('td'));
  var td5=tr.appendChild(document.createElement('td'));
  var td6=tr.appendChild(document.createElement('td'));
  var td7=tr.appendChild(document.createElement('td'));
  var td8=tr.appendChild(document.createElement('td'));

  td1.innerHTML = name;
  td2.innerHTML = no;
  td3.innerHTML = email;
  td4.innerHTML = gender;
  td5.innerHTML = address;
  td6.innerHTML = location;
  td7.innerHTML = contact;
  td8.innerHTML = designation;

  document.getElementById("tb1").appendChild(tr);
}
