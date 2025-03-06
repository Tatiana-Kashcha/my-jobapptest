import admin from "./src/utils/firebaseAdmin.js"; // Підключаємо Firestore Admin SDK
import fs from "fs";

// Читаємо JSON-файл із даними
const jsonData = JSON.parse(
  fs.readFileSync("./src/data/candidates.json", "utf8")
);

// Отримуємо посилання на Firestore
const db = admin.firestore();

// Функція для імпорту даних у вказану колекцію
async function importData(collectionName, data) {
  const batch = db.batch();

  data.forEach((item) => {
    const docRef = db
      .collection(collectionName)
      .doc(item.id || db.collection(collectionName).doc().id);
    batch.set(docRef, item);
  });

  await batch.commit();
  console.log(`Дані успішно імпортовано в колекцію "${collectionName}"`);
}

// Запускаємо імпорт
importData("candidates2", jsonData)
  .then(() => process.exit())
  .catch((error) => {
    console.error("Помилка імпорту:", error);
    process.exit(1);
  });

// запускаємо імпорт командою в терміналі: node importData.js
// якщо повторно запустити імпорт, то дані в колекцію додадуться з файла, а не перезапишуть колекцію

// якщо колекція з таким ім'ям не існує, то її буде створено
// importData("your-name-colelection", jsonData)
