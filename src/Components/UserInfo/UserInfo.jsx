
const UserInfo = ({parsedAccount, setView}) => {
  return (
    <div className='flex flex-col w-80'>
        <p>
          <span className='font-light text-sm'>Name: </span>
          <span>{parsedAccount?.name}</span>
        </p>
        <p>
          <span className='font-light text-sm'>Email: </span>
          <span>{parsedAccount?.email}</span>
        </p>
        <button
          className='border border-black rounded-lg mt-6 py-3'
          onClick={() => setView('edit-user-info')}>
          Edit
        </button>
      </div>
  )
}

//Desabilitar las comprobaciones de Proptypes para este componente
UserInfo.propTypes=null;

export {UserInfo};