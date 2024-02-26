<script>
  import {topics} from '../stores'
  export let onChangeMode
  let _topics = null
  topics.subscribe(data => _topics = data._topics)
</script>

<nav>
	<ul>
		{#each _topics as topic}
      <li><a href={'/read/'+topic.id} on:click={e => {
        e.preventDefault()
        onChangeMode(topic.id)
      }}>{topic.title}</a></li>
    {/each}
	</ul>
</nav>