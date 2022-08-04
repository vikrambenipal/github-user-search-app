import React from 'react'

const UserInfo = ({ data, empty }) => {
  return (
    <div>
        <div>
            <p>Repos</p>
            {Object.keys(data).length !== 0 ? <p>{data.public_repos}</p> : <p>{empty}</p>}
        </div>
        <div>
            <p>Followers</p>
            {Object.keys(data).length !== 0 ? <p>{data.followers}</p> : <p>{empty}</p>}
        </div>
        <div>
            <p>Following</p>
            {Object.keys(data).length !== 0 ? <p>{data.following}</p> : <p>{empty}</p>}
        </div>
    </div>
  )
}
export default UserInfo;