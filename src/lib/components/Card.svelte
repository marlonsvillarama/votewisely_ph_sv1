<script>
    export let slug = "candidate";
    export let ln = "Last";
    export let fn = "First";
    // @ts-ignore
    /**
	 * @type {any[]}
	 */
     export let tags = [];
</script>

<div class="card">
    <div class="img">
        <a href="#"><img src="/images/profiles/{slug}.jpg" alt="Andamo" /></a>
    </div>
    <a href="#">
        <div class="name">
            <span class="ln">{ln}</span>
            <span>{fn}</span>
        </div>
        <div class="tags">
            {#each tags as tag}
                <span class="tag {tag.att ? tag.att.join(' ') : ''}">{tag.text}</span>
            {/each}
        </div>
    </a>
</div>

<style>
    .card {
        /* display: flex; */
        /* gap: 1rem; */
        max-width: 20rem;
        /* border: 1px solid #CCC; */
        box-shadow: var(--card-shadow);
        text-align: center;
    }
    img {
        width: 100%;
        height: 20rem;
        overflow: hidden;
    }
    .name,
    .tags {
        /* margin-top: 24rem; */
        /* text-align: auto; */
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 1rem;
        font-weight: 400;
        font-size: var(--fs-sm);
        /* border: 1px solid red; */
        background-color: var(--color-white);
        color: rgba(0, 0, 0, 0.5);
    }
    .name .ln {
        font-size: var(--fs-lg);
        text-transform: uppercase;
        font-weight: 900;
        color: var(--color-default);
    }
    .tags {
        padding-top: 0;
        justify-content: flex-start;
        gap: 0.5rem;
    }
    .tags .tag {
        padding: 0.125rem 1rem;
        border-radius: 8px;
        background-color: rgba(0, 0, 0, 0.1);
        color: var(--color-default);
        font-size: var(--fs-xs);
    }
    .tag.alert {
        background-color: var(--color-red-flag);
        color: var(--color-white);
    }
    .tag.info {
        background-color: var(--color-blue-flag);
        color: var(--color-white);
    }

</style>