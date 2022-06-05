import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const CardDetail = () => {

    let { id } = useParams();
    
    let [fetchedData, updateFetchedData] = useState( [] );

    let { name, image, gender, species, status, type, location, origin  } = fetchedData;

    let api = `https://rickandmortyapi.com/api/character/${id}`

    useEffect(() => {

        ( async function () {
    
          let data = await fetch(api).then( res => res.json() )
          updateFetchedData(data);
        }) ()
    
      }, [api])

  return (
    <div className='container d-flex justify-content-center'>
        <div className='d-flex flex-column gap-3'>
            <h1 className='text-center'>{name}</h1> 
            <img src={image} alt='' className='img-fluid'/>

            { (() => {
                    if(status === "Dead"){
                        return(
                            <div class="badge bg-danger fs-5">{status}</div>
                        )
                    }else if(status === "Alive"){
                        return(
                            <div class="badge bg-success fs-5">{status}</div>
                        )

                    }else{
                        return(
                            <div class="badge bg-secondary fs-5">{status}</div>
                        )
                    }

            })()}

            <div className='content'>
                <div className=''>
                    <span className='fw-bold'>Genero: </span> {gender}
                </div>

                <div className=''>
                    <span className='fw-bold'>Especie: </span> {species}
                </div>

                <div className=''>
                    <span className='fw-bold'>Tipo: </span> {type === "" ? "Desconocido" : type}
                </div>

                <div className=''>
                    <span className='fw-bold'>Ubicación: </span> {location?.name}
                </div>

                <div className=''>
                    <span className='fw-bold'>Origen: </span> {origin?.name}
                </div>
            </div>
        </div>
    </div>
  )
}

export default CardDetail