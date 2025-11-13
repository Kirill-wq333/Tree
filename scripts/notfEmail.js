document.getElementById("planting-form").addEventListener("submit", async function(e) {
    e.preventDefault();

    const city = document.getElementById("city").value;
    const format = document.getElementById("format").value;
    const quantity = document.getElementById("quantity").value;
    const total = quantity * 500;

    const BOT_TOKEN = "8474056753:AAHVqta6SBoNXsn0UD89TbF_8PktB_07k7k"; 
    const CHAT_ID = "-5012867418";        
    const URL = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`;

    const message = `
🌱 Новая заявка на посадку растений:
🏙 Город: ${city}
📋 Формат: ${format}
🌳 Кол-во саженцев: ${quantity}
💰 Итоговая сумма: ${total} ₽
    `;

    try {
        const response = await fetch(URL, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                chat_id: CHAT_ID,
                text: message
            })
        });

        if (response.ok) {
            alert("✅ Заявка отправлена боту!");
            document.getElementById("planting-form").reset();
        } else {
            alert("⚠️ Ошибка при отправке. Проверь токен или chat_id.");
        }
    } catch (error) {
        console.error(error);
        alert("❌ Не удалось отправить сообщение.");
    }
});