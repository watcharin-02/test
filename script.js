// ฟังก์ชันเปลี่ยนสีพื้นหลัง
function changeBackgroundColor() {
    const colors = [
        'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
        'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
        'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
        'linear-gradient(135deg, #fa709a 0%, #fee140 100%)'
    ];
    
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.background = randomColor;
}

// เพิ่ม event listener สำหรับปุ่มเปลี่ยนสี
document.addEventListener('DOMContentLoaded', function() {
    const changeColorBtn = document.getElementById('changeColor');
    if (changeColorBtn) {
        changeColorBtn.addEventListener('click', changeBackgroundColor);
    }
    
    // เพิ่ม animation เมื่อโหลดหน้า
    const sections = document.querySelectorAll('section');
    sections.forEach((section, index) => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            section.style.transition = 'all 0.6s ease';
            section.style.opacity = '1';
            section.style.transform = 'translateY(0)';
        }, index * 200);
    });
});

// ฟังก์ชันแสดงข้อความยินดีต้อนรับ
function showWelcomeMessage() {
    const welcomeDiv = document.createElement('div');
    welcomeDiv.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: #27ae60;
        color: white;
        padding: 15px 20px;
        border-radius: 10px;
        box-shadow: 0 4px 15px rgba(0,0,0,0.2);
        z-index: 1000;
        animation: slideIn 0.5s ease;
    `;
    welcomeDiv.innerHTML = '🎉 ยินดีต้อนรับสู่การเรียนรู้ Git และ GitHub!';
    document.body.appendChild(welcomeDiv);
    
    // ลบข้อความหลังจาก 3 วินาที
    setTimeout(() => {
        welcomeDiv.style.animation = 'slideOut 0.5s ease';
        setTimeout(() => {
            document.body.removeChild(welcomeDiv);
        }, 500);
    }, 3000);
}

// เพิ่ม CSS animation
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// แสดงข้อความยินดีต้อนรับเมื่อโหลดหน้า
window.addEventListener('load', showWelcomeMessage); 