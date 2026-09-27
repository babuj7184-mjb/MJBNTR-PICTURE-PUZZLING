from PIL import Image, ImageDraw, ImageFont
import os

base_dir = os.path.join(os.getcwd(), 'images')
os.makedirs(base_dir, exist_ok=True)

people = [
    ('jrntr.jpg', 'JR NTR', '#f05941', '#2d1b69'),
    ('saipallavi.jpg', 'SAI PALLAVI', '#3dd9b3', '#1f3557'),
    ('prabhas.jpg', 'PRABHAS', '#f9c74f', '#3d405b'),
    ('alluarjun.jpg', 'ALLU ARJUN', '#ff7b54', '#3b1f5a'),
    ('samantha.jpg', 'SAMANTHA', '#7bdff2', '#1d3557'),
    ('anushka.jpg', 'ANUSHKA', '#ffb703', '#312e81'),
]

for filename, name, color1, color2 in people:
    img = Image.new('RGB', (900, 900), color=(20, 20, 20))
    draw = ImageDraw.Draw(img)

    for y in range(900):
        t = y / 900
        r = int(int(color1[1:3], 16) * (1 - t) + int(color2[1:3], 16) * t)
        g = int(int(color1[3:5], 16) * (1 - t) + int(color2[3:5], 16) * t)
        b = int(int(color1[5:7], 16) * (1 - t) + int(color2[5:7], 16) * t)
        draw.line((0, y, 900, y), fill=(r, g, b))

    draw.ellipse((300, 170, 600, 420), fill=(28, 16, 32))
    draw.rounded_rectangle((240, 420, 660, 770), radius=90, fill=(18, 12, 24))
    draw.rounded_rectangle((295, 500, 425, 660), radius=25, fill=(35, 22, 42))
    draw.rounded_rectangle((475, 500, 605, 660), radius=25, fill=(35, 22, 42))
    draw.arc((360, 280, 540, 380), 200, 340, fill=(247, 214, 188), width=18)
    draw.ellipse((365, 305, 390, 330), fill=(247, 214, 188))
    draw.ellipse((510, 305, 535, 330), fill=(247, 214, 188))
    draw.arc((410, 350, 490, 410), 15, 165, fill=(212, 64, 72), width=14)

    banner = Image.new('RGBA', (700, 120), (18, 10, 26, 180))
    bd = ImageDraw.Draw(banner)
    bd.rounded_rectangle((0, 0, 700, 120), radius=30, fill=(18, 10, 26, 180))
    img.paste(banner, (100, 760), banner)

    try:
        font = ImageFont.truetype('arialbd.ttf', 68)
        small = ImageFont.truetype('arial.ttf', 28)
    except Exception:
        font = ImageFont.load_default()
        small = ImageFont.load_default()

    draw = ImageDraw.Draw(img)
    text_w = draw.textlength(name, font=font)
    draw.text(((900 - text_w) / 2, 780), name, fill=(255, 255, 255), font=font)
    draw.text((355, 840), 'TELUGU CINEMA', fill=(255, 255, 255, 180), font=small)

    output_path = os.path.join(base_dir, filename)
    img.save(output_path, quality=95)
    print(f'created {filename}')

print('All images generated in', base_dir)
