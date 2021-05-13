import useForm from '../lib/useForm';

const CreateProduct = () => {
  const { inputs, handleChange, clearForm, resetForm } = useForm({
    name: 'narc shoes',
    price: 123,
    description: 'hello',
  });
  return (
    <form>
      <label htmlFor="name">
        Name
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Name"
          value={inputs.name}
          onChange={handleChange}
        />
      </label>
      <label htmlFor="name">
        Price
        <input
          type="number"
          name="price"
          id="price"
          placeholder="price"
          value={inputs.price}
          onChange={handleChange}
        />
      </label>
      {/* <label htmlFor="name">
        Price
        <input
          type="number"
          name="price"
          id="price"
          placeholder="price"
          value={inputs.price}
          onChange={handleChange}
        />
      </label> */}
      <button type="button" onClick={clearForm}>
        Clear Form
      </button>
      <button type="button" onClick={resetForm}>
        Reset Form
      </button>
    </form>
  );
};

export default CreateProduct;
