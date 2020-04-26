const core = require('@actions/core')
const {exec} = require('@actions/exec')

try {
    exec('pwd')

    var options = {
        env: {
            'PAYLOAD_PATH' : __dirname
        }
    }

    exec(path.join(__dirname, "setup-opengl.sh"))
} catch(error) {
    core.setFailed(error.message)
}