import React, { useState } from 'react';
import './Popular.css';
import TableView from '../Movie/TableView';
import ScrollView from '../Movie/ScrollView';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTable, faInfinity } from '@fortawesome/free-solid-svg-icons';

function Popular() {
  const [view, setView] = useState(true); // true: Table View, false: Scroll View

  return (
    <div className="popular">
      <button onClick={() => setView(true)}><FontAwesomeIcon icon={faTable} className='fas'/></button>
      <button onClick={() => setView(false)}><FontAwesomeIcon icon={faInfinity} className='fas'/></button>
      {view ? <TableView /> : <ScrollView />}
    </div>
  );
}

export default Popular;
