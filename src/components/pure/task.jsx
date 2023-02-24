import React, {useEffect} from 'react'
import PropTypes from 'prop-types'
import {Task} from "../../models/task.class"
// Importamos la hoja de estilos
import '../../styles/task.scss'
const TaskComponent = ({ task }) => {
  //ESTO SE USA CUANDO UNA TAREA DESAPARECE O LA BORREMOS , MODIFIQUEMOS 
  useEffect(() => {
      console.log('Created Task')
      return () => {
          console.log(`Task: ${task.name} is going to unmount`);
      }
  }, [task]);  //[task] Para que se ejecute solo una ves 
  //}); esto es para que se ejecute para todos los cambios

  return (
    <div>
      <h2 className='task-name'>Nombre: { task.name }</h2>
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

