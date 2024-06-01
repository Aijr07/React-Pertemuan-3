const EditProduct = () => {
    return ( 
        <>
        <div class="flex justify-between items-center">
						<p class="text-3xl font-bold">Edit Products</p>
						<div class="flex gap-2">
							<button
								type="submit"
								form="form"
								class="bg-primary text-white font-bold h-full text-base w-36 inline-flex py-3 rounded-md justify-center"
							>
								<p class="-mb-[2px]">Add</p>
							</button>
							<a
								href=""
								class="bg-red-500 text-white font-bold h-full text-base w-36 inline-flex py-3 rounded-md justify-center"
							>
								<p class="-mb-[2px]">Delete</p>
							</a>
						</div>
					</div>

					<form
						id="form"
						method="post"
						action="./addProduct.html"
						class="mt-7 grid grid-cols-5 gap-x-8 text-md font-semibold"
					>
						<div
							class="col-span-3 bg-white px-8 py-6 flex flex-col gap-6 rounded-lg border border-borderPrimary"
						>
							<div class="flex flex-col gap-3">
								<label for="product_name">Product Name</label>
								<input
									type="text"
									id="product_name"
									name="product_name"
									placeholder="Input product name"
									class="px-5 py-2 border-borderPrimary border bg-backgroundPrimary rounded-md"
								/>
							</div>
							<div>
								<fieldset class="flex flex-col gap-3">
									<p>Category</p>
									<div class="flex gap-1">
										<div>
											<input
												type="radio"
												name="category"
												id="food"
												class="hidden peer"
												value="food"
											/>
											<label
												role="button"
												for="food"
												tabindex="0"
												class="peer-checked:text-white bg-[#D9D9D9] peer-checked:bg-primary px-6 py-2 text-base rounded-s-md"
											>
												Food
											</label>
										</div>
										<div>
											<input
												type="radio"
												name="category"
												id="drink"
												class="hidden peer"
												value="drink"
											/>
											<label
												role="button"
												for="drink"
												tabindex="0"
												class="peer-checked:text-white bg-[#D9D9D9] peer-checked:bg-primary px-6 py-2 text-base rounded-e-md"
											>
												Drink
											</label>
										</div>
									</div>
								</fieldset>
							</div>
							<div class="flex flex-col gap-3">
								<label for="price">Price</label>
								<input
									type="text"
									id="price"
									name="price"
									placeholder="Input price"
									class="px-5 py-2 border-borderPrimary border bg-backgroundPrimary rounded-md"
								/>
							</div>
							<div class="flex flex-col gap-3">
								<label for="stock">Stock</label>
								<input
									type="text"
									id="stock"
									name="stock"
									placeholder="Input stock"
									class="px-5 py-2 border-borderPrimary border bg-backgroundPrimary rounded-md"
								/>
							</div>
						</div>
						<section
							class="col-span-2 bg-white py-6 h-fit rounded-lg border border-borderPrimary"
						>
							<p class="font-bold text-lg px-8">Product Image</p>
							<div
								class="h-[1px] border-b border-b-borderPrimary w-full my-4"
							></div>
							<div class="px-4">
								<label
									for="image-upload"
									id="drag-area"
									class="w-full h-[280px] bg-backgroundPrimary border-2 border-[#D9D9D9] border-dashed rounded-lg overflow-hidden cursor-pointer flex justify-center items-center"
								>
									<input
										id="image-upload"
										name="image"
										type="file"
										hidden
										accept="image/*"
									/>
									<div
										id="image-viewer"
										class="w-full h-full bg-no-repeat bg-center bg-cover flex flex-col justify-center items-center"
									>
										<img src="../assets/imagePlaceholder.png" alt="" />
										<p class="text-[18px]">
											Tarik dan lepas atau
											<span class="text-primary">pilih gambar</span>
										</p>
										<p class="text-base text-black/25">
											Mendukung JPG, JPEG, dan PNG
										</p>
									</div>
								</label>
							</div>
						</section>
					</form>
        </>
     );
}
 
export default EditProduct;