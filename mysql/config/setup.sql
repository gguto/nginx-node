CREATE DATABASE IF NOT EXISTS nodedb;
CREATE TABLE IF NOT EXISTS `nodedb`.`people` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `nome` VARCHAR(255) NOT NULL  
);