import '/src/styles/CardComponentStyle.css';

export default function cardComponent({ message, title, img }) {

    return (
        <div className="caracSecCards">
            <div className="tools">
                <div className="circle">
                    <span className="red box"></span>
                </div>
                <div className="circle">
                    <span className="yellow box"></span>
                </div>
                <div className="circle">
                    <span className="green box"></span>
                </div>
            </div>
            <div className="card_content">
                <h3>{title}</h3>
                <img src={img}/>
                <p>{message}</p>
            </div>
        </div>
    );

}
