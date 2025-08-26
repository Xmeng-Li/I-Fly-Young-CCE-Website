from flask import Flask, request, jsonify
from flask_cors import CORS
import os, csv, re
from datetime import datetime

app = Flask(__name__)
CORS(app)

CSV_DIR = os.environ.get("SUBSCRIBE_DIR", "email-list")
CSV_PATH = os.path.join(CSV_DIR, "subscribers.csv")


email_re = re.compile(r"^[^@\s]+@[^@\s]+\.[^@\s]+$")

def ensure_csv():
    os.makedirs(CSV_DIR, exist_ok=True)
    if not os.path.exists(CSV_PATH):
        with open(CSV_PATH, "w", newline="", encoding="utf-8") as f:
            writer = csv.writer(f)
            writer.writerow(["Timestamp", "Email"])


def email_exists(email: str) -> bool:
    target = (email or "").strip().lower()
    if not os.path.exists(CSV_PATH):
        return False

    with open(CSV_PATH, "r", newline="", encoding="utf-8") as f:
        reader = csv.reader(f)
        first = True
        for row in reader:
            if not row:
                continue

            if first and any("email" in (c or "").strip().lower() for c in row):
                first = False
                continue
            first = False
            candidate = (row[-1] or "").strip().lower()   
            if candidate == target:
                return True
    return False



@app.route("/")
def root():
    return "Backend is running.", 200

@app.route("/api/subscribe", methods=["POST"])
def subscribe():
    ensure_csv()

    data = request.get_json(force=True, silent=True) or {}
    email = (data.get("email") or "").strip()

    if not email or not email_re.match(email):
        return jsonify({"error": "Invalid email"}), 400

    if email_exists(email):
        return jsonify({"message": "Already subscribed", "email": email}), 200

    record = [
        datetime.utcnow().isoformat(timespec="seconds") + "Z",
        email
    ]

    try:
        with open(CSV_PATH, "a", newline="", encoding="utf-8") as f:
            csv.writer(f).writerow(record)
        return jsonify({"message": "Subscribed", "email": email}), 200
    except Exception:
        app.logger.exception("Failed to write subscription CSV")
        return jsonify({"error": "Failed to save subscription"}), 500

if __name__ == "__main__":
    app.run(debug=True)
