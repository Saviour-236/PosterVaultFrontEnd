import {   useState, } from "react";
import { useNavigate } from "react-router-dom";
const debounce = (fn: any, delay: number) => {
    let timer: any;
    return function (...args: any) {
        clearTimeout(timer);
        timer = setTimeout(() => {
            fn(...args)
        }, delay)
    }
}

function search() {
    const searchValues = [
        "ClassicArt",
        "PopCultureIcons",
        "MotivationalQuotes",
        "NatureLandscapes",
        "AbstractModernArt",
        "VintageRetro",
        "MoviesTvShows",
        "MusicLegends",
        "TravelDestinations",
        "HistoricalMoments",
        "SportsHeroes",
        "AnimeManga",
        "GamingUniverse",
        "MinimalistDesigns",
        "StreetArtGraffiti",
        "FantasySciFi",
        "ComicBookCharacters",
        "TypographyCalligraphy",
        "SpaceAstronomy",
        "FamousPaintings"
    ]
    const navigate = useNavigate()
    const [inputValue, setInputValue] = useState<string>("")
    const [filteredVaulues, setFilteredValues] = useState<string[]>([])
    const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value)
        // console.log(inputValue)
        debounce(FilterArray(e.target.value), 500)
    }
    const FilterArray = (searchValue: string) => {
        // console.log(searchValue,"this value will be searched")
        const filteredArray = searchValues.filter((value: string) => (
            value.trim().toLowerCase().includes(searchValue.trim().toLowerCase())
        ))
        setFilteredValues(filteredArray);
    }
   
    //dropdown component
    const DropDown = () => {
        const handleOnClick = (e: React.MouseEvent<HTMLElement>)=>{
            // navigate(`${path}`, { replace: false })
            const target = e.target as HTMLElement
            navigate(`/search/${target.innerText}`, { replace: false })
            setInputValue("");
            // console.log(target.innerText)
        }
        return (
            <div className="fixed max-h-[9.6rem] top-12  p-2 rounded-lg space-y-2 bg-white z-[57] overflow-hidden
            dark:bg-[#131124a1]
            ">
                {filteredVaulues.map((value, index) => (
                    <li key={index} className='border hover:cursor-pointer border-gray-300 p-2 rounded-lg shadow-md
                    dark:bg-[#14162ccc] dark:border-[#2947f1e1]
                    max-sm:text-[0.7rem] max-sm:top-10
                    '
                    onClick = {(e)=>handleOnClick(e)}
                    >
                        {value}
                    </li>
                ))}
            </div>
        )
    }

    return (
        <span className='border relative b`order-[#9f9fa3] flex items-center p-2 rounded-xl transition-[border] duration-200 ease-in space-x-2  shadow-md shadow-[#070808a2]

                hover:border-[#c1c4c5]
                max-sm:p-1 
                dark:bg-transparent dark:text-white dark:border-[#254f7a] dark:hover:border-[#326b91] '>

            {/* search  field */}
            <input type="text" id='searchBox'
                onChange={handleOnChange}
                value={inputValue? inputValue : ""}
                placeholder="search......"
                className='bg-transparent w-[9rem] h-[1rem]  min-w-[1rem] outline-none text-[#616769] text-[0.8rem]
                    
                    max-sm:w-[5rem] max-sm:h-[1rem] max-sm:text-[0.7rem]
                    
                    dark:text-[rgb(173,180,182)]' />
            {/* dropdown */}
            {
                inputValue.length > 0 && <DropDown />
            }
            {/* search Icon */}
            <label htmlFor="searchBox" className=''>
                <svg className="w-4 h-4 me-2 text-[#888f92]
                       
                        hover:cursor-pointer hover:text-[#2091ce]

                        max-sm:w-3 max-sm:h-3 
                       
                        dark:text-[#30679e]  
                        dark:hover:text-[#328de7] "
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"

                    fill="none"
                    viewBox="0 0 20 20">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                </svg>
            </label>
        </span>
    )
}

export default search