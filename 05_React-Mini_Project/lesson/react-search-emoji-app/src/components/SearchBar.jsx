

export default function SearchBar({setInputValue}) {
    



  return (
    <div style={{ textAlign: "center" }}>
      <input
        style={{ width: "300px", padding: "10px", borderRadius: "10px" }}
        type="text"
        name="search"
        onChange={e =>setInputValue(e.target.value)}
      />
    </div>
  );
}
