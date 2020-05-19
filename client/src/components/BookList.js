import React, { useState, useEffect } from 'react';
import { gql } from "apollo-boost";

export default function Booklist(props) {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        props.client.query({
            query: gql`
            {
                books {
                name
                genre
                id
                }
            }
            `
        }).then(result => {
            console.log(result)
            setBooks(result.data.books)
        });
    }, [])
    let bookList = books.map(book => {
        return <li key={`book${book.id}`}>{book.name}</li>
    })
    return (
        <div>
            <ul id="book-list">
                {bookList}
            </ul>
        </div>
    )
}