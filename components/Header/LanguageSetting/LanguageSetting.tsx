import React from "react"
import ReactCountryFlag from "react-country-flag"
import useCountrySelect from "@/hooks/useCountrySelect"

const LanguageSetting = () => {
  const { selectRef, selectedCountry, select, isVisibleSelect, countries, setIsVisibleSelect } =
    useCountrySelect()

  return (
    <div className="relative" ref={selectRef}>
      <button
      aria-label="button"
        type="button"
        onClick={() => setIsVisibleSelect(!isVisibleSelect)}
        className="flex justify-center items-center w-[35px] h-[35px] rounded-full border border-white_2 bg-white_3
        transition duration-[300ms] hover:bg-black_3"
      >
        <div
          className="w-[25px] aspect-[200/150] border border-black_3
        flex justify-center items-center !overflow-hidden"
        >
          <ReactCountryFlag
            countryCode={selectedCountry?.value}
            svg
            style={{
              width: "200px",
              height: "150px",
            }}
          />
        </div>
      </button>
      {isVisibleSelect && (
        <div
          className="min-w-[150px] absolute top-full left-0 z-[10] border border-black_3
                bg-black py-2 px-3 max-h-[200px] overflow-y-auto overflow-x-hidden
                w-full rounded-md flex flex-col gap-2"
        >
          {countries.map((country) => (
            <button
              key={country.value}
              className="w-[150px] text-white text-sm text-left"
              type="button"
              onClick={() => select(country)}
            >
              {country.label}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

export default LanguageSetting
