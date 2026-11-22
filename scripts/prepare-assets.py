"""Prepare portfolio assets: copy, crop, resize and optimize.

Source: "Mon dossier portfolio" + project folders.
Destination: public/images
"""
from pathlib import Path
from PIL import Image

ROOT = Path(r"C:\Users\JASPE\Desktop\Sarah Donne\projet")
SRC = ROOT / "Mon dossier portfolio"
AZOTCHE = ROOT / "artisan_project_stage" / "public"
OUT = Path(__file__).resolve().parent.parent / "public"

DIRS = {
    "profile": OUT / "images" / "profile",
    "projects": OUT / "images" / "projects",
    "creations": OUT / "images" / "creations",
    "gallery": OUT / "images" / "gallery",
}
for d in DIRS.values():
    d.mkdir(parents=True, exist_ok=True)


def save_image(img: Image.Image, dest: Path, max_w: int = 1600, quality: int = 88):
    img = img.convert("RGB")
    if img.width > max_w:
        ratio = max_w / img.width
        img = img.resize((max_w, int(img.height * ratio)), Image.LANCZOS)
    if dest.suffix.lower() in (".jpg", ".jpeg"):
        img.save(dest, "JPEG", quality=quality, optimize=True, progressive=True)
    else:
        img.save(dest, "PNG", optimize=True)
    print(f"  -> {dest.name} ({dest.stat().st_size // 1024} Ko)")


def copy_img(src: Path, dest: Path, max_w: int = 1600, quality: int = 88):
    print(f"copy {src.name}")
    save_image(Image.open(src), dest, max_w, quality)


# --- Profile ---------------------------------------------------------------
copy_img(SRC / "Danae, développeuse web et designer graphique.png",
         DIRS["profile"] / "danae-banner.png", max_w=1600)

# Portrait cropped from the banner (right side, where the subject is)
print("crop danae-portrait")
banner = Image.open(SRC / "Danae, développeuse web et designer graphique.png")
portrait = banner.crop((360, 0, 1095, banner.height))
save_image(portrait, DIRS["profile"] / "danae-portrait.jpg", max_w=820, quality=90)

copy_img(SRC / "PHOTO PROFIL.png",
         DIRS["profile"] / "logo-danaes-creations.png", max_w=900)

# --- Projects --------------------------------------------------------------
projects = {
    "jaspe library.png": "jaspe-library.png",
    "ewemedji_accueil.png": "ewemedji-accueil.png",
    "ewemedji_produit.png": "ewemedji-produit.png",
    "jaspeAcademy_accueil.png": "jaspe-academy-accueil.png",
    "jaspeAcademy_dashbord_animateur.png": "jaspe-academy-dashboard.png",
    "jaspeAcademy_apprenant.png": "jaspe-academy-apprenant.png",
    "jaspeAcademy_apprenant_shop.png": "jaspe-academy-shop.png",
    "jaspeAcademy_apprenant_meeting.png": "jaspe-academy-meeting.png",
}
for src, dest in projects.items():
    copy_img(SRC / src, DIRS["projects"] / dest, max_w=1600)

copy_img(AZOTCHE / "image_div1.png", DIRS["projects"] / "azotche-artisan.png", max_w=1400)
copy_img(AZOTCHE / "logo_transparent.png", DIRS["projects"] / "azotche-logo.png", max_w=800)

# --- Danae's Creations -----------------------------------------------------
creations = {
    "beignet.jpg": "beignets-chocolat.jpg",
    "gateaux chocolat.jpg": "beignets-moelleux.jpg",
    "les épices.jpg": "epices.jpg",
    "piment épicé.jpg": "piment.jpg",
    "poison sec.jpg": "poisson-sec.jpg",
    "africa tennis oeuf.jpg": "oeufs-panes.jpg",
    "170221.jpg": "tissu-pagne.jpg",
    "IMG_20250119_132938.jpg": "accessoires-tech.jpg",
}
for src, dest in creations.items():
    copy_img(SRC / src, DIRS["creations"] / dest, max_w=1400)

# --- Gallery ---------------------------------------------------------------
copy_img(SRC / "sarah Danae.jpeg", DIRS["gallery"] / "sarah-1.jpg", max_w=1200)
copy_img(SRC / "Sarah S..jpeg", DIRS["gallery"] / "sarah-2.jpg", max_w=1200)
copy_img(SRC / "sarah.jpeg", DIRS["gallery"] / "sarah-3.jpg", max_w=1200)

# --- CV --------------------------------------------------------------------
import shutil
shutil.copy2(SRC / "CV_Sèdjrogandé_Sarah_Danaé_FANOU.pdf", OUT / "cv-sarah-danae-fanou.pdf")
print("  -> cv-sarah-danae-fanou.pdf")

print("\nDone.")
