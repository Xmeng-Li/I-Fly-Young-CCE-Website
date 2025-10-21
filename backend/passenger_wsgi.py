import os, time

HOME = os.path.expanduser("~")            

dbg_dir = os.path.join(HOME, "private", "debug")
os.makedirs(dbg_dir, exist_ok=True)
log_file = os.path.join(dbg_dir, "passenger_probe.txt")

try:
    with open(log_file, "a", encoding="utf-8") as f:
        f.write(f"BOOT {time.time()}\n")
except Exception:
    pass

def application(environ, start_response):
    try:
        with open(log_file, "a", encoding="utf-8") as f:
            f.write(f"REQ {time.time()} PATH={environ.get('PATH_INFO')}\n")
    except Exception:
        pass

    start_response("200 OK", [("Content-Type","text/plain")])
    return [b"Passenger OK"]
