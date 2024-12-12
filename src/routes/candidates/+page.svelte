<script lang="ts">
	import Card from "$lib/components/Card.svelte";
	import { page } from "$app/stores";

	export let candidateType = $page.params.candidateType;
	export let data;
	// const sn = data.sn;
</script>

<svelte:head>
	<title>VoteWisely.PH - List of Candidates</title>
	<meta name="description" content="List of Candidates" />
</svelte:head>

<section class="candidates hero">
	<div class="overlay"></div>
	<div class="content wrapper">
		<h1>Candidates</h1>
	</div>
</section>

<div class="candidates content wrapper">
	<nav class="row-menu">
		<a href="./pr/">President</a>
		<a href="./vp/">Vice President</a>
		<a href="./sn/">Senate</a>
		<a href="./">Congress</a>
	</nav>

	{#each data[candidateType] as senator}
		<Card slug={senator.slug} fn={senator.short_fn} ln={senator.ln} tags={senator.tags} />
	{/each}

	<!-- <div class="grid">
		<div id="abalos" class="card">
			<div class="img">
				<a href="#"><img src="/images/abalos.jpg" alt="Andamo" /></a>
			</div>
			<a href="#">
				<div class="name">
					<span class="ln">Abalos</span>
					<span>Benhur Jr.</span>
				</div>
				<div class="tags">
					<span class="tag alert">Political family</span>
					<span class="tag">Former DILG Secretary</span>
				</div>
			</a>
		</div>
		<div id="adonis" class="card">
			<div class="img">
				<a href="#"><img src="/images/abalos.jpg" alt="Andamo" /></a>
			</div>
			<a href="#">
				<div class="name">
					<span class="ln">Adonis</span>
					<span>Ronaldo</span>
				</div>
				<div class="tags">
					<span class="tag">Independent</span>
				</div>
			</a>
		</div>
		<div id="amad" class="card">
			<div class="img">
				<a href="#"><img src="/images/abalos.jpg" alt="Andamo" /></a>
			</div>
			<a href="#">
				<div class="name">
					<span class="ln">Amad</span>
					<span>Wilson</span>
				</div>
				<div class="tags">
					<span class="tag">Independent</span>
					<span class="tag">Attorney</span>
				</div>
			</a>
		</div>
		<div id="andamo" class="card">
			<div class="img">
				<a href="#"><img src="/images/abalos.jpg" alt="Andamo" /></a>
			</div>
			<a href="#">
				<div class="name">
					<span class="ln">Andamo</span>
					<span>Jocelyn</span>
				</div>
				<div class="tags">
					<span class="tag">Independent</span>
					<span class="tag">Registered Nurse</span>
				</div>
			</a>
		</div>
		<div id="aquino" class="card">
			<div class="img">
				<a href="#"><img src="/images/abalos.jpg" alt="Andamo" /></a>
			</div>
			<a href="#">
				<div class="name">
					<span class="ln">Aquino</span>
					<span>Bam</span>
				</div>
				<div class="tags">
					<span class="tag alert">Political Family</span>
					<span class="tag">Former Senator</span>
				</div>
			</a>
		</div>
		<div id="arambulo" class="card">
			<div class="img">
				<a href="#"><img src="/images/abalos.jpg" alt="Andamo" /></a>
			</div>
			<a href="#">
				<div class="name">
					<span class="ln">Arambulo</span>
					<span>Ronnel</span>
				</div>
				<div class="tags">
					<span class="tag">Independent</span>
					<span class="tag">Fisherman</span>
				</div>
			</a>
		</div>
	</div> -->
	<!-- <div class="grid-row-3">
		<div id="arellano" class="card">
			<div class="img">
				<a href="#"><img src="/src/lib/images/profiles/arellano.jpg" alt="Arellano" /></a>
			</div>
			<a href="#">
				<div class="name">
					<span class="ln">Arellano</span>
					<span>Ernesto</span>
				</div>
				<div class="tags">
					<span class="tag">Independent</span>
					<span class="tag">Attorney</span>
				</div>
			</a>
		</div>
		<div id="ballon" class="card">
			<div class="img">
				<a href="#"><img src="/src/lib/images/profiles/ballon.jpg" alt="Ballon" /></a>
			</div>
			<a href="#">
				<div class="name">
					<span class="ln">Ballon</span>
					<span>Roberto</span>
				</div>
				<div class="tags">
					<span class="tag">Ramon Magsaysay Awardee</span>
					<span class="tag">Fisherman</span>
				</div>
			</a>
		</div>
		<div id="binay" class="card">
			<div class="img">
				<a href="#"><img src="/src/lib/images/profiles/binay.jpg" alt="Binay" /></a>
			</div>
			<a href="#">
				<div class="name">
					<span class="ln">Binay</span>
					<span>Abby</span>
				</div>
				<div class="tags">
					<span class="tag alert">Political Family</span>
					<span class="tag">Incumbent Mayor</span>
				</div>
			</a>
		</div>
	</div> -->
	<!-- <div class="grid-row-3">
		<div id="bondoc" class="card">
			<div class="img">
				<a href="#"><img src="/src/lib/images/profiles/bondoc.jpg" alt="Bondoc" /></a>
			</div>
			<a href="#">
				<div class="name">
					<span class="ln">Bondoc</span>
					<span>James Patrick</span>
				</div>
				<div class="tags">
					<span class="tag">Attorney</span>
					<span class="tag">Singer/songwriter</span>
				</div>
			</a>
		</div>
		<div id="bosita" class="card">
			<div class="img">
				<a href="#"><img src="/src/lib/images/profiles/bosita.jpg" alt="Bosita" /></a>
			</div>
			<a href="#">
				<div class="name">
					<span class="ln">Bosita</span>
					<span>Bonifacio</span>
				</div>
				<div class="tags">
					<span class="tag">Former Colonel</span>
					<span class="tag">Incumbent Representative</span>
				</div>
			</a>
		</div>
		<div id="brosas" class="card">
			<div class="img">
				<a href="#"><img src="/src/lib/images/profiles/brosas.jpg" alt="Brosas" /></a>
			</div>
			<a href="#">
				<div class="name">
					<span class="ln">Brosas</span>
					<span>Arlene</span>
				</div>
				<div class="tags">
					<span class="tag">Incumbent Representative</span>
				</div>
			</a>
		</div>
	</div> -->
	<!-- <div class="grid-row-3">
		<div id="cabonegro" class="card">
			<div class="img">
				<a href="#"><img src="/src/lib/images/profiles/cabonegro.jpg" alt="Cabonegro" /></a>
			</div>
			<a href="#">
				<div class="name">
					<span class="ln">Cabonegro</span>
					<span>Roy</span>
				</div>
			</a>
		</div>
		<div id="capuyan" class="card">
			<div class="img">
				<a href="#"><img src="/src/lib/images/profiles/capuyan.jpg" alt="Capuyan" /></a>
			</div>
			<a href="#">
				<div class="name">
					<span class="ln">Capuyan</span>
					<span>Allen</span>
				</div>
			</a>
		</div>
		<div id="casino" class="card">
			<div class="img">
				<a href="#"><img src="/src/lib/images/profiles/casino.jpg" alt="Casino" /></a>
			</div>
			<a href="#">
				<div class="name">
					<span class="ln">Casino</span>
					<span>Teodoro</span>
				</div>
			</a>
		</div>
	</div> -->
	<!-- <div class="grid-row-3">
		<div id="castro" class="card">
			<div class="img">
				<a href="#"><img src="/src/lib/images/profiles/castro.jpg" alt="Castro" /></a>
			</div>
			<a href="#">
				<div class="name">
					<span class="ln">Castro</span>
					<span>France</span>
				</div>
			</a>
		</div>
		<div id="cayetano" class="card">
			<div class="img">
				<a href="#"><img src="/src/lib/images/profiles/cayetano.jpg" alt="Cayetano" /></a>
			</div>
			<a href="#">
				<div class="name">
					<span class="ln">Cayetano</span>
					<span>Pia</span>
				</div>
			</a>
		</div>
		<div id="dealban" class="card">
			<div class="img">
				<a href="#"><img src="/src/lib/images/profiles/dealban.jpg" alt="De Alban" /></a>
			</div>
			<a href="#">
				<div class="name">
					<span class="ln">De Alban</span>
					<span>Angelo</span>
				</div>
			</a>
		</div>
	</div> -->

</div>

<style>
	.candidates.hero {
		background: url("/images/banners/candidates.jpg") 50% 50%;
		opacity: 0.8;
	}
	.candidates.hero .overlay {
		/* position: absolute; */
		/* top: 0; */
		/* left: 0; */
		/* height: 100%; */
		/* width: 100%; */
		/* background-color: rgba(0, 50, 160, 0.9); */
		/* color: var(--color-default); */
		/* opacity: 0.4; */
	}

	.candidates.content {
		display: flex;
		flex-direction: column;
		color: var(--color-default);
		gap: 2rem;
	}
	.row-menu {
		/* border: 1px solid red; */
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 1rem;
	}
	.row-menu a {
		padding: 0.5rem 1.25rem;
		/* background-color: antiquewhite; */
		font-family: var(--font-serif);
		font-size: 0.875rem;
		font-weight: 500;
	}
	.row-menu a:hover {
		background-color: #E6E6E6;
	}
	.grid {
		display: grid;
		gap: 1.5rem;
		margin: 0 auto;
		/* grid-template-columns: repeat(3, 1fr); */
		width: 100%;
		border: 1px solid green;
	}
	@media (min-width: 40rem) {
		.grid { grid-template-columns: repeat(2, 1fr); }
	}
	@media (min-width: 60rem) {
		.grid { grid-template-columns: repeat(3, 1fr); }
	}
	.card {
		border: 1px solid red;
	}
</style>