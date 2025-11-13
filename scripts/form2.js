document.querySelector(".btn-submit-your-application").addEventListener("click", async function(e) {
    e.preventDefault();

    const phone = document.getElementById("phone").value.trim();
    const name = document.getElementById("name").value.trim();
    const lastname = document.getElementById("lastname").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
    const agreement = document.getElementById("checkedDisabled").checked ? "✅ Согласен" : "❌ Не согласен";

    if (!phone || !name || !lastname || !email || !message) {
        alert("⚠️ Пожалуйста, заполните все поля перед отправкой.");
        return;
    }

    const BOT_TOKEN = "8474056753:AAHVqta6SBoNXsn0UD89TbF_8PktB_07k7k"; 
    const CHAT_ID = "-5012867418";        
    const URL = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`;

    const text = `
📩 Новая заявка от компании:
👤 Имя: ${name} ${lastname}
📞 Телефон: ${phone}
📧 Email: ${email}
💬 Сообщение: ${message}
🛡 Согласие с политикой: ${agreement}
    `;

    try {
        const response = await fetch(URL, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                chat_id: CHAT_ID,
                text: text
            })
        });

        if (response.ok) {
            alert("✅ Заявка успешно отправлена!");
            document.querySelectorAll(".contact-us-control, .contact-us-control2").forEach(el => el.value = "");
        } else {
            alert("⚠️ Ошибка при отправке. Проверь токен или chat_id.");
        }
    } catch (err) {
        console.error(err);
        alert("❌ Не удалось отправить заявку. Проверь интернет-соединение.");
    }
});