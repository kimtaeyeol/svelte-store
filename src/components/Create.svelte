<script>
  export let onCreate
</script>

<article>
  <h2>Create</h2>
  <form on:submit={e => {
    e.preventDefault()
    const title = e.target.title.value
    const body = e.target.body.value
    onCreate(title, body)
  }}>
    <p><input type="text" name="title" placeholder="title" /></p>
    <p><textarea name="body" placeholder="body"></textarea></p>
    <p><input type="submit" value="create"></p>
  </form>
</article>