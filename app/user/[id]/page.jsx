import React from 'react'
import ProfileDetails from './ProfileDetails'

async function getUserData(params) {
    const res = await fetch(
      `${BASE_API_URL}/api/user/${params._id}`, {
      cache: "no-store",
    });
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