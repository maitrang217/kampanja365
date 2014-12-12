<?php include_once("lib/front.class.php"); ?>

<?php $frontObj = new front(); ?>

<?php include_once("header.php"); ?>

		<div id="paivaPanel" class="hidden">
				<div class="paivaContainer">
					<h1>#365 PELASTETTUA PÄIVÄÄ</h1>
					<p>Vuoteen mahtuu kaikenlaisia päiviä. Siksi olemme täällä. 
						Me McDonad’s ravintoloissa ympäri Suomen varmistamme hampurilainen kerrallaan, 
						että päivästäsi tulee parempi. Täällä kerromme tarinoita tiskin takaa ja nurkkapöydistä.</p>
					<div class="closeWrapper"><a href="#" id="closePanel"><img src="images/icons/closeBtn.png" alt="" width="45" height="45"></a></div>
				</div>
			</div>
			<?php include_once('register.php'); ?>

			<div class="grid-sizer"></div>

			<div id="container">
				
				<?php $dayArr = $frontObj->getDays(); ?>
				
					<?php	foreach( $dayArr as $number => $day) : ?>
						<div class="item <?php echo $day['className']; ?> page1">
								<?php if( $day['type'] == 'image' || $day['type'] == 'video' ) : ?>

									<a href="page.php?id=<?php echo $day['id']; ?>&amp;type=<?php echo urlencode($day['type']); ?>"><img src="images/<?php echo $day['featured_image']; ?>" alt="" width="100%" height="100%"/></a>
									<div class="caption"><?php echo $day['day_order']; ?></div>


								<?php elseif ( $day['type'] == 'text' ) : ?>
									<div class="inner-content">
										<?php echo $day['featured_content']; ?>
											<?php if ($day['featured_image'] != '') : ?>
													<img src="images/prizes/<?php echo $day['featured_image']?>" alt="" class="prize"/>
											<?php endif ?>
											<a href="page.php?id=<?php echo $day['id']; ?>&amp;type=<?php echo urlencode($day['type']); ?>" class="button more">Lataa tästä</a>
									</div>
								<?php else: ?>
										<div class="inner-content">
											<?php echo $day['featured_content']; ?>
											<a href="#" class="button" id="paivaBtn">Lue lisää</a>
										</div>
								<?php endif; ?>
						</div>
					<?php endforeach; ?>
			</div>
			
		<input type="hidden" value="<?php echo $page+1 ?>" class="nextPage">
		
		<div class="loading"><img src="images/icons/loading.gif" alt="" width="150" height="100"></div>

<?php include_once('footer.php'); ?>