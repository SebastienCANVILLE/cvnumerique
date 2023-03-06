export default function Langue() {



    return (
        <div className='container mt-5'>
        <div className="accordion-item">
            <h2 className="accordion-header" id="panelsStayOpen-headingEight">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseEight" aria-expanded="false" aria-controls="panelsStayOpen-collapseEight">
                    Langues
                </button>
            </h2>
            <div id="panelsStayOpen-collapseEight" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingEight">
                <div className="btn-group mb-1 mt-2" role="group" aria-label="Third group">
                    <button type="button" className="btn btn-info justify-content-end">+</button>
                </div>
                <div className="accordion-body">
                    <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                </div>
            </div>
        </div>
        </div>
    );
}