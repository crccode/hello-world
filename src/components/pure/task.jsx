import React, {useEffect} from 'react'
import PropTypes from 'prop-types'
import {Task} from "../../models/task.class"
// Importamos la hoja de estilos
import '../../styles/task.scss'
import { LEVELS } from '../../models/levels.enum';
const TaskComponent = ({ task }) => {
  //ESTO SE USA CUANDO UNA TAREA DESAPARECE O LA BORREMOS , MODIFIQUEMOS 
  useEffect(() => {
      console.log('Created Task')
      return () => {
          console.log(`Task: ${task.name} is going to unmount`);
      }
  }, [task]);  //[task] Para que se ejecute solo una ves 
  //}); esto es para que se ejecute para todos los cambios


   /**
     * Function that returns a Badge
     * depending on the level of the task
     */
    function taskLevelBadge(){
      switch (task.level) {
          case LEVELS.NORMAL:
              return(
              <h6 className='mb-0'>
                  <span className='badge bg-primary'>
                      {task.level}
                  </span>
              </h6>)
          case LEVELS.URGENT:
              return(
              <h6 className='mb-0'>
                  <span className='badge bg-warning'>
                      {task.level}
                  </span>
              </h6>)
          case LEVELS.BLOCKING:
              return(
              <h6 className='mb-0'>
                  <span className='badge bg-danger'>
                      {task.level}
                  </span>
              </h6>)
          default:
              break;
      }
    }
   /**
     * Function that returns icon depending on completion of the task
     */
  function taskCompletedIcon(){
      if(task.completed){
          return (<i  className='bi-toggle-on task-action' style={{color: 'green'}}></i>)
      }else{
          return (<i className='bi-toggle-off task-action' style={{color: 'grey'}}></i>)
      }
  }

  

  return (
    <tr className='fw-normal'>
      <th>
          <span className='ms-2'>{task.name}</span>
      </th>
      <td className='align-middle'>
          <span>{task.description}</span>
      </td>
      <td className='align-middle'>
          {/* Execution of function to return badge element */}
          {taskLevelBadge()}
      </td>
      <td className='align-middle'>
          {/* Execution of function to return icon depending on completion */}
          {taskCompletedIcon()}
          <i className='bi-trash task-action' style={{color: 'tomato'}}></i>
      </td>
    </tr>

    // <div>
    //   <h2 className='task-name'>Nombre: { task.name }</h2>
    //   <h3>Descripcion : {task.description}</h3>
    //   <h4>Levels: {task.level}</h4>
    //   <h5>This task is: : {task.completed ? 'COMPLETED':'PENDING'}</h5>
    // </div>
  );
};

TaskComponent.propTypes = {
    // Lo que recibe el props no es una cadena TextDecoder, numero es task
    task: PropTypes.instanceOf(Task)
};

export default TaskComponent

