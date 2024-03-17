interface good{
    url: string;
    type: string;
    text: string;
    author:string;
}
export const Card = ({url,type,text,author}:good) => {
  return (
    <div className="w-96 h-auto duration-300 hover:shadow-lg">
        <img src={url} alt="news" />
        <span className=" text-gray-400 text-sm">{type}</span>
        <p className="text-lg">{text}</p>
        <span className=" text-gray-500 text-sm font-bold">{author}</span>
    </div>
  )
}
