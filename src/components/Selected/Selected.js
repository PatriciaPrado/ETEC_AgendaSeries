import React from 'react'

const Selected = ({ props }) => {
    const {list} = props
    // ou const {list, label} = props  ... e aí tira a linha 20
    
    let html = <option>Nenhum encontrado</option>

    if(list !== null && list.lenght > 0)
    {
        // html = list.map(value => {
        //     return <option>{value}</option>
        // });

        html = list.map(value => (
            <option>{value}</option>
        ));
    }

    const {label} = props

    return (
        <div>
            <label>{}</label>
            <selected>
                <option>Selecione...</option>
                html
            </selected>
        </div>
    )
}

export default Selected