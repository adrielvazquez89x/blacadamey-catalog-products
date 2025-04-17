import "./InputText.css";

export default function InputText({ placeholder, value, handleInputChange }) {
    return (
        <div className="search-container">
            <label>Search</label>
            <input
                type="text"
                className="text-input"
                placeholder={placeholder}
                value={value}
                onChange={(e) => handleInputChange(e.target.value)}
            />
        </div>

    );
}
