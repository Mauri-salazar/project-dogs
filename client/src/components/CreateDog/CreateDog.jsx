import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getTemperaments , postCreateDog } from '../../actions';

import './createDog.css';

const  validate = (input) => {
    const errors = {};

    if (!input.name || !/^[A-Z]+[A-Za-z0-9\s]+$/g.test(input.name)){
        errors.name = 'Primer letra en Mayuscula, solo Letras y Numeros ';
    }
    if (!input.height_max || !/^[1-9]\d*(\.\d+)?$/.test(input.height_max)){
        errors.height_max ='El valor Max tiene que ser numerico no se permite coma';
    }
    if (!input.height_min  || !/^[1-9]\d*(\.\d+)?$/.test(input.height_min)){
        errors.height_min =  'El valor Min tiene que ser numerico no se permite coma';
    }
    if (input.height_max <= input.height_min){
        errors.height_min = 'La altura minima no puede ser Mayor o Igual que la altura maxima';
    }
    if (!input.weight_max || !/^[1-9]\d*(\.\d+)?$/.test(input.weight_max)){
        errors.weight_max ='El valor Max tiene que ser numerico no se permite coma';
    }
    if (!input.weight_min || !/^[1-9]\d*(\.\d+)?$/.test(input.weight_min)){
        errors.weight_min = 'El valor Min tiene que ser numerico no se permite coma';
    }
    if (input.weight_max <= input.weight_min){
        errors.weight_min = 'El peso minimo  no puede ser Mayor o Igual que el peso maximo';
    }
    if (!input.life_time_max || !/^[1-9]\d*(\.\d+)?$/.test(input.life_time_max)){
        errors.life_time_max =  'El valor Max tiene que ser numerico no se permite coma';
    }
    if (!input.life_time_min || !/^[1-9]\d*(\.\d+)?$/.test(input.life_time_min)){
        errors.life_time_min =  'El valor Min tiene que ser numerico no se permite coma';
    }
    if (input.life_time_max <= input.life_time_min){
        errors.life_time_min = 'La esperanza de vida minima  no puede ser Mayor o Igual que la esperanza de vida maxima';
    }
    if (!input.image){
        errors.image = 'Se requiere una imagen ';
    }
    if (input.temperament < 1){
        errors.temperament = 'Se requieren  Temperamentos';
    }
    return errors;
}

export const CreateDog = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate();
    const temperaments = useSelector((state)=> state.temperaments);

    const[input, setInput] = useState({
        name: "",
        height_min: "",
        height_max: "",
        weight_min: "",
        weight_max: "",
        life_time_min: "",
        life_time_max: "",
        temperament:[],
        image:"",
    })
    const [errors, setErros] = useState({});



    useEffect(() => {
        dispatch(getTemperaments());
    }, [dispatch]);

    const handleChangeInput = (e) => {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        });
        setErros(validate({
            ...input,
            [e.target.name]: e.target.value
        }));
        console.log(input);
    };

    const handleSelect = (e) => {
        if(input.temperament.length > 0 && input.temperament.indexOf(e.target.value) !== -1) return;
        setInput({
            ...input,
            temperament: [...input.temperament,e.target.value]
        });
        setErros(validate({
            ...input,
            temperament: [...input.temperament,e.target.value]
        }));
    };


    const handleDelete = (el) => {
        setInput({
            ...input,
            temperament: input.temperament.filter(e => e !== el)
        })
    };

    const handleSubmit = (e) => {
        if (  input.name === "" || errors.name  || errors.height_min  || errors.height_max || errors.weight_min || errors.weight_max || errors.life_time_min || errors.life_time_max || errors.image || errors.temperament) {
            e.preventDefault();
            alert('completa todos los campos');
        } else {
            e.preventDefault();
            dispatch(postCreateDog(input));
            alert('Mascota creada');
            console.log(input);
            setInput({
                name: "",
                height_min: "",
                height_max: "",
                weight_min: "",
                weight_max: "",
                life_time_min: "",
                life_time_max: "",
                temperament:[],
                image:"",
            })
            navigate('/home');
        }
    };

    return(
        <div className='create-dog'>
            <div className='from-conteiner'>
                <h1>Crea Tu Mascota</h1>
                <form>
                    <div className='inpt-cont'>
                        <h5>Nombre</h5>
                        <input
                            placeholder='Nombre:...'
                            type='text'
                            value={input.name}
                            onChange={ (e) => handleChangeInput(e)}
                            name='name'
                        />
                        {errors.name && (<p className='error'>{errors.name}</p>)}
                    </div>
                    <div  className='inpt-cont'>
                        <h5>Altura minima</h5>
                        <input
                            placeholder='Altura minima:...'
                            type='text'
                            value={input.height_min}
                            onChange={ (e) => handleChangeInput(e)}
                            name='height_min'
                        />
                        {errors.height_min && (<p className='error'>{errors.height_min}</p>)}
                    </div>
                    <div className='inpt-cont'>
                        <h5>Altura minima</h5>
                        <input
                            placeholder='Altura maxima:...'
                            type='text'
                            value={input.height_max}
                            onChange={ (e) => handleChangeInput(e)}
                            name='height_max'
                        />
                        {errors.height_max && (<p className='error'>{errors.height_max}</p>)}
                    </div>
                    <div className='inpt-cont'>
                        <h5>Peso minimo</h5>
                        <input
                            placeholder='Peso minimo:...'
                            type='text'
                            value={input.weight_min}
                            onChange={ (e) => handleChangeInput(e)}
                            name='weight_min'
                        />
                        {errors.weight_min && (<p className='error'>{errors.weight_min}</p>)}
                    </div>
                    <div className='inpt-cont'>
                        <h5>Peso maximo</h5>
                        <input
                            placeholder='Peso maximo:...'
                            type='text'
                            value={input.weight_max}
                            onChange={ (e) => handleChangeInput(e)}
                            name='weight_max'
                        />
                        {errors.weight_max && (<p className='error'>{errors.weight_max}</p>)}
                    </div>
                    <div className='inpt-cont'>
                        <h5>Esperanza de vida maxima</h5>
                        <input
                            placeholder='Esperanza de vida maxima:...'
                            type='text'
                            value={input.life_time_max}
                            onChange={ (e) => handleChangeInput(e)}
                            name='life_time_max'
                        />
                        {errors.life_time_max && (<p className='error'>{errors.life_time_max}</p>)}
                    </div>
                    <div className='inpt-cont'>
                        <h5>Esperanza de vida minima</h5>
                        <input
                            placeholder='Esperanza de vida minima:...'
                            type='text'
                            value={input.life_time_min}
                            onChange={ (e) => handleChangeInput(e)}
                            name='life_time_min'
                        />
                        {errors.life_time_min && (<p className='error'>{errors.life_time_min}</p>)}
                    </div>
                    <div className='inpt-cont'>
                        <h5>Imagen</h5>
                        <input
                            placeholder='Imagen'
                            type='url'
                            value={input.image}
                            onChange={ (e) => handleChangeInput(e)}
                            name='image'
                        />
                        {errors.image && (<p className='error'>{errors.image}</p>)}
                    </div>
                    <div className='inpt-cont'>
                        <label>Temperamentos:</label>

                        <br/>
                        <select className='select' onChange={ (e) => handleSelect(e)}>
                            {
                                temperaments &&  temperaments.map( (res) => (
                                    <option value={res.name} key={res.id}>{res.name}</option>
                                ))
                            }
                        </select>
                        {errors.temperament && (<p className='error'>{errors.temperament}</p>)}
                        <ul>
                            <li className='tmp'>
                                {
                                    input.temperament.map( (el) =>
                                        <div>
                                            <h3>{el}</h3>
                                            <button type='button' key={el.id} onClick={()=>handleDelete(el)}>X</button>
                                        </div>
                                    )
                                }
                            </li>
                        </ul>
                    </div>
                </form>
            </div>
            <div className='links'>
                <Link to='/home'>
                      <p></p>
                      <p></p>
                      <p></p>
                      <p></p>
                      <button className='btn-home'>Volver</button>
                </Link>
                <Link to='#' onClick={ (e) => handleSubmit(e)}>
                     <p></p>
                     <p></p>
                     <p></p>
                     <p></p>
                     <button className='btn-create'>Crear Mascota</button>
                </Link>
            </div>
        </div>
    )
}
