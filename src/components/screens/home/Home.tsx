import { FC } from 'react'

import Meta from '@/ui/Meta'
import CatalogPagination from '@/ui/catalog/CatalogPagination'
import Layout from '@/ui/layout/Layout'

import { TypePaginationProducts } from '@/types/product.interface'


const Home: FC<TypePaginationProducts> = ({ products, length }) => {



	return (
		<Meta title='Home'>
			<Layout>
				
				<CatalogPagination
					title='Freshed products'
					data={{ products, length }}
					
				/>
			</Layout>
		</Meta>
	)
}

export default Home
