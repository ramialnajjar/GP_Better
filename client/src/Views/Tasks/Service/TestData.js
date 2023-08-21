import { DateFormatterEn } from "../../../Common/Utils/DateFormatter";

export const taskMockData = [];

const adminNames = [
  "Fatima Ahmed",
  "Sara Ali",
  "Lina Al-Sayed",
  "Yousef Al-Haj",
  "Rami Khalil",
  "Yasmeen Hassan",
  "Omar Abu Zaid",
  "Jana Khalaf",
  "Majed Al-Ali",
  "Haneen Al-Haddad",
  "Sami Al-Qahtani",
  "Noura Al-Dosari",
  "Bashar Al-Abdullah",
  "Zainab Al-Jaber",
  "Amer Al-Mutairi",
  "Jalal Al-Omari",
  "Asma Al-Hashemi",
  "Tariq Al-Shamsi",
  "Mariam Al-Mazroui",
  "Majd Al-Qassab",
  "Raneem Al-Jaberi",
  "Ali Al-Salman",
  "Muna Al-Marzouqi",
  "Nasser Al-Ammari",
  "Layan Al-Khatib",
  "Fahad Al-Rashidi",
  "Dina Al-Ali",
  "Said Al-Farsi",
  "Kareem Al-Akhras",
  "Zahra Al-Hamad",
  "Jawad Al-Hashim",
  "Sana Al-Khalil",
  "Ahmad Al-Jaber",
  "Rawan Al-Muhannadi",
  "Yaser Al-Masri",
  "Hessa Al-Obaidli",
  "Abdullah Al-Humaidi",
  "Reem Al-Shaikh",
  "Faisal Al-Hajri",
  "Dania Al-Qassimi",
  "Khalid Al-Shehhi",
  "Mira Al-Qahtani",
  "Talal Al-Abdullah",
  "Hala Al-Kuwari",
  "Hamad Al-Mohannadi",
  "Maya Al-Thani",
  "Basel Al-Rawi",
  "Safia Al-Majid",
  "Omar Al-Sulaiman",
  "Noor Al-Sabah",
  "Mariam Al-Mulla",
  "Nawaf Al-Husseini",
  "Hind Al-Najjar",
  "Adel Al-Dabbagh",
  "Hala Al-Khalifa",
  "Majida Al-Mahmoud",
  "Saad Al-Qassimi",
  "Dina Al-Kubaisi",
  "Ali Al-Shaibani",
  "Rania Al-Omari",
  "Yousif Al-Rawahi",
  "Aisha Al-Rashidi",
  "Majid Al-Kubaisi",
  "Amani Al-Qahtani",
  "Hamza Al-Falahi",
  "Aseel Al-Mulla",
  "Tariq Al-Sudairy",
  "Zahra Al-Hajri",
  "Adnan Al-Obaidi",
  "Nadia Al-Hashemi",
  "Zaid Al-Qassimi",
  "Lama Al-Shatti",
  "Maha Al-Attiyah",
  "Fahad Al-Muhannadi",
  "Mariam Al-Ghazal",
  "Hassan Al-Jishi",
  "Leen Al-Asfour",
  "Zaid Al-Dosari",
  "Dima Al-Khouri",
  "Nasser Al-Harbi",
];

const types = [
  "Waste accumulation",
  "Violating Speed Bumps",
  "Street Cracks",
  "Street lights out",
  "Missing Manholes",
  "Street potholes",
  "Construction waste",
  "Maintenance waste",
];

const statuses = [
  "Completed",
  "Failed",
  "In Progress",
  "Incomplete",
  "Pending",
];

for (let i = 1; i <= 188; i++) {
  const randomAdminName =
    adminNames[Math.floor(Math.random() * adminNames.length)];
  const randomType = types[Math.floor(Math.random() * types.length)];
  const randomCost = parseFloat((Math.random() * (1435 - 50) + 50).toFixed(2));
  const randomDateScheduled = new Date(
    2023,
    3,
    Math.floor(Math.random() * 30) + 1
  );
  const randomDeadline = new Date(2023, 4, Math.floor(Math.random() * 31) + 1);
  const randomStatus = statuses[Math.floor(Math.random() * statuses.length)];
  const data = {
    id: (i + 100) * 13,
    admin: randomAdminName,
    type: randomType,
    cost: randomCost,
    dateScheduled: DateFormatterEn(randomDateScheduled),
    deadline: DateFormatterEn(randomDeadline),
    status: randomStatus,
  };
  taskMockData.push(data);
}
