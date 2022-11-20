import { useState } from "react";
import { useForm } from "react-hook-form";
import './App.css'
import Characteristics from "./Characteristics";
import Checked from "./Checked";

export default function App() {
  const [addRow, setAddRowe] = useState([1])
  const [checked,setChecked] = useState(false)
  const { register, formState: { errors }, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);
  
        
  const addCharacteristics = () => {
    setAddRowe([...addRow, addRow.length + 1])
  }
  const removeCharacteristics = (row) => {
    setAddRowe([...addRow.filter((remove) => remove !== row )])
  }

  //  console.log(checked);


 
  
  


  return (
    <div className="main_box">
      <form onSubmit={handleSubmit(onSubmit)} id="form">
        <div className="select_box">
          <label className="form_wrap">Маршрут</label>
          <div>
            <label className="label_description ">Місто відправник</label>
            <select {...register("Місто відправник")}>
              <option>Вінниця</option>
              <option>Дніпро</option>
              <option>Запоріжжя</option>
              <option>Київ</option>
              <option>Кривий Ріг</option>
              <option>Львів</option>
              <option>Миколаїв</option>
              <option>Одеса</option>
              <option>Полтава</option>
              <option>Харків</option>
            </select>
          </div>

          <div>
            <label className="label_description">Місто одержувач</label>

            <select {...register("Місто одержувач")}>
              <option>Вінниця</option>
              <option>Дніпро</option>
              <option>Запоріжжя</option>
              <option>Київ</option>
              <option>Кривий Ріг</option>
              <option>Львів</option>
              <option>Миколаїв</option>
              <option>Одеса</option>
              <option>Полтава</option>
              <option>Харків</option>
            </select>
          </div>
        </div>
        <hr />
        <div className="select_box">
          <label className="form_wrap">Вид відправлення</label>
          <select {...register("Вид відправлення")}>
            <option>Палети</option>
            <option>Вантажі</option>
          </select>
        </div>
        <hr />
        <label className=" form_wrap ">Характеристика місць</label>

        <div id="idCharacteristics">
        {/* {<Characteristics/>} */}
        {addRow.map((row) => <Characteristics register={register} key={row} row={row} removeCharacteristics={removeCharacteristics}/>)}
        </div>
        <div className="place-add">
          <a className="addRow" href="#" onClick={addCharacteristics}>
            Додати місце
          </a>
        </div>
        <hr />

        
        <div className="packaging_div">
          <label className="form_wrap  ">Послуга "Пакування"</label>
          <input id="checked" type="checkbox" onClick={() => setChecked(checked ? false : true)}/>
          
          <button onClick={() => document.location='https://novaposhta.ua/uploads/misc/doc/Dodatkovi_poslygi.pdf'}>Тарифи пакування</button>
        </div>
        {checked ? <Checked register={register}/> : null}
        <div className="packaging_div">
          <label className="form_wrap">Послуга "Підйом на поверх"</label>
          <input className="num" type="number" {...register("Підйом на поверх/кількість поверхів")}/>
          <span className="units grey">кількість поверхів</span>
          <span className="units">Ліфт:</span>
          <input type="checkbox" {...register("Ліфт")}/>
          {/* <button>Тарифи пакування</button> */}
        </div>
        <div className="packaging_div">
          <label className="form_wrap ">Послуга "Зворотна доставка"</label>
          <input type="checkbox" {...register("Зворотна доставка")}/>
          
        </div>
        <div className="submit_div">
          <button type="submit">Розрахувати вартість</button>
          <a href="">Очистити</a>
        </div>
      </form>
    </div>
  );
}
