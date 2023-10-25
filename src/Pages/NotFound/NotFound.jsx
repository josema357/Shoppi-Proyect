
function NotFound() {
  return (
      <div className="max-w-md w-full text-center p-6">
        <h1 className="text-3xl font-semibold text-gray-900">Página no encontrada</h1>
        <p className="mt-4 text-gray-600">La página que estás buscando no se encuentra.</p>
        <a href="/" className="mt-6 inline-block bg-gray-900 hover:bg-gray-950 text-white font-semibold py-2 px-4 rounded">
          Ir a la página de inicio
        </a>
      </div>
  )
}

export {NotFound};