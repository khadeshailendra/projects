-- MySQL dump 10.13  Distrib 8.0.17, for Win64 (x86_64)
--
-- Host: localhost    Database: fitness
-- ------------------------------------------------------
-- Server version	8.0.17

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `dailystatus`
--

DROP TABLE IF EXISTS `dailystatus`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `dailystatus` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(50) NOT NULL,
  `exercise` varchar(50) NOT NULL,
  `duration` varchar(50) NOT NULL,
  `date` date DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `dailystatus`
--

LOCK TABLES `dailystatus` WRITE;
/*!40000 ALTER TABLE `dailystatus` DISABLE KEYS */;
INSERT INTO `dailystatus` VALUES (13,'vinodh','3','5','2020-06-11'),(14,'vinodh','5','2','2020-06-11'),(15,'vinodh','6','1','2020-06-11');
/*!40000 ALTER TABLE `dailystatus` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `exercise`
--

DROP TABLE IF EXISTS `exercise`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `exercise` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  `description` text NOT NULL,
  `duration` decimal(4,0) NOT NULL,
  `reps` decimal(5,0) NOT NULL,
  `sets` decimal(3,0) NOT NULL,
  `calrange1` decimal(5,0) NOT NULL,
  `calrange2` decimal(5,0) NOT NULL,
  `calrange3` decimal(5,0) NOT NULL,
  `difficulty` varchar(50) NOT NULL,
  `bodypart` varchar(100) NOT NULL,
  `equipment` varchar(30) NOT NULL,
  `imagefile` varchar(50) NOT NULL,
  `videofile` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `exercise`
--

LOCK TABLES `exercise` WRITE;
/*!40000 ALTER TABLE `exercise` DISABLE KEYS */;
INSERT INTO `exercise` VALUES (1,'Running','Strength work is the backbone of great endurance training. These running-specific exercises will help you build strength, agility and explosiveness.',20,1,1,9,12,14,'Beginner','Legs, Tighs, Back and Core','None','run.jpg','running.mp4'),(2,'Supermans Exercise','Who doesn\'t want to think they have super powers?  Great stretch as well when you picture trying to touch the opposing walls with your fingers and toes.',10,1,1,9,12,14,'Beginner','Back, Butt/Hips, Shoulders','No Equipment','supermans.jpg','superman.mp4'),(3,'Push ups','The Push-up is an oldie but goodie.  You can modify intensity by changing hand placement.',15,10,3,9,12,15,'Beginner','Arms, Chest, Shoulders','No Equipment','pushups.jpg','pushups.mp4'),(4,'Downward Facing Dog','Slow and controlled movement very important – wonderful calf stretch.',10,1,3,7,10,12,'Beginner','Arms, Chest, Shoulders','No Equipment','downward.jpg','downward.mp4'),(5,'Front Plank','This is harder than it looks!  Your back and abs will love you. ',10,1,3,10,12,16,'Intermediate','Abs, Back','No Equipment','frontplank.jpg','frontplank.mp4'),(6,'Side Plank','Great way to add in hips work without the need for any equipment other than your own body weight.',12,1,3,7,10,14,'Beginner','Abs, Butt/Hips','No Equipment','sideplank.jpg','sideplank.mp4'),(7,'Forward Lunge','If I could only do one leg exercise for the rest of my life, a lunge would be my choice.',8,1,2,10,13,17,'Beginner','Abs, Butt/Hips, Legs - Thighs','No Equipment','forwardlunge.jpg','forwardlunge.mp4'),(8,'Hammer Curl','This curl is performed simultaneously with dumbbells but without wrist supination',20,30,4,4,8,10,'Beginner','Arms','Dumbells','hammercurl.jpg','hammercurl.mp4');
/*!40000 ALTER TABLE `exercise` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `profile`
--

DROP TABLE IF EXISTS `profile`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `profile` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(50) NOT NULL,
  `height` varchar(50) DEFAULT NULL,
  `weight` int(11) DEFAULT NULL,
  `age` int(11) DEFAULT NULL,
  `address` text,
  `subscription` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `profile`
--

LOCK TABLES `profile` WRITE;
/*!40000 ALTER TABLE `profile` DISABLE KEYS */;
INSERT INTO `profile` VALUES (1,'akhtar',NULL,NULL,NULL,NULL,NULL),(2,'bennet',NULL,NULL,NULL,NULL,NULL),(3,'faisal',NULL,NULL,NULL,NULL,NULL),(4,'johnson',NULL,NULL,NULL,NULL,NULL),(5,'kirsten',NULL,NULL,NULL,NULL,NULL),(6,'madhur',NULL,NULL,NULL,NULL,NULL),(7,'peterson',NULL,NULL,NULL,NULL,NULL),(8,'ramkiran',NULL,NULL,NULL,NULL,NULL),(9,'shawn',NULL,NULL,NULL,NULL,NULL),(10,'subhash',NULL,NULL,NULL,NULL,NULL),(11,'suman',NULL,NULL,NULL,NULL,NULL),(12,'suraj',NULL,NULL,NULL,NULL,NULL),(13,'vinodh','5 ft 8 inches',150,32,'Kent Street, First Lane, Saint Louis','Muscle Building');
/*!40000 ALTER TABLE `profile` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `progress`
--

DROP TABLE IF EXISTS `progress`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `progress` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(50) NOT NULL,
  `date` date DEFAULT NULL,
  `weight` int(11) DEFAULT NULL,
  `calories` int(11) DEFAULT NULL,
  `status` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `progress`
--

LOCK TABLES `progress` WRITE;
/*!40000 ALTER TABLE `progress` DISABLE KEYS */;
INSERT INTO `progress` VALUES (3,'vinodh','2020-06-11',150,94,'incomplete'),(4,'vinodh','2020-06-10',148,98,'complete'),(5,'vinodh','2020-06-09',144,122,'complete'),(6,'vinodh','2020-06-08',146,162,'complete'),(7,'vinodh','2020-06-06',147,132,'complete'),(9,'vinodh','2020-06-05',144,192,'complete'),(10,'vinodh','2020-06-03',114,162,'complete');
/*!40000 ALTER TABLE `progress` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(64) NOT NULL,
  `password` varchar(64) NOT NULL,
  `email` varchar(80) NOT NULL,
  `created` datetime NOT NULL,
  `role` text NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `username` (`username`),
  UNIQUE KEY `ix_users_email` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'vinodh','password@123','vinodh@gmail.com','2020-06-07 06:48:27','user'),(2,'ramkiran','pass@123','ramkiran@gmail.com','2020-06-07 18:20:14','user'),(3,'suman','pass@123','suman@gmail.com','2020-06-07 18:28:05','user'),(4,'johnson','pass@123','johnson@gmail.com','2020-06-07 18:30:25','user'),(5,'madhur','pass@123','madhur@gmail.com','2020-06-07 18:43:58','user'),(6,'faisal','pass@123','faisal@gmail.com','2020-06-07 18:46:05','user'),(7,'akhtar','pass@123','akhtar@gmail.com','2020-06-07 18:48:40','user'),(8,'subhash','pass@123','subhash@gmail.com','2020-06-07 18:49:21','user'),(9,'peterson','pass@123','peterson@gmail.com','2020-06-07 20:25:35','user'),(10,'kirsten','pass@123','kirsten@gmail.com','2020-06-07 20:27:43','admin'),(11,'bennet','fitnessadmin','bennet@fitnesstracker.com','2020-06-08 22:18:29','admin'),(12,'suraj','fitnessadmin','suraj@fitnesstracker.com','2020-06-08 22:20:06','admin'),(13,'shawn','fitnessadmin','shawn@fitnesstracker.com','2020-06-08 22:22:37','admin');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `workout`
--

DROP TABLE IF EXISTS `workout`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `workout` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  `description` text NOT NULL,
  `weeks` decimal(5,0) NOT NULL,
  `days` decimal(5,0) NOT NULL,
  `imagefile` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `workout`
--

LOCK TABLES `workout` WRITE;
/*!40000 ALTER TABLE `workout` DISABLE KEYS */;
INSERT INTO `workout` VALUES (1,'Fat Loss','Tired of spending hours in the gym without getting the results you want? Try the Fast Shred program; a compound set workout to get you shredded & on your way!',6,35,'fatloss.png'),(5,'Muscle Building','No equipment or gym? No problem. Build muscle at home with this classic bodyweight training system. This is a flexible training system that focuses on the use of exercise complexes.',6,34,'muscle.jpg'),(6,'Abs Workouts','Far too many lifters get core training completely wrong. Instead of following the advice of the masses, check out these 4 workouts for stronger abs.',4,20,'abs.jpg');
/*!40000 ALTER TABLE `workout` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `workoutmap`
--

DROP TABLE IF EXISTS `workoutmap`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `workoutmap` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `workoutid` int(11) NOT NULL,
  `exerciseid` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `wk-fkk` (`workoutid`),
  KEY `ex-fkk` (`exerciseid`),
  CONSTRAINT `ex-fkk` FOREIGN KEY (`exerciseid`) REFERENCES `exercise` (`id`),
  CONSTRAINT `wk-fkk` FOREIGN KEY (`workoutid`) REFERENCES `workout` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `workoutmap`
--

LOCK TABLES `workoutmap` WRITE;
/*!40000 ALTER TABLE `workoutmap` DISABLE KEYS */;
INSERT INTO `workoutmap` VALUES (1,1,1),(2,1,3),(3,1,4),(4,1,5),(5,5,3),(6,5,5),(7,5,6),(8,5,8),(9,6,3),(10,6,6),(11,6,7),(12,6,8);
/*!40000 ALTER TABLE `workoutmap` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-06-11  9:32:54
