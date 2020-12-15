import './Card.css'

const Card = ({ opj }) => {
    return (
        <div className='card'>
            <h1>
                {opj.name.first} {opj.gender}
            </h1>
            <p>{opj.email}</p>
            <div>
                <img src={opj.avatar} />
            </div>
        </div>
    );
}

export default Card;