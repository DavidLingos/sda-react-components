import React, { useState, useRef, useEffect } from 'react';
import { contacts } from '../../contactsDb';

function getCountries() {
  const countries = [];
  contacts.forEach((contact) => {
    if (!countries.includes(contact.country)) {
      countries.push(contact.country);
    }
  });
  return countries;
}

export default function ContactsList() {
  const nameInputRef = useRef();
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(50);
  const [nameFilter, setNameFilter] = useState();
  const [countryFilter, setCountryFilter] = useState('');
  const countries = getCountries();

  const start = (page - 1) * pageSize;
  const end = start + pageSize;

  useEffect(function () {
    nameInputRef.current.focus();
  }, []);

  return (
    <div>
      <input type="text" placeholder="Name" onChange={(e) => setNameFilter(e.target.value)} ref={nameInputRef} />
      <select onChange={(e) => setCountryFilter(e.target.value)}>
        <option></option>
        {countries.map((country) => (
          <option value={country}>{country}</option>
        ))}
      </select>
      {contacts
        .filter((i) => !nameFilter || i.name.toLowerCase().includes(nameFilter.toLowerCase()))
        .filter((i) => !countryFilter || i.country === countryFilter)
        .slice(start, end)
        .map((contact, index) => (
          <div key={index}>
            {contact.name} {contact.phone} {contact.country}
          </div>
        ))}
      <div className="d-flex align-items-center mt-3">
        <button
          className="btn btn-primary"
          onClick={function () {
            if (page > 1) {
              setPage(page - 1);
            }
          }}>
          {'<'}
        </button>
        <p className="mr-3 ml-3 mt-auto mb-auto">{page}</p>
        <button
          className="btn btn-primary"
          onClick={function () {
            if (contacts.length > end) {
              setPage(page + 1);
            }
          }}>
          {'>'}
        </button>
        <button
          className="btn btn-secondary"
          onClick={function () {
            setPageSize(1);
          }}>
          1
        </button>
        <button
          className="btn btn-secondary"
          onClick={function () {
            setPageSize(5);
          }}>
          5
        </button>
        <button
          className="btn btn-secondary"
          onClick={function () {
            setPageSize(10);
          }}>
          10
        </button>
        <button
          className="btn btn-secondary"
          onClick={function () {
            setPageSize(25);
          }}>
          25
        </button>
        <button
          className="btn btn-secondary"
          onClick={function () {
            setPageSize(50);
          }}>
          50
        </button>
      </div>
    </div>
  );
}
