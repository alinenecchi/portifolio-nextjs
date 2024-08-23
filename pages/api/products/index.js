export default async function handle(req, res) {
  try {
    // build message
    const data = req.body;

    console.log(1111111,data)

    const url = "https://fullstack-app-mu.vercel.app/api/products";

    // Send to backend

    const result = await fetch(url, {
      method: "POST",
      headers: new Headers({
        "Content-Type": "application/json"
      }),
      body: JSON.stringify(data),
    });

    if (result && result?.error) {
      throw new Error(result.error);
    }

    if (result && result instanceof Error) {
      throw result;
    }

    result.status(200).json(result);

    if (!result.ok) {
      throw new Error("Failed to add product");
    }

    console.log(33333,result);

    const product = await result.json();
    return product;
  } catch (err) {
    console.error("Error adding product:", error);
    res.status(err.status || 500).json({
      code: err.code,
      error: err.message,
    });
  }
}
