<script>
  import {topics} from '../stores'
  export let title
</script>

<header>
	<h1><a href="/" on:click={e => {
    e.preventDefault()
    $topics.mode = 'WELCOME'
  }}>{title}</a></h1>
</header>