<script>
  import {topics} from './stores'
	import Article from './components/Article.svelte';
  import Header from './components/Header.svelte'
	import Nav from './components/Nav.svelte'
  import Create from './components/Create.svelte'
  import Update from './components/Update.svelte'
  let mode = null
  let _topics = null
  let topic = null
  let id = null

  topics.subscribe(data => {
    mode = data.mode
    _topics = data._topics
    id = data.id
  })
  $: console.log(mode, id, _topics)
</script>

<Header title={"WEB"}></Header>
<Nav onChangeMode={(id) => {
  $topics.mode = 'READ'
  topic = _topics.find(t => t.id === id)
}}></Nav>

{#if mode === 'WELCOME'}
  <Article title={"Welcome"} body={"Hello, WEB"}></Article>
{:else if mode === 'READ'}
  <Article title={topic.title} body={topic.body}></Article>
{:else if mode === 'CREATE'}
  <Create onCreate={(title, body) => {
    const newTopic = {id: _topics.length + 1, title, body}
    topics.addTopic(newTopic)
    topic = newTopic
  }}></Create>
{:else if mode === 'UPDATE'}
  <Update {topic} onUpdate={(title, body) => {
    topic.title = title
    topic.body = body
    topics.updateTopic(topic)
  }}></Update>
{/if}

<ul>
  <li>
    <a href="/create" on:click={e => {
      e.preventDefault()
      $topics.mode = 'CREATE'
    }}>Create</a>
  </li>
  {#if mode === 'READ'}
    <li>
      <a href={`/update/${topic.id}`} on:click={e => {
        e.preventDefault()
        $topics.mode = 'UPDATE'
      }}>Update</a>
    </li>
    <li>
      <input type="button" value="Delete" on:click={e => {
        topics.removeTopic(topic)
      }}/>
    </li>
  {/if}
</ul>