function calculateAge() {
  const birthdate = document.getElementById("birthdate").value;
  if (!birthdate) {
    alert("3afak dkhl tarik!");
    return;
  }

  const dob = new Date(birthdate);
  const diff = Date.now() - dob.getTime();

  const ageDate = new Date(diff);
  const age = Math.abs(ageDate.getUTCFullYear() - 1970);

  document.getElementById("result").textContent = 
    `3omrek howa: ${age} ans 🎉`;
}
