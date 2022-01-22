function show() {
    var n, dob, email, gender, bgroup, mobile, branch, hobby, address, jdate;
    n = frm.nm.value;
    dob = frm.dt.value;
    email = frm.eml.value;
    gender = frm.rbtn.value;
    bgroup = frm.bgrp.value;
    mobile = frm.mnum.value;
    branch = frm.brch.value;
    address = frm.add.value;
    jdate = frm.jdt.value;

    var array = []
    var ch1 = document.querySelectorAll('input[type=checkbox]:checked')

    for (var i = 0; i < ch1.length; i++) {
        array.push(ch1[i].value)
    }
    document.write("<table border='1'>");;
    document.write("<tr><th>Name : </th><td>" + n + "</td></tr>");
    document.write("<tr><th>Date Of Birth : </th><td>" + dob + "</td></tr>");
    document.write("<tr><th>Email : </th><td>" + email + "</td></tr>");
    document.write("<tr><th>Gender : </th><td>" + gender + "</td></tr>");
    document.write("<tr><th>Blood Group : </th><td>" + bgroup + "</td></tr>");
    document.write("<tr><th>Mobile Number : </th><td>" + mobile + "</td></tr>");
    document.write("<tr><th>Branch : </th><td>" + branch + "</td></tr>");
    document.write("<tr><th>Hobby : </th><td>");
    for (var i = 0; i < array.length; i++) {
        document.write(array[i] + " , ");
    }
    document.write("</td></tr>")
    document.write("<tr><th>Address : </th><td>" + address + "</td></tr>");
    document.write("<tr><th>Joining Date : </th><td>" + jdate + "</td></tr>");
    document.write("</table>");
}