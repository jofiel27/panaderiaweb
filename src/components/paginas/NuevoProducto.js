import React, {useContext, useState } from 'react';
import {  useFormik } from 'formik';
import * as Yup from 'yup';
import { FirebaseContext} from '../../firebase';
import { useNavigate } from 'react-router-dom';
import FileUploader from 'react-firebase-file-uploader';


const  NuevoProducto = () => {

  //state para imagenes
  const [subiendo, guardarSubiendo ] = useState(false);
  const [progreso, guardarProgreso] = useState(0);
  const [urlimagen, guardarUrlImagen ] = useState('');


  // Context con las operaciones de firebase
    const {firebase} = useContext(FirebaseContext);
    console.log(firebase)
    
// HOOK PARA REDIRECCIONAR

const navigate = useNavigate();


  // validacion y leer los datos del formularios
    const formik = useFormik({
        initialValues: {
            Producto: '',
            precio: '',
            categoria: '',
            imagen: '',
            descripcion: '',
        
        },

        validationSchema: Yup.object({
            Producto: Yup.string()
                      .min(3, 'el producto debe tener al menos 3 caracteres').required('Nombre del Producto es Obligatorio'),
            precio: Yup.number()
                      .min(1, 'debes agregar un precio').required('el precio del Producto es Obligatorio'),    
            categoria: Yup.string()
                      .required('la categoria del Producto es Obligatorio'),        
            descripcion: Yup.string()
                      .required('la descripcion del Producto es Obligatorio'),              
          
        }),

        onSubmit: Producto => {
            try{
            
              Producto.existencia = "true";
              Producto.imagen = urlimagen;
               firebase.db.collection('ProductoN').add(Producto)
              //redireccion
              navigate('/Mercancia');
              
            }
            catch(error){
              console.log(error)
            }

         }


    })
// todo sobre imagen
const handleUploadStart = () =>{
      guardarProgreso(0);
      guardarSubiendo(true);
}
const handleUploadError = error =>{
    guardarSubiendo(false);
    console.log(error);
}
const handleUploadSuccess = async Producto =>{
    guardarProgreso(100);
    guardarSubiendo(false)

    //almacenar la url de destino
    const url = await firebase.storage.ref("imagenesP").child(Producto).getDownloadURL();

    console.log(url);
    guardarUrlImagen(url);
}
const handleProgress = progreso =>{
    
  guardarProgreso(progreso);

  console.log(progreso);
}


    return ( 
        <>

      <h1 className ="text-3xl  mb-4 text-center font-semibold text-gray-700"> Agregar Producto </h1>
        
        <div className="flex justify-center mt-10">
          <div className=" W-full max-w-3xl">
          <form
            onSubmit={formik.handleSubmit}
          >
        

            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="Producto">Nombre del Producto</label>
              <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="Producto"
              type="text"
              placeholder="Nombre Producto"
              value={ formik.values.Producto}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              />
            </div>

            { formik.touched.Producto && formik.errors.Producto? (

                <div className='bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-4' role='alert'>
                    <p className='font-bold'> Hubo un error:</p>
                    <p>{formik.errors.Producto}</p>
                </div>
            ) : null }
 

            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="precio">Precio</label>
              <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="precio"
              type="number"
              placeholder="$100"
              min='0'
              value={ formik.values.precio}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}

              />
            </div>

            { formik.touched.precio && formik.errors.precio ? (

                <div className='bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-4' role='alert'>
                    <p className='font-bold'> Hubo un error:</p>
                    <p>{formik.errors.precio}</p>
                </div>
                ) : null }

            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="categoria">Categoria</label>
               <select
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
               id="categoria"
               name="categoria"
               value={ formik.values.categoria}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}

               >
                <option value=''> ---Selecciones--- </option>
                <option value='Pan'> ---Pan--- </option>
                <option value='Pan Dulce'> ---Pan Dulce--- </option>
                <option value='Pan Salado'> ---Pan Canilla--- </option>
                <option value='Dulce'> ---Dulce--- </option>
              
               </select>
             
            </div>

            { formik.touched.categoria && formik.errors.categoria ? (
                <div className='bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-4' role='alert'>
                    <p className='font-bold'> Hubo un error:</p>
                    <p>{formik.errors.categoria}</p>
                </div>
                ) : null }


            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="imagen">Imagen del Producto </label>
             <FileUploader
             accept='imagen/*'
             id = 'imagen'
             name = 'imagen'
             randomizeFilename 
             storageRef = {firebase.storage.ref('imagenesP')}
             onUploadStart={handleUploadStart}
             onUploadError={handleUploadError}
             onUploadSuccess={handleUploadSuccess}
             onProgress={handleProgress}

             />
             
            </div>

            <div className="mb-4">
              <label className=" block text-gray-700 text-sm font-bold mb-2" htmlFor="descripcion">Descripcion</label>
              <textarea
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-40"
              id="descripcion"
              placeholder="Descripcion del Producto"
              value={ formik.values.descripcion}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}


              ></textarea>
            </div>

            { formik.touched.descripcion && formik.errors.descripcion ? (
                <div className='bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-4' role='alert'>
                    <p className='font-bold'> Hubo un error:</p>
                    <p>{formik.errors.descripcion}</p>
                </div>
              ) : null }

            <input
            type="submit"
            className="bg-gray-800 hover:bg-gray-900 w-full mt-5 p-2 text-white uppercase font-bold"
            value="Agregar Producto"
           />
          </form>
          </div>
        </div>
        
        </>
    );
} 

export default NuevoProducto ;