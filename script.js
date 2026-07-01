// رسالة ترحيب
console.log("BAGLUX جاهز");

// تأثير عند الضغط على زر الطلب
const buttons = document.querySelectorAll(".card button");

buttons.forEach(button => {
    button.addEventListener("click", () => {
        alert("شكراً لك 🌸\nسيتم تحويلك لصفحة الطلب قريباً.");
    });
});

// تأثير ظهور المنتجات عند فتح الصفحة
const cards = document.querySelectorAll(".card");

cards.forEach((card, index) => {
    card.style.opacity = "0";
    card.style.transform = "translateY(40px)";

    setTimeout(() => {
        card.style.transition = "0.6s";
        card.style.opacity = "1";
        card.style.transform = "translateY(0)";
    }, 300 * index);
});
