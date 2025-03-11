// Hiệu ứng gõ chữ cho tiêu đề chính
const text = "Are you looking for a skilled developer?";
const typingContainer = document.querySelector(".typing-container");
let index = 0;
let isDeleting = false;
let cursorVisible = true;

function typeEffect() {
    typingContainer.innerHTML = text.substring(0, index) + `<span class="cursor">${cursorVisible ? "|" : ""}</span>`;

    if (!isDeleting) {
        index++;
        if (index > text.length) {
            setTimeout(() => { isDeleting = true; typeEffect(); }, 1500); // Giữ chữ 1.5 giây
            return;
        }
    } else {
        index--;
        if (index === 0) {
            isDeleting = false;
        }
    }

    setTimeout(typeEffect, isDeleting ? 50 : 100); // Xóa nhanh hơn gõ
}

// Hiệu ứng gõ chữ cho phần nghề nghiệp
const words = ["Web Developer", "Backend Developer", "Game Developer", "Database Administrator", "Mobile Developer"];
const typingSpan = document.querySelector(".typing-text span");
let wordIndex = 0;
let charIndex = 0;
let isDeletingWord = false;

function typeEffectForJob() {
    const currentWord = words[wordIndex];

    if (!isDeletingWord) {
        typingSpan.innerHTML = currentWord.substring(0, charIndex) + `<span class="cursor">|</span>`;
        charIndex++;
        if (charIndex > currentWord.length) {
            setTimeout(() => { isDeletingWord = true; typeEffectForJob(); }, 1000); // Giữ chữ 1 giây
            return;
        }
    } else {
        typingSpan.innerHTML = currentWord.substring(0, charIndex) + `<span class="cursor">|</span>`;
        charIndex--;
        if (charIndex === 0) {
            isDeletingWord = false;
            wordIndex = (wordIndex + 1) % words.length;
        }
    }

    setTimeout(typeEffectForJob, isDeletingWord ? 50 : 100);
}

// Hàm làm con trỏ nhấp nháy
setInterval(() => {
    cursorVisible = !cursorVisible;
    typingContainer.innerHTML = text.substring(0, index) + `<span class="cursor">${cursorVisible ? "|" : ""}</span>`;
}, 500);

// Chạy cả hai hiệu ứng
typeEffect();
typeEffectForJob();
