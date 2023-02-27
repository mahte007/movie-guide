

export default function ErrorPage(){

    const IMG = (imgName) => {
        return require("../img/" + imgName)
    }    

    return(
        <div className="error-page">
            <h1>Movie not found!</h1>
            <img src={IMG("error.png")} alt="error" />
            
        </div>
    )
}