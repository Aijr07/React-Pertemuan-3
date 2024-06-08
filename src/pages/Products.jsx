import { Link } from "react-router-dom";
import Button from "../components/UI/Button";
import useMyHook from "../hooks/useMyHooks";
import { useEffect } from "react";

// import { useEffect } from "react";

const Products = () => {

	const {data: data, isErr, isLoading} = useMyHook("http://localhost:8080/products")

	return (
		<>
			{!isErr && !isLoading && (
				<>
				<div className="flex justify-between items-center">
				<p className="text-3xl font-bold">Products</p>
				<Button>
					<Link
						to="addProduct"						
						>
						<p className="-mb-[2px]">Add</p>
					</Link>
				</Button>
			</div>
			<div className="mt-7 border border-borderPrimary rounded-xl bg-white">
				<table className="w-full table-fixed">
					<thead className="text-left bg-primary">
						<tr className="border-b border-borderPrimary">
							<th className="w-2/12 text-center py-4">Image</th>
							<th className="w-3/12">Product Name</th>
							<th className="w-3/12">Category</th>
							<th className="w-3/12">Price</th>
							<th className="w-3/12">Stock</th>
							<th className="w-2/12">Action</th>
						</tr>
					</thead>
					<tbody className="table-row-group font-semibold">
						{data && data.map((data) =>(
							<>
							<tr key={data.id}  className="border-borderPrimary border-b">
							<td className="py-6 flex justify-center">
								<div className="w-14 overflow-hidden rounded-xl">
									<img
										src={data.image}
										alt=""
									/>
								</div>
							</td>
							<td>{data.product_name}</td>
							<td>{data.category}</td>
							<td>{data.price}</td>
							<td>{data.stocks}</td>
							<td className="h-full">
								<div className="inline-flex rounded-lg font-normal bg-[#FAFBFD] border border-borderPrimary">
									
									<Link
										to="EditProduct/123"
										className="py-2 px-4 text-black"
										aria-label="edit"
									>
										<i className="ri-edit-box-line"></i>
									</Link>
									<div className="w-[1px] border-borderPrimary h-10"></div>
									<button className="py-2 px-4 text-error" aria-label="delete">
										<i className="ri-delete-bin-line"></i>
									</button>
								</div>
							</td>
						</tr>
							</>
						))}
					</tbody>
				</table>
			</div>
				</>
			)}
			{isLoading && (
				<div className="w-full h-full flex justify-center items-center">
				<div className="border-gray-300 h-20 w-20 animate-spin rounded-full border-8 border-t-blue-600" />
			</div>
			)}
			{isErr && (
				<div className="w-full h-full flex justify-center items-center">
				<h1 className="text-2xl">Ada Error!</h1>
			</div>
			)}
		</>
	);
};

export default Products;
