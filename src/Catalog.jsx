import { ProductCard } from './ProductCard'
import './Catalog.css'

export default function Catalog({products}) {
  return (
    <>
      <div className='catalog'>
        {
          products.map((product) => 
            <div key={product.id} style={{display:'flex'}}>
              <ProductCard product={product} />
            </div>
            )
        }
      </div>
    </>
  )
}
