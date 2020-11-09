import React from 'react';

const TableBody = ({characterData, removeCharacter}) => {
    const rows = characterData.map((row, index) => (
        <tr key={index}>
            <td>{row.name}</td>
            <td>{row.job}</td>
            <td><button onClick={() => removeCharacter(index)}>Delete</button></td>
        </tr>
    ))
    return (
        <tbody>
            {rows}
        </tbody>
    )
}

export default TableBody;