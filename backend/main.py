from flask import Flask, jsonify
from flask_cors import CORS
from src.routes.test_api import test_api_bp

app = Flask(__name__)
CORS(app)

@app.route('/api', methods=['GET'])
def get_employees():
 return {"member":["member1", "member2", "member3"]}

# Register the test API blueprint
app.register_blueprint(test_api_bp, url_prefix='/api')

if __name__ == '__main__':
    app.run(debug=True)
