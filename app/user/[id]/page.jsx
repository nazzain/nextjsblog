
import React from 'react'
import ProfileDetails from './ProfileDetails'



async function getUserData(params) {
  const res = await fetch(`https://nextjsblog-six-azure.vercel.app/api/user/${params.id}`, {
    method: "Get",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

const UserProfile = async ({params}) => {
    const profile = await getUserData(params)
  return (
    <div>
        <ProfileDetails profile={profile} params={params} />
    </div>
  )
}

export default UserProfile