import React from 'react';
import { useForm } from 'react-hook-form';

export default function ReactHookFormCarForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onValidData = (data) => {
    console.log(data);
  };

  const onInvalidData = (errors) => {
    alert('Formulář není validní!');
  };

  return (
    <form className="w-50 mr-auto ml-auto" onSubmit={handleSubmit(onValidData, onInvalidData)}>
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input className="form-control" type="text" {...register('name', { required: true })} />
        {errors.name && <p className="text-danger">Name is required</p>}
      </div>
      <div className="form-group">
        <label htmlFor="description">Description</label>
        <textarea className="form-control" {...register('description', { required: true })} />
        {errors.description && <p className="text-danger">Description is required</p>}
      </div>
      <div className="form-group">
        <label htmlFor="new">New</label>
        <input {...register('status', { required: true })} className="form-control-inline" type="radio" id="new" value="NEW" />
        <label htmlFor="used">Used</label>
        <input {...register('status', { required: true })} className="form-control-inline" type="radio" id="used" value="USED" />
        {errors.status && <p className="text-danger">Status is required</p>}
      </div>
      <div className="form-group">
        <label htmlFor="manufacturedAt">Manufactued at</label>
        <input className="form-control" type="date" {...register('manufacturedAt', { required: true, valueAsDate: true })} />
        {errors.manufacturedAt && <p className="text-danger">Manufactured at is required</p>}
      </div>
      <div className="form-group">
        <label htmlFor="brand">Brand</label>
        <select className="form-control" {...register('brand', { required: true })}>
          <option value=""></option>
          <option value="Honda">Honda</option>
          <option value="Volvo">Volvo</option>
        </select>
        {errors.brand && <p className="text-danger">Brand is required</p>}
      </div>
      <div className="form-group">
        <label htmlFor="power">Power</label>
        <input type="number" className="form-control-inline" id="power" {...register('power', { required: true, valueAsNumber: true })} />
        {errors.power && <p className="text-danger">Power is required</p>}
      </div>
      <div className="form-group">
        <label htmlFor="publish">Publish</label>
        <input type="checkbox" className="form-control-inline" id="publish" {...register('publish')} />
      </div>
      <button className="btn btn-primary" type="submit">
        Submit
      </button>
    </form>
  );
}
