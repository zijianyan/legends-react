const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);
const MODEL = "text-davinci-003"

module.exports = {
    openai,
    MODEL
}