-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Dec 11, 2022 at 07:52 AM
-- Server version: 10.4.21-MariaDB
-- PHP Version: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `ietech`
--

-- --------------------------------------------------------

--
-- Table structure for table `clients`
--

CREATE TABLE `clients` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `image` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `clientName` char(20) COLLATE utf8mb4_unicode_ci NOT NULL,
  `location` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `des` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `content` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `phone` text COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `clients`
--

INSERT INTO `clients` (`id`, `image`, `clientName`, `location`, `des`, `content`, `email`, `phone`) VALUES
(1, '/asset/testi1.png', 'MoonLTD', NULL, 'Client of Company', 'Very well thought out and articulate communication. Clear milestones,deadlines and fast work. Patience. Infinite patience. No shortcuts. Even if the client is being careless. The best part...always solving problems with great original ideas!.', 'MoonLTD@gmail.com', '0123456789'),
(2, '/asset/testi1.png', 'SoftTech', NULL, NULL, 'Patience. Infinite patience. No shortcuts. Very well thought out and articulate communication. Clear milestones, deadlines and fast work. Even if the client is being careless. The best part...always solving problems with great original ideas!.', 'SoftTech@gmail.com', '0123456789'),
(3, '/asset/testid3.png', 'SolarFlare', NULL, NULL, 'Good service, understand client\\\'s idea.', 'SolarFlare@gmail.com', '0123456789'),
(4, '/asset/Bellamy_logo.jpg', 'Bellamy Co', NULL, NULL, 'Very well thought out and articulate communication. Provide unique solution to our problem', 'Bellamy@gmail.com', '0123456789');

-- --------------------------------------------------------

--
-- Table structure for table `contacts`
--

CREATE TABLE `contacts` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `content` text COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `contacts`
--

INSERT INTO `contacts` (`id`, `name`, `email`, `content`) VALUES
(1, 'Nguyễn Văn A', 'nguyenvana@gmail.com', 'Xin chào. Bạn có thể tư vấn thêm về dịch vụ bạn cung cấp không.'),
(2, 'Nguyễn Thị C', 'nguyenthic@gmail.com', 'Xin chào, hiện tại bạn có chương trình giảm giá nào cho các gói dịch vụ không.');

-- --------------------------------------------------------

--
-- Table structure for table `failed_jobs`
--

CREATE TABLE `failed_jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `uuid` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `connection` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `queue` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `payload` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `exception` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(175, '2014_10_12_000000_create_users_table', 1),
(176, '2014_10_12_100000_create_password_resets_table', 1),
(177, '2019_08_19_000000_create_failed_jobs_table', 1),
(178, '2019_12_14_000001_create_personal_access_tokens_table', 1),
(179, '2022_12_01_123107_create_services_table', 1),
(180, '2022_12_01_123242_create_plans_table', 1),
(181, '2022_12_01_123834_create_orders_table', 1),
(182, '2022_12_01_124142_create_clients_table', 1),
(183, '2022_12_01_124149_create_contacts_table', 1),
(184, '2022_12_06_064618_create_payments_table', 1);

-- --------------------------------------------------------

--
-- Table structure for table `orders`
--

CREATE TABLE `orders` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `user_id` bigint(20) UNSIGNED NOT NULL,
  `plan_id` bigint(20) UNSIGNED NOT NULL,
  `duration` int(11) NOT NULL,
  `total` double NOT NULL,
  `order_date` datetime NOT NULL,
  `status` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `orders`
--

INSERT INTO `orders` (`id`, `user_id`, `plan_id`, `duration`, `total`, `order_date`, `status`) VALUES
(1, 1, 2, 3, 479.97, '2022-12-10 17:45:00', 'Hoàn thành'),
(2, 1, 4, 1, 129.99, '2022-12-10 17:45:10', 'Hoàn thành'),
(3, 1, 7, 12, 539.89, '2022-12-10 17:45:23', 'Hoàn thành'),
(4, 2, 3, 3, 569.97, '2022-12-10 17:46:18', 'Hoàn thành'),
(5, 2, 9, 3, 389.97, '2022-12-10 17:46:29', 'Hoàn thành'),
(6, 2, 5, 3, 479.97, '2022-12-10 17:46:40', 'Hoàn thành'),
(7, 3, 1, 12, 1403.89, '2022-12-10 17:47:10', 'Hoàn thành'),
(8, 3, 7, 1, 49.99, '2022-12-10 17:47:18', 'Hoàn thành'),
(9, 3, 3, 1, 189.99, '2022-12-10 17:47:29', 'Hoàn thành'),
(10, 7, 2, 12, 1727.89, '2022-12-10 17:48:04', 'Hoàn thành'),
(11, 7, 4, 1, 129.99, '2022-12-10 17:48:17', 'Hoàn thành'),
(12, 7, 7, 1, 49.99, '2022-12-10 17:48:28', 'Hoàn thành'),
(13, 4, 9, 12, 1403.89, '2022-12-10 17:48:53', 'Hoàn thành'),
(14, 4, 5, 3, 479.97, '2022-12-10 17:49:34', 'Hoàn thành'),
(15, 4, 1, 3, 389.97, '2022-12-10 17:50:10', 'Hoàn thành'),
(16, 5, 1, 12, 1403.89, '2022-12-10 17:50:44', 'Hoàn thành'),
(17, 5, 4, 1, 129.99, '2022-12-10 17:50:53', 'Hoàn thành'),
(18, 5, 7, 1, 49.99, '2022-12-10 17:51:00', 'Hoàn thành'),
(19, 8, 1, 3, 389.97, '2022-12-10 17:51:20', 'Hoàn thành'),
(20, 8, 5, 3, 479.97, '2022-12-10 17:51:27', 'Hoàn thành'),
(21, 8, 7, 3, 149.97, '2022-12-10 17:51:38', 'Hoàn thành');

-- --------------------------------------------------------

--
-- Table structure for table `password_resets`
--

CREATE TABLE `password_resets` (
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `payments`
--

CREATE TABLE `payments` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `user_id` bigint(20) UNSIGNED NOT NULL,
  `amount` double NOT NULL,
  `date` datetime NOT NULL,
  `account_number` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `test` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `payments`
--

INSERT INTO `payments` (`id`, `user_id`, `amount`, `date`, `account_number`, `test`) VALUES
(1, 1, 2000, '2022-12-08 00:00:00', '1234567890', 1),
(2, 2, 2000, '2022-12-02 00:00:00', '1234567890', 1),
(3, 3, 2000, '2022-12-09 00:00:00', '1234567890', 1),
(4, 4, 2000, '2022-12-09 00:00:00', '1234567890', 1),
(5, 4, 1000, '2022-12-09 00:00:00', '1234567890', 1),
(6, 5, 2000, '2022-12-09 00:00:00', '1234567890', 1),
(7, 6, 2000, '2022-12-15 00:00:00', '1234567890', 0),
(8, 6, 1000, '2022-11-30 00:00:00', '1234567890', 1),
(9, 7, 2000, '2022-12-08 00:00:00', '1234567890', 1),
(10, 8, 2000, '2022-12-09 00:00:00', '1234567890', 1),
(11, 1, 2000, '2022-12-16 00:00:00', '1234567890', 0);

-- --------------------------------------------------------

--
-- Table structure for table `personal_access_tokens`
--

CREATE TABLE `personal_access_tokens` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `tokenable_type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `tokenable_id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(64) COLLATE utf8mb4_unicode_ci NOT NULL,
  `abilities` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `expires_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `plans`
--

CREATE TABLE `plans` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `price` double NOT NULL,
  `service_id` bigint(20) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `plans`
--

INSERT INTO `plans` (`id`, `name`, `description`, `price`, `service_id`) VALUES
(1, 'Basic', '100 GB lưu trữ, Machine và Deep learing, Giám sát hệ thống 24/7, Không quản lý chất lượng dữ liệu, Không quản lý bào mật', 129.99, 1),
(2, 'Economy', '1 TB lưu trữ, Machine và Deep learing, Giám sát hệ thống 24/7, Quản lý chất lượng dữ liệu, Không quản lý bảo mật', 159.99, 1),
(3, 'Pro', 'Không giới hạn lưu trữ, Machine và Deep learing, Giám sát hệ thống 24/7, Quản lý chất lượng dữ liệu, Quản lý bảo mật', 189.99, 1),
(4, 'Basic', 'SSL miễn phí 1 năm, 1 website, 20 GB lưu trữ, 100 GB băng thông, Hiệu năng chuẩn, Miễn phí CDN, SEO, Giám sát hệ thống 24/7', 129.99, 2),
(5, 'Economy', 'SSL miễn phí, Không giới hạn website, 100 GB lưu trữ, Không giới hạn băng thông, Hiệu năng chuẩn, Miễn Phí CDN, SEO, Giám sát hệ thống 24/7', 159.99, 2),
(6, 'Pro', 'SSL miễn phí, Không giới hạn website, Không giới hạn lưu trữ, Không giới hạn băng thông, Hiệu năng cao, Miễn Phí CDN, SEO, Giám sát hệ thống 24/7', 189.99, 2),
(7, 'Basic', '20 GB, Machine và Deep learing, Giám sát hệ thống 24/7, Không quản lý chất lượng dữ liệu, Không quản lý bào mật', 49.99, 3),
(8, 'Economy', '100 GB lưu trữMachine và Deep learing, Giám sát hệ thống 24/7, Quản lý chất lượng dữ liệu, Không quản lý bào mật', 99.99, 3),
(9, 'Pro', 'Không giới hạn lưu trữ, Machine và Deep learing, Giám sát hệ thống 24/7, Quản lý chất lượng dữ liệu, Quản lý bào mật', 129.99, 3);

-- --------------------------------------------------------

--
-- Table structure for table `services`
--

CREATE TABLE `services` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `services`
--

INSERT INTO `services` (`id`, `name`) VALUES
(1, 'IT'),
(2, 'Web development'),
(3, 'Mobile development');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `phone` varchar(10) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `address` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `avatar` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `balance` double NOT NULL DEFAULT 0,
  `is_admin` tinyint(1) NOT NULL DEFAULT 0,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `email_verified_at`, `password`, `remember_token`, `phone`, `address`, `avatar`, `balance`, `is_admin`, `created_at`, `updated_at`) VALUES
(1, 'Cư Hoàng Ngọc', 'cuhoangng@gmail.com', '2022-12-10 21:39:40', '$2y$10$.Ygs1Xq/xwz.19cmOSr2/uZyqjV2lAn8eW4HwKLDsY6WJjW5UxMLS', 'fYQR7lGTZbT3jprlzU04JCMq83IVFEUAVwhu5l7YNsIeKpqNIu53Pui4Kfs9', NULL, NULL, NULL, 850.15, 1, '2022-12-09 20:34:27', '2022-12-10 21:39:40'),
(2, 'Nguyễn Gia Huy', 'nguyengiahuy@gmail.com', NULL, '$2y$10$EF0uh4.Z7baZyYHmvqUa2exqAjSLdUNQUqr/P11P29hd4USfn0BBe', NULL, '0123456789', 'Thủ Đức', NULL, 560.0899999999999, 0, '2022-12-09 20:36:01', '2022-12-09 20:36:01'),
(3, 'Vũ Tùng Lâm', 'vutunglam@gmail.com', NULL, '$2y$10$zwca20x6zPBrS5BwXo1hN.2MVzUUc9rkoGALP.OHXTqugRcrNNzCq', NULL, NULL, NULL, NULL, 356.1299999999999, 0, '2022-12-09 20:36:50', '2022-12-09 20:36:50'),
(4, 'Thanh Trà', 'thanhtra@gmail.com', NULL, '$2y$10$SuIf4/SQvcnGXC2aN6k4tO2HnH1LWh2WMx.jeAu0VEEgoSiK4zePW', NULL, NULL, NULL, NULL, 726.1699999999998, 0, '2022-12-09 20:37:33', '2022-12-09 20:37:33'),
(5, 'Đức Duy', 'ducduy@gmail.com', NULL, '$2y$10$Ewo4Pr/2.Wa89F2oFIVoWe6C9sZcX6nqVG7pf8.wkKkaDa7rrbEJK', NULL, NULL, NULL, NULL, 416.1299999999999, 0, '2022-12-09 20:38:30', '2022-12-09 20:38:30'),
(6, 'Tiến Đạt', 'tiendat@gmail.com', NULL, '$2y$10$atlHZCT.LFWCDBK/B2y2wu1nMf.dQMCDq5g5LOQtm1zKhJRF.81MC', NULL, '0123456788', 'Bình Dương', NULL, 1000, 0, '2022-12-09 20:39:19', '2022-12-09 20:39:19'),
(7, 'Anh Tuấn', 'anhtuan@gmail.com', NULL, '$2y$10$K.QX8mFwTuAGeg4B4zD.VOKUoO6Sk13HtxXOA98KGel41Doyu7YBO', NULL, NULL, NULL, NULL, 92.12999999999988, 0, '2022-12-09 20:40:11', '2022-12-09 20:40:11'),
(8, 'Cư Hoàng Ngọc', '20520145@gm.uit.edu.vn', NULL, '$2y$10$gUn3rFIoXbfMVYKxOwPUF.IXJBUOswE0YlaX3ujUYGlF8mQMh4Dli', NULL, NULL, NULL, NULL, 980.0899999999999, 0, '2022-12-09 20:41:00', '2022-12-09 20:41:00');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `clients`
--
ALTER TABLE `clients`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `contacts`
--
ALTER TABLE `contacts`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`);

--
-- Indexes for table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`id`),
  ADD KEY `orders_user_id_foreign` (`user_id`),
  ADD KEY `orders_plan_id_foreign` (`plan_id`);

--
-- Indexes for table `password_resets`
--
ALTER TABLE `password_resets`
  ADD KEY `password_resets_email_index` (`email`);

--
-- Indexes for table `payments`
--
ALTER TABLE `payments`
  ADD PRIMARY KEY (`id`),
  ADD KEY `payments_user_id_foreign` (`user_id`);

--
-- Indexes for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  ADD KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`);

--
-- Indexes for table `plans`
--
ALTER TABLE `plans`
  ADD PRIMARY KEY (`id`),
  ADD KEY `plans_service_id_foreign` (`service_id`);

--
-- Indexes for table `services`
--
ALTER TABLE `services`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `clients`
--
ALTER TABLE `clients`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `contacts`
--
ALTER TABLE `contacts`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=185;

--
-- AUTO_INCREMENT for table `orders`
--
ALTER TABLE `orders`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;

--
-- AUTO_INCREMENT for table `payments`
--
ALTER TABLE `payments`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `plans`
--
ALTER TABLE `plans`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `services`
--
ALTER TABLE `services`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `orders`
--
ALTER TABLE `orders`
  ADD CONSTRAINT `orders_plan_id_foreign` FOREIGN KEY (`plan_id`) REFERENCES `plans` (`id`),
  ADD CONSTRAINT `orders_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);

--
-- Constraints for table `payments`
--
ALTER TABLE `payments`
  ADD CONSTRAINT `payments_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);

--
-- Constraints for table `plans`
--
ALTER TABLE `plans`
  ADD CONSTRAINT `plans_service_id_foreign` FOREIGN KEY (`service_id`) REFERENCES `services` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
