"""Styled QR: rounded modules + finder eyes + circular portrait. Portfolio URL."""
from __future__ import annotations

from pathlib import Path

import qrcode
from PIL import Image, ImageDraw, ImageOps

URL = "https://tatianaanatolievnadta-ops.github.io/TatianaZhelihovskaya/portfolio.html"
OUT_DIR = Path(r"d:\мой помошник\14 masha-massag\public\images")
OUT = OUT_DIR / "qr-tatiana-uslugi.png"
DESK = Path.home() / "Desktop" / "qr-tatiana-uslugi.png"

PHOTO = Path(
    r"d:\мой помошник\14 masha-massag\_deploy\TatianaZhelihovskaya\assets\tatiana-photo.png"
)

MODULE = 14  # px per module
BORDER = 3
PORTRAIT_RATIO = 0.30  # of QR body (without outer margin)


def matrix_for(url: str):
    qr = qrcode.QRCode(
        version=None,
        error_correction=qrcode.constants.ERROR_CORRECT_H,
        box_size=1,
        border=0,
    )
    qr.add_data(url)
    qr.make(fit=True)
    return qr.get_matrix()


def is_finder(r: int, c: int, n: int) -> bool:
    """True if cell belongs to one of three 7x7 finder patterns."""
    if r < 7 and c < 7:
        return True
    if r < 7 and c >= n - 7:
        return True
    if r >= n - 7 and c < 7:
        return True
    return False


def draw_rounded_qr(mat) -> Image.Image:
    n = len(mat)
    size = (n + BORDER * 2) * MODULE
    img = Image.new("RGB", (size, size), (255, 255, 255))
    draw = ImageDraw.Draw(img)

    # soft rounded dots for data modules
    inset = 1.2
    for r in range(n):
        for c in range(n):
            if not mat[r][c]:
                continue
            if is_finder(r, c, n):
                continue
            x0 = (c + BORDER) * MODULE + inset
            y0 = (r + BORDER) * MODULE + inset
            x1 = (c + BORDER + 1) * MODULE - inset
            y1 = (r + BORDER + 1) * MODULE - inset
            draw.rounded_rectangle([x0, y0, x1, y1], radius=MODULE * 0.38, fill=(0, 0, 0))

    # finder patterns: rounded outer frame + rounded eye (like reference)
    finders = [(0, 0), (0, n - 7), (n - 7, 0)]
    for fr, fc in finders:
        ox = (fc + BORDER) * MODULE
        oy = (fr + BORDER) * MODULE
        draw.rounded_rectangle(
            [ox, oy, ox + 7 * MODULE - 1, oy + 7 * MODULE - 1],
            radius=MODULE * 1.15,
            fill=(0, 0, 0),
        )
        draw.rounded_rectangle(
            [ox + MODULE, oy + MODULE, ox + 6 * MODULE - 1, oy + 6 * MODULE - 1],
            radius=MODULE * 0.9,
            fill=(255, 255, 255),
        )
        draw.rounded_rectangle(
            [ox + 2 * MODULE, oy + 2 * MODULE, ox + 5 * MODULE - 1, oy + 5 * MODULE - 1],
            radius=MODULE * 0.75,
            fill=(0, 0, 0),
        )

    return img


def extract_portrait() -> Image.Image:
    """Only Tatiana Zhelikhovskaya photo from her site assets."""
    if not PHOTO.exists():
        raise SystemExit("tatiana-photo.png missing")
    return Image.open(PHOTO).convert("RGB")


def circle_mask(size: int) -> Image.Image:
    m = Image.new("L", (size, size), 0)
    ImageDraw.Draw(m).ellipse((0, 0, size - 1, size - 1), fill=255)
    return m


def paste_portrait(qr: Image.Image, portrait: Image.Image) -> Image.Image:
    size = qr.size[0]
    diam = int(size * PORTRAIT_RATIO)
    pad = int(diam * 0.12)
    total = diam + pad * 2
    cx = cy = size // 2
    left = cx - total // 2
    top = cy - total // 2

    draw = ImageDraw.Draw(qr)
    # white circular quiet zone
    draw.ellipse([left, top, left + total, top + total], fill=(255, 255, 255))

    # face slightly upper-center (portrait on black)
    face = ImageOps.fit(portrait, (diam, diam), centering=(0.5, 0.28))
    face = ImageOps.grayscale(face).convert("RGBA")
    face.putalpha(circle_mask(diam))

    # thin ring
    ring_d = diam + 6
    ring = Image.new("RGBA", (ring_d, ring_d), (0, 0, 0, 0))
    ImageDraw.Draw(ring).ellipse(
        (1, 1, ring_d - 2, ring_d - 2), outline=(0, 0, 0, 200), width=3
    )
    qr_rgba = qr.convert("RGBA")
    qr_rgba.paste(ring, (cx - ring_d // 2, cy - ring_d // 2), ring)
    qr_rgba.paste(face, (cx - diam // 2, cy - diam // 2), face)
    return qr_rgba.convert("RGB")


def card(img: Image.Image, radius: int = 56, margin: int = 28) -> Image.Image:
    w, h = img.size
    bg = (236, 236, 238)
    canvas = Image.new("RGB", (w + margin * 2, h + margin * 2), bg)
    # rounded white plate
    plate = Image.new("RGB", (w, h), (255, 255, 255))
    plate.paste(img, (0, 0))
    mask = Image.new("L", (w, h), 0)
    ImageDraw.Draw(mask).rounded_rectangle((0, 0, w - 1, h - 1), radius=radius, fill=255)
    canvas.paste(plate, (margin, margin), mask)
    # outer round
    out = Image.new("RGB", canvas.size, bg)
    om = Image.new("L", canvas.size, 0)
    ImageDraw.Draw(om).rounded_rectangle(
        (0, 0, canvas.size[0] - 1, canvas.size[1] - 1), radius=radius + 10, fill=255
    )
    out.paste(canvas, mask=om)
    return out


def main() -> None:
    OUT_DIR.mkdir(parents=True, exist_ok=True)
    mat = matrix_for(URL)
    qr = draw_rounded_qr(mat)
    qr = paste_portrait(qr, extract_portrait())
    final = card(qr)
    final.save(OUT, "PNG", optimize=True)
    final.save(DESK, "PNG", optimize=True)
    # ascii-safe log
    print("OK")
    print(URL)
    print(str(DESK))
    print(final.size)


if __name__ == "__main__":
    main()
