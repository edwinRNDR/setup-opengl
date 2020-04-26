const core = require('@actions/core')
const {exec} = require('@actions/exec')
const path = require('path')

try {
    var options = {
        env: {
            'PAYLOAD_PATH' : __dirname
        }
    }
    exec(path.join(__dirname, "setup-opengl.sh"), options)
} catch(error) {
    core.setFailed(error.message)
}