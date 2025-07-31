# การเรียนรู้ Git และ GitHub

## สิ่งที่เราจะเรียนรู้ในโปรเจกต์นี้

1. **Git พื้นฐาน**
   - การสร้าง repository
   - การ commit การเปลี่ยนแปลง
   - การดูประวัติการเปลี่ยนแปลง

2. **GitHub**
   - การสร้าง repository บน GitHub
   - การ push โค้ดขึ้น GitHub
   - การทำงานร่วมกัน

## เริ่มต้นใช้งาน

```bash
# ดูสถานะของ repository
git status

# เพิ่มไฟล์ทั้งหมดเข้า staging area
git add .

# Commit การเปลี่ยนแปลง
git commit -m "ข้อความอธิบายการเปลี่ยนแปลง"

# ดูประวัติการ commit
git log
```

## โครงสร้างโปรเจกต์

- `README.md` - ไฟล์นี้ (คำอธิบายโปรเจกต์)
- `index.html` - หน้าเว็บตัวอย่าง
- `style.css` - ไฟล์ CSS
- `script.js` - ไฟล์ JavaScript 