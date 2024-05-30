import "./city.css"

export const City = ({ name, population, area, district, photo }) => 
(<div className="city">
        <p className="name">{name}</p>
        <p className="population">Počet obyvatel: {population}</p>
        <p className="district">{district}</p>
        <p className="area">Rozloha: {area}</p>
        <img src={photo} alt={name} />
    </div>)
