const express = require('express')
const app = express()
const port = 3000
const path = require('path')

app.use(express.static(path.join(__dirname, '/public/')))
app.use(
    '/js',
    express.static(
        path.join(__dirname, '/node_modules/@fortawesome/fontawesome-free/js')
    )
)
app.use(
    '/js',
    express.static(path.join(__dirname, '/node_modules/halfmoon/js'))
)

app.use(
    '/js', 
    express.static(path.join(__dirname, '/node_modules/alpinejs/dist'))
)
app.use(
    '/css',
    express.static(path.join(__dirname, '/node_modules/halfmoon/css'))
)
app.use(
    '/css',
    express.static(
        path.join(__dirname, '/node_modules/@fortawesome/fontawesome-free/css')
    )
)
app.use(
    '/css',
    express.static(path.join(__dirname, '/node_modules/halfmoon/css'))
)
app.use(
    '/webfonts',
    express.static(
        path.join(
            __dirname,
            '/node_modules/@fortawesome/fontawesome-free/webfonts'
        )
    )
)
app.use(
    '/favicon',
    express.static(
        path.join(__dirname, '/public/favicon')
    )
)

app.use('/photo', express.static(path.join(__dirname)))

app.get('/', (req, res) => {
    res.send('index')
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
