function submitForm() {

        let firstName = document.querySelector('input[placeholder="Maya..."]').value;
        let lasttName = document.querySelector('input[placeholder="Majid..."]').value;
        let age = document.querySelector('input[trype="number"]').value;

        if ( firstName === "" || lasttName === "" || age === "") {document.getElementById("result").innerText = "Please in all required  fields";
            return;
           }
           document.getElementById("result").innerText = "Profile saved! Welcome" + firstName + "" + lastName + "(" + age + ")";
    }



