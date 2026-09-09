import express from 'express'

const PORT = 3000
const app = express()

app.get('/', (req, res) => {
    res.send('<h3>Slv Cachorro</h3>')
})
app.get('/servicos', (req, res) => {
    res.send('<h3>Bandidagem ta Podendo</h3>')
})


app.listen(PORT, () => { console.log('Servidor Vivo!')})