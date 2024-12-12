<script lang="ts">
	import { page } from '$app/stores';
    import logo from '$lib/images/philippines-flag-icon.svg';
</script>

<header>
    <a href="/" class="logo">
        <!-- <img src="/assets/philippines-flag-icon.svg" alt="MyVote.ph Home"> -->
        <div>
            <span class="title blue">myvote</span><span class="title red">.ph</span>
        </div>
    </a>
    <nav>
        <a href="/advocacy/">Advocacy</a>
        <a href="/issues/">Issues</a>
        <a href="/candidates/">Candidates</a>
        <a href="/dynasties/">Dynasties</a>
        <a href="/news/">News</a>
    </nav>
</header>

<style>
header {
    /* font-family: var(--font-sans); */
    background-color: rgba(255, 255, 255, 1);
    /* background-color: rgba(255, 255, 255, 0.24); */
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.75rem 2rem;
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 999;
    /* border-bottom: 1px solid red; */
}
/* header > .top {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 2rem;
    padding: 12px;
    padding: 0 1rem;
}
@media (width < 640px) {
    header > .top {
        padding: 8px;
    }
} */
header nav {
    font-size: var(--fs-sm);
}
header nav a {
    margin-left: 1rem;
    padding: 0.5rem 1rem;
    /* border: 1px solid red; */
    transition: all 100ms ease-in-out;
    /* color: var(--color-white); */
}
header nav a:hover {
    /* background-color:  */
    border-bottom: 2px solid var(--color-red-flag);
}
.logo {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    line-height: 1.5rem;
}
.logo > img {
    width: 48px;
}
@media (width < var(--br-sm)) {
    .logo {
        gap: 0.25rem;
    }
    .logo > img {
        width: 40px;
    }
}

.title {
    font-size: 2rem;
    font-weight: 700;
    color: var(--color-white);
}
@media (width < 640px) {
    .title {
        font-size: 1.75rem;
    }
}
.title.blue {
    color: var(--color-blue-flag);
}
.title.red {
    color: var(--color-red-flag);
}
</style>