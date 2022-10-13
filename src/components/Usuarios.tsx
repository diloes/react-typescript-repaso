import { useUsuarios } from '../hooks/useUsuarios'
import { User } from '../interfaces/reqRes'

export const Usuarios = () => {
  const { usuarios, paginaAnterior, paginaSiguiente, paginaRef } = useUsuarios()

  const renderItem = ({ id, first_name, last_name, email, avatar }: User) => {
    return (
      <tr key={id.toString()}>
        <th>
          <img
            src={avatar}
            alt={first_name}
            style={{
              width: 50,
              borderRadius: 100,
            }}
          />
        </th>
        <th>
          {first_name} {last_name}
        </th>
        <th>{email}</th>
      </tr>
    )
  }

  return (
    <>
      <h3>Usuarios:</h3>
      <table className="table">
        <thead>
          <tr>
            <th>Avatar</th>
            <th>Nombre</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {
            //usuarios.map( user => renderItem(user)) es lo mismo que la linea de debajo
            usuarios.map(renderItem)
          }
        </tbody>
      </table>
      <button className="btn btn-primary" onClick={paginaAnterior}>
        Anteriores
      </button>
      &nbsp;
      {usuarios.length !== 0 && (
        <button className="btn btn-primary" onClick={paginaSiguiente}>
          Siguientes
        </button>
      )}
    </>
  )
}
