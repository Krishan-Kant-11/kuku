from flask import Flask, jsonify
from flask_cors import CORS
from src.routes.test_api import test_api_bp

app = Flask(__name__)
CORS(app)

@app.route('/', methods=['GET'])
def home():
   return "Hello from KUKU"

@app.route('/api', methods=['GET'])
def get_employees():
 return {"member":["member1", "member2", "member3"]}

# Register all APIs blueprints
app.register_blueprint(test_api_bp, url_prefix='/api')

if __name__ == '__main__':
    app.run(debug=True)
