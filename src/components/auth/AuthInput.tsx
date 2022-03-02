interface AuthInputProps {
  label: string
  value: any
  required?: boolean
  type?: 'text' | 'email' | 'password'
  onChange: (newValue: any) => void
}

export default function AuthInput(props: AuthInputProps) {
  return (
    <div className="flex flex-col mt-4">
      <label>{props.label}</label>
      <input
        type={props.type ?? 'text'}
        value={props.value}
        onChange={event => props.onChange?.(event.target.value)}
        required={props.required}
        className={`
          px-4 py-3 mt-2
          rounded-lg
          bg-gray-200 focus:bg-white
          border focus:border-blue-500 focus:outline-none
        `}
      />
    </div>
  )
}