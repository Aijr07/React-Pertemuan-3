import Gambar404 from '../assets/404.png';



const Eror404 = () => {
    return (
        <div className="h-screen bg-primary">
            <div
                className="bg-auth bg-cover h-full bg-center bg-no-repeat flex justify-center items-center"
            >
                <div
                    className="bg-white rounded-3xl min-w-[500px] py-16 px-[60px] flex flex-col text-center text-[#202224] font-semibold"
                >
                    <img src={Gambar404} alt="404" className="w-4/5 mx-auto" />
                    <p className="text-2xl mt-16">Looks like you’ve got lost….</p>
                    <button className="bg-primary py-3 font-bold text-white rounded-lg mt-10">
                        Back
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Eror404;