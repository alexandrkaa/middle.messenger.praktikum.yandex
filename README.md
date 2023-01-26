# Введение

[`middle.messenger.praktikum.yandex`](https://github.com/alexandrkaa/middle.messenger.praktikum.yandex) — Yandex Practicum messenger.

## Настройка проекта

1. Скачать репозиторий (git clone `URL`)
2. Установить зависимости (npm install в директории проекта)

## Deploy проекта на Heroku

1. docker build -t chat .
   1.1 при сборке контейнера на компьютерах Mac с процессором M1 - руководствоваться [статьей по сборке](https://medium.com/geekculture/from-apple-silicon-to-heroku-docker-registry-without-swearing-36a2f59b30a3)
2. heroku container:push web
3. heroku container:release web

## Запуск и сборка проекта

#### Запуск в режиме разработки

```
npm run dev
```

#### Сборка проекта

```
npm run build-prod
```

#### Запуск проекта

```
npm run start
```

## Используемые инструменты

1. Handlebars
2. Sass
3. TypeScript
4. UUID
5. WebPack
6. Docker

## Реализованный функционал

1. Регистрация, авторизация, обновление профиля
2. Создание, удаление чата, добавление, удаление пользователей в чате
3. Переписка в чатах

## **Ссылка на макет в Figma**

[Макет](https://www.figma.com/file/XC7oYu8NTsgsuO0ijSfJyY/Chat_external_link_MY?node-id=0%3A1)

## **Ссылка на сборку в Heroku**

[https://chat-590.herokuapp.com/](https://chat-590.herokuapp.com//)
