function ProductForm(){
    return (<form>
        <div>
            <label>Title</label>
            <input type="text"/>
        </div>
        <div>
            <label>Date</label>
            <input type="date" min="2026-10-10" max="2027-10-10"/>
        </div>
        <div>
            <button type="submit">Add Product</button>
        </div>
    </form>)
}

export default ProductForm;