const UserName = (props) => {

  return (
    <div>
      <p>Hello my best friend {props.user.name} {props.user.surname}</p>
    </div>
  )
}

export default UserName