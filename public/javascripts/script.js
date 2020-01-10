const addEmail = document.getElementById('plusInput')

 if (addEmail) { 
    addEmail.addEventListener('click', function() {
        var newEmail = document.createElement("input")
        document.getElementById('newInput').appendChild(newEmail)
        var valueInput = newEmail.getAttribute("value")
        newEmail.className = "form-control"
        newEmail.placeholder="Email supplémentaire"
        newEmail.setAttribute("name", "email") 
    })
 }  


const form = document.getElementById('addContact')

if (form) {
    form.addEventListener('submit', function(event) {
        event.preventDefault()
        let name = document.querySelectorAll('input')[0].value
        let firstName = document.querySelectorAll('input')[1].value
        let mobile = document.querySelectorAll('input')[2].value
        let domNumber = document.querySelectorAll('input')[3].value
        let email = document.querySelectorAll('input')[4].value
/*          for (let x = 5; x < 10; x++) {
                var emailPlus = document.querySelectorAll('input')[x].value
                var OtherEmail = new Array(emailPlus); 
            } */
        if (name.length < 2 && name.length > 50) {
            var oneP = document.createElement("p")
            oneP.innerHTML = "Non conforme"
            document.querySelector("form").appendChild(oneP)
        } else if (firstName.length < 2 && firstName.length > 50) {
            var oneP = document.createElement("p")
            oneP.innerHTML = "Non conforme"
            document.querySelector("form").appendChild(oneP)
        } else if (mobile.length > 10) {
            var oneP = document.createElement("p")
            oneP.innerHTML = "Non conforme"
            document.querySelector("form").appendChild(oneP)
        } else if (domNumber.length > 10) {
            var oneP = document.createElement("p")
            oneP.innerHTML = "Non conforme"
            document.querySelector("form").appendChild(oneP)
        } else if (email.length < 2 && email.length > 100 ) {
            var oneP = document.createElement("p")
            oneP.innerHTML = "Non conforme"
            document.querySelector("form").appendChild(oneP)
        } else {
            fetch('/contact', {
                method: 'POST',
                headers: {
                    'Content-Type':'application/json'
                },
                body: JSON.stringify({name, firstName, mobile, domNumber, email})
            })
            .then(function() {window.location.reload()})
        }
    })
}