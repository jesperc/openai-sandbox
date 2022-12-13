const axios = require("axios");

const apiKey = "";

const headers = {
  Authorization: `Bearer ${apiKey}`,
  "OpenAI-Organization": "org-DA0gFR30vDvgnp5dAx1Enj3B",
  "Content-Type": "application/json",
};

const data = {
  model: "text-davinci-003",
  prompt: "what is the purpose of life",
  temperature: 0.7,
  max_tokens: 256,
  top_p: 1,
  frequency_penalty: 0,
  presence_penalty: 0,
};

const main = async () => {
  try {
    const result = await axios.post(
      "https://api.openai.com/v1/completions",
      data,
      {
        headers,
      }
    );
    console.log(result.data.choices);
  } catch (error) {
    console.log(error.response.data);
    console.log(error.response);
  }
};

main()
  .then(() => console.log("done!"))
  .catch((error) => console.log(error));
