const core = require('@actions/core')
const { WebClient } = require('@slack/web-api')
const SLACK_TOKEN = process.env.SLACK_TOKEN

const slack = new WebClient(SLACK_TOKEN)

async function run () {
  let message
  try {
    const messageJson = core.getInput('message', { required: true })
    message = JSON.parse(messageJson)
  } catch (err) {
    return core.setFailed(err.message)
  }

  console.log(message)

  try {
    await slack.chat.postMessage(message)
  } catch (err) {
    return core.setFailed(err.code + ': ' + JSON.stringify(err))
  }
}

run()
