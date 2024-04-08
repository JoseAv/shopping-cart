function RenderMain({Productfilters}){ 
    let productos = Productfilters.length > 0 

    return(
        <>
        
        <main className='container'>
          
    {productos ? Productfilters.slice(0,10).map(e => (
      <div key={e.id} className='products-main'>
      <h2>{e.title}</h2>
      <p>{e.description}</p>
      <h3>{e.price}</h3>
      <button>Comprar</button>

      </div>

    )) : <p>No hay </p>}
  </main>
        
        </>



    )
}

export default RenderMain