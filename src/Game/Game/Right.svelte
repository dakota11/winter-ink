<script>
    import { onMount } from "svelte";
    let checkScrollEnabled = false;

    function checkAndScroll() {
        if (!checkScrollEnabled) return;
        console.log("checkScroll");
        const story = document.getElementById("story");
        const lastDiv = story.lastElementChild;
        if (!lastDiv) return;
        const storyBottom = story.getBoundingClientRect().bottom;
        const lastDivBottom = lastDiv.getBoundingClientRect().bottom;

        if (lastDivBottom > storyBottom - 200) {
            story.scrollBy(0, 300);
        }
    }

    // set check scroll interval
    onMount(() => {
        let intervalId = setInterval(checkAndScroll, 2000);
    });
</script>

<div id="story" class="story h-100 overflow-scroll"></div>

<style>
    #story {
        padding-bottom: 500px;
        padding-top: 20px;
        scroll-behavior: smooth;
        -ms-overflow-style: none; /* Internet Explorer 10+ */
        scrollbar-width: none; /* Firefox */
    }

    #story::-webkit-scrollbar {
        display: none; /* Safari and Chrome */
    }
</style>
