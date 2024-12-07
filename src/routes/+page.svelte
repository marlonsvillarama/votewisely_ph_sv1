<!-- <main> -->

	<section class="hero">
		<div class="overlay"></div>
		<div class="content wrapper">
			<h1>Join the fight for a better future</h1>
			<p>
				Traditional politics is hurting our country. We need to vote for the right leaders who have the country's best interests at heart.
				<br><br>
				Be informed. Get to know the people running for office.
			</p>
			<p>
				<a href="#" class="cta">Start here</a>
			</p>
			
		</div>
	</section>

	<section id="advocacy" class="row">
		<div class="content wrapper">
			<h1>Our Advocacy</h1>
			<p>
				Learn more about the issues facing our country today.
			</p>
			<div class="grid-row-3">
				<div class="card">Card 1</div>
				<div class="card">Card 2</div>
				<div class="card">Card 3</div>
			</div>
		</div>
	</section>

<!-- </main> -->

<style>
	.hero {
		/* padding: 8rem 6rem; */
		padding: 10.5rem 0 8rem;
		position: relative;
		height: 100%;
		width: 100%;
		background: url("../lib/images/ph-flag.jpg") 50% 50%;
		background-repeat: no-repeat;
		background-size: cover;
		overflow: hidden;
	}
	.hero .overlay {
		position: absolute;
		top: 0;
		left: 0;
		height: 100%;
		width: 100%;
		background-color: #000;
		opacity: 0.3;
	}
	.hero .content {
		/* border: 1px solid red; */
		/* padding-top: 4rem; */
		margin: 0 auto;
		/* width: 100%; */
		position: relative;
		color: var(--color-white);
		display: flex;
		flex-direction: column;
		gap: 4rem;
	}
	.hero .content h1 {
		/* background: rgba(0, 0, 0, 0.5); */
		font-size: 4rem;
		font-weight: 600;
		letter-spacing: -0.5px;
		/* border: 1px solid red; */
		line-height: 4rem;
		display: inline-block;
		/* padding: 1rem; */
	}
	.hero .content p {
		font-family: var(--font-serif);
		font-size: 1.25rem;
		line-height: 2.25rem;
		letter-spacing: 0.5px;
		/* border: 1px solid red; */
		width: 36rem;
	}
	.hero .cta {
		background-color: var(--color-red-flag);
		color: var(--color-white);
		font-family: var(--font-sans);
		font-size: 1.125rem;
		font-weight: 500;
		letter-spacing: 0.25px;
		/* width: 10rem; */
		text-align: center;
		padding: 1rem 2rem;
		border-radius: 0.5rem;
		transition: all 100ms ease-in-out;
	}
	.hero .cta:hover {
		box-shadow: var(--box-shadow);
		/* transform: translateY(-4px); */
	}
</style>