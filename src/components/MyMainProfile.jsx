import MyProfile from '../assets/img/dpdp.jpg'

const MyMainProfile = () => {
  return (
    <div>
        <div className="col-span-6 flex justify-center items-start pl-20">
            <img src={MyProfile} alt="My Profile" className="w-full h-100 object-contain "/>
        </div>
    </div>
  )
}

export default MyMainProfile
