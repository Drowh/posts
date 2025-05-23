# Posts

[![Live Demo](https://img.shields.io/badge/✨_Live_Demo-Visit_Site-blue?style=for-the-badge)](https://drowh.github.io/posts/)

Приложение для просмотра и управления постами с интуитивным интерфейсом и удобной навигацией. Позволяет просматривать публикации, создавать новые посты, редактировать существующие и работать с профилем пользователя.

## 🚀 Технологии

- **React 19** — современный UI фреймворк
- **Redux Toolkit** — управление состоянием приложения
- **React Router DOM v7** — маршрутизация
- **Styled Components** — стилизация компонентов
- **Vite** — сборка проекта
- **React Icons** — библиотека иконок
- **ESLint** — статический анализ кода

## ⚙️ Установка и запуск

### Требования

- Node.js 16.0.0 или выше
- npm 7.0.0 или выше

### Шаги установки

```bash
# Клонирование репозитория
git clone https://github.com/drowh/posts.git
cd posts

# Установка зависимостей
npm install

# Запуск в режиме разработки
npm run dev

# Сборка проекта
npm run build

# Локальный предпросмотр сборки
npm run preview
```

## 📂 Структура проекта

```
src/
├── api/            # API клиенты и интеграции
├── components/     # Компоненты пользовательского интерфейса
│   ├── Posts/      # Компоненты для отображения постов
│   ├── Root/       # Корневой компонент с разметкой страницы
│   └── ui/         # Базовые UI компоненты
├── pages/          # Страницы приложения
│   ├── auth/       # Страница авторизации
│   ├── main/       # Главная страница
│   ├── posts/      # Страницы для работы с постами
│   └── registration/ # Страница регистрации
├── redux/          # Управление состоянием
│   └── slices/     # Redux слайсы
├── App.jsx         # Основной компонент приложения
├── constants.js    # Константы проекта
├── index.css       # Базовые стили
└── main.jsx        # Точка входа приложения
```

## ✨ Возможности

- **Просмотр постов**: просмотр списка постов и детальная информация
- **Управление постами**: создание, редактирование и удаление постов
- **Авторизация**: регистрация и вход в личный кабинет
- **Просмотр свежих публикаций**: отображение последних добавленных постов
- **Отслеживание**: запоминание последнего просмотренного поста

## 🔍 Примеры использования

```jsx
// Получение списка постов
useEffect(() => {
  dispatch(getPosts());
}, [dispatch]);

// Создание нового поста
const handleAddPost = (postData) => {
  dispatch(addPost(postData));
};
```

## ❓ FAQ

**Q: Откуда берутся данные для постов?**  
A: Данные загружаются с JSONPlaceholder API (https://jsonplaceholder.typicode.com/posts).

**Q: Могу ли я использовать приложение без регистрации?**  
A: Да, просмотр постов доступен всем пользователям, но для создания и редактирования может потребоваться авторизация.

## 👨‍💻 Автор

DrowDev

## 📄 License

This project is licensed under the [MIT License](./LICENSE).
