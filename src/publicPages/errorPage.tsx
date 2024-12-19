
function errorPage() {
    return (
        <div> <div className="bg-indigo-900 relative overflow-hidden h-screen">
            <img
                src="https://external-preview.redd.it/4MddL-315mp40uH18BgGL2-5b6NIPHcDMBSWuN11ynM.jpg?width=960&crop=smart&auto=webp&s=b98d54a43b3dac555df398588a2c791e0f3076d9"
                className="absolute h-full w-full object-cover"
            />
            <div className="inset-0 bg-black opacity-25 absolute"></div>
            <div className="container  mx-auto px-6 md:px-12 relative z-10 flex items-center py-25 xl:py-28">
                <div className="w-full  font-mono flex flex-col items-center relative z-10">
                    <h1 className="font-extrabold text-5xl text-center text-white leading-tight mt-">
                        What are you Doing Man ??
                    </h1>
                    <p className="font-extrabold text-8xl my-44 text-white animate-bounce">
                        404
                    </p>
                    <p className='text-white'>please correct the page url-------</p>
                </div>
            </div>
        </div></div>
    )
}

export default errorPage