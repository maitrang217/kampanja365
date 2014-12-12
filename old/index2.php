<?php include_once("lib/front.class.php"); ?>

<?php $frontObj = new front(); ?>

<?php include_once("header.php"); ?>

		
		<div id="container2">
			<div class="grid-sizer"></div>
			<?php $dayArr = $frontObj->getDays(); ?>

			
				<?php	foreach( $dayArr as $number => $day) : ?>
					<div class="<?php echo $day['className']; ?>">
							<?php if( $day['type'] == 'image' || $day['type'] == 'video' ) : ?>
								<a href="page.php?id=<?php echo $day['id']; ?>&amp;type=<?php echo urlencode($day['type']); ?>"><img src="images/<?php echo $day['featured_image']; ?>" alt="" width="100%" height="100%"/></a>
								<div class="caption"><?php echo $day['day_order']; ?></div>
							<?php else: ?>
								<div class="inner-content">
									<?php echo $day['featured_content']; ?>
								</div>
							<?php endif; ?>
					</div>
				<?php endforeach; ?>
		</div>
		<input type="hidden" value="<?php echo $page+1 ?>" class="nextPage">
		
		<div class="overlay"></div>
		
</div> <!--.body-wrapper-->
	<footer class="fixed">
		<div class="footer-wrapper">
			<p>Hyödynnä päivän mobiilietu! Lataa McDonalds Suomi applikaatio.</p>
			<a href="http://www.windowsphone.com/fi-fi/store/app/mcdonald-suomi/6170d678-1ae0-4f41-8dad-b020f1885c7c" target="_blank"><img src="images/icons/windowsphone.jpg" width="141" height="38" alt="windowsphonestore" style="margin-right:10px"></a>
			<a href="https://market.android.com/details?id=com.mcdonalds.mcdonaldssuomi" target="_blank"><img src="images/icons/googleplay.jpg" width="108" height="38" alt="androidmarket" style="margin-right:10px"></a>
			<a href="http://itunes.apple.com/fi/app/mcdonalds-suomi/id485001525" target="_blank"><img src="images/icons/appstore.png" width="128" height="37" style="" alt="appstore"></a>

			<hr>
			<div class="small-footer">
				&copy; <a href="http://www.mcdonalds.fi/fi.html" target="_blank"><small>McDonalds.fi</small></a>
			</div>
		</div> <!--.footer-wrapper-->
	</footer>
	

	<script src="//ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
	<!--<script src="bower_components/jquery/dist/jquery.min.js"></script>
	<script src="bower_components/eventEmitter/EventEmitter.min.js"></script>
	<script src="bower_components/get-size/get-size.js"></script>
	<script src="bower_components/matches-selector/matches-selector.js"></script>
	<script src="bower_components/outlayer/item.js"></script>-->
	<script src="bower_components/masonry/dist/masonry.pkgd.min.js"></script>
	<script src="bower_components/imagesloaded/imagesloaded.pkgd.min.js"></script>
	<script src="js/main2.js"></script>

</body>
</html>>
