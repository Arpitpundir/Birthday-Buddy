
const Person = ({name, image, age, id}) => {
  return(
    <div class = "person" key = {id}>
      <img src={image} alt="" />
      <h4>{name}</h4>
      <p>{age} years</p>
    </div>
  );
}

export default Person;