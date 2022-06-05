import React from 'react'
import { Link } from 'react-router-dom';
import styles from './Cards.module.scss';

const Cards = ( {results, page } ) => {

    let display;

    if(results){
        display = results.map( (x) => {
            
            let{id, name, gender,image, location, status} = x;

            return( 
            <Link 
                style={ {textDecoration: "none"} }
                to={`${page} ${id}`}  
                key={id} 
                class='col-lg-4 col-md-6 col-12 mb-4 position-relative text-dark '
            >
                <div class={`${styles.cards} d-flex flex-column justify-content-center`}>
                    <img src={image} alt='' class={`${styles.img} img-fluid`} />
                    <div style={ {padding: "10px"} } class='content'>
                        <div class='fs-4 fw-bold '> {name} </div>
                        <div class='fs-6 fw-bold mb-4'> {gender} </div>
                        <div class=''>
                            <div class='fs-6'>Ultima Ubicación</div>
                            <div class='fs-5'>{location.name}</div>
                        </div>
                    </div>
                </div>

                { (() => {
                    if(status === "Dead"){
                        return(
                            <div class={`${styles.badge} position-absolute badge bg-danger`}>{status}</div>
                        )
                    }else if(status === "Alive"){
                        return(
                            <div class={`${styles.badge} position-absolute badge bg-success`}>{status}</div>
                        )

                    }else{
                        return(
                            <div class={`${styles.badge} position-absolute badge bg-secondary`}>{status}</div>
                        )
                    }

                })()}
            </Link>

            );
        });
    }else{
        display = "No se han encontrado personajes..."
    }

  return <>{display}</>
}

export default Cards