
function Categories(props) {
    return (
        <div className="col-md-4">
            <div className="shadow p-3 bg-body rounded">
                <img src={props.img} alt=""  width="100%" height="100%" />
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                </div>
            </div>
        </div>
    )
}

export default Categories;