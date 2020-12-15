import React, { useState, useEffect } from 'react';
import $ from 'jquery';
import Card from '../card/Card'


const List = (props) => {
    const [data, setData] = useState();
    const url = 'https://randomuser.me/api';

    useEffect(
        () => {
            $.get(url, (response, error) => {
                console.log(response.data);
                setData(response.data);
            })
        }
        , []);

    if (data != undefined) {
        return (
            <div>
                <h1>This is a List</h1>
                <ul>
                    {/* {data.map((item) => <img  src={item.avatar} />)} */}
                    {data.map((item) => <Card  opj={item} />)}
                </ul>
                <button onClick={() => { console.log(data) }}>Add Data</button>
            </div>
        );
    } else {
        return ''
    }
}

export default List;