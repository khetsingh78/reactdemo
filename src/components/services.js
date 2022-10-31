// import React from "react";
import Categories from "./subcomponent/categories";
function Services() {

    let Category_list = [
        {
            id: 1,
            img_cat: "https://thumbs.dreamstime.com/b/dress-shirts-men-men-shirts-folded-pressed-business-wear-men-dress-shirts-men-cloth-159981593.jpg",
            cat_title: "Men Shirt's"
        },
        {
            id: 2,
            img_cat: "https://thumbs.dreamstime.com/b/dress-shirts-men-men-shirts-folded-pressed-business-wear-men-dress-shirts-men-cloth-159981593.jpg",
            cat_title: "Men Shirt's"
        },
        {
            id: 3,
            img_cat: "https://thumbs.dreamstime.com/b/dress-shirts-men-men-shirts-folded-pressed-business-wear-men-dress-shirts-men-cloth-159981593.jpg",
            cat_title: "Men Shirt's"
        },
        {
            id: 4,
            img_cat: "https://thumbs.dreamstime.com/b/dress-shirts-men-men-shirts-folded-pressed-business-wear-men-dress-shirts-men-cloth-159981593.jpg",
            cat_title: "Men Shirt's"
        },
        {
            id: 5,
            img_cat: "https://thumbs.dreamstime.com/b/dress-shirts-men-men-shirts-folded-pressed-business-wear-men-dress-shirts-men-cloth-159981593.jpg",
            cat_title: "Men Shirt's"
        },
        {
            id: 6,
            img_cat: "https://thumbs.dreamstime.com/b/dress-shirts-men-men-shirts-folded-pressed-business-wear-men-dress-shirts-men-cloth-159981593.jpg",
            cat_title: "Men Shirt's"
        }
    ]

    return (
        <div className="fluid-container my-md-5 border">
            <div className="container">
                <div className="row">
                    <h1 className="text-center text-primary py-md-5 fs-2 fw-bold">Choose Categories</h1>
                </div>
                <div className="row gy-3">
                    {Category_list.map((val) => <Categories key={val.id} img={val.img_cat} title={val.cat_title} />)}
                </div>
            </div>
        </div>
    )
}

export default Services;