import React from 'react'

const Selected = ({ list, label }) => {
    
    let html = <option>Nenhum encontrado</option>

    if(list !== null && list.length > 0)
    {                        
       html = list.map(value => (
            <option>{value}</option>
        ));
    }

    return (
        <div>
            <label>{label}</label>
            <select>
                <option>Selecione...</option>
                {html}
            </select>
        </div>
    )
}

export default Selected