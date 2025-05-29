from flask import Flask, request, jsonify
from google import genai
import json

app = Flask(__name__)

client = genai.Client(api_key="AIzaSyCqc6RKbw0uptUiwGeY_h5SDz3dzgldN24")

@app.route("/analyze", methods=["POST"])
def analyze():
    text = request.json
    text = text.get("text", "")

    if not text:
        return jsonify({"error": "Text input is required"}), 400

    # prompt = (
    #         "Analyze the emotions expressed in the following journal entry. "
    #     "Return a JSON object with keys 'sentiment', 'emotion', and 'explanation'. "
    #     "The sentiment must be one of: ['extremely positive', 'positive', 'neutral', 'negative', 'extremely negative']. "
    #     "Do not include any other text or explanation.\n\n"
    #     f"Journal Entry:\n{text}"
    #     )

    prompt = (
    "Analyze the emotions expressed in the following journal entry. "
    "Respond strictly in this JSON format and nothing else and return everything in lower case strictly:\n"
    '{ "sentiment": "", "emotion": "", "explanation": "" }\n\n'
    f"{text}"
)


    response = client.models.generate_content(model = "gemini-2.0-flash", contents = {prompt})
    print(response.text.strip())

    raw = response.text.strip()

    if raw.startswith("```json") and raw.endswith("```"):
        raw = raw.strip("```json").strip("`").strip()

    parsed = json.loads(raw)

    return jsonify(parsed)
    #sentiment_json = json.loads(response.text)
    #return jsonify(response.text)

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5001, debug=True)