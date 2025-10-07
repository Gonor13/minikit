import { useEffect, useState } from "react";


export default function Home() {
const [mintCount, setMintCount] = useState<number | null>(null);
const [loading, setLoading] = useState(false);


const fetchMintCount = async () => {
setLoading(true);
try {
// Замените на реальный API Base с вашим projectId или адресом NFT
const res = await fetch("https://api.base.org/mint-count?projectId=YOUR_PROJECT_ID");
const data = (await res.json()) as any;
setMintCount(data.count);
} catch (err) {
console.error("Ошибка при получении количества mint’ов:", err);
setMintCount(null);
}
setLoading(false);
};


useEffect(() => {
fetchMintCount();
}, []);


return (
<div style={{ textAlign: "center", marginTop: "50px" }}>
<h1>My Base Mini-App 🚀</h1>
<p>Количество заминтлено:</p>
{loading ? (
<p>Загрузка...</p>
) : mintCount !== null ? (
<h2>{mintCount}</h2>
) : (
<p>Не удалось загрузить данные</p>
)}
<button onClick={fetchMintCount} style={{ marginTop: "20px" }}>
Обновить
</button>
</div>
);
}
