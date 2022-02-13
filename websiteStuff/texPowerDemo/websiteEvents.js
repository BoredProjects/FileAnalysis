var button = document.getElementById("submitButton") 
console.log(document)

window.onload = button.onclick = function(){

  const myForm = document.getElementById("inputForm")
  const inpFile = document.getElementById("inpFile")

  myForm.addEventListener("submit", e =>{
    e.preventDefault();

    const endpoint = "upload.php";
    const formData = new FormData;

    formData.append("inpFile", inpFile.files[0]);

    fetch(endpoint, {
      method: "post",
      body: formData

    }).catch(console.error);


  });
}
