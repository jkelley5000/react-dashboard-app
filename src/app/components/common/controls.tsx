export default function Controls() {
    return (
        <div className="controls mt-3 pb-4 border-b-2">
            <button className="flex ml-4 bg-sky-500 hover:bg-blue-500 text-white py-2 pr-3 pl-2 rounded-md">
                <img
                    src="/add.svg"
                    alt="Add Chart"
                    width={23}
                    height={23}
                />
                <span className="pl-2">Add chart</span>
            </button>
        </div>
    )
}