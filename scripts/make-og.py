"""Compose the 1200x630 Open Graph image from the portrait and the site's palette."""
from PIL import Image, ImageDraw, ImageFont, ImageFilter

W, H = 1200, 630
INK = (5, 7, 14)
GOLD = (242, 201, 93)
WHITE = (255, 255, 255)
MIST = (176, 184, 200)
CREAM = (244, 236, 221)

FONT_DIR = r"C:\Windows\Fonts"
segoe_bold = ImageFont.truetype(rf"{FONT_DIR}\segoeuib.ttf", 74)
segoe_semibold = ImageFont.truetype(rf"{FONT_DIR}\seguisb.ttf", 28)
segoe_small = ImageFont.truetype(rf"{FONT_DIR}\segoeui.ttf", 19)
segoe_tiny = ImageFont.truetype(rf"{FONT_DIR}\segoeui.ttf", 15)
georgia_italic = ImageFont.truetype(rf"{FONT_DIR}\georgiai.ttf", 33)
georgia_italic_small = ImageFont.truetype(rf"{FONT_DIR}\georgiai.ttf", 21)

canvas = Image.new("RGB", (W, H), INK)
draw = ImageDraw.Draw(canvas)

# Soft gold glow on the right, behind the portrait.
glow = Image.new("L", (W, H), 0)
gdraw = ImageDraw.Draw(glow)
gdraw.ellipse((700, -110, 1290, 520), fill=70)
glow = glow.filter(ImageFilter.GaussianBlur(120))
canvas.paste(Image.new("RGB", (W, H), (48, 40, 16)), (0, 0), glow)

# Fine grid lines, like the site background.
grid = Image.new("RGBA", (W, H), (0, 0, 0, 0))
gdraw = ImageDraw.Draw(grid)
for x in range(0, W, 60):
    gdraw.line((x, 0, x, H), fill=(255, 255, 255, 8))
for y in range(0, H, 60):
    gdraw.line((0, y, W, y), fill=(255, 255, 255, 8))
canvas = Image.alpha_composite(canvas.convert("RGBA"), grid).convert("RGB")
draw = ImageDraw.Draw(canvas)

# Portrait, right side, fading into the background.
portrait = Image.open("public/images/profile/danae-portrait-2.jpg").convert("RGB")
ph = H + 40
pw = round(portrait.width * ph / portrait.height)
portrait = portrait.resize((pw, ph), Image.LANCZOS)
px = W - pw + 10
py = -20
canvas.paste(portrait, (px, py))

fade = Image.new("L", (W, H), 0)
fdraw = ImageDraw.Draw(fade)
edge = px + 30
for i in range(150):
    fdraw.line((edge + i, 0, edge + i, H), fill=int(255 * (1 - i / 150)))
fdraw.rectangle((0, 0, edge, H), fill=255)
canvas.paste(Image.new("RGB", (W, H), INK), (0, 0), fade)

bottom = Image.new("L", (W, H), 0)
bdraw = ImageDraw.Draw(bottom)
for i in range(120):
    bdraw.line((0, H - 120 + i, W, H - 120 + i), fill=int(255 * (i / 120)))
canvas.paste(Image.new("RGB", (W, H), INK), (0, 0), bottom)
draw = ImageDraw.Draw(canvas)

# Gold accent bar + eyebrow.
draw.rectangle((72, 74, 118, 76), fill=GOLD)
draw.text((136, 58), "P O R T F O L I O   2 0 2 6", font=segoe_tiny, fill=MIST)

# Name.
draw.text((72, 104), "Sarah Danaé", font=segoe_bold, fill=WHITE)
draw.text((72, 186), "FANOU", font=segoe_bold, fill=GOLD)

# Role.
draw.text((74, 296), "Administratrice Réseaux & Développeuse Web", font=segoe_semibold, fill=(226, 231, 240))
draw.text((74, 350), "Créer · Développer · Inspirer", font=georgia_italic, fill=CREAM)

# Divider.
draw.line((74, 420, 620, 420), fill=(60, 66, 84))

# Three pillars.
pillars = ["Développement web", "Design graphique", "Réseaux & commerce"]
x = 74
for pillar in pillars:
    tw = draw.textlength(pillar, font=segoe_small)
    draw.ellipse((x, 446, x + 7, 453), fill=GOLD)
    draw.text((x + 16, 438), pillar, font=segoe_small, fill=MIST)
    x += tw + 44

# Footer.
draw.text((74, 540), "Danae’s Creations · Abomey-Calavi, Bénin", font=georgia_italic_small, fill=(198, 205, 219))
draw.text((74, 574), "github.com/DSsarahfanou   ·   fanoudanae@gmail.com", font=segoe_tiny, fill=(128, 138, 156))

canvas.save("public/images/profile/og-image.jpg", "JPEG", quality=90, optimize=True)
print(canvas.size)
