const bodyParser = require('body-parser')
const cors = require('cors')

module.exports = app => {
    app.use(bodyParser.json())
    app.use(cors({
        origin: "*"
    }))
}


//passport that will serve like control, can we say that, as access from the toekn jwt