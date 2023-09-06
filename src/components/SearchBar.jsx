export default function SearchBar({ filterText, inStockOnly, onFilterTextChange, onInStockOnlyChange }) {
    return (
        <form>
            <input 
                type="text" 
                placeholder="Search..." 
                value={filterText}
                onInput={(event) => onFilterTextChange(event.target.value)}
            />
            <br />
            <label>
                <input 
                    type="checkbox"
                    checked={inStockOnly} 
                    onChange={(event) => onInStockOnlyChange(event.target.checked)}
                />
                {' '}
                Only show products in stock
            </label>
        </form>
    );
}