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

// Chatbot initialization
import Chatbot from "https://cdn.n8nchatui.com/v1/embed.js";
Chatbot.init({
  "n8nChatUrl": "http://localhost:5678/webhook/b21265ac-4f80-4343-974f-1e1e61186b1f/chat",
  "metadata": {}, // Include any custom data to send with each message to your n8n workflow
  "theme": {
    "button": {
      "backgroundColor": "#7cfdfb",
      "right": 30,
      "bottom": 30,
      "size": 55,
      "iconColor": "#000000",
      "customIconSrc": "https://www.svgrepo.com/show/339963/chat-bot.svg",
      "customIconSize": 60,
      "customIconBorderRadius": 15,
      "autoWindowOpen": {
        "autoOpen": true,
        "openDelay": 2
      },
      "borderRadius": "circle"
    },
    "tooltip": {
      "showTooltip": true,
      "tooltipMessage": "Xin chào 👋",
      "tooltipBackgroundColor": "#d6d6d6",
      "tooltipTextColor": "#1c1c1c",
      "tooltipFontSize": 15
    },
    "chatWindow": {
      "borderRadiusStyle": "rounded",
      "avatarBorderRadius": 25,
      "messageBorderRadius": 6,
      "showTitle": true,
      "title": "Trợ lý tạo kế hoạch",
      "titleAvatarSrc": "https://www.svgrepo.com/show/339963/chat-bot.svg",
      "avatarSize": 40,
      "welcomeMessage": "Xin chào! Tôi đã sẵn sàng hỗ trợ bạn.",
      "errorMessage": "Tin nhắn lỗi xin vui lòng liên hệ chúng tôi qua các nền tảng khác",
      "backgroundColor": "#bdfbff",
      "height": 600,
      "width": 400,
      "fontSize": 14,
      "starterPrompts": [
        "Giúp tôi lên kế hoạch đi du lịch Đà Lạt nhé",
        "Giúp tôi lê kế hoạch giảm cân nhé trợ lý"
      ],
      "starterPromptFontSize": 12,
      "renderHTML": false,
      "clearChatOnReload": false,
      "showScrollbar": false,
      "botMessage": {
        "backgroundColor": "#feaa90",
        "textColor": "#000000",
        "showAvatar": true,
        "avatarSrc": "https://www.svgrepo.com/show/334455/bot.svg"
      },
      "userMessage": {
        "backgroundColor": "#fff6f3",
        "textColor": "#050505",
        "showAvatar": true,
        "avatarSrc": "https://www.svgrepo.com/show/532363/user-alt-1.svg"
      },
      "textInput": {
        "placeholder": "Type your query",
        "backgroundColor": "#ffffff",
        "textColor": "#1e1e1f",
        "sendButtonColor": "#fead95",
        "maxChars": 100,
        "maxCharsWarningMessage": "Bạn đã vượt quá giới hạn ký tự. Vui lòng nhập ít hơn 100 ký tự.",
        "autoFocus": false,
        "borderRadius": 6,
        "sendButtonBorderRadius": 50
      },
      "uploadsConfig": {
        "enabled": true,
        "acceptFileTypes": [
          "pdf",
          "txt",
          "doc",
          "docx",
          "csv",
          "xml"
        ],
        "maxSizeInMB": 5,
        "maxFiles": 1
      }
    }
  }
});
