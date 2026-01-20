const ProductList = ({data}) => {
    return (
        <div style={{minHeight: "300px"}}>
            <ul style={{textAlign: 'start', display: 'flex', flexDirection: 'column', gap: 10,}}>
                {data?.map(p => (
                    <li key={p.id} style={{padding: 5, border: '1px solid #ccc', borderRadius: '5px',}}>{p.title}</li>
                ))}
            </ul>
        </div>
    )
};
export default ProductList;