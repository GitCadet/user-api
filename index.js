const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.json ([
{ name:"Bob",
  email:"bob@gmail.com" 
},
{ name:"Jack",
  email:"jack@hotmailmail.com" 
},
{ name:"Adam",
  email:"adam@yahoo.com" 
},
{ name:"David",
  email:"david@outlook.com" 
},
{ name:"Sarah",
  email:"sarah@yahoo.co.uk" 
}
]))

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})