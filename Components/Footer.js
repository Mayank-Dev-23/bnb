function Footer() {
    return (
        <div className="grid grid-cols-2  gap-x-10 md:grid-cols-4 px-16 md:px-32  py-14 gap-y-10 bg-gray-100 ">
            <div className=" space-y-4 text-sm text-gray-500 ">
                <h2 className="font-bold text-black">About</h2>
                <p>How Airbnb works</p>
                <p>Newsroom</p>
                <p>Airbnb 2021</p>
                <p>Investors</p>
                <p>Airbnb Plus</p>
                <p>Airbnb luxe</p>
            </div>


            <div  className=" space-y-4 text-sm text-gray-500">
                <h2  className="font-bold text-black">Community</h2>
                <p>Diversity & Belonging</p>
                <p>Accessibility</p>
                <p>Airbnb Associates</p>
                <p>Frontline Stays</p>
                <p>Guest Refrrals</p>
                <p>Airbnb.org</p>
            </div>


            <div  className=" space-y-4 text-sm text-gray-500">
                <h2 className="font-bold text-black">Host</h2>
                <p>Host your home</p>
                <p>Host an online Experience</p>
                <p>Responsible hosting</p>
                <p>Resource centre</p>
                <p>Community Centre</p>
              
            </div>

            <div  className=" space-y-4 text-sm text-gray-500">
                <h2 className="font-bold text-black">Support</h2>
                <p>Our COVID-19 Response</p>
                <p>Help Centre</p>
                <p>Cancellation options</p>
                <p>Neighbourhood Support </p>
                <p>Trust & Saftey </p>
            </div>
            
        </div>
    )
}

export default Footer
