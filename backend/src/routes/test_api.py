from flask import Blueprint, jsonify

test_api_bp = Blueprint('test_api', __name__)

@test_api_bp.route('/api/hello', methods=['GET'])
def hello():
    print("hello yoi")
    return jsonify(message='Hello from Flask API!')