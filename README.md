
basic | style
=============

a carefully considered set of CSS rules to make *baby-talking* to computers, notably more enjoyable

<br>

STATUS: *basic-style...*

1. is usable, although it's family members are not, yet
2. currently assumes preprocessing with stylus
3. assumes auto-prefixing will occur sometime before production use
4. disregards the Microsoft Internet Explorer web browser

<br>



<br>

###markup
```html
<section class='container basic-example'>
<div class='inner-w'>
	
	<div class='block'>
		<div class='image-w'>
			<img src='{...}' alt='{...}'>
		</div>
		<div class='text-w'>
			<h2>Heading {...}</h2>
			<p>Copy {...}</p>
		</div>
	</div>

	<div class='block'>
		<div class='image-w'>
			<img src='{...}' alt='{...}'>
		</div>
		<div class='text-w'>
			<h2>Heading {...}</h2>
			<p>Copy {...}</p>
		</div>
	</div>

</div>
</section>
```
<br>

###stylus
```css
.inner-w
	max-width 800px
	padding $pad

.basic-example
	background $highlight
	.block
		background $color
		color $white
		padding $pad
		h2 //
			medium-type()
		@media break-point-3
			split-in(2)
```	
<br>


<img src='http://sheriffderek.consulting/resources/social/insignia/512.png' alt='.' width='200px' height='200px' /><br />
@sheriffderek
