<script>
    export let lineObj, id;
</script>

{#if lineObj.text}
    <div class="d-flex">
        <div {id} class="text-line"></div>
        <!-- <div>{line.index}</div> -->
    </div>
{/if}

<style>
    .text-line {
        padding: 10px;
        margin-bottom: 10px;
        border-radius: 12px;
        background: rgba(45, 45, 45, 0.857);
        color: rgb(250, 250, 250);
        font-optical-sizing: auto;
        font-style: normal;
        font-weight: 600;
        font-size: 1.8vw;
        line-height: 1.2;
    }
</style>
