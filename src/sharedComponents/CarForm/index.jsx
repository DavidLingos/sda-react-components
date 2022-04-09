import React, { useState } from 'react';

export default function CarForm() {
  const [car, setCar] = useState({});

  function handleChange(e) {
    const newCar = { ...car };
    let value = e.target.value;
    if (e.target.type === 'number') {
      value = Number(value);
    }
    if (e.target.type === 'checkbox') {
      value = e.target.checked;
    }
    if (e.target.type === 'date') {
      value = new Date(value);
    }
    newCar[e.target.name] = value;
    setCar(newCar);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!car.name) {
      alert('Please fill car name!');
      return;
    }
    if (!car.description) {
      alert('Please fill car description!');
      return;
    }
    if (!car.status) {
      alert('Please fill car status!');
      return;
    }
    if (!car.manufacturedAt) {
      alert('Please fill car manufacturedAt!');
      return;
    }
    if (!car.brand) {
      alert('Please fill car brand!');
      return;
    }
    if (!car.power) {
      alert('Please fill car power!');
      return;
    }
    console.log(car);
  };

  return (
    <form className="w-50 mr-auto ml-auto">
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input className="form-control" type="text" id="name" name="name" onChange={handleChange} />
      </div>
      <div className="form-group">
        <label htmlFor="description">Description</label>
        <textarea className="form-control" id="description" name="description" onChange={handleChange} />
      </div>
      <div className="form-group">
        <label htmlFor="new">New</label>
        <input className="form-control-inline" type="radio" name="status" id="new" value="NEW" onChange={handleChange} />
        <label htmlFor="used">Used</label>
        <input className="form-control-inline" type="radio" name="status" id="used" value="USED" onChange={handleChange} />
      </div>
      <div className="form-group">
        <label htmlFor="manufacturedAt">Manufactued at</label>
        <input className="form-control" type="date" id="manufacturedAt" name="manufacturedAt" onChange={handleChange} />
      </div>
      <div className="form-group">
        <label htmlFor="brand">Brand</label>
        <select className="form-control" id="brand" name="brand" onChange={handleChange}>
          <option value=""></option>
          <option value="Honda">Honda</option>
          <option value="Volvo">Volvo</option>
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="power">Power</label>
        <input type="number" className="form-control-inline" id="power" name="power" onChange={handleChange} />
      </div>
      <div className="form-group">
        <label htmlFor="publish">Publish</label>
        <input type="checkbox" className="form-control-inline" id="publish" name="publish" onChange={handleChange} />
      </div>
      <button className="btn btn-primary" onClick={handleSubmit} type="submit">
        Submit
      </button>
    </form>
  );
}
