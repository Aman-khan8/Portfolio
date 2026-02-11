import React from "react";

function ContactBannner(props) {

return <>
               
<a
  href="https://mail.google.com/mail/?view=cm&fs=1&to=khan.aman2411@gmail.com&su=Portfolio%20Contact&body=Hello%20Aman,"
  className="bg-blue-600 text-white  px-6 py-3 rounded-xl shadow-lg hover:bg-blue-700 transition duration-300 flex"
  target="_blank"
  rel="noopener noreferrer"
>
  {props.title} {props.icon}
</a>

 

</>

}



export default ContactBannner;

