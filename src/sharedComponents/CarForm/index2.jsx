import React, { useState } from 'react';

export default function CarForm() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  function handleSubmit() {
    if (!name) {
      alert('Please fill name!');
    }
    if (!description) {
      alert('Please fill description!');
    }
    console.log({
      name,
      description,
    });
  }

  return (
    <form className="w-50 mr-auto ml-auto">
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input
          className="form-control"
          type="text"
          id="name"
          name="name"
          onChange={function (e) {
            setName(e.target.value);
          }}
        />
      </div>
      <div className="form-group">
        <label htmlFor="description">Description</label>
        <textarea
          className="form-control"
          id="description"
          name="description"
          onChange={function (e) {
            setDescription(e.target.value);
          }}
        />
      </div>
      {/* <div className="form-group">
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
      </div> */}
      <button className="btn btn-primary" onClick={handleSubmit} type="submit">
        Submit
      </button>
    </form>
  );
}
