<script>
  export let topic
  export let onUpdate
</script>

<article>
  <h2>Update</h2>
  <form on:submit={e => {
    e.preventDefault()
    const title = e.target.title.value
    const body = e.target.body.value
    onUpdate(title, body)
  }}>
    <p><input type="text" name="title" value={topic.title}/></p>
    <p><textarea name="body">{topic.body}</textarea></p>
    <p><input type="submit" value="update"></p>
  </form>
</article>
