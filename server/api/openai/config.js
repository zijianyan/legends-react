const MODEL = "text-davinci-003"

const GET_TOPICS_CONFIG = ()=> {
    const prompt = `
    Give me a fun topic for kids;
    The topic should be described in 5 words max;
    Make it a quirky and very specific activity;
    Max 1 topic;
    The should not be a topic that has been provided in the past 10 requests;
    Remove all quotation marks or punctuation;
    Remove all periods or "." from the text; 
    Remove all dashes from the text;
    `
    return {
        model: MODEL,
        prompt,
        temperature: 1,
        max_tokens: 1000,
        n: 5
    }
}

const GET_ACTIVITY_CONFIG = (topic) => { 
    const prompt = `
    Describe to me a positive activity for a kid;
    Say it as if you were speaking to the child directly;
    Have a sense of humor;
    Make the activity something that invites the child's to use their imagination or creativity;
    Start off this text with "Great choice!";
    Be optimistic and encouraging;
    This activity should be focused on ${topic}
    `
    return {
        model: MODEL,
        prompt,
        temperature: 1,
        max_tokens: 1000,   
    }
  }

module.exports = {
    GET_TOPICS_CONFIG,
    GET_ACTIVITY_CONFIG
}