const ChatSession = ({ openSidebar }: { openSidebar: boolean }) => {
    return (
        <div className="space-y-1 border border-white h-96">
            {openSidebar && (
                <>
                    <h2 className="text-[10px] text-gray-400">@session</h2>
                    <ul className="space-y-2 px-2">
                        <li className="text-xs text-white line-clamp-1">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit est labore molestiae dolor, velit asperiores aliquam odit natus dolore explicabo ab necessitatibus laudantium deserunt sunt tempora perferendis doloremque non at?
                        </li>
                        <li className="text-xs text-white line-clamp-1">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod maxime quidem veritatis nemo perspiciatis aspernatur provident incidunt quam, doloribus harum cum pariatur quae natus quis consectetur facilis! Nihil, officiis consequatur!
                        </li>
                        <li className="text-xs text-white line-clamp-1">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam nemo officia, molestias rerum ipsa voluptatum perferendis tempore perspiciatis repellat nam atque voluptatibus! A rem iure aliquid architecto ipsam accusamus laboriosam.
                        </li>
                    </ul>
                </>
            )}
        </div>
    )
}

export default ChatSession
