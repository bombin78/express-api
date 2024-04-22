# Ниже идут инструкции по сборке Docker-образа

# Образ Alpine Linux с версией node 20.11.1
FROM node:20.11.1-alpine

# Рабочая директория
# В ней будут выполняться остальные команды
WORKDIR /app

# Копирование файлов package*.json в контейнер
# (в папку app) и установка зависимостей
COPY package.json package-lock.json ./
RUN npm install

# Копирование приложения в контейнер (в папку app)
COPY . ./

# Усатановка Prisma
RUN npm install -g prisma

# Создание Prisma client
RUN prisma generate

# Копирование Prisma schema в контейнер (в папку app/prisma)
COPY prisma/schema.prisma ./prisma/

# Порт в контейнере
EXPOSE 3000

# Запуск сервера
# Инструкция CMD отличается от инструкции RUN тем, что 
# она выполняет команды во время запуска контейнера,
# а не в момент сборки образа:
CMD ["npm", "start"]
