import io
import re
import urllib.request
from pathlib import Path

from PIL import Image

PKG = "com.dailyexpensetracker.moneymanager"
OUT = Path(__file__).resolve().parents[1] / "assets" / "apps"
url = f"https://play.google.com/store/apps/details?id={PKG}&hl=en"
html = urllib.request.urlopen(url, timeout=30).read().decode("utf-8", "ignore")
urls = list(dict.fromkeys(re.findall(r"https://play-lh\.googleusercontent\.com/[^\"\\\s]+", html)))
print("urls", len(urls))
saved = 0
for u in urls:
    try:
        data = urllib.request.urlopen(u, timeout=20).read()
        if len(data) < 20000:
            continue
        im = Image.open(io.BytesIO(data))
        w, h = im.size
        print(w, h, len(data))
        if h > w * 1.15 and len(data) > 40000:
            dest = OUT / f"expense-shot{saved}.jpg"
            im.convert("RGB").save(dest, "JPEG", quality=82)
            print("saved", dest.name)
            saved += 1
            if saved >= 3:
                break
    except Exception as exc:
        print("fail", exc)
print("done", saved)
