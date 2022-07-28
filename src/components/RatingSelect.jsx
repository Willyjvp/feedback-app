
const RatingSelect = ({ changeSelect, selected }) => {

  const handleChange = (e) => {
    changeSelect(+e.currentTarget.value);
  };
  
  return (
    <ul className='rating'>
      {Array.from(Array(10).keys()).map((number) => (
        <li key={number}>
          <input
            type='radio'
            id={`num${number + 1}`}
            name='rating'
            value={number + 1}
            onChange={handleChange}
            checked={selected === number + 1}
          />
          <label htmlFor={`num${number + 1}`}>{number + 1}</label>
        </li>
      ))}
    </ul>
  );
};

export default RatingSelect;
