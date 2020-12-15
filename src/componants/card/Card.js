import './Card.css'

const Card = ({ opj }) => {
    console.log(opj)
    return (
        <div className='card'>
            <h1>
                {opj.first_name} {opj.last_name}
            </h1>
            <p>{opj.email}</p>
            <div>
                <img src={opj.avatar} />
            </div>
        </div>
    );
}

export default Card;