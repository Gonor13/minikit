import type { MiniKitConfig } from "@base-org/minikit";


export const config: MiniKitConfig = {
name: "My Base Mini-App",
description: "Мини-пример для Base через Vercel с подсчётом mint’ов",
version: "0.1.0",
icon: "public/favicon.ico",
accountAssociation: {
// <-- сюда позже вставляете объект из Base Build после деплоя на Vercel
},
web: {
url: "https://your-app.vercel.app" // <- поменяйте на URL после деплоя
}
};
