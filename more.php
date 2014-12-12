<?php include_once('lib/front.class.php');

$frontObj = new front();

$page = 1;
if(isset($_POST['p']) && is_numeric($_POST['p'])) $page = $_POST['p'];
	$nomore_days=true;
	$dayArr = $frontObj->getDays($page);

	foreach($dayArr as $num => $day):
		$nomore_days=false;?>

		<div class="item <?php echo $day['className']?> <?php echo 'page'.($page+1);?>">
			<?php if( $day['type'] == 'image' || $day['type'] == 'video' ) : ?>
				<a href="page.php?id=<?php echo $day['id']; ?>&amp;type=<?php echo urlencode($day['type']); ?>"><img src="images/<?php echo $day['featured_image']; ?>" alt="" width="100%" height="100%"/></a>
				<div class="caption"><?php echo $day['day_order']; ?></div>
			<?php else: ?>
				<div class="inner-content">
					<?php echo $day['featured_content']; ?>
					<?php if ($day['featured_image'] != '') : ?>
							<img src="images/prizes/<?php echo $day['featured_image']?>" alt="" class="prize"/>
					<?php endif ?>
					<a href="page.php?id=<?php echo $day['id']; ?>&amp;type=<?php echo urlencode($day['type']); ?>" class="button more">Lataa tästä</a>
				</div>
			<?php endif; ?>
		</div>

	<?php endforeach;?>

	<?php if(!$nomore_days):?>
		<input type="hidden" value="<?php echo $page+1 ?>" class="nextPage">
	<?php endif;?>