const { response } = require('express');
const e = require('express');
const express = require('express')
const { request } = require('http')
const app = express()
const PORT = 8000;

const proDevelopmentTasks = {
    'github': {
        'current-task': 'Upload CodeWars\' challenges',
        'complete': false,
    },
    'portfolio':{
        'current-task': 'Deicde: build new site or stick with current',
        'complete': false
    },
    'resume':{
        'current-task': 'Decide: how to deal with current role not being web developer - should I add freelance or 100Devs',
        'complete': false
    },
    'unknown':{
        'current-task': 'No task found',
        'comeplte': 'N/A'
    }
}

app.get('/', (request, response) => {
    response.sendFile(__dirname + "/index.html")
})

app.get('/api/:task', (request, response) => {
  const taskName = request.params.task.toLowerCase()
  if(proDevelopmentTasks[taskName]){
  response.json(proDevelopmentTasks[taskName]) 
  } else{
      response.json(proDevelopmentTasks['unknown'])
  }
})

app.listen(process.env.PORT || PORT, () => {
    console.log(`The server is now working on ${PORT}!`)
});