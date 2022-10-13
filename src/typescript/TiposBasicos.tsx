export const TiposBasicos = () => {

  const nombre: string = 'Diego'
  const edad: number = 35
  const estaActivo: boolean = true

  const poderes: string[] = ['Velocidad', 'Volar', 'Respirar en el agua']

  return (
    <>
      <h3>Tipos Básicos</h3>
      { nombre }, { edad }, { estaActivo && 'Está activo' }
      <br />
      { poderes.join(', ') }
    </>
  )
}
