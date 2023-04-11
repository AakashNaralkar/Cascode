function IsEmpty()
{
    const phoneInput = document.querySelector('#number');
    
    const ageInput = document.querySelector('#age');
    
    const nameInput = document.querySelector('#name');
    
    if (!nameInput.value) {
      alert('Name should not be empty');
      return false;
    
    }
    if (!/^[a-zA-Z]+$/.test(nameInput.value)) {
      alert('Name should contain characters only');
      return false;
    }
    if (!ageInput.value) {
      alert('Age should not be empty');
      return false;
    }
    if (parseInt(ageInput.value) < 0) {
      alert('Age should be non-negative');
      return false;
    }
   if (!phoneInput.value) {
    alert('Phone number should not be empty');
    return false;
  }
    if (!/^\d{10}$/.test(phoneInput.value)) {
    alert('Phone number should be a valid 10-digit number');
    return false;
  }
  
  }