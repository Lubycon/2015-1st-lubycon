-- ----------------------
-- DATABASE in Lubycon --
-- ----------------------
-- -----------------------------------------------
-- -----------------------------------------------

-- -----------------------------
-- Create Database as lubycon --
-- -----------------------------

DROP DATABASE IF EXISTS lubycon;

CREATE DATABASE IF NOT EXISTS lubycon;

-- ------------------------------------------------
-- ------------------------------------------------

USE lubycon;
-- ------------------------------------------------

-- -----------------
-- TABLE for USER --
-- -----------------

-- ------------------------------------------------

-- ---------------------
-- TABLE as luby_job --
-- ---------------------

DROP TABLE IF EXISTS `luby_job`;

CREATE TABLE IF NOT EXISTS `luby_job`
(
	`job_no` INT UNSIGNED NOT NULL AUTO_INCREMENT,
	`job_name` VARCHAR(255) NOT NULL,
	
	PRIMARY KEY(`job_no`)
	
) ENGINE = InnoDB DEFAULT CHARSET=utf8;

-- ------------------------
-- TABLE as luby_country --
-- ------------------------

DROP TABLE IF EXISTS `luby_country`;

CREATE TABLE IF NOT EXISTS `luby_country`
(
	`country_no` INT UNSIGNED NOT NULL AUTO_INCREMENT,
	`country_name` VARCHAR(255) NOT NULL,
	`country_tel` VARCHAR(10) NOT NULL,
	
	PRIMARY KEY(`country_no`)
	
) ENGINE = InnoDB DEFAULT CHARSET=utf8;




-- ---------------------
-- TABLE as luby_user --
-- ---------------------

DROP TABLE IF EXISTS `luby_user`;

CREATE TABLE IF NOT EXISTS `luby_user`
(
	`user_no` INT UNSIGNED NOT NULL AUTO_INCREMENT,
	`user_date` DATETIME NOT NULL,
	`user_email` VARCHAR(255) NOT NULL,
	`user_nick` VARCHAR(20) NOT NULL,
	`user_pass` VARCHAR(255) NOT NULL,
	`user_val` ENUM('active','inactive','drop') NOT NULL,
	`user_img` TEXT,
	`user_desc` VARCHAR(160),
	`job_no` INT UNSIGNED NOT NULL,
	`country_no` INT UNSIGNED NOT NULL,
	`user_city` VARCHAR(255),
	`user_cell` VARCHAR(20),
	`user_cell_public` ENUM('public', 'followers', 'private') NOT NULL,
	`user_fax` VARCHAR(20),
	`user_fax_public` ENUM('public', 'followers', 'private') NOT NULL,
	`user_web` TEXT,
	`user_web_public` ENUM('public', 'followers', 'private') NOT NULL,
	
	PRIMARY KEY (`user_no`),
	CONSTRAINT `luby_user_to_job` FOREIGN KEY (`job_no`) REFERENCES `luby_job` (`job_no`),
	CONSTRAINT `luby_user_to_country` FOREIGN KEY (`country_no`) REFERENCES `luby_country` (`country_no`)
	
) ENGINE = InnoDB DEFAULT CHARSET=utf8;

-- -------------------------
-- TABLE as luby_favorite --
-- -------------------------

DROP TABLE IF EXISTS `luby_favorite`;

CREATE TABLE IF NOT EXISTS `luby_favorite`
(
	`favorite_no` INT UNSIGNED NOT NULL AUTO_INCREMENT,
	`user_no` INT UNSIGNED NOT NULL,
	`favorite_title` VARCHAR(255),
	`favorite_url` TEXT NOT NULL,
	
	PRIMARY KEY(`favorite_no`),
	CONSTRAINT `luby_favorite_to_user` FOREIGN KEY(`user_no`) REFERENCES `luby_user` (`user_no`)
	
) ENGINE = InnoDB DEFAULT CHARSET=utf8;

-- -------------------------
-- TABLE as luby_follower --
-- -------------------------

DROP TABLE IF EXISTS `luby_follower`;

CREATE TABLE IF NOT EXISTS `luby_follower`
(
	`follower_no` INT UNSIGNED NOT NULL AUTO_INCREMENT,
	`user_no` INT UNSIGNED NOT NULL,
	`follower_user_no` INT UNSIGNED NOT NULL,
	
	PRIMARY KEY(`follower_no`),
	CONSTRAINT `luby_follower_to_user` FOREIGN KEY(`user_no`) REFERENCES `luby_user` (`user_no`)
	
) ENGINE = InnoDB DEFAULT CHARSET=utf8;

-- --------------------------
-- TABLE as luby_following --
-- --------------------------

DROP TABLE IF EXISTS `luby_following`;

CREATE TABLE IF NOT EXISTS `luby_following`
(
	`following_no` INT UNSIGNED NOT NULL AUTO_INCREMENT,
	`user_no` INT UNSIGNED NOT NULL,
	`following_user_no` INT UNSIGNED NOT NULL,
	
	PRIMARY KEY(`following_no`),
	CONSTRAINT `luby_following_to_user` FOREIGN KEY(`user_no`) REFERENCES `luby_user` (`user_no`)
	
) ENGINE = InnoDB DEFAULT CHARSET=utf8;

-- -------------------------
-- TABLE as luby_user_log --
-- -------------------------

DROP TABLE IF EXISTS `luby_user_log`;

CREATE TABLE If NOT EXISTS `luby_user_log`
(
	`log_no` INT UNSIGNED NOT NULL AUTO_INCREMENT,
	`user_no` INT UNSIGNED NOT NULL,
	`log_ip` CHAR(71) NOT NULL,
	`log_ip_category` ENUM('ipv4','ipv6') NOT NULL,
	`log_login_success` ENUM('access', 'deny', 'exception') NOT NULL,
	`log_location` TEXT,
	`log_url` TEXT,
	
	PRIMARY KEY(`log_no`)
	
) ENGINE = InnoDB DEFAULT CHARSET=utf8;

-- --------------------
-- TABLE for USER END--
-- --------------------