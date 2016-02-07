-- ---------------------------
-- ------- CREATE USER -------
-- ---------------------------

-- use database

USE mysql;

-- create user

-- --------------------------
-- ----- Information --------
-- --------------------------

-- user name : Lubycon
-- user pass : hmdwdgdhkr2015
-- empty space for addtional information

GRANT USAGE ON lubycon.* TO lubycon@'%' IDENTIFIED BY 'hmdwdgdhkr2015';
GRANT SELECT, INSERT, UPDATE ON lubycon.* TO lubycon@'%';
