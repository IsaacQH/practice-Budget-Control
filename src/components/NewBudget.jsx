import React from 'react'

const NewBudget = () => {
  return (
    <div className='contenedor-presupuesto contenedor sombra'>
        <form className='formulario'>
            <div className='campo'>
                <label>Define your budget </label>
                <input 
                    type="text"
                    className='nuevo-presupuesto'
                    placeholder='Add your finances'
                />
                <input type="submit" value="Add" />
            </div>
        </form>
    </div>
  )
}

export default NewBudget