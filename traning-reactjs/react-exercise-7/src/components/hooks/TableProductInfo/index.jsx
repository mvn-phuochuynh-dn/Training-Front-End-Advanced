import React, { useState } from 'react';
import { Form2 } from '..';

export default function TableProductInfo() {
    const [product, setProduct] = useState([]);

    function deleteItem(temp) {
		const newList = product.filter(item => item.title !== temp);
		setProduct(newList);
	}

    return (
		<div className="App">
			<Form2 onSubmit={data => setProduct([...product, data])} />
			<table>
				<thead>
					<tr>
						<th>ID</th>
						<th>TITLE</th>
						<th>DESCRIPTION</th>
						<th>PRICE</th>
						<th>Actions</th>
					</tr>
				</thead>
				<tbody>
					{product.map((product, index) => {
						console.log(product, index);
						return (
							<tr key={product.title}>
								<th>{index + 1}</th>
								<td>{product.title}</td>
								<td>{product.description}</td>
								<td>{product.price}</td>
								<td>
									<button onClick={() => deleteItem(product.title)}>
										Delete
									</button>
								</td>
							</tr>
						);
					})}
				</tbody>
			</table>
		</div>
	);
}
