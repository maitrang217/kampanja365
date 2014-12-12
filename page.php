<?php include_once("header.php"); ?>

  <div id="paivaPanel" class="hidden">
      <div class="paivaContainer">
        <h1>#365 PELASTETTUA PÄIVÄÄ</h1>
        <p>Vuoteen mahtuu kaikenlaisia päiviä. Uskomme, että yksikin hampurilainen voi 
          pelastaa niistä harmaimmat – ja kruunata ne parhaimmat. Olipa päiväsi 
          millainen tahansa, se näyttää aina paremmalta kun suupielessä on ketsuppia 
          tai nenänpäässä Sundaen suklaakastiketta. Lue päivän tarina McDonald’s-ravintolasta 
          jostain päin Suomea. Joka päivä. </p>
        <div class="closeWrapper"><a href="#" id="closePanel"><img src="images/icons/closeBtn.png" alt="" width="45" height="45"></a></div>
      </div>
    </div>
    <?php include_once('register.php'); ?>


<?php $id = (isset($_GET["id"])) ? $_GET["id"] : '';
			$type = (isset($_GET["type"])) ? $_GET["type"] : '';
			$maxID = 111;
			$minID = 1;

			include_once("lib/front.class.php");

 			$frontObj = new front();
?>


<?php switch ($type) { 
    case "image":
    	include_once("templates/page-image.php");
    	break;
		case "video":
			include_once("templates/page-video.php");	
      break;
    case "text";
    	include_once("templates/page-text.php");	
      break;
    default:
     

} ?>

</div> <!--.body-wrapper-->
  <footer>
    <div class="footer-wrapper">
      <!--<p>Hyödynnä päivän mobiilietu! Lataa McDonalds Suomi applikaatio.</p>
      <a href="http://www.windowsphone.com/fi-fi/store/app/mcdonald-suomi/6170d678-1ae0-4f41-8dad-b020f1885c7c" target="_blank"><img src="images/icons/windowsphone.jpg" width="141" height="38" alt="windowsphonestore" style="margin-right:10px"></a>
      <a href="https://market.android.com/details?id=com.mcdonalds.mcdonaldssuomi" target="_blank"><img src="images/icons/googleplay.jpg" width="108" height="38" alt="androidmarket" style="margin-right:10px"></a>
      <a href="http://itunes.apple.com/fi/app/mcdonalds-suomi/id485001525" target="_blank"><img src="images/icons/appstore.png" width="128" height="37" style="" alt="appstore"></a>
      
      <hr>-->
      <div class="small-footer">
        &copy; <a href="http://www.mcdonalds.fi/fi.html" target="_blank"><small>McDonalds.fi</small></a>
      </div>
    </div> <!--.footer-wrapper-->
  </footer>
  

  <script src="//ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
  <script src="bower_components/FitText.js/jquery.fittext.js"></script>
  <script src="bower_components/slick-carousel/slick/slick.min.js"></script>
  <script src="bower_components/imagesloaded/imagesloaded.pkgd.min.js"></script>
  <script src="bower_components/freewall/freewall.js"></script>
  <script src="js/main.js"></script>
  <script src="js/page.js"></script>

</body>
</html>