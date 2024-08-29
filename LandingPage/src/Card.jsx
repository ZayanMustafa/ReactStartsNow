function Card ( {icon , title, description , className}){
    return <>
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex items-center justify-center h-16 w-16 bg-blue-600 rounded-full text-white mb-4 mx-auto">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-gray-800 mb-2 text-center">
        {title}
      </h3>
      <p className="text-gray-600 text-center">
        {description}
      </p>
    </div>
    </>
}

export default Card;