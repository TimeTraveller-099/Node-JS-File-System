const http = require('http')
const fs = require('fs')

const server = http.createServer((req, res) => {

    let path = "./views/"

    switch (req.url) {
        case '/':
            path += 'home.html'
            break
        case '/about':
            path += 'about.html'
            break
        default:
            path += '404.html'
            break
    }

    fs.readFile(path, (err, data) => {
        if (err) {
            console.log(err)
        } else {
            res.write(data)
        }
        res.end()
    })

})

server.listen(3000, 'localhost', () => {
    console.log("Server is running on http://localhost:3000")
})
