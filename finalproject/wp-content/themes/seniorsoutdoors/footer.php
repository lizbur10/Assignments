<?php
/**
 * The template for displaying the footer.
 *
 * Contains the closing of the #content div and all content after
 *
 * @package seniorsoutdoors
 */
?>

	</div><!-- #content -->

	<footer id="colophon" class="site-footer" role="contentinfo">
		<p class="copyright">&copy; 2015 Seniors Outdoors!</p>
	</footer><!-- #colophon -->
</div><!-- #page -->

<?php wp_footer(); ?>
<script type="text/javascript" charset="utf-8">
	$("#header-slider").find("div:first").addClass("current");
	var numberOfImages = $("#header-slider div").length,
		counter = 1;
	window.setInterval(runSlider, 3000);

	function runSlider() {
		$(".previous").removeClass("previous");
		if (counter < numberOfImages) {
			$(".current").next().css("display", "none");
			$(".current").removeClass("current").fadeOut(1500).addClass("previous")
				.next().fadeIn(1500).addClass("current");
			counter++;
		} else {
			$(".current").removeClass("current").fadeOut(1500).addClass("previous");
			$("#header-slider div:first").addClass("current").fadeIn(1500);
			counter=1;
		}

	}
</script> 

</body>
</html>
