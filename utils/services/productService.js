const apiUrlAll = `${process.env.API_URL_ALL}`;
const apiUrl = `${process.env.API_URL}`;

export async function fetchProducts() {
  try {
    const response = await fetch(apiUrlAll);
    if (!response.ok) {
      throw new Error("Failed to fetch products");
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
}

export async function addProduct(newProduct) {

  const API_URL = 'https://fullstack-app-mu.vercel.app/api/products';
  try {
    const res = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newProduct),
    });
    if (!res.ok) {
      throw new Error("Failed to add product");
    }
    const product = await res.json();
    return product;
  } catch (error) {
    console.error("Error adding product:", error);
    return null;
  }
}

export async function updateProduct(updatedProduct) {
  try {
    const response = await fetch(`${apiUrl}/${updatedProduct.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedProduct),
    });
    if (!response.ok) {
      throw new Error("Failed to update product");
    }
    return await response.json();
  } catch (error) {
    console.error("Error updating product:", error);
    throw error;
  }
}
