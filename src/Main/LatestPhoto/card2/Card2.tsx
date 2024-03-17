interface good{
    url: string;
    type: string;
    text: string;
    author:string;
}
export const Card2 = ({url,type,text,author}:good) => {
  return (
    <div className=" max-w-72 duration-300 hover:shadow-lg">
        <img src={url} alt="news" />
        <span className=" text-gray-400 text-sm">{type}</span>
        <p className="text-lg">{text}</p>
        <span className=" text-gray-500 text-sm font-bold">{author}</span>
    </div>
  )
}
