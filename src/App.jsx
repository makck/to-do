import React, { useState } from 'react';

export default function App() {
  const [taskList, setTaskList] = useState([]);

  const addTask = () => {
    const currentTasks = [];
    currentTasks.push(...taskList);
    currentTasks.push(document.querySelector('#taskItem').value);
    setTaskList([...currentTasks]);
    console.log('logging task list', taskList);
    console.log('log currentTasks', currentTasks);
  };

  const deleteTask = (taskIndex) => {
    const currentTasks = [];
    currentTasks.push(...taskList);
    currentTasks.splice(taskIndex, 1);

    setTaskList([...currentTasks]);
  };

  function TaskItem(taskDetails) {
    const singleTask = (
      <div>
        <p>{taskDetails.task}</p>
        <button onClick={deleteTask(taskDetails.index)}>Delete Task</button>
      </div>
    );
    return singleTask;
  }

  const currentTaskList = taskList.map((task, index) => (
    <TaskItem key={index.toString()} task={task} index={index} />
  ));

  return (
    <div>
      <div>
        <input id="taskItem" type="text" placeholder="Input task" />
        <button onClick={addTask}>Add task</button>
      </div>
      <div>
        {currentTaskList}
      </div>
    </div>
  );
}
