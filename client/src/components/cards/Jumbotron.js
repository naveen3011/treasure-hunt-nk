import styles from '../../../src/pages/HomeStyle.module.css'
export default function Jumbotron({title, subTitle="Treasure Hunt"}){
    return (
        <div className="container-fluid" >
            <div className="row">
                <div className="col text-center p-4 bg-dark" style={ {background:"url('https://res.cloudinary.com/dgsgi8g9f/image/upload/v1683058418/981_cylvde.jpg') no-repeat center center fixed",
                backgroundSize:"cover",opacity:"1"}}>
                    <br/>
                    <h1 contentEditable role='textbox' aria-multiline='true' className=' fw-bolder' style={{color:"dark-black", filter: "grayscale(1)", opacity: "1"}}>{title}</h1>
                    <p contentEditable role='textbox' aria-multiline='true' className="lead  fw-bolder" style={{color:"dark-black", opacity: "1"}}>{subTitle}</p>
                </div>
            </div>
        </div>
    );
}