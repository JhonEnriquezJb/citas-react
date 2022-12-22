// CHILDREN -> Hace referencia a todo lo que le pases a un componente
const Error = ({children}) => {  
  return (
    <div className="bg-red-700 text-white text-center p-2 uppercase font-bold mb-5 rounded-md">
    {children}
  </div>
  )
}

export default Error