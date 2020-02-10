# Slack postMessage - Github Action

A [Github Action](https://github.com/features/actions) to send a message to a Slack channel.

## Configuration

1. Generate a Slack Webhook URL:
    1. Browse to https://api.slack.com/apps.
    1. Click "Create New App". Give it a name and development workspace, and click "Create App".
    1. Add "Display information" to lend your GitHub messages character.
    1. In the "OAuth and Permissions" section, scroll to "Scopes". In the "Bot Token Scopes" section, add "chat:write".
    1. At the top of the "OAuth and Permissions" section, click "Install App to Workspace". "Allow" it.
    1. Copy the "Bot User OAuth Access Token".
1. In your GitHub project settings, create the `SLACK_TOKEN` [environment variable](https://help.github.com/en/actions/automating-your-workflow-with-github-actions/creating-and-using-encrypted-secrets#creating-encrypted-secrets). Paste the Bot User OAuth Access Token.

## Usage

In your GitHub workflow step, configure three important settings:

1. `env` with the `SLACK_TOKEN` secret
1. `uses: CJWorkbench/slack-postmessage@0.0.1`
1. `with: message:` with the [postMessage arguments](https://api.slack.com/methods/chat.postMessage) of your message

For example:

```yaml
name: Notification on push

on: [push]

jobs:
  build:
    steps:
    - name: Slack notification
      uses: CJWorkbench/slack-postmessage@0.0.1
      env:
        SLACK_TOKEN: ${{ secrets.SLACK_TOKEN }}
      with:
        message: '{"channel": "#channel-name", "text": "Fallback text", "attachments": [{"fallback": "Fallback text", "text": ${{ toJson(*Bold* and _italic_ text", "color": "#aa11aa"}]}'
```

## License

[MIT](LICENSE) © 2019 Cem Kıy, Adam Hooper
