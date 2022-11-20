import React from 'react'

const Checked = ({register}) => {
  return (
    <>
    <div className="select_box">
    <label className="form_wrap"></label>
    <div>
      <label className="label_description check_select ">Вид пакування</label>
      <select {...register("Пакування")}>
        <option >-Вибрати-</option>
        <option>Конверт з ПБ плівкою С/13 (150х215) мм</option>
        <option>Конверт з ПБ плівкою D/14 (180х265) мм</option>
        <option>Конверт з ПБ плівкою E/15 (220х265) мм</option>
        <option>Коробка (0,5 кг) пласка</option>
        <option>Коробка (0,5 кг) пласка з наповнювачем Ріг</option>
        <option>Коробка (0,5 кг) стандартна </option>
        <option>Коробка (0,5кг) стандартна з наповнювачем</option>
        <option>Коробка (10 кг)</option>
        <option>Коробка (10 кг) з наповнювачем</option>
        <option>Коробка (15 кг)</option>
        <option>Коробка (15 кг) з наповнювачем</option>
        <option>Коробка (1 кг) пласка</option>
        <option>Коробка (1 кг) пласка з наповнювачем</option>
        <option>Коробка (1 кг) стандартна</option>
        <option>Коробка (1 кг) стандартна з наповнювачем</option>
        <option>Коробка (20 кг)</option>
        <option>Коробка (20 кг) з наповнювачем</option>
        <option>Коробка (2 кг)</option>
        <option>Коробка (2 кг) з наповнювачем</option>
        <option>Коробка (2 кг) квадратна</option>
        <option>Коробка (2 кг) квадратна з наповнювачем</option>
        <option>Коробка (30 кг)</option>
      </select>
    </div>

    <div>
      <input type="number" value="1" disabled/>
    </div>
    
  </div>
  
  </>
  );
}

export default Checked