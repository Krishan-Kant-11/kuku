from flask import Blueprint, jsonify, request

upload_csv_bp = Blueprint('upload_csv', __name__)

@upload_csv_bp.route('/upload_csv', methods=['POST'])
def upload_csv():
    csv_data = request.json['data']
    # Process the CSV data here
    print(type(csv_data))
    return {'message': 'CSV received'}, 200