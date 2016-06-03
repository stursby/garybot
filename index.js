require('dotenv').config()

const Botkit = require('botkit')
const controller = Botkit.slackbot()

const bot = controller.spawn({
  token: process.env.SLACK_API_TOKEN
})

bot.startRTM((err, bot, payload) => {
  if (err) {
    throw new Error('Could not connect to Slack')
  }
})

controller.hears(['hello', 'hi'], 'direct_message, direct_mention, mention', (bot, message) => {
  bot.reply(message, 'Hello, I’m Gary.')
})
