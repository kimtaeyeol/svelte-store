import {writable} from 'svelte/store'

const createTopics = () => {
  let topicData ={
    _topics: [
      {id:1, title:'html', body:'html is ...'},
      {id:2, title:'css', body:'css is ...'},
      {id:3, title:'javascript', body:'javascript is ...'}
    ],
    mode: "WELCOME",
    id: 0
  }

  let topics = writable(topicData)
  const {set, subscribe, update} = topics

  const addTopic = (topic) => {
    update(topics => {
      const setData = [...topics._topics, topic]
      topics._topics = setData
      topics.mode = 'READ'
      topics.id = topic.id
      return topics
    })
  }
  const updateTopic = (topic) => {
    update(topics => {
      topics._topics = topics._topics.map(t => t.id ===topic.id ? topic : t)
      topics.mode = 'READ'
      topics.id = topic.id
      return topics
    })
  }
  const removeTopic = (topic) => {
    update(topics => {
      topics._topics = topics._topics.filter(t => t.id !== topic.id)
      topics.mode = 'WELCOME'
      topics.id = 0
      return topics
    })
  }
  const changeMode = (mode) => {
    update(topics => {
      topics.mode = mode
      return topics
    })
  }
  const changeId = (id) => {
    update(topics => {
      topics.id = id
      return topics
    })
  }
  return {set, subscribe, addTopic, updateTopic, removeTopic, changeMode, changeId}
}

export const topics = createTopics()