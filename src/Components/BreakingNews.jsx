import Marquee from "react-fast-marquee";

const BreakingNews = () => {
    return (
        <div className="flex bg-gray-200 p-4 rounded">
            <button className="btn btn-secondary">Breaking News</button>
            <Marquee pauseOnHover={true} speed={100}>
                <p className="mr-12">I can be a React component, multiple React components, or just some text....</p>
                <p className="mr-12">I can be a React component, multiple React components, or just some text....</p>
                <p className="mr-12">I can be a React component, multiple React components, or just some text....</p>
            </Marquee>
        </div>
    );
};

export default BreakingNews;