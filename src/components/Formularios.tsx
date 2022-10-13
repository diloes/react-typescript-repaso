import { useForm } from '../hooks/useForm'

export const Formularios = () => {
  const { form, onChange } = useForm({
    email: 'test@test.com',
    password: '123456',
  })

  return (
    <>
      <h3>Formularios</h3>
      <input
        type="text"
        className="form-control"
        placeholder="Email"
        value={form.email}
        onChange={ev => onChange(ev.target.value, 'email')}
      />

      <input
        type="text"
        className="form-control mt-2"
        placeholder="Password"
        value={form.password}
        onChange={ev => onChange(ev.target.value, 'password')}
      />

      <code>
        <pre>{JSON.stringify(form, null, 2)}</pre>
      </code>
    </>
  )
}
