import { Link } from "react-router-dom";
import Button from "../components/UI/Button";

const Products = () => {
	return (
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
						<tr className="border-borderPrimary border-b">
							<td className="py-6 flex justify-center">
								<div className="w-14 overflow-hidden rounded-xl">
									<img
										src="https://images.unsplash.com/photo-1569718212165-3a8278d5f624?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cmFtZW58ZW58MHx8MHx8fDA%3D"
										alt=""
									/>
								</div>
							</td>
							<td>Fried Rice</td>
							<td>Food</td>
							<td>Rp25.000</td>
							<td>10</td>
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
						<tr className="border-borderPrimary border-b">
							<td className="py-6 flex justify-center">
								<div className="w-14 overflow-hidden rounded-xl">
									<img
										src="https://images.unsplash.com/photo-1569718212165-3a8278d5f624?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cmFtZW58ZW58MHx8MHx8fDA%3D"
										alt=""
									/>
								</div>
							</td>
							<td>Fried Rice</td>
							<td>Food</td>
							<td>Rp25.000</td>
							<td>10</td>
							<td className="h-full">
								<div className="inline-flex rounded-lg font-normal bg-[#FAFBFD] border border-borderPrimary">
									<a
										href="./editProduct.html"
										className="py-2 px-4 text-black"
										aria-label="edit"
									>
										<i className="ri-edit-box-line"></i>
									</a>
									<div className="w-[1px] border-borderPrimary h-10"></div>
									<button className="py-2 px-4 text-error" aria-label="delete">
										<i className="ri-delete-bin-line"></i>
									</button>
								</div>
							</td>
						</tr>
						<tr className="border-borderPrimary border-b">
							<td className="py-6 flex justify-center">
								<div className="w-14 overflow-hidden rounded-xl">
									<img
										src="https://images.unsplash.com/photo-1569718212165-3a8278d5f624?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cmFtZW58ZW58MHx8MHx8fDA%3D"
										alt=""
									/>
								</div>
							</td>
							<td>Fried Rice</td>
							<td>Food</td>
							<td>Rp25.000</td>
							<td>10</td>
							<td className="h-full">
								<div className="inline-flex rounded-lg font-normal bg-[#FAFBFD] border border-borderPrimary">
									<a
										href="./editProduct.html"
										className="py-2 px-4 text-black"
										aria-label="edit"
									>
										<i className="ri-edit-box-line"></i>
									</a>
									<div className="w-[1px] border-borderPrimary h-10"></div>
									<button className="py-2 px-4 text-error" aria-label="delete">
										<i className="ri-delete-bin-line"></i>
									</button>
								</div>
							</td>
						</tr>
						<tr className="border-borderPrimary border-b">
							<td className="py-6 flex justify-center">
								<div className="w-14 overflow-hidden rounded-xl">
									<img
										src="https://images.unsplash.com/photo-1569718212165-3a8278d5f624?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cmFtZW58ZW58MHx8MHx8fDA%3D"
										alt=""
									/>
								</div>
							</td>
							<td>Fried Rice</td>
							<td>Food</td>
							<td>Rp25.000</td>
							<td>10</td>
							<td className="h-full">
								<div className="inline-flex rounded-lg font-normal bg-[#FAFBFD] border border-borderPrimary">
									<a
										href="./editProduct.html"
										className="py-2 px-4 text-black"
										aria-label="edit"
									>
										<i className="ri-edit-box-line"></i>
									</a>
									<div className="w-[1px] border-borderPrimary h-10"></div>
									<button className="py-2 px-4 text-error" aria-label="delete">
										<i className="ri-delete-bin-line"></i>
									</button>
								</div>
							</td>
						</tr>
						<tr className="border border-borderPrimary border-b">
							<td className="py-6 flex justify-center">
								<div className="w-14 overflow-hidden rounded-xl">
									<img
										src="https://images.unsplash.com/photo-1569718212165-3a8278d5f624?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cmFtZW58ZW58MHx8MHx8fDA%3D"
										alt=""
									/>
								</div>
							</td>
							<td>Fried Rice</td>
							<td>Food</td>
							<td>Rp25.000</td>
							<td>10</td>
							<td className="h-full">
								<div className="inline-flex rounded-lg font-normal bg-[#FAFBFD] border border-borderPrimary">
									<a
										href="./editProduct.html"
										className="py-2 px-4 text-black"
										aria-label="edit"
									>
										<i className="ri-edit-box-line"></i>
									</a>
									<div className="w-[1px] border-borderPrimary h-10"></div>
									<button className="py-2 px-4 text-error" aria-label="delete">
										<i className="ri-delete-bin-line"></i>
									</button>
								</div>
							</td>
						</tr>
						<tr className="border-borderPrimary border-b">
							<td className="py-6 flex justify-center">
								<div className="w-14 overflow-hidden rounded-xl">
									<img
										src="https://images.unsplash.com/photo-1569718212165-3a8278d5f624?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cmFtZW58ZW58MHx8MHx8fDA%3D"
										alt=""
									/>
								</div>
							</td>
							<td>Fried Rice</td>
							<td>Food</td>
							<td>Rp25.000</td>
							<td>10</td>
							<td className="h-full">
								<div className="inline-flex rounded-lg font-normal bg-[#FAFBFD] border border-borderPrimary">
									<a
										href="./editProduct.html"
										className="py-2 px-4 text-black"
										aria-label="edit"
									>
										<i className="ri-edit-box-line"></i>
									</a>
									<div className="w-[1px] border-borderPrimary h-10"></div>
									<button className="py-2 px-4 text-error" aria-label="delete">
										<i className="ri-delete-bin-line"></i>
									</button>
								</div>
							</td>
						</tr>
					</tbody>
				</table>
			</div>
		</>
	);
};

export default Products;
