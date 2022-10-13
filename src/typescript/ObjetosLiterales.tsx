interface Persona {
  nombreCompleto: string
  edad: number
  direccion: Direccion
}

interface Direccion {
  calle: string
  num: number
}

export const ObjetosLiterales = () => {

  const persona: Persona = {
    nombreCompleto: 'Diego',
    edad: 35,
    direccion: {
      calle: 'Salsipuedes',
      num: 14
    }
  }

  return (
    <div>
      <h3>Objetos Literales</h3>
      <code>
        <pre>
          { JSON.stringify( persona, null, 2 ) }
        </pre>
      </code>
    </div>
  )
}
