import React from 'react'

const Characteristics = ({row, removeCharacteristics, register}) => {
  return (
    <div  className="place-row ">
          <div className="place-count">
            <label className="place-label ">Кількість</label>
            <input type="number" className="short" {...register("Кількість")}/>
          </div>
          <div className="place-count">
            <label className="place-label">Оголошена вартість</label>
            <div className="inline">
              <input className="short" type="text" {...register("Оголошена вартість/грн")}/>
              <span className="units grey">грн</span>
            </div>
          </div>
          <div className="place-weight">
            <label className="place-label">Вага</label>
            <div className="inline">
              <input className="short" type="text" {...register("Вага")} />
              <span className="units grey" >
                кг
              </span>
            </div>
          </div>
          <div className="place-dimension">
            <label className="place-label">Довжина</label>
            <input className="short" {...register("Довжина")} />
          </div>
          <div className="place-dimension">
            <label className="place-label">Ширина</label>
            <input className="short" type="text"  {...register("Ширина")}/>
          </div>
          <div className="place-dimension">
            <label className="place-label ">Висота</label>
            <div className="inline">
              <input className="short" type="text" {...register("Висота/см")} />
              <span className="units grey">см</span>
            </div>
          </div>
          <button className='remove' onClick={() => removeCharacteristics(row)}>x</button>
        </div>
  )
}

export default Characteristics