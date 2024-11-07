import React, { useState } from 'react';
import './Popular.css';
import TableView from '../Movie/TableView';
import ScrollView from '../Movie/ScrollView';

function Popular() {
  const [view, setView] = useState(true); // true: Table View, false: Scroll View

  return (
    <div className="popular">
      <h2>대세 콘텐츠</h2>
      <button onClick={() => setView(true)}>Table View</button>
      <button onClick={() => setView(false)}>Scroll View</button>
      {view ? <TableView /> : <ScrollView />}
    </div>
  );
}

export default Popular;
