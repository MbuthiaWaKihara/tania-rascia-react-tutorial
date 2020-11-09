import React from 'react';
import TableHead from './TableHead';
import TableBody from './TableBody';

const Table = ({characterData, removeCharacter}) => {
    return (
      <table>
        <TableHead />
        <TableBody characterData={characterData} removeCharacter={removeCharacter}/>
      </table>
    )
  }



export default Table