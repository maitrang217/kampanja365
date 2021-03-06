-- phpMyAdmin SQL Dump
-- version 3.5.7
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Dec 12, 2014 at 12:23 PM
-- Server version: 5.5.29
-- PHP Version: 5.4.10

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";

--
-- Database: `demo_365`
--

-- --------------------------------------------------------

--
-- Table structure for table `day`
--

CREATE TABLE `day` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `day_order` varchar(255) DEFAULT NULL,
  `featured_image` varchar(255) DEFAULT NULL,
  `featured_content` text,
  `title` text,
  `content` longtext,
  `className` varchar(255) DEFAULT NULL,
  `type` varchar(255) DEFAULT NULL,
  `story_id` int(11) NOT NULL,
  `created` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=334 ;

--
-- Dumping data for table `day`
--

INSERT INTO `day` (`id`, `day_order`, `featured_image`, `featured_content`, `title`, `content`, `className`, `type`, `story_id`, `created`) VALUES
(223, '001', '971136_544559608916005_1683706524_n.jpg', '', '', '', 'brick11', 'image', 0, '2014-12-08 10:30:25'),
(224, '002', '10246500_692046384167326_7971373789283007336_n.jpg', '', '', '', 'brick11', 'image', 0, '2014-12-08 10:30:25'),
(225, '003', '10167934_713021782069786_171598109337905125_n.jpg', '', '', '', 'brick11', 'image', 0, '2014-12-08 10:30:25'),
(226, '004', '559690_578677515504214_558938335_n.png', '', '', '', 'brick11', 'image', 0, '2014-12-08 10:30:25'),
(227, '005', '1908398_764251873613443_6818033479476963944_n.jpg', '', '', '', 'brick11', 'image', 0, '2014-12-08 10:30:25'),
(228, '006', '10527329_740506929321271_3478314613386713551_n.jpg', '', '', '', 'brick11', 'image', 0, '2014-12-08 10:30:25'),
(229, '007', '1560615_664638036908161_263576461_n.jpg', '', '', '', 'brick11', 'image', 0, '2014-12-08 10:30:25'),
(230, '008', '1484193_640166366021995_2085690350_n.jpg', '', '', '', 'brick11', 'image', 0, '2014-12-08 10:30:25'),
(231, '009', '1908398_764251873613443_6818033479476963944_n.jpg', '', '', '', 'brick11', 'image', 0, '2014-12-08 10:30:25'),
(232, '', 'Salsa_snack_wrap.png', '<h2 class="col-3">Lataa <strong>mobiiliedut</strong> käyttöösi</h2>', '', '', 'brick21 dynamic', 'text', 0, '2014-12-08 10:30:25'),
(233, '011', '1908398_764251873613443_6818033479476963944_n.jpg', '', '', '', 'brick11', 'image', 0, '2014-12-08 10:30:25'),
(234, '012', '10527329_740506929321271_3478314613386713551_n.jpg', '', '', '', 'brick11', 'image', 0, '2014-12-08 10:30:25'),
(235, '013', '1560615_664638036908161_263576461_n.jpg', '', '', '', 'brick11', 'image', 0, '2014-12-08 10:30:25'),
(236, '014', '1484193_640166366021995_2085690350_n.jpg', '', '', '', 'brick11', 'image', 0, '2014-12-08 10:30:25'),
(237, '015', 'm__kkilanssi.jpg', '', '', '', 'brick11', 'image', 0, '2014-12-08 10:30:25'),
(238, '016', '1477346_632866016752030_209958847_n.jpg', '', '', '', 'brick11', 'image', 0, '2014-12-08 10:30:25'),
(239, '017', '1484193_640166366021995_2085690350_n.jpg', '', '', '', 'brick11', 'image', 0, '2014-12-08 10:30:25'),
(240, '018', '10322432_701713199867311_3980864984261362709_n.jpg', '', '', '', 'brick22', 'image', 0, '2014-12-08 10:30:25'),
(241, '019', '971136_544559608916005_1683706524_n.jpg', '', '', '', 'brick11', 'image', 0, '2014-12-08 10:30:25'),
(242, '020', '10246500_692046384167326_7971373789283007336_n.jpg', '', '', '', 'brick11', 'image', 0, '2014-12-08 10:30:25'),
(243, '021', '10167934_713021782069786_171598109337905125_n.jpg', '', '', '', 'brick11', 'image', 0, '2014-12-08 10:30:25'),
(244, '022', '559690_578677515504214_558938335_n.png', '', '', '', 'brick11', 'image', 0, '2014-12-08 10:30:25'),
(245, '023', '1908398_764251873613443_6818033479476963944_n.jpg', '', '', '', 'brick11', 'image', 0, '2014-12-08 10:30:25'),
(246, '024', '10527329_740506929321271_3478314613386713551_n.jpg', '', '', '', 'brick11', 'image', 0, '2014-12-08 10:30:25'),
(247, '025', '1560615_664638036908161_263576461_n.jpg', '', '', '', 'brick11', 'image', 0, '2014-12-08 10:30:25'),
(248, '026', '1484193_640166366021995_2085690350_n.jpg', '', '', '', 'brick11', 'image', 0, '2014-12-08 10:30:25'),
(249, '', 'Salsa_snack_wrap.png', '<h2 class="col-3">Lataa <strong>mobiiliedut</strong> käyttöösi</h2>', '', '', 'brick21 dynamic', 'text', 0, '2014-12-08 10:30:25'),
(250, '028', '1908398_764251873613443_6818033479476963944_n.jpg', '', '', '', 'brick11', 'image', 0, '2014-12-08 10:30:25'),
(251, '029', '1908398_764251873613443_6818033479476963944_n.jpg', '', '', '', 'brick11', 'image', 0, '2014-12-08 10:30:25'),
(252, '030', '1908398_764251873613443_6818033479476963944_n.jpg', '', '', '', 'brick11', 'image', 0, '2014-12-08 10:30:25'),
(253, '031', '10527329_740506929321271_3478314613386713551_n.jpg', '', '', '', 'brick11', 'image', 0, '2014-12-08 10:30:25'),
(254, '032', '1560615_664638036908161_263576461_n.jpg', '', '', '', 'brick11', 'image', 0, '2014-12-08 10:30:25'),
(255, '033', '1484193_640166366021995_2085690350_n.jpg', '', '', '', 'brick11', 'image', 0, '2014-12-08 10:30:25'),
(256, '034', 'm__kkilanssi.jpg', '', '', '', 'brick11', 'image', 0, '2014-12-08 10:30:25'),
(257, '035', '1477346_632866016752030_209958847_n.jpg', '', '', '', 'brick11', 'image', 0, '2014-12-08 10:30:25'),
(258, '036', '1484193_640166366021995_2085690350_n.jpg', '', '', '', 'brick11', 'image', 0, '2014-12-08 10:30:25'),
(259, '037', '10322432_701713199867311_3980864984261362709_n.jpg', '', '', '', 'brick11', 'image', 0, '2014-12-08 10:30:25'),
(260, '038', '971136_544559608916005_1683706524_n.jpg', '', '', '', 'brick11', 'image', 0, '2014-12-08 10:30:25'),
(261, '039', '10246500_692046384167326_7971373789283007336_n.jpg', '', '', '', 'brick11', 'image', 0, '2014-12-08 10:30:25'),
(262, '040', '10167934_713021782069786_171598109337905125_n.jpg', '', '', '', 'brick11', 'image', 0, '2014-12-08 10:30:25'),
(263, '', 'Salsa_snack_wrap.png', '<h2 class="col-3">Lataa <strong>mobiiliedut</strong> käyttöösi</h2>', '', '', 'brick21 dynamic', 'text', 0, '2014-12-08 10:30:25'),
(264, '042', '971136_544559608916005_1683706524_n.jpg', '', '', '', 'brick11', 'image', 0, '2014-12-08 10:30:25'),
(265, '043', '10246500_692046384167326_7971373789283007336_n.jpg', '', '', '', 'brick11', 'image', 0, '2014-12-08 10:30:25'),
(266, '044', '10167934_713021782069786_171598109337905125_n.jpg', '', '', '', 'brick11', 'image', 0, '2014-12-08 10:30:25'),
(267, '045', '942108_552578841447415_2016618974_n.jpg', '', '', '', 'brick11', 'image', 0, '2014-12-08 10:30:25'),
(268, '046', '564741_689095614462403_951435238_n.jpg', '', '', '', 'brick11', 'image', 0, '2014-12-08 10:30:25'),
(269, '047', '559690_578677515504214_558938335_n.png', '', '', '', 'brick11', 'image', 0, '2014-12-08 10:30:25'),
(270, '048', '1908398_764251873613443_6818033479476963944_n.jpg', '', '', '', 'brick11', 'image', 0, '2014-12-08 10:30:25'),
(271, '049', '10527329_740506929321271_3478314613386713551_n.jpg', '', '', '', 'brick11', 'image', 0, '2014-12-08 10:30:25'),
(272, '050', '1560615_664638036908161_263576461_n.jpg', '', '', '', 'brick11', 'image', 0, '2014-12-08 10:30:25'),
(273, '051', '1484193_640166366021995_2085690350_n.jpg', '', '', '', 'brick11', 'image', 0, '2014-12-08 10:30:25'),
(274, '052', 'm__kkilanssi.jpg', '', '', '', 'brick11', 'image', 0, '2014-12-08 10:30:25'),
(275, '053', '1477346_632866016752030_209958847_n.jpg', '', '', '', 'brick11', 'image', 0, '2014-12-08 10:30:25'),
(276, '054', '1484193_640166366021995_2085690350_n.jpg', '', '', '', 'brick11', 'image', 0, '2014-12-08 10:30:25'),
(277, '055', '10322432_701713199867311_3980864984261362709_n.jpg', '', '', '', 'brick11', 'image', 0, '2014-12-08 10:30:25'),
(278, '056', '971136_544559608916005_1683706524_n.jpg', '', '', '', 'brick11', 'image', 0, '2014-12-08 10:30:25'),
(279, '057', '10246500_692046384167326_7971373789283007336_n.jpg', '', '', '', 'brick11', 'image', 0, '2014-12-08 10:30:25'),
(280, '058', '10167934_713021782069786_171598109337905125_n.jpg', '', '', '', 'brick11', 'image', 0, '2014-12-08 10:30:25'),
(281, '059', '942108_552578841447415_2016618974_n.jpg', '', '', '', 'brick11', 'image', 0, '2014-12-08 10:30:25'),
(282, '060', '564741_689095614462403_951435238_n.jpg', '', '', '', 'brick11', 'image', 0, '2014-12-08 10:30:25'),
(283, '061', '559690_578677515504214_558938335_n.png', '', '', '', 'brick11', 'image', 0, '2014-12-08 10:30:25'),
(284, '062', '1908398_764251873613443_6818033479476963944_n.jpg', '', '', '', 'brick11', 'image', 0, '2014-12-08 10:30:25'),
(285, '063', '10527329_740506929321271_3478314613386713551_n.jpg', '', '', '', 'brick11', 'image', 0, '2014-12-08 10:30:25'),
(286, '064', 'm__kkilanssi.jpg', '', '', '', 'brick11', 'image', 0, '2014-12-08 10:30:25'),
(287, '065', '10330401_714383128600318_7738632641816568399_n.jpg', '', '', '', 'brick11', 'image', 0, '2014-12-08 10:30:25'),
(288, '066', '1477346_632866016752030_209958847_n.jpg', '', '', '', 'brick11', 'image', 0, '2014-12-08 10:30:25'),
(289, '067', '1484193_640166366021995_2085690350_n.jpg', '', '', '', 'brick11', 'image', 0, '2014-12-08 10:30:25'),
(290, '068', '10322432_701713199867311_3980864984261362709_n.jpg', '', '', '', 'brick11', 'image', 0, '2014-12-08 10:30:25'),
(291, '069', '971136_544559608916005_1683706524_n.jpg', '', '', '', 'brick11', 'image', 0, '2014-12-08 10:30:25'),
(292, '070', '10246500_692046384167326_7971373789283007336_n.jpg', '', '', '', 'brick11', 'image', 0, '2014-12-08 10:30:25'),
(293, '071', '10167934_713021782069786_171598109337905125_n.jpg', '', '', '', 'brick11', 'image', 0, '2014-12-08 10:30:25'),
(294, '072', '942108_552578841447415_2016618974_n.jpg', '', '', '', 'brick11', 'image', 0, '2014-12-08 10:30:25'),
(295, '073', '1484193_640166366021995_2085690350_n.jpg', '', '', '', 'brick11', 'image', 0, '2014-12-08 10:30:25'),
(296, '074', '564741_689095614462403_951435238_n.jpg', '', '', '', 'brick11', 'image', 0, '2014-12-08 10:30:25'),
(297, '075', '559690_578677515504214_558938335_n.png', '', '', '', 'brick11', 'image', 0, '2014-12-08 10:30:25'),
(298, '076', '1908398_764251873613443_6818033479476963944_n.jpg', '', '', '', 'brick11', 'image', 0, '2014-12-08 10:30:25'),
(299, '077', '10527329_740506929321271_3478314613386713551_n.jpg', '', '', '', 'brick11', 'image', 0, '2014-12-08 10:30:25'),
(300, '078', '1560615_664638036908161_263576461_n.jpg', '', '', '', 'brick11', 'image', 0, '2014-12-08 10:30:25'),
(301, '079', '1484193_640166366021995_2085690350_n.jpg', '', '', '', 'brick11', 'image', 0, '2014-12-08 10:30:25'),
(302, '080', '1477346_632866016752030_209958847_n.jpg', '', '', '', 'brick11', 'image', 0, '2014-12-08 10:30:25'),
(303, '081', '1484193_640166366021995_2085690350_n.jpg', '', '', '', 'brick11', 'image', 0, '2014-12-08 10:30:25'),
(304, '082', '10322432_701713199867311_3980864984261362709_n.jpg', '', '', '', 'brick11', 'image', 0, '2014-12-08 10:30:25'),
(305, '083', '971136_544559608916005_1683706524_n.jpg', '', '', '', 'brick11', 'image', 0, '2014-12-08 10:30:25'),
(306, '084', '10246500_692046384167326_7971373789283007336_n.jpg', '', '', '', 'brick11', 'image', 0, '2014-12-08 10:30:25'),
(307, '085', '10167934_713021782069786_171598109337905125_n.jpg', '', '', '', 'brick11', 'image', 0, '2014-12-08 10:30:25'),
(308, '086', 'McD_autokaista_ainaauki.jpeg', '', '', '', 'brick11', 'image', 0, '2014-12-08 10:30:25'),
(309, '087', '942108_552578841447415_2016618974_n.jpg', '', '', '', 'brick11', 'image', 0, '2014-12-08 10:30:25'),
(310, '088', 'iso_limu_lahikuva.jpg', '', '', '', 'brick11', 'image', 0, '2014-12-08 10:30:25'),
(311, '', 'Salsa_snack_wrap.png', '<h2 class="col-3">Lataa <strong>mobiiliedut</strong> käyttöösi</h2>', '', '', 'brick21 dynamic', 'text', 0, '2014-12-08 10:30:25'),
(312, '089', '365_tyyppi.jpg', '', '', '', 'brick22', 'image', 0, '2014-12-08 10:30:25'),
(313, '090', '10527329_740506929321271_3478314613386713551_n.jpg', '', '', '', 'brick11', 'image', 0, '2014-12-08 10:30:25'),
(314, '091', '1560615_664638036908161_263576461_n.jpg', '', '', '', 'brick11', 'image', 0, '2014-12-08 10:30:25'),
(315, '092', 'arthur_365.JPG', '', '', '', 'brick11', 'image', 0, '2014-12-08 10:30:25'),
(316, '093', '1484193_640166366021995_2085690350_n.jpg', '', '', '', 'brick11', 'image', 0, '2014-12-08 10:30:25'),
(317, '094', 'juusto_combo.jpg', '', '', '', 'brick11', 'image', 0, '2014-12-08 10:30:25'),
(318, '095', 'elmacojr_teemu_2.jpg', '', '', '', 'brick22', 'image', 0, '2014-12-08 10:30:25'),
(319, '096', 'tuomas_365.JPG', '', '', '', 'brick11', 'image', 0, '2014-12-08 10:30:25'),
(320, '097', '971136_544559608916005_1683706524_n.jpg', '', '', '', 'brick11', 'image', 0, '2014-12-08 10:30:25'),
(321, '098', 'ville_365.JPG', '', '', '', 'brick11', 'image', 0, '2014-12-08 10:30:25'),
(322, '099', 'mcd_tuplajuusto_3.JPG', '', '', '', 'brick11', 'image', 0, '2014-12-08 10:30:25'),
(323, '100', 'mcd_joulu_1.jpg', '', '', '', 'brick22', 'image', 0, '2014-12-08 10:30:25'),
(324, '101', 'MCD_app_1.jpeg', '', '', '', 'brick11', 'image', 0, '2014-12-08 10:30:25'),
(325, '102', '1470355_10151732941072014_1153574175_n.jpg', '', '', '', 'brick11', 'image', 0, '2014-12-08 10:30:25'),
(326, '', 'mobile_app_08.png', '<h2 class="col-3">Lataa uusi <strong>emoji-</strong> näppäimisto</h2>', '', '', 'brick11 dynamic', 'text', 0, '2014-12-08 10:30:25'),
(327, '104', 'kolikonheitto_juha_kamppi.jpg', '', '', '', 'brick11', 'image', 0, '2014-12-08 10:30:25'),
(328, '105', '1908398_764251873613443_6818033479476963944_n.jpg', '', '', '', 'brick11', 'image', 0, '2014-12-08 10:30:25'),
(329, '106', 'arthur_365.JPG', '', '', '', 'brick11', 'image', 0, '2014-12-08 10:30:25'),
(330, '107', 'joulukalenteri.jpg', '', '', '', 'brick11', 'video', 0, '2014-12-08 10:30:25'),
(331, '108', 'm__kkilanssi.jpg', '', '', '', 'brick11', 'image', 0, '2014-12-08 10:30:25'),
(332, '', '', '<h1>#365</h1><h2>Pelastettua päivää</h2><p>Olemme täällä pelastamassa sinun päiväsi. Lue päivän tarina ja saatat lunastaa itsellesi Päivän pelastus -edun. Vuoden jokainen päivä.</p>', '', '', 'brick22 dynamic', '', 0, '2014-12-08 10:30:25'),
(333, '110', '1798123_10151892716227014_1000631099_n.jpg', '', 'Ranskalaiset pelastivat Jennin shoppailu-reissun', 'Sed augue orci, lacinia eu tincidunt et eleifend nec lacus. Donec ultricies nisl ut felis, suspendisse potenti. Lorem ipsum ligula ut hendrerit mollis, ipsum erat vehicula risus, eu suscipit sem libero nec erat. Aliquam erat volutpat. Sed congue augue vitae neque. Nulla consectetuer porttitor pede. Fusce purus morbi tortor magna condimentum vel.', 'brick22', 'image', 1, '2014-12-08 10:30:25');

-- --------------------------------------------------------

--
-- Table structure for table `gallery`
--

CREATE TABLE `gallery` (
  `gallery_id` int(11) NOT NULL AUTO_INCREMENT,
  `gallery_image` varchar(255) NOT NULL,
  `className` varchar(255) DEFAULT NULL,
  `story_id` int(11) NOT NULL,
  PRIMARY KEY (`gallery_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=6 ;

--
-- Dumping data for table `gallery`
--

INSERT INTO `gallery` (`gallery_id`, `gallery_image`, `className`, `story_id`) VALUES
(1, 'mcd_tuplajuusto_3.JPG', 'brick22', 0),
(2, 'joulukalenteri.jpg', 'brick22', 0),
(3, '365_tyyppi.jpg', 'brick22', 1),
(4, 'arthur_365.JPG', 'brick22', 1),
(5, '564741_689095614462403_951435238_n.jpg', 'brick22', 2);

-- --------------------------------------------------------

--
-- Table structure for table `story`
--

CREATE TABLE `story` (
  `story_id` int(11) NOT NULL AUTO_INCREMENT,
  `story_name` varchar(255) NOT NULL,
  PRIMARY KEY (`story_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Table structure for table `voucher`
--

CREATE TABLE `voucher` (
  `voucher_if` int(11) NOT NULL AUTO_INCREMENT,
  `voucher_name` varchar(255) DEFAULT NULL,
  `voucher_image` varchar(255) DEFAULT NULL,
  `story_id` int(11) NOT NULL,
  PRIMARY KEY (`voucher_if`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 AUTO_INCREMENT=1 ;
