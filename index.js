const express = require('express')
const app = express()
const exphbs = require('express-handlebars')
const port = 3000

app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

app.use(
  express.urlencoded({
    extended: true
  })
)
app.use(express.json())

app.use(express.static('public'))

app.get('/users/add', (req, res) => {
  res.render('userform')
  })

app.post('/users/save', (req, res) => {
  const nome_completo= req.body.nome_completo;
  const data_nascimento = req.body.data_nascimento;
  const tipo_cargo = req.body.tipo_cargo;
  const valor_salario = req.body.valor_salario;
  const data_entradaempresa = req.body.data_entradaempresa;
  const setor = req.body.setor;

  const user = { nome_completo: nome_completo, data_nascimento: data_nascimento, tipo_cargo: tipo_cargo, valor_salario: valor_salario, data_entradaempresa: data_entradaempresa, setor: setor }
  res.render('viewuser', { user: user })

  })

app.get('/', (req, res) => {
    res.render('home')
  })  

app.listen(port, () => {
  console.log('Server online!')
})