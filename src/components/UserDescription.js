import React from 'react'
import placeholder from '../assets/favicon-32x32.png';

const UserDescription = ({ data, empty }) => {

    console.log(data);
    const noBio = "This profile has no bio."

    const getDate = (dateString) => {
        const date = new Date(dateString);
        const month = date.toLocaleString('default', { month: 'long' });
        return date.getDate() + " " + month + " " + date.getFullYear();
    }

    return (
        <div>
            <img src={data.avatar_url} />
            <div>
                {Object.keys(data).length !== 0 ? <p>{data.name}</p> : <p>{empty}</p>}
                {Object.keys(data).length !== 0 ? <p>@{data.login}</p> : <p>{empty}</p>}
                {Object.keys(data).length !== 0 ? <p>Joined {getDate(data.created_at)}</p> : <p>{empty}</p>}
            </div>
            {data.bio ? <p>{data.bio}</p> : <p>{noBio}</p>}
        </div>
  )
}
export default UserDescription;