const myForm = document.getElementById("inputForm")
const inpFile = document.getElementById("inpFile")

myForm.addEventListener("submit", e =>{
  e.preventDefault();

  const endpoint = "upload.php";
  const formData = new FormData;

  console.log("hi");

  formData.append("inpFile", inpFile.files[0]);

  fetch(endpoint, {
    method: "post",
    body: formData

  }).catch(console.error);


});

