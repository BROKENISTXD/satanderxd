from flask import Flask, request, jsonify
from flask_socketio import SocketIO, emit

app = Flask(__name__)
app.config['SECRET_KEY'] = 'your_secret_key'

socketio = SocketIO(app)

# In-memory storage for login attempts
login_attempts = []

# In-memory mode storage (default: simulator)
current_mode = {'mode': 'simulator'}

# Endpoint to log login attempts
@app.route('/log_attempt', methods=['POST'])
def log_attempt():
    data = request.json
    login_attempts.append(data)
    socketio.emit('login_attempt', data)
    return jsonify({'status': 'success'}), 200

# Endpoint for password reset request
@app.route('/request_reset', methods=['POST'])
def request_reset():
    data = request.json
    # Logic for handling password reset requests
    # Here you would typically send an email or trigger a reset process
    return jsonify({'status': 'reset_requested', 'username': data['username']}), 200

# Endpoint for OTP verification
@app.route('/verify_otp', methods=['POST'])
def verify_otp():
    data = request.json
    # Logic for verifying OTP
    # Here you would typically check the OTP against a stored value
    return jsonify({'status': 'otp_verified', 'username': data['username']}), 200

@app.route('/get_mode', methods=['GET'])
def get_mode():
    return jsonify(current_mode), 200

@app.route('/set_mode', methods=['POST'])
def set_mode():
    data = request.json
    mode = data.get('mode')
    if mode in ['real', 'simulator']:
        current_mode['mode'] = mode
        return jsonify({'status': 'success', 'mode': mode}), 200
    return jsonify({'status': 'error', 'message': 'Invalid mode'}), 400

if __name__ == '__main__':
    socketio.run(app, debug=True) 