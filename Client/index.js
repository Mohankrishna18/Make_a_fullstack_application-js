console.clear()

var data = JSON.parse(localStorage.getItem('registerList'))

var useN
var pass

data.map((e) => {
  useN = e.username
  pass = e.password
})

function login() {
  var username = document.getElementById('username').value
  var password = document.getElementById('password').value

  if (username === useN && password === pass) {
    window.location.href =
      'file:///C:/Users/mohan%20krishna/Desktop/loginauth/Client/displayPage.html'
  } else {
    alert('Please entered the valid data')
  }
}

async function regData() {


  var rusername = document.getElementById('username').value
  var remail = document.getElementById('email').value
  var rpass1 = document.getElementById('password1').value
  var rpass2 = document.getElementById('password2').value

 

  if (rusername != '' && remail != '' && rpass1 != '' && rpass2 != '') {
    if (rpass1 === rpass2) {
      var registerList = []
      registerList.push({
        username: rusername,
        email: remail,
        password: rpass1,
        conformpassword: rpass2,
      })
      localStorage.setItem('registerList', JSON.stringify(registerList))

      document.getElementById('username').value = ''
      document.getElementById('email').value = ''
      document.getElementById('password1').value = ''
      document.getElementById('password2').value = ''

      window.location.href =
        'file:///C:/Users/mohan%20krishna/Desktop/loginauth/Client/index.html'
    } else {
      alert('password didntmatch')
    }
  } else {
    alert('Please fill the all the required data')
  }

  const response = await fetch('http://localhost:3000/api/register', {
    method: "POST",    
  headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      rusername,
      remail,
      rpass1,
      rpass2,
    }),
  })
  const data = await response.json();
  console.log(data);
}

function ani() {
  window.location.href =
    'file:///C:/Users/mohan%20krishna/Desktop/loginauth/Client/animate.html'
}
