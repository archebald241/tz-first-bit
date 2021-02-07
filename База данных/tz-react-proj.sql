-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- Хост: 127.0.0.1:3306
-- Время создания: Фев 07 2021 г., 10:47
-- Версия сервера: 10.3.13-MariaDB-log
-- Версия PHP: 7.1.32

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База данных: `tz-react-proj`
--

-- --------------------------------------------------------

--
-- Структура таблицы `element`
--

CREATE TABLE `element` (
  `id` int(11) NOT NULL,
  `id_section` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `data_create` date NOT NULL,
  `data_change` date NOT NULL,
  `type` varchar(50) NOT NULL,
  `content` varchar(1024) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `element`
--

INSERT INTO `element` (`id`, `id_section`, `name`, `data_create`, `data_change`, `type`, `content`) VALUES
(1, 1, 'Кросовки', '2021-02-06', '2021-02-06', 'Товар', 'Хороши и удобные кросовки.\r\nЦена: 6500р.'),
(2, 1, 'Кофта', '2021-02-06', '2021-02-06', 'Товар', 'Телпая кофта из мягких материалов.\r\nЦена: 3500р.'),
(3, 2, 'Молоко', '2021-02-06', '2021-02-06', 'Товар', 'Свежее молоко.\r\nЦена: 67р.'),
(4, 2, 'Сыр', '2021-02-06', '2021-02-06', 'Товар', 'Молочный сыр. Российский.\r\nЦена: 250р./кг.');

-- --------------------------------------------------------

--
-- Структура таблицы `section`
--

CREATE TABLE `section` (
  `id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `date_create` date NOT NULL,
  `date_change` date NOT NULL,
  `description` varchar(1024) NOT NULL,
  `id_parent` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `section`
--

INSERT INTO `section` (`id`, `name`, `date_create`, `date_change`, `description`, `id_parent`) VALUES
(1, 'Одежда', '2021-02-06', '2021-02-06', 'Эта категория включает в себя каталог одежды.', NULL),
(2, 'Продукты', '2021-02-06', '2021-02-06', 'В этом каталоге содержится информация о продуктах питания.', NULL);

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `element`
--
ALTER TABLE `element`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_section` (`id_section`);

--
-- Индексы таблицы `section`
--
ALTER TABLE `section`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `id` (`id`);

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `element`
--
ALTER TABLE `element`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT для таблицы `section`
--
ALTER TABLE `section`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- Ограничения внешнего ключа сохраненных таблиц
--

--
-- Ограничения внешнего ключа таблицы `element`
--
ALTER TABLE `element`
  ADD CONSTRAINT `element_ibfk_1` FOREIGN KEY (`id_section`) REFERENCES `section` (`id`) ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
