import "./Athours.css"
import Authors from "../../data/Authors";
import React from "react";

export default function Athours() {
    const [search, setSearch] = React.useState("");

    return (
        <div className="authors">
            <div className="authors-search">
                <input
                    onChange={(e) => setSearch(e.target.value.toLowerCase())}
                    type="text"
                    name="authors"
                    id="authors"
                    placeholder="Écrire le nom de l'auteur ici"
                />
            </div>
            <div className="authors-wrapper">
                {Authors
                    .filter(a => a.name.toLowerCase().includes(search))
                    .map(item => (
                        <div key={item.id} className="author">
                            <img
                                src={`${process.env.PUBLIC_URL}/authours/${item.image}`}
                                alt={item.name}
                            />
                            <h1 className="author-name">{item.name}</h1>
                        </div>
                    ))}
            </div>
        </div>
    );
}
