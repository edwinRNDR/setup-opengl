const core = require('@actions/core')
const exec = require('@actions/exec')

try {
    exec.exec('pwd')
    exec.exec('bash', ['setup-opengl.sh'])
} catch(error) {
    core.setFailed(error.message)
}