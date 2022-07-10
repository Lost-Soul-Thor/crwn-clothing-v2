import './categories.scss'

const CategoryItem = ({ category: {imageUrl, title} }) => {
    //const { imageUrl, title } = category;
    //Ohne das destructuring müsste ich halt immer noch category. davor schreiben. Wäre meine lieblings-syntax
    //es gibt auch noch eine id in dem category-JSON-objekt, wird halt nicht benötigt
    return (
        <div className="category-container">
            <div className='background-image' style={{
              backgroundImage: `url(${imageUrl})` 
            }}/>
            <div className="category-body-container">
              <h2>{title}</h2>
              <p>Shop Now</p>
          </div>
        </div>
    )
}

export default CategoryItem