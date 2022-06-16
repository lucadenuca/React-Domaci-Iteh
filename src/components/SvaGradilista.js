
function SvaGradilista(props) {

    const gradilista = props.spisak;

    return (
        <div>

            {gradilista.map(gradiliste => {
                return (

                    <h3 key={gradiliste.ID}>
                        Adresa: {gradiliste.Adresa}
                        Grad: {gradiliste.Grad} {"\t"}
                        Investitor: {gradiliste.Investitor}
                        Broj radnika: {gradiliste.BrojRadnika}
                    </h3>
                );
            })}

        </div >
    )
}

export default SvaGradilista;