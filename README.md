
basic | style
=============

a carefully considered set of rules and mixins for people who like stylus and style-guide driven visual design

1. written with stylus
2. assumes auto-prefixing will occur
3. disregards the Microsoft's _Internet Explorer_ web browser

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
		@media $break-point-3
			split-in(2)
```
<br>


<img src='http://sheriffderek.consulting/resources/social/insignia/512.png' alt='.' width='100px' height='100px' /><br />
@sheriffderek
