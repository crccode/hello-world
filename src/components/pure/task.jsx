import React from 'react'
import PropTypes from 'prop-types'
import {Task} from "../../models/task.class"
const TaskComponent = ({ task }) => {
  return (
    <div>
      <h2>Nombre: { task.name }</h2>
      <h3>Descripcion : {task.description}</h3>
      <h4>Levels: {task.level}</h4>
      <h5>This task is: : {task.completed ? 'COMPLETED':'PENDING'}</h5>

    </div>
  );
};

TaskComponent.propTypes = {
    // Lo que recibe el props no es una cadena TextDecoder, numero es task
    task: PropTypes.instanceOf(Task)
};

export default TaskComponent

