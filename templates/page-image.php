
<div id="singleContainer" class="subPage">
		<div class="grid-sizer"></div>
		<?php $dayArr = $frontObj->getSingleDay($id); ?>
		<?php foreach($dayArr as $day) : ?>
						<div class="item brick22">
							<img src="images/<?php echo $day['featured_image']; ?>" alt="" width="100%" height="100%" />
							<div class="caption"><?php echo $day['day_order']; ?></div>
						</div>
		<?php endforeach; ?>
		<?php $storyArr = $frontObj->getDayGallery($id); ?>
		<?php foreach($storyArr as $story) : ?>
						<div class="item <?php echo $story['className']; ?>">
							<img src="images/<?php echo $story['gallery_image']; ?>" alt="" width="100%" height="100%" />
						</div>
		<?php endforeach; ?>
		<?php foreach($dayArr as $day) : ?>
							<div class="item brick22 title">
									<div class="inner-content">
										<h2><?php echo $day['title']; ?></h2>
									</div>
							</div>

							<div class="item brick22 content">
								<div class="inner-content">
									<p><?php echo $day['content']; ?></p>
								</div>
							</div>

							<div class="item brick22 dynamic">
								<div class="inner-content">
									<h2 class="uppercase">Pelasta oma päiväsi</h2>
									<h3 class="uppercase">Normaalit Ranskalaiset</h3>
								</div>
							</div>
		<?php endforeach; ?>
	</div>
	<div id="slickSlider">
		<?php
			/*if($id >= $maxID) {
				$prev = 6;
			} else if ($id < $maxID && $id > ($maxID - 3)) {
				$prev = 6 - ($maxID - $id);
			} else {
				$prev = 3;
			}
			$next = 6 - $prev;*/

		  $prevDayArr = $frontObj->getPreviousDays($id);
		 	$nextDayArr = $frontObj->getNextDays($id);
		 ?>
		<?php foreach($prevDayArr as $prevDay) : ?>
						<div class="item brick11 prev">
							<a href="page.php?id=<?php echo $prevDay['id']; ?>&amp;type=<?php echo urlencode($prevDay['type']); ?>"><img src="images/<?php echo $prevDay['featured_image']; ?>" alt="" width="100%" height="auto" /></a>	
							<div class="caption"><?php echo $prevDay['day_order']; ?></div>
						</div>
		<?php endforeach; ?>
		<?php foreach($nextDayArr as $nextDay) : ?>
						<div class="item brick11 next">
							<a href="page.php?id=<?php echo $nextDay['id']; ?>&amp;type=<?php echo urlencode($nextDay['type']); ?>"><img src="images/<?php echo $nextDay['featured_image']; ?>" alt="" width="100%" height="auto" /></a>
							<div class="caption"><?php echo $nextDay['day_order']; ?></div>
						</div>
		<?php endforeach; ?>
	</div>
