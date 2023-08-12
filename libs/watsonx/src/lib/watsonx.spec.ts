import {getAccessToken,WatsonxInference} from './watsonx';


describe('watsonx', () => {
  xit('should return a valid access given valid api key', async () => {
    const result = await getAccessToken(process.env["IBM_API_KEY"] || "");
    expect(result.isOk() && result.value.access_token).toBeDefined();
  });

  xit('should return an error for an invalid api key', async () => {
    const result = await getAccessToken("12344");
    expect(result.isOk()).toBeFalsy()
  });

  it('should be able to call an llm using langchain', async ()=>{
     const llm = new WatsonxInference({
      apiKey: process.env["IBM_API_KEY"],
      temperature: 0.9,
      watsonxProjectId: process.env["WATSON_X_PROJECT_ID"]
    });
    const text = await llm.predict("Can you summarize legal documents?");
    console.log(text);
  });

});
