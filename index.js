const core = require('@actions/core')
const {exec} = require('@actions/exec')

try {
    await exec('pwd')

    var options = {
        env: {
            'PAYLOAD_PATH' : __dirname
        }
    }

    await exec(path.join(__dirname, "setup-opengl.sh"))
} catch(error) {
    core.setFailed(error.message)
}