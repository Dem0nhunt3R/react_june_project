const NotFoundSearch = ({search}) => {
    return (
        <div style={{display:'flex', justifyContent:'center', alignItems:'center', height:'300px'}}>
            <h2>There is no videos for this request: "{search.split('+').join(' ')}"</h2>
        </div>
    );
};

export {NotFoundSearch};